import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Quiz App",
      description:
        "A JavaScript-based quiz app with multiple-choice questions, score calculation, and a user-friendly interface.",
      link: "https://quize-app-tau.vercel.app",
    },
    {
      id: 2,
      name: "Todo Project",
      description:
        "A task management app built with JavaScript. Users can add, edit, and delete tasks with dates, offering a simple yet effective way to manage to-dos.",
      link: "https://todo-main-omega.vercel.app",
    },

    {
      id: 3,
      name: "Weather App",
      description:
        "A weather application that provides real-time weather updates using a weather API. Users can search for weather conditions in any city.",
      link: "https://weather-app-mu-orpin.vercel.app",
    },
    {
      id: 4,
      name: "Live Demo Website",
      description:
        "A fully responsive website clone built with React, replicating the design and functionality of a real-world site. Demonstrates strong front-end development skills.",
      link: "https://live-demo-kohl.vercel.app",
    },

    {
      id: 5,
      name: "Crypto App",
      description:
        "A JavaScript-based cryptocurrency price tracker that displays real-time price fluctuations of various cryptocurrencies using a crypto API.",
      link: "https://crypto-app-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
