import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Built for what&apos;s next</p>
        <h1 id="hero-title">We build places <span>that move</span> you.</h1>
        <p className="hero-description">
          Thoughtful construction. Enduring design. We bring ambitious ideas to life, one well-built
          space at a time.
        </p>
        <div className="hero-actions">
          <Link className="button button-dark" to="/contact">Start a project <span aria-hidden="true">↗</span></Link>
          <a className="text-link" href="#projects">Explore our work <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note">
          <span className="note-line" />
          <span>Built on trust. Made to last.</span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85"
          alt="Sunlit modern concrete home opening onto a landscaped courtyard"
        />
        <div className="hero-image-shade" />
        <div className="image-label"><span>01 / 03</span><span>MATERIALS · LIGHT · SPACE</span></div>
        <div className="hero-stamp" aria-label="Built with intention">
          <span>BUILT WITH</span>
          <strong>INTENTION</strong>
          <span className="stamp-star">✳</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span>Independent builders &amp; construction partners</span>
        <span className="hero-bottom-right">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></span>
      </div>
    </section>
  );
}
