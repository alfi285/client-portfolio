const Projects = () => {
  const projects = [
    {
      title: "Moon Light - Social Media (MERN Stack)",
      desc: "A full-featured MERN stack social media app with user authentication, posts, likes, comments, and profile management.",
      tech: "MERN Stack",
      image: "/moonlight.png", // Place this in /public
    },
    {
      title: "News.com (React)",
      desc: "News App is a responsive web application that fetches and displays the latest news articles using a third-party News API",
      tech: "React",
      image: "/newsapp.png",
    },
    {
      title: "CRUD App (MERN Stack)",
      desc: "Create, read, update, and delete with live MongoDB data.",
      tech: "MERN Stack",
      image: "/crud.png",
    },
    {
      title: "Todo App (React)",
      desc: "To-Do App is a task management application that allows users to add , delete and mark tasks as completed.",
      tech: "React",
      image: "/todoapp.png",
    },

    {
      title:"Employee Management System (Django)",
      desc: "A web application for managing employee records, built with Django.",
      tech: "Django",
      image: "/employee_management.png",
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-black">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto ">
        {projects.map((proj, idx) => (
<div
  key={idx}
  className="bg-blue-70 rounded-xl shadow-lg shadow-gray-600 overflow-hidden transform transition duration-300 hover:scale-105"
>

            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-violet-400 font-semibold mb-2 ">{proj.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{proj.desc}</p>
              <p className="text-sm text-gray-500">Tech Stack: {proj.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
