import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand footer-logo" to="/" aria-label="KATRM home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 34 34" fill="none">
                <path d="M3 29V5h6v10L19 5h8L15 17l13 12h-9L9 18v11H3Z" fill="currentColor" />
                <path d="M26 5h5v24h-5z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">KATRM<span className="brand-period">.</span></span>
          </Link>
          <p>Thoughtful construction.<br />Enduring by design.</p>
        </div>
        <div className="footer-links">
          <div>
            <span className="footer-label">EXPLORE</span>
            <a href="/#about">About</a>
            <a href="/#services">What we do</a>
            <a href="/#projects">Our work</a>
          </div>
          <div>
            <span className="footer-label">SAY HELLO</span>
            <Link to="/contact">Start a conversation <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <Link className="back-top" to="/" aria-label="Back to top">↑</Link>
      </div>
      <div className="footer-bottom">
        <span>© 2026 KATRM. All rights reserved. Crafted by Poeage Groups.</span>
        <a href="#top" onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>Back to top ↑</a>
      </div>
    </footer>
  );
}
