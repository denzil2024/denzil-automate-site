import { useEffect, useState } from 'react';
import Brand from './Brand';
import { CONTACT, NAV_LINKS } from '../site';

/* Solid, light, sticky header used on interior pages (the blog) where
   there is no dark hero behind the nav. The landing page keeps its own
   transparent nav inside the dark hero. Both pull from NAV_LINKS so the
   menu never drifts between them. */
export default function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-head${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <nav className="nav">
          <Brand id="head" />
          <div className="nav-links">
            {NAV_LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </div>
          <a className="btn btn-primary nav-cta" href={CONTACT}>Book a call</a>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setMenu((o) => !o)}>
            {menu
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>}
          </button>
        </nav>
        {menu && (
          <div className="nav-menu">
            {NAV_LINKS.map((l) => <a key={l.href} href={l.href} onClick={() => setMenu(false)}>{l.label}</a>)}
            <a className="btn btn-primary" href={CONTACT} onClick={() => setMenu(false)}>Book a call</a>
          </div>
        )}
      </div>
    </header>
  );
}
