import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ScrollHint from '../components/ScrollHint';

function Home() {
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
      id: 1,
      slug: 'waypoint',
      image: '/images/waypoint.png',
      title: 'Waypoint',
      description: 'Making public transit feel less stressful',
      tags: ['Figma', 'User Research', 'Interaction Design'],
      category: 'UX/UI Design'
    },
    {
      id: 2,
      slug: 'dreamscape',
      image: '/images/dreamscape.png',
      title: 'Dreamscape Gallery',
      description: 'Digital gallery featuring artists exploring surreal spaces',
      tags: ['Vite React', 'Animation', 'Interface Design'],
      category: 'Web Development'
    }
  ];

  return (
    <div className="home">
      <ScrollHint />
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1 className="hero-title">
              Product<br />Designer
            </h1>
          </div>
          
          <div className="hero-right animate-on-scroll">
            <div className="profile-image">
              <img 
                src="/images/profile.jpeg" 
                alt="Portrait with rainbow light across face" 
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'linear-gradient(135deg,rgb(116, 116, 116) 0%,rgb(54, 54, 54) 100%)';
                }}
              />
            </div>
            <p className="hero-description">
              Hi, I'm Nicki. I design and build digital experiences that prioritize accessibility, human behaviour, and thoughtful interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <Link to="/projects" className="view-all">View All</Link>
        </div>

        <div className="projects-wrapper">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className="project-card animate-on-scroll"
                style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </Link>
          ))}
          </div>
        </div>
      </section>

      <section className="cta-section animate-on-scroll">
        <h2 className="cta-title">Let's Work Together</h2>
        <p className="cta-description">
          I'm currently open to new opportunities. If you're building something interesting or looking for someone who cares deeply about user experience, I'd love to hear from you.
        </p>
        <div className="cta-buttons">
          <a href="mailto:nicki.karamloo@gmail.com" className="btn-primary">Get in Touch</a>
          <a href="/NickiKar_Resume.pdf" className="btn-secondary" download>Download Resume</a>
        </div>
      </section>
    </div>
  );
}

export default Home;