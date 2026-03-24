import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ReadingProgress from '../../components/ReadingProgress';
import ProjectCarousel from '../../components/ProjectCarousel';

function RippleProject() {
  const observerRef = useRef(null);

  const images = [
    { src: '/images/ripple-1.jpg',   alt: 'The Ripple Effect — Home' },
    { src: '/images/ripple-2.jpg', alt: 'The Ripple Effect — World Map' },
    { src: '/images/ripple-3.jpg', alt: 'The Ripple Effect — Share' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.pd-animate').forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="project-detail">
      <ReadingProgress />

      <ProjectCarousel images={images} />

      <div className="pd-content pd-animate">
        <div className="pd-sidebar">
          <span className="pd-category">Web Development</span>
          <div className="pd-name">
            <a href="https://ripple.nickistudio.ca" target="_blank" rel="noopener noreferrer" className="pd-name">
            The Ripple Effect
            <svg className="pd-ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            </a>
          </div>
        </div>
        <div className="pd-body">
          <h1>Small actions create big change</h1>
          <p>
            The Ripple Effect is an interactive web experience exploring how even the smallest
            actions can create meaningful waves of social change. Built with HTML, CSS, JavaScript,
            and GSAP — the project uses motion, sound, and visual feedback to demonstrate cause and
            effect in a tangible, emotional way.
          </p>

          <h2>Concept</h2>
          <p>
            The concept began with a simple metaphor: one small action can influence many others,
            just like ripples moving across water. I wanted to translate that idea into an interactive
            visual that responds directly to user input, making the connection between action and
            consequence more emotional and immediate. The challenge was creating an experience that
            felt natural and meditative rather than gamified or overwhelming.
          </p>

          <h2>Technical Execution</h2>
          <p>
            All of the animation and behaviour was built using GSAP and custom JavaScript. Each ripple
            is generated dynamically, reacting to cursor input and ambient sound. The smooth easing
            and layered timing were designed to feel natural, gentle, and expressive — almost
            meditative.
          </p>
          <p>
            The blue palette, soft gradients, and fluid motion were chosen to reinforce calmness and
            depth. The final experience invites users to explore how small actions build into something
            larger, reinforcing the idea that meaningful change often starts with a single moment.
          </p>

          <h2>Design Principles</h2>
          <p>No unnecessary UI elements. The focus remains entirely on the interaction and the ripples themselves.</p>
          <p>Every input generates immediate visual feedback, creating a tight loop between action and consequence.</p>
          <p>The blue palette, fluid motion, and ambient sound create a calming atmosphere that encourages reflection.</p>
          <p>The experience reveals itself gradually — users discover new interactions through exploration rather than instruction.</p>

          <h2>Interaction Design</h2>
          <p>
            Each interaction creates unique visual responses through clicks and ambient sound,
            reinforcing cause-and-effect relationships. The minimal interface eliminates unnecessary
            UI elements and distractions, keeping focus on the canvas and user-created ripples. This
            simplicity creates a contemplative experience that feels intuitive and meaningful rather
            than cluttered.
          </p>
          <p>
            This project demonstrates my belief that interaction design can do more than entertain or
            inform — it can shift perspective, create empathy, and inspire action. Sometimes the most
            powerful experiences are the simplest ones.
          </p>
        </div>
      </div>

      <div className="pd-footer-nav pd-animate">
        <div className="pd-footer-nav-item">
          <span className="pd-footer-nav-label">ADAPT Fitness</span>
          <Link to="/projects/adapt" className="pd-footer-nav-link">← Previous Project</Link>
        </div>
        <div style={{ visibility: 'hidden' }} className="pd-footer-nav-item right">
          <span className="pd-footer-nav-label">–</span>
        </div>
      </div>

    </div>
  );
}

export default RippleProject;