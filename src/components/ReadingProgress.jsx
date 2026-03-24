import { useState, useEffect } from 'react';
import './ReadingProgress.css';

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const content = document.querySelector('.pd-content');
      if (!content) return;

      const contentTop = content.getBoundingClientRect().top + window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY - contentTop;
      const available = docHeight - contentTop;

      const pct = available > 0 ? Math.min(Math.max(scrolled / available, 0), 1) : 0;
      setProgress(pct);

      // only show once the content section has scrolled up past the navbar (~100px)
      setVisible(content.getBoundingClientRect().top <= 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`rp-track ${visible ? 'rp-track--visible' : ''}`}>
      <div className="rp-fill" style={{ transform: `scaleY(${progress})` }} />
      <span className="rp-label">{Math.round(progress * 100)}%</span>
    </div>
  );
}

export default ReadingProgress;
