import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'animate-in' : ''}`}>
      <Link to="/" className="logo">NK</Link>
      <ul className="nav-links">
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;