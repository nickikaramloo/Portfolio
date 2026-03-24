import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function ProjectCard({ project, index }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      to={project.link}
      className="project-item animate-on-scroll"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={project.video ? handleMouseEnter : undefined}
      onMouseLeave={project.video ? handleMouseLeave : undefined}
    >
      <div className={`project-item-image${project.video ? ' has-video' : ''}`}>
        <img src={project.image} alt={project.title} className="project-item-img" />
        {project.video && (
          <video
            ref={videoRef}
            className="project-item-video"
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
      <div className="project-item-content">
        <div className="project-item-header">
          <span className="project-item-category">{project.category}</span>
        </div>
        <h2 className="project-item-title">{project.title}</h2>
        <p className="project-item-description">{project.description}</p>
        <div className="project-item-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-item-tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function Projects() {
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const projects = [
    {
      id: 0,
      title: "Lumi AI",
      category: "Web Development · UX/UI",
      description: "An AI writing assistant that lives inside Notion",
      tags: ["React", "Claude API", "Notion OAuth"],
      image: "/images/lumi.png",
      link: "/projects/lumi"
    },
    {
      id: 1,
      title: "Waypoint",
      category: "UX/UI Design",
      description: "Making public transit feel less stressful",
      tags: ["Figma", "User Research", "Interaction Design"],
      image: "/images/waypoint.png",
      link: "/projects/waypoint"
    },
    {
      id: 2,
      title: "PlaySpace",
      category: "UX/UI Design",
      description: "Helping gamers understand how they play",
      tags: ["UX Research", "Data Visualization", "Figma Prototyping"],
      image: "/images/playspace.png",
      link: "/projects/playspace"
    },
    {
      id: 3,
      title: "Pinterest Redesign",
      category: "UX/UI Design",
      description: "Reimagining Pinterest with clarity and focus",
      tags: ["Figma", "User Research", "Interaction Design"],
      image: "/images/pinterest.png",
      link: "/projects/pinterest"
    },
    {
      id: 4,
      title: "Dreamscape Gallery",
      category: "Web Development",
      description: "Digital gallery featuring artists exploring surreal spaces",
      tags: ["Vite React", "Animation", "Interface Design"],
      image: "/images/dreamscape.png",
      link: "/projects/dreamscape"
    },
    {
      id: 5,
      title: "ADAPT Fitness",
      category: "UX/UI Design",
      description: "Neurodivergent-friendly fitness app design",
      tags: ["Figma", "User Research", "Inclusive Design"],
      image: "/images/adapt.png",
      link: "/projects/adapt"
    },
    {
      id: 6,
      title: "The Ripple Effect",
      category: "Web Development",
      description: "Exploring social impact through sound-driven ripples",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "/images/ripple.png",
      video: "/videos/ripple.mp4",
      link: "/projects/ripple"
    },
  ];

  return (
    <div className="projects">
      <section className="projects-hero">
        <div className="projects-hero-content animate-on-scroll">
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">
            Recent work spanning UX/UI design, web development, and interactive experiences.
          </p>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
