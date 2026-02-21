import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, form);
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto border border-black/5 bg-white/60 backdrop-blur-xl p-8 md:p-12 rounded-[40px] shadow-2xl">
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tighter text-center uppercase">
          Say Hello
        </h2>
        <p className="text-gray-500 font-bold text-center mb-10 text-sm tracking-widest uppercase">
          I'm always open to new opportunities
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-6 py-4 bg-white/50 border border-black/5 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-gray-300 font-medium"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="e.g. john@example.com"
              className="w-full px-6 py-4 bg-white/50 border border-black/5 rounded-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-gray-300 font-medium"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 bg-white/50 border border-black/5 rounded-2xl text-gray-900 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-gray-300 font-medium"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full py-5 text-white font-black rounded-2xl uppercase tracking-widest shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 ${
              loading
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800 shadow-indigo-500/10"
            }`}
            disabled={loading}
          >
            {loading ? "Sending Status..." : "Send Message"}
          </button>
          
          {status && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center mt-6 font-bold text-sm ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
