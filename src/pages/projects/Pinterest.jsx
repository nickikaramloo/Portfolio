import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ReadingProgress from '../../components/ReadingProgress';
import ProjectCarousel from '../../components/ProjectCarousel';

function PinterestProject() {
  const observerRef = useRef(null);

  const images = [
    { src: '/images/pinterest-1.jpg',   alt: 'Pinterest Redesign — Splash & Home screen' },
    { src: '/images/pinterest-2.jpg', alt: 'Pinterest Redesign — Home & Explore screen' },
    { src: '/images/pinterest-3.jpg', alt: 'Pinterest Redesign — Profile screen' },
    { src: '/images/pinterest-4.jpg', alt: 'Pinterest Redesign — Shopping screen' },
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
          <span className="pd-category">UX/UI Design</span>
          <div className="pd-name">Pinterest Redesign</div>
        </div>
        <div className="pd-body">
          <h1>Reimagining inspiration through clarity and connection</h1>
          <p>
            Pinterest has always been a place for ideas — a visual playground for creatives. But
            over time, the app started to feel cluttered with too many ads, mixed features, and not
            enough breathing room. This redesign brings the focus back to discovering, saving, and
            showcasing inspiration in a clean, thoughtful space.
          </p>

          <h2>Problem</h2>
          <p>
            Pinterest's interface tries to do everything at once — discovery, shopping, inspiration,
            and social connection. Instead of feeling cohesive, it ends up overwhelming users. During
            the research phase, three main pain points emerged:
          </p>
          <ul>
            <li><strong>Chaotic Home Feed</strong> — Mixed ads, suggested content, and creator pins with no clear hierarchy</li>
            <li><strong>Hidden Shopping</strong> — Shopping features are buried and unintuitive</li>
            <li><strong>Generic Profiles</strong> — No sense of identity or creative expression</li>
          </ul>

          <h2>Objectives</h2>
          <p>
            The goal of this redesign was to bring clarity and intention back to the experience by
            refocusing Pinterest on meaningful content discovery, making shopping easy to find and
            natural to use, turning profiles into expressive, portfolio-like spaces, and reducing
            cognitive load and overall visual overwhelm.
          </p>

          <h2>Research & Discovery</h2>
          <p>
            I conducted 6 user interviews including creative professionals and daily Pinterest users,
            analyzed competitors like Instagram and Behance, and ran usability tests on current
            Pinterest flows. The key insight: users want control over what they see, not just
            algorithmic curation. From this research, I created a primary persona: Ethan Cole, a
            28-year-old Creative Director who relies on Pinterest for visual inspiration but feels
            increasingly overwhelmed by it.
          </p>

          <h2>Design Process</h2>
          <ul>
            <li><strong>Component System:</strong> Built reusable components for pin cards, navigation tabs, and profile sections with Boolean properties to toggle between different states (Explore vs. Following feed, Shop vs. Discover mode). This allowed rapid iteration without rebuilding screens.</li>
            <li><strong>Auto Layout:</strong> Used auto layout extensively for the feed grids and profile layouts, ensuring content could scale and reflow naturally across different screen sizes without breaking the design.</li>
            <li><strong>Interactive Prototype:</strong> Created click-through flows for key user journeys (browsing feed, switching tabs, shopping workflow) with conditional interactions. Used Figma's prototyping features to simulate tab switching and modal transitions.</li>
            <li><strong>Design System Documentation:</strong> Organized typography scales, color styles, and spacing tokens in a dedicated page, making the handoff process clearer and maintaining visual consistency across all 15+ screens.</li>
          </ul>
        </div>
      </div>

      <div className="pd-solutions pd-animate" style={{ marginTop: '56px' }}>
        <div />
        <div className="pd-solutions-body">
          <div className="pd-solution-block">
            <h3>Solution 1 – Dual-Feed System</h3>
            <p>The home feed now has two distinct modes:</p>
            <ul>
              <li>Explore: Algorithm-driven recommendations based on interests and behaviour</li>
              <li>Following: Content exclusively from creators you follow</li>
            </ul>
            <p>This separation gives users control over discovery vs. familiarity, reducing the feeling of chaos.</p>
          </div>
          <div className="pd-solution-block">
            <h3>Solution 2 – Elevated Shopping</h3>
            <p>
              Shopping was moved out of hidden menus and into its own primary navigation tab. The
              redesigned Shop experience features curated collections, related products, and direct
              purchasing — creating a clear bridge between inspiration and action.
            </p>
          </div>
          <div className="pd-solution-block">
            <h3>Solution 3 – Profiles as Portfolios</h3>
            <p>
              Profiles transformed into creative portfolios with a biography section for creative
              focus, follower context and connections, created vs. saved tabs (clear separation),
              and magazine-style editorial layout.
            </p>
          </div>
          <div className="pd-solution-block">
            <h3>Usability Testing Findings</h3>
            <p>
              I conducted moderated usability testing with 6 participants. They immediately understood
              the Explore/Following split without explanation and were able to switch between feeds
              based on intent. Discovery of shopping features increased from 20% to 90%, with most
              users locating the Shop tab within seconds.
            </p>
          </div>
          <div className="pd-solution-block">
            <h3>Impacts & Learnings</h3>
            <ul>
              <li><strong>40%</strong> reduction in perceived cognitive load during testing</li>
              <li><strong>90%</strong> of users noticed and understood the Shop tab (up from 20%)</li>
              <li><strong>100%</strong> of participants preferred the dual-feed system</li>
            </ul>
            <p>
              Completing this redesign taught me that separation often creates clarity more
              effectively than integration, users value control as much as personalisation, and
              that simplicity requires intentional restraint.
            </p>
          </div>
        </div>
      </div>

     <div className="pd-proto-section pd-animate">
        <div className="pd-proto-embed">
          <iframe
            style={{ border: 'none' }}
            width="100%"
            height="650"
            src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/8K95qP3eM6yqnLyddeFYPI/Pinterest-Redesign?node-id=1-152&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A152&hide-ui=0&hotspot-hints=0"
            allowFullScreen
            title="Pinterest Redesign Prototype"
          />
        </div>
      </div>

      <div className="pd-proto-link-mobile">
        <a href="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/8K95qP3eM6yqnLyddeFYPI/Pinterest-Redesign?node-id=1-152&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A152&hide-ui=0&hotspot-hints=0" target="_blank" rel="noopener noreferrer">
          View Prototype ↗
        </a>
      </div>

      <div className="pd-footer-nav pd-animate">
      <div className="pd-footer-nav-item">
          <span className="pd-footer-nav-label">PlaySpace</span>
          <Link to="/projects/playspace" className="pd-footer-nav-link">Previous Project</Link>
        </div>
        <div className="pd-footer-nav-item right">
          <span className="pd-footer-nav-label">Dreamscape Gallery</span>
          <Link to="/projects/dreamscape" className="pd-footer-nav-link">Next Project</Link>
        </div>
      </div>
    </div>
  );
}

export default PinterestProject;