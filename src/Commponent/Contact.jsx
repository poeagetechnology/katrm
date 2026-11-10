import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const project = formData.get('project');
    const message = formData.get('message');
    const subject = encodeURIComponent(`KATRM project enquiry — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\n${message}`,
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section className="contact-page">
      <div className="contact-intro">
        <p className="eyebrow"><span className="eyebrow-dot" /> Let&apos;s make it happen</p>
        <h1>Tell us what<br />you&apos;re <span>building.</span></h1>
        <p className="contact-lead">
          A big plan, a small update, or just a question. Tell us a little about it and we&apos;ll
          start the conversation.
        </p>
        <div className="contact-aside-note"><span className="note-line" /> Good projects start with a good conversation.</div>
      </div>
      <div className="contact-form-panel">
        <p className="contact-form-kicker">01 — YOUR PROJECT</p>
        <h2>Let&apos;s start with the basics.</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your name
            <input name="name" type="text" autoComplete="name" placeholder="How should we address you?" required />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label>
            What are you thinking?
            <select name="project" defaultValue="" required>
              <option value="" disabled>Select a project type</option>
              <option>New build</option>
              <option>Renovation or restoration</option>
              <option>Commercial project</option>
              <option>Something else</option>
            </select>
          </label>
          <label>
            A little more about it
            <textarea name="message" rows="4" placeholder="The ideas, the plans, the questions — we'd love to hear it." required />
          </label>
          <button className="button button-dark contact-submit" type="submit">
            Prepare your enquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="form-note" role="status">
            {submitted
              ? 'Your email app should open with your enquiry ready to send.'
              : 'This opens your email app with the details pre-filled, so you can choose where to send it.'}
          </p>
        </form>
      </div>
    </section>
  );
}
