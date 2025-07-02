

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Alfiya A</h1>
      <p className="text-xl">Full Stack Developer | MERN & Django</p>
      <a href="#projects" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">View Projects</a>
    
    <a
  href="/resume_alfiya_a_calicut.pdf"
  target="_blank"
  rel="noopener noreferrer"
  download
  className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
>
  Download Resume
</a>

    </section>
  )
}

export default Hero