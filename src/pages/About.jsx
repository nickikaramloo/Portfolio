import { useEffect, useRef } from 'react';
import './About.css';
import ScrollHint from '../components/ScrollHint';

function About() {
  const observerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
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

  const experiences = [
    {
      year: '2024 - Present',
      role: 'New Media Design & Web Development Student',
      company: 'British Columbia Institute of Technology',
      description: 'Designing and prototyping user-centered digital products through UX research, wireframing, high-fidelity UI design, and front-end development using modern design systems and interaction principles.'
    },
    {
      year: '2019 - 2022',
      role: 'Bachelor of Arts, Psychology',
      company: 'Simon Fraser University',
      description: 'Studied human behaviour, cognition, and perception with a focus on how users think, decide, and interact. Worked as a research assistant for the Intergroup Relations & Social Justice Lab and Autism & Developmental Disabilities Lab.'
    },
    {
        year: '2021 - Present',
        role: 'Team Lead/Manager',
        company: 'Cactus Club Cafe',
        description: 'Led cross-functional teams in fast-paced environments, developing strong communication and organizational skills while supporting daily operations, resolving issues in real time, and ensuring a consistent, high-quality guest experience.'
      },
    {
        year: '2017 - 2019',
        role: 'Computing Science Student',
        company: 'Simon Fraser University',
        description: 'Developed basic foundations in programming logic, problem-solving, and computational thinking.'
      }
  ];

  const services = [
    {
      title: 'UX Research & Strategy',
      description: 'User interviews, usability testing, and data-driven insights to inform design decisions.'
    },
    {
      title: 'Interface Design',
      description: 'Clean, accessible interfaces built on strong visual hierarchy and design systems.'
    },
    {
      title: 'Front-End Development',
      description: 'Bringing designs to life with React, responsive layouts, and attention to performance.'
    },
    {
      title: 'Accessibility & Inclusive Design',
      description: 'Creating digital experiences that work for everyone, regardless of ability or context.'
    }
  ];

  const skillCategories = [
    {
      category: 'UX Practice',
      skills: ['Wireframing', 'Prototyping', 'User Flows', 'Sitemaps', 'User Research', 'Usability Testing', 'Information Architecture']
    },
    {
      category: 'Design',
      skills: ['Figma', 'Responsive & Accessible Design', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Adobe Dimension', 'Brand Identity']
    },
    {
      category: 'Development',
      skills: ['React.js', 'React Native', 'HTML', 'CSS', 'Javascript', 'GSAP', 'jQuery']
    },
    {
      category: 'Interdisciplinary Expertise',
      skills: ['Human Behaviour', 'User Empathy', 'Research + Data Analysis', 'Problem-Solving', 'Logical Thinking', 'Programming Fundamentals', 'Leadership & Team Coordination']
    }
  ];

  return (
    <div className="about">
      <ScrollHint />
      <section className="about-hero">
        <div className="about-hero-content animate-on-scroll">
          <h1 className="about-title">About</h1>
          <p className="about-subtitle">
            Designer & developer focused on creating thoughtful, accessible digital experiences.
          </p>
          <div className="about-socials">
            <a href="https://www.linkedin.com/in/nicki-karamloo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 464 480"><path fill="#fff" d="M462 274v170h-98V285q0-67-50-67q-37 0-51 36q-3 7-3 24v166h-99q1-269 0-297h99v42l-1 1h1v-1q32-49 89-49q51 0 82 34t31 100zM58 4Q33 4 17.5 18.5T2 55t15 37t39 15h1q25 0 40.5-15T113 55q-1-22-16-36.5T58 4zM7 444h99V147H7v297z"/></svg>
            </a>
            <a href="https://github.com/nickikaramloo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 432 416"><path fill="#fff" d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"/></svg>
            </a>
            <a href="mailto:nicki.karamloo@gmail.com" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <g stroke="#000" stroke-width="1.5"><rect width="18.5" height="17" x="2.682" y="3.5" rx="4"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.729 7.59l7.205 4.13a3.956 3.956 0 0 0 3.975 0l7.225-4.13"/></g>
            </svg>
            </a>
          </div>
        </div>

        <div className="about-hero-photo animate-on-scroll">
          <img src="/images/nicki-about.jpg" alt="Professional portrait with soft shadow lighting" className="about-hero-img" />
        </div>
      </section>

      
      <section className="biography-section">
        <div className="biography-content animate-on-scroll">
          <div className="bio-header">
            <span className="section-label">Biography</span>
          </div>
          <div className="bio-text">
            <p>
              I bring a unique perspective to design, grounded with an understanding of human behaviour and thoughtful interactions. With a background in Psychology and Computing Science, I aim to create interfaces that are simple, human-centred, and purposefully crafted.
            </p>
            <p>
              I approach every project by identifying real user needs and translating them into clear and accessible designs. I'm drawn to minimal, well-structured design systems that prioritize both clarity and character.
            </p>
            <p>
              Beyond design, I've developed strong communication, project coordination, and team management skills in fast-paced, high-performing environments. These strengths shape the way I lead and collaborate, encouraging me to approach projects with organization, empathy, and adaptability. I believe great design is built through teamwork and shared problem-solving.
            </p>
          </div>

        </div>
      </section>

      <section className="experience-section">
        <div className="experience-header animate-on-scroll">
          <span className="section-label">Experience</span>
        </div>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

       <section className="skills-section">
        <div className="skills-header animate-on-scroll">
          <span className="section-label">Skills & Tools</span>
        </div>
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="skill-category animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section">
        <div className="services-header animate-on-scroll">
          <span className="section-label">What I Offer</span>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;