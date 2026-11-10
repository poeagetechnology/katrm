import { Link } from 'react-router-dom';
import Hero from './Hero';

const services = [
  { number: '01', title: 'Ground-up construction', text: 'From the first sketch to the final walkthrough, we build with care at every stage.' },
  { number: '02', title: 'Renovation & restoration', text: 'We give good spaces a new chapter—without losing what made them special.' },
  { number: '03', title: 'Project management', text: 'Clear communication, considered decisions, and a team that keeps the whole picture in view.' },
];

const projects = [
  {
    name: 'A home, made yours',
    type: 'RESIDENTIAL · NEW BUILD',
    location: 'Made around the way you live',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85',
    alt: 'Contemporary home with warm timber details and a quiet garden, illustrating a residential build',
    className: 'project-tall',
  },
  {
    name: 'Room to make',
    type: 'COMMERCIAL · FIT-OUT',
    location: 'A thoughtful space to work',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85',
    alt: 'Light-filled interior with natural finishes and understated furniture, illustrating a commercial fit-out',
    className: 'project-short',
  },
  {
    name: 'A new lease on home',
    type: 'RESIDENTIAL · RENOVATION',
    location: 'A fresh take on a familiar place',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1100&q=85',
    alt: 'Refined contemporary living space opening to a courtyard, illustrating a home renovation',
    className: 'project-short',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="intro-section section-wrap" id="about">
        <div className="intro-aside">
          <p className="eyebrow"><span className="eyebrow-dot" /> A little about us</p>
          <span className="section-index">01 — 04</span>
        </div>
        <div className="intro-main">
          <h2>Good building is about more than <span>what you see.</span></h2>
          <div className="intro-bottom">
            <p>
              It&apos;s the way a space makes you feel. The care behind every detail. The confidence
              that it&apos;ll stand strong for years to come. That&apos;s the standard we bring to
              every KATRM project.
            </p>
            <a className="text-link" href="#services">A better way to build <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" /> What we do</p>
              <h2>Built around <span>your vision.</span></h2>
            </div>
            <p className="section-heading-note">One trusted team. From first plans to the final details.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Project inspiration</p>
            <h2>Spaces with <span>purpose.</span></h2>
          </div>
          <p className="section-heading-note">A few starting points. Every KATRM project is shaped around you.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              className={`project-card ${project.className}`}
              to="/contact"
              key={project.name}
              aria-label={`Ask us about ${project.name}`}
            >
              <img src={project.image} alt={project.alt} loading="lazy" />
              <div className="project-overlay" />
              <span className="project-count">0{index + 1} / 03</span>
              <span className="project-link-arrow" aria-hidden="true">↗</span>
              <div className="project-info">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <span className="project-location">{project.location}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="values-section">
        <div className="values-image">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85"
            alt="Natural stone, timber and daylight meet in a carefully finished interior"
            loading="lazy"
          />
        </div>
        <div className="values-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> The KATRM difference</p>
          <h2>Good work.<br /><span>No shortcuts.</span></h2>
          <p className="values-description">
            Building can feel complicated. We make it feel considered. You get straight answers,
            a hands-on team, and craftsmanship that respects your investment.
          </p>
          <div className="values-list">
            <div><span>01</span><strong>People first, always</strong></div>
            <div><span>02</span><strong>Quality without compromise</strong></div>
            <div><span>03</span><strong>Good communication, start to finish</strong></div>
          </div>
        </div>
      </section>

      <section className="promise-section section-wrap">
        <p className="eyebrow"><span className="eyebrow-dot" /> Our promise</p>
        <p className="promise-statement">Good people. Clear answers. <span>Work we&apos;re proud to put our name on.</span></p>
        <span className="promise-signature">THE KATRM STANDARD</span>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Your next chapter starts here</p>
            <h2>Have a good one<br />in <span>mind?</span></h2>
          </div>
          <Link className="button button-light" to="/contact">Tell us about it <span aria-hidden="true">↗</span></Link>
          <span className="cta-decoration" aria-hidden="true">K.</span>
        </div>
      </section>
    </>
  );
}
