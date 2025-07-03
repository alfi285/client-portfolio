import { useState } from "react";
import axios from "axios";

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
    <section id="contact" className="py-12 px-4 bg-black">
<h2 className="text-3xl font-bold text-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
  Contact Me
</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded text-white"
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded text-white"
          required
        />
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded text-white"
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full py-2 text-white rounded ${
            loading
              ? "bg-gray-400"
              : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
          }`}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {status && (
          <p
            className={`text-center mt-2 ${
              status.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
