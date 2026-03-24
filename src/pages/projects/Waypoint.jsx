import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ReadingProgress from '../../components/ReadingProgress';
import ProjectCarousel from '../../components/ProjectCarousel';

function Waypoint() {
  const observerRef = useRef(null);

  const images = [
    { src: '/images/waypoint-1.jpg', alt: 'Waypoint — Splash & Home' },
    { src: '/images/waypoint-2.jpg', alt: 'Waypoint — Route Overview' },
    { src: '/images/waypoint-3.jpg', alt: 'Waypoint — Transfer guidance' },
    { src: '/images/waypoint-4.jpg', alt: 'Waypoint — Arrival' },
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
          <div className="pd-name">Waypoint</div>
        </div>
        <div className="pd-body">
            <h1>Making public transit feel less stressful</h1>
            <p>
                Waypoint is a UX-driven public transit app designed to reduce commuter anxiety by removing uncertainty. Most transit apps technically work, but they don't feel easy to use. Even when nothing goes wrong, commuting can feel stressful.
            </p>
            <p>
                Instead of relying on dense maps, constant alerts, and technical transit language, Waypoint focuses on clear, step-by-step guidance and reassurance at the moments people tend to feel the most stressed. The app breaks each journey into progressive cards that reveal information only when it becomes relevant, creating a calm, focused experience that prioritizes clarity over information density.
            </p>

        <h2>Problem</h2>
        <p>
        Most existing transit apps are designed around efficiency and data. They assume users are confident, familiar with transit systems, and comfortable interpreting maps under pressure. For a lot of people, that's not the reality.
        </p>
        <p>From research and personal experience, a few patterns kept showing up:</p>
        <ul>
        <li><strong>Poor transit UI in map apps:</strong> When users open traditional map applications like Google Maps or Apple Maps and navigate to the transit section, they're met with cluttered interfaces that lack visual hierarchy. Trip duration is buried among route options, transfer counts, and walking times, making it difficult to quickly understand how long a journey will actually take. This is especially frustrating when users are in a hurry and need clear, immediate answers.</li>
        <li><strong>Information overload:</strong> Users felt overwhelmed by how much information was shown at once, especially when they were already in a hurry. In user interviews, 8 out of 10 participants mentioned feeling "visually stressed" when opening their transit app during rush hour.</li>
        <li><strong>Location anxiety:</strong> Waiting for a bus or train created anxiety because there was no clear confirmation they were in the right place. 65% of surveyed users reported checking their app multiple times while waiting, seeking reassurance rather than new information.</li>
        </ul>
        

          <h2>Objectives</h2>
          <p>The goal of Waypoint was not to make commuting faster or more optimized, but to make it feel more manageable. Solutions focus on:</p>
          <ul>
            <li>Reducing cognitive load by showing only what users need to know at each stage of their journey</li>
            <li>Providing clear, step-by-step guidance that prioritizes wayfinding over raw data</li>
            <li>Building confidence through contextual reassurance at high-anxiety moments (waiting, transferring, approaching stops)</li>
            <li>Using progressive disclosure to reveal information when it becomes relevant, not all at once</li>
          </ul>

          <h2>Research & Discovery</h2>
          <p>
            I analyzed existing transit apps (Google Maps, Transit, Citymapper) to understand how they approached information architecture and real-time guidance. A key finding: most apps prioritized showing all possible routes and options upfront, creating what I identified as "noise" rather than "signal."
          </p>
          <p>
            <strong>Example of noise vs. signal:</strong> When a user searches for directions, they're typically shown 3-5 route options simultaneously, each with multiple data points (departure times, walking distances, number of transfers, real-time delays). While comprehensive, this creates decision paralysis when users are in a rush. The "signal" — which route to take right now — gets buried in the "noise" of all the alternatives.
          </p>
          <p>
            I conducted 10 semi-structured interviews with regular transit users (ages 22-45) to understand their pain points and mental models. Key insights included:
          </p>
          <ul>
            <li>Users don't trust real-time arrival predictions and often arrive early "just in case"</li>
            <li>The moment between leaving one vehicle and boarding the next is where anxiety peaks</li>
            <li>People want confirmation they're doing things correctly, not just information about what to do</li>
          </ul>

          <h2>Design Process</h2>
          <p>
            I mapped out the user journey from trip planning to arrival, identifying key moments where users needed reassurance versus new information. This informed a three-stage information hierarchy:
          </p>
          <ul>
            <li><strong>Planning:</strong> Minimal route options with clear visual differentiation</li>
            <li><strong>In-transit:</strong> Progressive step-by-step cards that update based on location</li>
            <li><strong>Wayfinding:</strong> Contextual guidance for transfers and exits</li>
          </ul>
          <p>
            To prototype the progressive disclosure system and test different information hierarchies, I built a comprehensive Figma file with the following structure:
          </p>
          <ul>
            <li><strong>Component Library:</strong> Created a modular design system with variants for different journey states (waiting, in-transit, approaching, transferring). Used nested components for step cards that could dynamically show/hide information based on user context.</li>
            <li><strong>Auto Layout:</strong> Implemented flexible auto-layout frames for the step-by-step cards, allowing content to expand and contract based on the information needed at each stage without breaking the visual hierarchy.</li>
            <li><strong>Variables & Modes:</strong> Set up local variables for spacing, colors, and typography to maintain consistency.</li>
            <li><strong>Interactive Prototyping:</strong> Built a high-fidelity prototype with conditional logic using Figma's advanced prototyping features — simulating real-time updates by triggering different component states as users "progressed" through their journey. Used smart animate transitions to show how information would progressively appear.</li>
            <li><strong>Design Tokens:</strong> Documented spacing, elevation, and motion principles in a separate tokens page to ensure consistency across all screens and make handoff to development clearer.</li>
          </ul>
          <p>
            Initial wireframes focused on testing the step-card concept. Through multiple rounds of user testing in Maze, I refined the hierarchy of information within each card, ultimately settling on a three-tier system: primary action, context, and details (revealed on tap).
          </p>
          <div className="pd-body">
            <br></br>

          <div className="pd-solution-block">
            <h2>Solution 1 – Step-by-Step Journey Cards</h2>
            <p>
              Rather than showing the entire route at once, Waypoint breaks trips into individual step cards that expand as you progress. Each card shows only the immediate next action, with contextual details (like walking directions or platform numbers) revealed when needed.
            </p>
          </div>

          <div className="pd-solution-block">
            <h2>Solution 2 – Location Confirmation</h2>
            <p>
              When waiting at a stop, users see a clear "You're in the right place" message with a visual indicator, addressing the most common source of transit anxiety. Real-time updates are shown only when they're actionable (e.g., "Your train is 2 minutes away" rather than constant countdown timers).
            </p>
          </div>

          <div className="pd-solution-block">
            <h2>Solution 3 – Transfer Guidance</h2>
            <p>
              For transfers, Waypoint provides visual wayfinding cues and estimated walking time between platforms, reducing the stress of tight connections. Users can see at a glance whether they need to rush or if they have time to spare.
            </p>
          </div>

          <div className="pd-solution-block">
            <h2>Outcomes & Learnings</h2>
            <p>
              User testing showed that Waypoint's progressive disclosure approach significantly reduced cognitive load. Participants reported feeling "calmer" and "more in control" compared to using traditional transit apps, even when dealing with the same routes and connections. Good UX isn't about showing all available information — it's about showing the right information at the right time. Sometimes less really is more.
            </p>
          </div>
        </div>
       </div>
      </div>

      <div className="pd-proto-section pd-animate">
        <div className="pd-proto-embed">
          <iframe
            style={{ border: 'none' }}
            width="100%"
            height="650"
            src="https://embed.figma.com/proto/ISGbWrGs1NkBOLc6uz5lLa/Waypoint?node-id=1-168&p=f&scaling=scale-down&content-scaling=fixed&page-id=240%3A4&embed-host=share"
            allowFullScreen
            title="Waypoint Prototype"
          />
        </div>
      </div>

      <div className="pd-proto-link-mobile">
        <a href="https://embed.figma.com/proto/ISGbWrGs1NkBOLc6uz5lLa/Waypoint?node-id=1-168&p=f&scaling=scale-down&content-scaling=fixed&page-id=240%3A4&embed-host=share" target="_blank" rel="noopener noreferrer">
          View Prototype ↗
        </a>
      </div>

      <div className="pd-footer-nav pd-animate">
        <div className="pd-footer-nav-item">
          <span className="pd-footer-nav-label">Lumi AI</span>
          <Link to="/projects/lumi" className="pd-footer-nav-link">Previous Project</Link>
        </div>
        <div className="pd-footer-nav-item right">
          <span className="pd-footer-nav-label">PlaySpace</span>
          <Link to="/projects/playspace" className="pd-footer-nav-link">Next Project</Link>
        </div>
      </div>

    </div>
  );
}

export default Waypoint;
