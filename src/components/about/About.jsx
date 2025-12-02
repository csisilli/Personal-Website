import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { RiFolderZipLine } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <h5>Get to Know</h5>
          <h2>About Me</h2>
          <br />
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon" />
              <h5>Experience</h5>
              <medium>1+ Years Working</medium>
            </article>

            <article className="about__card">
              <RiFolderZipLine className="about__card-icon" />
              <h5>Projects</h5>
              <medium>8+ Completed</medium>
            </article>

            <article className="about__card">
              <TbCertificate className="about__card-icon" />
              <h5>Certifications</h5>
              <medium>3+ Certifications</medium>
            </article>
          </div>

          <p>
            Hi, I'm Caitlin — a developer passionate about turning creative
            ideas into elegant solutions. My journey began with late-night
            coding sessions and a curiosity about how technology shapes our
            world.
          </p>

          <p>
            I thrive at the intersection of logic and design, where each project
            is an opportunity to create something meaningful. Whether I'm
            crafting responsive interfaces or solving complex problems, I bring
            enthusiasm and attention to detail to everything I build.
          </p>

          <p>
            Beyond coding, I'm constantly exploring new technologies, design
            trends, and ways to innovate. I believe the best solutions come from
            continuous learning and creative problem-solving. Let's build
            something amazing together.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
