

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      desc: "Register, post jobs, and apply. Role-based dashboards and secure auth.",
      tech: "MERN Stack",
    },
    {
      title: "E-Commerce App",
      desc: "Online shopping site using React, Node, MongoDB.",
      tech: "MERN Stack",
    },
    {
      title: "CRUD App",
      desc: "Create, read, update, and delete with live MongoDB data.",
      tech: "MERN Stack",
    },
    {
      title: "Seminar Doc System",
      desc: "Upload, store, and retrieve seminar documents.",
      tech: "PHP, MySQL",
    },
  ];
  return (
    <section id="projects" className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="border rounded-xl p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p>{proj.desc}</p>
            <p className="text-sm text-gray-500 mt-2">Tech Stack: {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects
