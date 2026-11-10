import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'What we do', href: '/#services' },
  { label: 'Our work', href: '/#projects' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="KATRM home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 34 34" fill="none">
              <path d="M3 29V5h6v10L19 5h8L15 17l13 12h-9L9 18v11H3Z" fill="currentColor" />
              <path d="M26 5h5v24h-5z" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-word">KATRM<span className="brand-period">.</span></span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <Link
            className={`nav-contact${location.pathname === '/contact' ? ' is-current' : ''}`}
            to="/contact"
            onClick={closeMenu}
          >
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
