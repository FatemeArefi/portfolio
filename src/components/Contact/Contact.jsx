import React from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-links">
        <a href="tel:+989187283704" className="contact-link">
          <button>
            <FaPhone className="icon" />
            Call
          </button>
        </a>
        <a
          href="https://www.instagram.com/iphtm._"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <button>
            <FaInstagram className="icon" />
            Instagram
          </button>
        </a>
        <a
          href="mailto:f.arefi982@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <button>
            <FaEnvelope className="icon" />
            Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/fatemearefii"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <button>
            <FaLinkedin className="icon" />
            LinkedIn
          </button>
        </a>
        <a
          href="https://github.com/FatemeArefi"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <button>
            <FaGithub className="icon" />
            GitHub
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
