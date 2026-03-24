import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ReadingProgress from '../../components/ReadingProgress';
import ProjectCarousel from '../../components/ProjectCarousel';

function DreamscapeProject() {
  const observerRef = useRef(null);

  const images = [
    { src: '/images/dreamscape-1.jpg',   alt: 'Dreamscape Gallery — Artwork Carousel' },
    { src: '/images/dreamscape-2.jpg', alt: 'Dreamscape Gallery — Homepage' },
    { src: '/images/dreamscape-3.jpg', alt: 'Dreamscape Gallery — Artwork Detail' },
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
          <a href="https://dreamscapegallery.nickistudio.ca" target="_blank" rel="noopener noreferrer" className="pd-name">
            Dreamscape Gallery
            <svg className="pd-ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            </a>
          </div>
        </div>
        <div className="pd-body">
          <h1>Immersive 3D art gallery experience</h1>
          <p>
            Dreamscape Gallery is an interactive web application that transforms traditional image
            browsing into an immersive 3D carousel experience. Built with React and advanced CSS3
            transforms, the project showcases surreal photography and imaginative art in a spatial,
            engaging interface that feels like walking through a physical gallery.
          </p>

          <h2>Problem</h2>
          <p>
            Traditional image galleries feel flat and utilitarian. The challenge was to create an
            experience that makes viewing art feel engaging and spatial, as if you're walking through
            a physical gallery, while maintaining usability and performance.
          </p>

          <h2>Objectives</h2>
          <p>
            The goal of creating this gallery was to create depth and dimension in browsing, maintain
            smooth performance, keep navigation intuitive, and showcase art and artist details without
            clutter.
          </p>

          <h2>Technical Implementation</h2>
          <p>
            The 3D carousel experience is built with React for component structure and state
            management (useState/useEffect), leveraging CSS3 3D transforms and hardware acceleration
            for smooth performance. The animation system uses cubic-bezier curves for natural motion,
            z-index layering for proper card stacking, and staggered delays for visual interest. Each
            card is positioned in 3D space with transform3d properties, while the active card is
            centred and emphasised through increased z-index and subtle scaling, creating a
            perspective-based transition effect.
          </p>

          <h2>UI Components</h2>
          <p>
            Each artwork is displayed within a frosted glass card using backdrop-filter blur. This
            keeps the interface visually light while maintaining readability through subtle borders
            and shadows.
          </p>
          <p>
            A floating information bar updates as users navigate the carousel, providing artist
            context without interrupting the viewing experience. It remains visually separate from
            the artwork to avoid clutter.
          </p>
          <p>
            Users can navigate through arrow buttons, dot indicators, or direct card selection.
            Controls are intentionally minimal and styled to blend into the environment rather than
            compete with the content.
          </p>
          <p>
            Artworks can be viewed fullscreen in a modal with a blurred backdrop, maintaining spatial
            context while allowing focused viewing.
          </p>
          <p>
            The biggest challenge was making the 3D effect feel natural rather than gimmicky. This
            required extensive experimentation with perspective values, rotation angles, and easing
            curves to achieve smooth, elegant motion that enhances rather than distracts from the
            content.
          </p>
        </div>
      </div>

      <div className="pd-footer-nav pd-animate">
        <div className="pd-footer-nav-item">
          <span className="pd-footer-nav-label">Pinterest Redesign</span>
          <Link to="/projects/pinterest" className="pd-footer-nav-link">Previous Project</Link>
        </div>
        <div className="pd-footer-nav-item right">
          <span className="pd-footer-nav-label">ADAPT Fitness</span>
          <Link to="/projects/adapt" className="pd-footer-nav-link">Next Project</Link>
        </div>
      </div>

    </div>
  );
}

export default DreamscapeProject;