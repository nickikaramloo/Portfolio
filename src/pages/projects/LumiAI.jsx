import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProjectDetail.css';
import ReadingProgress from '../../components/ReadingProgress';
import ProjectCarousel from '../../components/ProjectCarousel';
 
function LumiAI() {
  const observerRef = useRef(null);
 
  const images = [
    { src: '/images/lumi-1.jpg', alt: 'Lumi — Dashboard with writing stats' },
    { src: '/images/lumi-2.jpg', alt: 'Lumi — Onboarding flow' },
    { src: '/images/lumi-3.jpg', alt: 'Lumi — Workspace with AI panel' }
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
          <span className="pd-category">Web Development · UX/UI Design</span>
          <div className="pd-name">
          <a href="https://lumi.nickistudio.ca" target="_blank" rel="noopener noreferrer" className="pd-name">
            Lumi AI
            <svg className="pd-ext-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            </a>
          </div>
        </div>
        <div className="pd-body">
          <h1>An AI writing assistant that lives inside Notion</h1>
          <p>
            Lumi is a front-end web application that brings an AI writing co-pilot into a Notion-style workspace. It simulates a Notion OAuth connection, surfaces intelligent writing suggestions based on the document you're working on, and tracks writing activity over time — all without pulling you out of the editor.
          </p>
          <p>
            The core idea was simple: most AI writing tools pull you out of your workflow. They live in separate tabs, separate apps, separate contexts. Lumi was built to stay inside the document, showing up only when you need it and staying out of the way when you don't.
          </p>
 
          <h2>Problem</h2>
          <p>
            Notion is one of the most popular tools for writing and thinking, but it has no built-in AI that understands the document you're working on at the level needed to genuinely assist you. Existing third-party tools required context-switching — copying text into another interface, waiting for a response, then bringing it back.
          </p>
          <p>A few pain points shaped the direction of this project:</p>
          <ul>
            <li><strong>Context switching kills flow:</strong> Writers who leave their document to use AI tools reported losing their train of thought. The act of switching tabs was enough to break concentration, making the assistance net-negative.</li>
            <li><strong>AI responses lack document awareness:</strong> Generic AI assistants don't know the title of your document, the tone you've established, or what you've already written. Suggestions felt disconnected and required heavy editing before they were useful.</li>
            <li><strong>No way to track improvement:</strong> Writers had no visibility into whether their clarity, tone, or structure was getting better over time. AI was used reactively, not as a tool for growth.</li>
          </ul>
 
          <h2>Objectives</h2>
          <p>Lumi was designed around three goals: keep the writing experience uninterrupted, make AI assistance feel contextually aware rather than generic, and give users a sense of progress over time. Specifically:</p>
          <ul>
            <li>Build a document workspace where AI is a panel within the same view, not a separate destination</li>
            <li>Pass full document context (title, content, tone preference) to the AI on every request so suggestions stay relevant</li>
            <li>Provide a dashboard that surfaces writing stats — words generated, clarity score, time saved — to make progress tangible</li>
            <li>Design an onboarding flow that lets users configure the AI to match their working style before they start</li>
          </ul>
 
          <h2>Design Process</h2>
          <p>
            The interface was designed around one core constraint: the AI panel should never compete with the document for attention. The workspace uses a side-by-side layout where the editor takes full priority and the Lumi panel opens only when you want it via the toolbar button.
          </p>
          <p>
            Onboarding was split into three steps — account, configure, connect with the configuration step asking users to choose their features (inline suggestions, smart summarize, writing analytics) and set a default tone. This upfront personalisation ensures that the AI's first response already feels calibrated to how someone writes, not how AI writes by default.
          </p>
          <p>
            The dashboard was designed to give writing stats meaning. A clarity-over-time chart makes improvement visible over weeks. Proactive suggestions surface in the right column, nudging users toward documents that could benefit from a revisit.
          </p>
 
          <h2>Development</h2>
          <p>
            Lumi is built with React and Vite, with the Groq API powering all AI responses via streaming — so responses appear token by token, matching the feel of a live conversation rather than a batch result. The system prompt passed to the AI includes the document title, full content, and user tone preference, giving every response genuine context-awareness.
          </p>
          <p>Key technical decisions included:</p>
          <ul>
            <li><strong>Streaming responses:</strong> Used the Groq API's streaming mode so AI replies render progressively. This reduced perceived latency significantly and made the AI panel feel alive rather than frozen while loading.</li>
            <li><strong>Document-aware prompting:</strong> Each request builds a system prompt dynamically from the current document state. The AI always knows what it's helping with, so users don't have to re-explain their context every time.</li>
            <li><strong>Simulated Notion OAuth:</strong> Built a realistic popup-based OAuth flow that mimics Notion's actual login and authorization UI. A <code>postMessage</code> from the popup completes the handshake and updates app state in real time. The connection is simulated for portfolio purposes — no real Notion API is called.</li>
            <li><strong>Local-first architecture:</strong> User documents, preferences, and activity are stored locally via a clean store layer. This kept the prototype fast and focused on the experience without requiring a backend.</li>
            <li><strong>Event-driven state:</strong> Document updates and activity tracking use custom browser events (<code>lumi-docs-updated</code>, <code>lumi-activity-updated</code>) to keep the dashboard and workspace in sync without prop drilling.</li>
          </ul>
 
          <div className="pd-solution-block">
            <h2>Solution 1 – Inline AI Panel</h2>
            <p>
              Rather than redirecting users to a chat interface, Lumi opens as a panel alongside the document. Quick prompts (Summarize, Improve tone, Suggest what to add) give instant entry points, while a freeform input lets users ask anything. The panel can be dismissed in one click, returning full focus to the editor.
            </p>
          </div>
 
          <div className="pd-solution-block">
            <h2>Solution 2 – Tone-Aware Suggestions</h2>
            <p>
              Every AI request is sent with a system prompt that includes the user's preferred tone — Professional, Casual, Concise, or Friendly which is set during onboarding and adjustable in settings at any time. This means Lumi's suggestions match the writer's voice rather than defaulting to a generic AI register that needs to be rewritten anyway.
            </p>
          </div>
 
          <div className="pd-solution-block">
            <h2>Solution 3 – Writing Dashboard</h2>
            <p>
              The dashboard tracks documents assisted, words generated, average clarity score, and estimated time saved. A clarity-over-time chart visualises writing improvement across sessions. Proactive suggestion cards surface documents worth revisiting, reducing the mental load of remembering what still needs work.
            </p>
          </div>
 
          <div className="pd-solution-block">
            <h2>Outcomes & Learnings</h2>
            <p>
              The biggest design insight was that AI assistance becomes genuinely useful the moment it stops requiring context to be re-established on every use. Passing the full document into the system prompt — something easy to do but often overlooked made every response feel relevant rather than generic. The streaming output also mattered more than expected: live text appearing token by token felt intelligent in a way that a loader followed by a wall of text simply didn't.
            </p>
          </div>
        </div>
      </div>
 
      <div className="pd-footer-nav pd-animate">
        <div style={{ visibility: 'hidden' }} className="pd-footer-nav-item">
          <span className="pd-footer-nav-label">–</span>
        </div>
        <div className="pd-footer-nav-item right">
          <span className="pd-footer-nav-label">Waypoint</span>
          <Link to="/projects/waypoint" className="pd-footer-nav-link">Next Project</Link>
        </div>
      </div>
 
    </div>
  );
}
 
export default LumiAI;
 