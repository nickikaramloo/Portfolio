import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ReadingProgress from '../../components/ReadingProgress';
import ProjectCarousel from '../../components/ProjectCarousel';

function AdaptProject() {
  const observerRef = useRef(null);

  const images = [
    { src: '/images/adapt-1.jpg', alt: 'ADAPT Fitness — Start Page' },
    { src: '/images/adapt-2.jpg', alt: 'ADAPT Fitness — Sensory Settings' },
    { src: '/images/adapt-3.jpg', alt: 'ADAPT Fitness — Onboarding' },
    { src: '/images/adapt-4.jpg', alt: 'ADAPT Fitness — Routine Builder' },
    { src: '/images/adapt-5.jpg', alt: 'ADAPT Fitness — Home & Profile' },
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
          <div className="pd-name">ADAPT Fitness</div>
        </div>
        <div className="pd-body">
          <h1>Fitness that adapts to you</h1>
          <p>
            ADAPT Fitness is a mobile fitness app designed specifically for neurodivergent users
            with ADHD, autism, and sensory processing differences. The app adapts workouts based on
            mood, focus, and sensory preferences — helping users regulate energy, reduce
            overstimulation, and build consistency through adaptive routines.
          </p>

          <h2>Problem</h2>
          <p>
            Traditional fitness apps prioritise metrics — calories burned, steps tracked, streaks
            maintained. For neurodivergent users, this creates anxiety rather than motivation. Key
            pain points include:
          </p>
          <ul>
            <li><strong>Sensory Overwhelm</strong> — Bright colours, loud sounds, and busy interfaces trigger overstimulation</li>
            <li><strong>Decision Fatigue</strong> — Too many workout choices with no guidance creates paralysis</li>
            <li><strong>Rigid Routines</strong> — Inflexible programs don't adapt to energy levels or executive function</li>
            <li><strong>Comparison Culture</strong> — Leaderboards and social feeds increase anxiety</li>
          </ul>

          <h2>Objectives</h2>
          <p>
            ADAPT Fitness aims to create sensory-friendly interfaces that minimise cognitive load and
            decision fatigue for neurodivergent users. The app focuses on building flexible, adaptive
            routines that prioritise emotional regulation over performance metrics, fostering
            consistency through supportive design rather than pressure-based motivation.
          </p>

          <h2>Research & Discovery</h2>
          <p>
            The research process included user interviews with 5 ADHD and autistic individuals about
            their fitness app experiences, competitive analysis of apps like Calm, and analyzed online
            articles on neurodivergent-centred design principles and sensory accessibility. Findings
            included decision fatigue preventing users from starting workouts, bright interfaces and
            loud sounds causing sensory overload, streaks and metrics creating shame, and that
            existing apps lack deep sensory customisation.
          </p>
        </div>
      </div>

      <div className="pd-solutions pd-animate" style={{ marginTop: '56px' }}>
        <div />
        <div className="pd-solutions-body">
          <div className="pd-solution-block">
            <h3>Solution 1 – Sensory-First Onboarding</h3>
            <p>
              The onboarding uses three simple, identical-structure screens: weight, height, and
              sensory style. Users choose from Visual, Audio, Minimal, or Tactile preferences,
              defining boundaries from the start.
            </p>
            <p>Repeated screen structure creates rhythm and predictability, reducing anxiety about "what comes next."</p>
          </div>
          <div className="pd-solution-block">
            <h3>Solution 2 – Environment Customisation</h3>
            <p>
              Users customise lighting (bright/moderate/dim), sound (music/quiet/guided), space
              (indoor/outdoor), and texture preferences (soft surfaces/noise equipment/minimal contact).
            </p>
            <p>Matches users with workouts that fit sensory needs, eliminating friction before it starts.</p>
          </div>
          <div className="pd-solution-block">
            <h3>Solution 3 – Routine Builder</h3>
            <p>
              Helps users stack up to three workouts with daily habits. Visual structure and empathetic
              copy ("frame your flow" instead of "workout plan") reflect ADAPT's supportive voice.
            </p>
            <p>Builds consistency without rigid demands, accommodating variable energy levels.</p>
          </div>
          <div className="pd-solution-block">
            <h3>Solution 4 – Focus-Based Workout Library</h3>
            <p>
              Workouts organised by focus type: Sensory Balance, Focus Flow, Energy Surge, Calm Core.
              Each card shows duration, intensity, and compatible sensory modes.
            </p>
            <p>Curated options reduce decision fatigue compared to overwhelming choice.</p>
          </div>
          <div className="pd-solution-block" style={{ marginTop: '56px' }}>
            <h3>UI Design System</h3>
            <ul>
                <li><strong>Colour Palette</strong> — Soft yellows, light blues, dark purples prevent overstimulation</li>
                <li><strong>Typography</strong> — High-contrast, readable fonts with generous sizing options</li>
                <li><strong>Components</strong> —  Consistent buttons, segmented controls, progress indicators</li>
                <li><strong>Spacing</strong> — Generous whitespace reduces visual clutter</li>
            </ul>
            </div>    
          <div className="pd-solution-block">
            <h3>Usability Testing Findings</h3>
            <p>
              Moderated testing with 5 neurodivergent participants revealed that 85% found the
              interface calming rather than overwhelming, and 90% preferred ADAPT over their current
              fitness apps. The curated workout system reduced decision time by 62%, validating the
              app's approach to minimising cognitive load.
            </p>
          </div>
          <div className="pd-solution-block">
            <h3>Impacts & Learnings</h3>
            <p>
              Deep user research informed every design decision, with sensory customisation resonating
              strongly with participants. The anti-comparison approach effectively differentiated ADAPT
              from competitors, while predictable structure successfully reduced user anxiety.
            </p>
            <p>
              This project revealed that feeling choices can be more supportive than overwhelming users
              with options. Genuine empathy requires acknowledging over assumptions, and inclusive
              design ultimately benefits all users, not just the target audience.
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
            src="https://embed.figma.com/proto/bNsLNWcmWn26sP3RH3q5Q9/ADAPT?node-id=2068-554&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2068%3A554&embed-host=share"
            allowFullScreen
            title="ADAPT Fitness Prototype"
          />
        </div>
      </div>

      <div className="pd-proto-link-mobile">
        <a href="https://embed.figma.com/proto/bNsLNWcmWn26sP3RH3q5Q9/ADAPT?node-id=2068-554&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2068%3A554&embed-host=share" target="_blank" rel="noopener noreferrer">
          View Prototype ↗
        </a>
      </div>

      <div className="pd-footer-nav pd-animate">
        <div className="pd-footer-nav-item">
          <span className="pd-footer-nav-label">Dreamscape Gallery</span>
          <Link to="/projects/dreamscape" className="pd-footer-nav-link">Previous Project</Link>
        </div>
        <div className="pd-footer-nav-item right">
          <span className="pd-footer-nav-label">The Ripple Effect</span>
          <Link to="/projects/ripple" className="pd-footer-nav-link">Next Project</Link>
        </div>
      </div>

    </div>
  );
}

export default AdaptProject;