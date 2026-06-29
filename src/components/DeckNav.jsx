import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../site';

/* Shared dark nav for the deck-styled pages. Wordmark-only, Barlow Condensed
   links, gold CTA, with a hamburger menu on mobile. */
export default function DeckNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <nav className="dnav">
      <div className="nl">
        <Link to="/" className="logo-lockup" onClick={close}>
          <span className="logo-word"><b>Denzil</b> Automations<span className="dot">.</span><small>Business Automation</small></span>
        </Link>
        <span className="status-pill"><span className="status-dot" /><span className="status-t">Global</span></span>
      </div>

      <div className="nlinks">
        <a href="/#services">Services</a>
        <a href="/#stack">Stack</a>
        <a href="/#how">Process</a>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <a className="nav-cta" href={CONTACT} target="_blank" rel="noopener">Book a Call</a>

      <button className={`dnav-toggle${open ? ' open' : ''}`} aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </button>

      {open && (
        <div className="dnav-menu">
          <a href="/#services" onClick={close}>Services</a>
          <a href="/#stack" onClick={close}>Stack</a>
          <a href="/#how" onClick={close}>Process</a>
          <Link to="/blog" onClick={close}>Blog</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
          <a className="nav-cta" href={CONTACT} target="_blank" rel="noopener" onClick={close}>Book a Call</a>
        </div>
      )}
    </nav>
  );
}
