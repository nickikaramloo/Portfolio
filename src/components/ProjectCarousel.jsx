import { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../pages/projects/ProjectDetail.css';

function ProjectCarousel({ images }) {
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [lightboxAlt, setLightboxAlt] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const carouselRef = useRef(null);
  const dragOrigin = useRef({ x: 0, scrollLeft: 0 });
  const didDrag = useRef(false);

  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    didDrag.current = false;
    dragOrigin.current = {
      x: e.clientX,
      scrollLeft: carouselRef.current.scrollLeft,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
    if (!cursorVisible) setCursorVisible(true);

    if (!isDragging || !carouselRef.current) return;
    const dx = e.clientX - dragOrigin.current.x;
    if (Math.abs(dx) > 4) didDrag.current = true;
    carouselRef.current.scrollLeft = dragOrigin.current.scrollLeft - dx;
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleItemClick = (src, alt) => {
    if (didDrag.current) return;
    if (window.innerWidth <= 480) {
      setLightboxSrc(src);
      setLightboxAlt(alt);
    } else {
      setIsZoomed(!isZoomed);
    }
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <>
      {ReactDOM.createPortal(
        <div
          className={`pd-cursor ${cursorVisible && !isDragging ? 'pd-cursor--on' : ''}`}
          style={{ left: cursorPos.x, top: cursorPos.y }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </div>,
        document.body
      )}

      {lightboxSrc && ReactDOM.createPortal(
        <div className="pd-lightbox" onClick={closeLightbox}>
          <button className="pd-lightbox-close" onClick={closeLightbox}>Close</button>
          <div className="pd-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxSrc} alt={lightboxAlt} />
          </div>
        </div>,
        document.body
      )}

      <div className="pd-carousel-wrapper">
        <div
          ref={carouselRef}
          className="pd-carousel"
          style={{
            cursor: isDragging ? 'grabbing' : (cursorVisible ? 'none' : 'grab'),
            userSelect: 'none',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setCursorVisible(true)}
          onMouseLeave={() => { setCursorVisible(false); setIsDragging(false); }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className="pd-carousel-track">
            {images.map((img, i) => (
              <div
                key={i}
                className={`pd-carousel-item ${isZoomed ? 'pd-carousel-item--zoomed' : ''}`}
                onClick={() => handleItemClick(img.src, img.alt)}
              >
                <img src={img.src} alt={img.alt} draggable={false} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCarousel;
