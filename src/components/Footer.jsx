import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-center">
          <p className="footer-copyright">© 2026 Nicki Karamloo</p>
        </div>
        <div className="footer-right">
          <a href="mailto:nicki.karamloo@gmail.com" className="footer-link">
            Email
          </a>
          <a href="https://www.linkedin.com/in/nicki-karamloo/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href="/NickiKar_Resume.pdf" download className="footer-link">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;