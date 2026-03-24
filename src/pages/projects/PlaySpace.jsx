import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ReadingProgress from '../../components/ReadingProgress';
import ProjectCarousel from '../../components/ProjectCarousel';

function PlaySpace() {
  const observerRef = useRef(null);

  const images = [
    { src: '/images/playspace-1.jpg', alt: 'PlaySpace — Main Dashboard' },
    { src: '/images/playspace-2.jpg', alt: 'PlaySpace — User Insights' },
    { src: '/images/playspace-3.jpg', alt: 'PlaySpace — Onboarding Flow' },
    { src: '/images/playspace-4.jpg', alt: 'PlaySpace — Games' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('animate-in')),
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
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
          <div className="pd-name">PlaySpace</div>
        </div>
        <div className="pd-body">
          <h1>Helping gamers understand how they play</h1>
          <p>
            PlaySpace started from a gap in how gaming platforms present data. Most dashboards focus on surface-level stats like win rates, kill counts, and hours played. While useful, PlaySpace is a UX-driven gaming analytics dashboard designed to go deeper by helping players understand their playstyle patterns, session quality, and progression over time.
          </p>
          <p>
            The app does this by breaking complex performance data into focused, single-purpose screens — a dashboard for at-a-glance stats, a dedicated insights page for AI-driven observations, and a goals page for self-improvement so that players always know where to look and what to do next.
          </p>

          <h2>Problem</h2>
          <p>
            Most gaming stat trackers are designed for players who already know how to interpret raw data. They present dense tables of numbers, leaderboard rankings, and match histories without offering much context or guidance. For a lot of players, that information is hard to act on.
          </p>
          <p>
            According to a 2023 Newzoo report, there are over 3 billion gamers worldwide, but most stat-tracking tools are built for a small subset of hardcore competitive players who are comfortable digging through dense tables of match data. That leaves most players without tools that help them improve.
          </p>
          <p>From competitive analysis and personal experience, a few recurring issues stood out:</p>
          <ul>
            <li><strong>No pattern recognition:</strong> Players had no way to understand how their performance shifted across sessions or times of day. Stats were presented in isolation without connecting them to patterns or habits.</li>
            <li><strong>Unhealthy comparison culture:</strong> Leaderboard-focused platforms encourage players to compare themselves to others rather than track personal growth, creating pressure and discouragement for casual gamers.</li>
            <li><strong>Lack of structured support:</strong> Goal setting and self-improvement were left entirely up to the player with no structured support.</li>
            <li><strong>Data without meaning:</strong> The result is that most players either ignore their stats entirely or obsess over numbers without knowing what to change.</li>
          </ul>

          <h2>Objectives</h2>
          <p>The goal of PlaySpace was not to replace existing stat trackers, but to reframe how players engage with their own performance data. I wanted to design a dashboard that:</p>
          <ul>
            <li>Visualizes playstyle and behavioral patterns, not just raw numbers</li>
            <li>Surfaces AI-powered insights that connect habits to outcomes</li>
            <li>Supports structured goal setting tied to real performance metrics</li>
            <li>Guides new users through onboarding to personalize the experience from the start</li>
          </ul>

          <h2>Research & Discovery</h2>
          <p>
            I conducted a competitive analysis of existing gaming dashboards and stat-tracking platforms including Tracker.gg, op.gg, and Blitz.gg. What stood out was that most tools prioritize data volume over data clarity. These platforms present match histories, rank progression, and agent or character stats, but rarely help the player understand what those numbers mean in context.
          </p>
          <p>
            For example, Tracker.gg surfaces detailed per-match breakdowns but offers no behavioral trends or session quality analysis. The key insight from this analysis was that players don't just want to see their stats but want to understand what their stats say about how they play. There's a gap between data presentation and actionable self-awareness that most platforms don't address.
          </p>

          <h2>UI Design System & Technical Execution</h2>
          <p>
            The visual design uses a dark glassmorphic aesthetic with warm copper and orange accents against a deep, atmospheric background. The dark theme reflects the gaming context while the translucent card surfaces create depth and visual hierarchy. Generous spacing and a restrained colour palette keep the dense data presentation feeling clean and scannable rather than overwhelming.
          </p>
          <p>In Figma, I built the interface with the following technical approach:</p>
          <ul>
            <li><strong>Component Library:</strong> Built a comprehensive component system using auto layout and variants to maintain consistency across all screens. Cards, buttons, navigation items, and stat widgets were created as reusable components with defined colour styles.</li>
            <li><strong>Glassmorphic Effect:</strong> The signature glass card effect was achieved using background blur, layered fills with reduced opacity, and subtle 1px border strokes. This created the translucent, layered depth that defines the visual aesthetic.</li>
            <li><strong>Data Visualization:</strong> The radar chart on the dashboard and the progress bars on the goals page were built using vector shapes and boolean operations to ensure they remained editable and scalable.</li>
            <li><strong>Interactive Prototyping:</strong> Used Figma's prototyping tools to connect the full flow from sign-up through onboarding to the main dashboard.</li>
            <li><strong>Design Tokens:</strong> Defined colour styles and reusable card components early, which made iteration significantly faster. I could test different layouts and data arrangements without rebuilding from scratch each time.</li>
          </ul>
    
          <br></br>

          <div className="pd-solution-block">
            <h2>Solution 1 – Playstyle Profiling</h2>
            <p>
              PlaySpace visualizes behavioral dimensions like aggression, precision, strategy, and adaptability using radar charts based on recent sessions. This gives players a snapshot of how they play, not just how well. Instead of focusing solely on K/D ratios or win percentages, the radar chart reveals playstyle tendencies and helps players understand their natural approach to gameplay.
            </p>
            </div>

          <div className="pd-solution-block">
            <h2>Solution 2 – Session Quality Tracking</h2>
            <p>
              Rather than only tracking wins and losses, PlaySpace measures session quality through focus level and composure, helping players identify when they're playing at their best and when fatigue or tilt is affecting performance. This shifts the focus from outcome-based metrics to process-based awareness.
            </p>
          </div>

          <div className="pd-solution-block">
            <h2>Solution 3 – AI-Powered Insights</h2>
            <p>
              The Insights page surfaces personalized observations like peak performance windows, accuracy trends over session length, and the impact of time-of-day on win rates. These insights connect behavior to outcomes, helping players understand not just what happened but why it happened and what to change.
            </p>
          </div>

          <div className="pd-solution-block">
            <h2>Solution 4 – Structured Goal Progression</h2>
            <p>
              The Goals page lets players set and track specific improvement goals like reducing tilt, improving consistency, and increasing precision, with weekly progress tracking and achievement milestones. Goals are tied to actual performance metrics, creating a structured pathway for self-improvement rather than leaving it to guesswork.
            </p>
          </div>

          <div className="pd-solution-block">
            <h2>Solution 5 – Guided Onboarding</h2>
            <p>
              A three-step onboarding flow (connect accounts, select games, set goals) personalizes the dashboard from the start and bridges the gap between sign-up and a fully populated experience.
            </p>
          </div>

          <div className="pd-solution-block">
            <h3>Impacts & Learnings</h3>
            <p>
              This project reinforced that data-heavy interfaces require just as much UX thinking as simpler applications. The challenge wasn't showing more data but deciding what data matters most and presenting it in a way that supports understanding.
            </p>
            <p>
              Designing the onboarding flow highlighted how important it is to bridge the gap between an empty state and a personalized experience. On the technical side, building a consistent component system in Figma early on made iteration significantly faster.
            </p>
            <p>
              PlaySpace taught me that the most useful dashboards aren't the ones with the most information, but the ones that help users know what to do next.
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
            src="https://embed.figma.com/proto/h0z6XicZgHztiB7NJKNhZH/PlaySpace?node-id=147-174&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=147%3A174&embed-host=share"
            allowFullScreen
            title="PlaySpace Prototype"
          />
        </div>
      </div>

      <div className="pd-proto-link-mobile">
        <a href="https://embed.figma.com/proto/h0z6XicZgHztiB7NJKNhZH/PlaySpace?node-id=147-174&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=147%3A174&embed-host=share" target="_blank" rel="noopener noreferrer">
          View Prototype ↗
        </a>
      </div>

      <div className="pd-footer-nav pd-animate">
        <div className="pd-footer-nav-item">
          <span className="pd-footer-nav-label">Waypoint</span>
          <Link to="/projects/waypoint" className="pd-footer-nav-link">Previous Project</Link>
        </div>
        <div className="pd-footer-nav-item right">
          <span className="pd-footer-nav-label">Pinterest Redesign</span>
          <Link to="/projects/pinterest" className="pd-footer-nav-link">Next Project</Link>
        </div>
      </div>

    </div>
  );
}

export default PlaySpace;