import { useEffect, useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { applySeo } from '../seo';
import { CONTACT, EMAIL, EMAIL_LINK, WHATSAPP_DISPLAY } from '../site';

/* The page IS the action: type a message and it opens straight in WhatsApp,
   your text already prefilled. No forms, no mockups. */
function Composer() {
  const [msg, setMsg] = useState('Hi Denzil, I would like to automate ');
  const send = () => {
    const text = (msg.trim() || 'Hi Denzil, I would like to automate my business.');
    window.open(`${CONTACT}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  };
  return (
    <div className="cx">
      <input
        className="cx-in"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
        aria-label="Your message"
        placeholder="Hi Denzil, I would like to automate..."
      />
      <button className="cx-send" type="button" onClick={send} aria-label="Send on WhatsApp">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      </button>
    </div>
  );
}

export default function Contact() {
  useEffect(() => {
    applySeo({
      title: 'Contact Denzil Automations | Book a Call or Message Us',
      description: 'Get in touch with Denzil Automations. Message us on WhatsApp or send an email and we will show you exactly what we would automate in your business first.',
      path: '/contact',
    });
  }, []);

  return (
    <>
      <SiteHeader />

      <section className="cx-section">
        <div className="cx-bg" aria-hidden="true"><span className="b1" /><span className="b2" /><span className="b3" /></div>

        <div className="wrap">
          <div className="cx-inner">
            <span className="eyebrow cx-eye">Contact</span>
            <h1>Send the <span className="bl-hero-grad">first message.</span></h1>
            <p className="cx-lede">Type it below and it opens straight in WhatsApp, ready to send. We reply within minutes, and there is no obligation in saying hello.</p>

            <Composer />

            <p className="cx-alt">Prefer email? <a href={EMAIL_LINK}>{EMAIL}</a> · Or save our number: <a href={CONTACT} target="_blank" rel="noopener">{WHATSAPP_DISPLAY}</a></p>

            <ul className="cx-trust">
              <li>Replies in minutes</li>
              <li>No obligation</li>
              <li>We map what to automate, free</li>
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
