import { useEffect, useState } from 'react';
import DeckNav from '../components/DeckNav';
import DeckFooter from '../components/DeckFooter';
import { applySeo } from '../seo';
import { CONTACT, TELEGRAM, WHATSAPP_DISPLAY, TELEGRAM_DISPLAY, EMAIL, EMAIL_LINK } from '../site';
import '../landing-deck.css';

const WA = <path fill="currentColor" d="M12 2a10 10 0 00-8.6 15.05L2 22l5.1-1.33A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.03.79.81-2.95-.2-.31A8.2 8.2 0 1112 20.2zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8s-.39-.12-.56.13-.64.8-.78.96-.29.19-.54.06a6.7 6.7 0 01-1.97-1.22 7.4 7.4 0 01-1.37-1.7c-.14-.25 0-.38.11-.5l.37-.43c.12-.15.16-.25.25-.42s.04-.31-.02-.43-.56-1.34-.76-1.84-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31s-.86.84-.86 2.05.88 2.38 1 2.55 1.74 2.66 4.22 3.73c.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18s.21-1.07.14-1.18-.22-.18-.47-.3z" />;
const TG = <path fill="currentColor" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.06-1.99 1.93c-.23.23-.42.42-.83.42z" />;
const EM = <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M4 7.5l8 5.5 8-5.5" /></g>;

const CHANNELS = [
  { ic: WA, name: 'WhatsApp', val: WHATSAPP_DISPLAY, go: 'Message us', href: CONTACT },
  { ic: TG, name: 'Telegram', val: TELEGRAM_DISPLAY, go: 'Open a chat', href: TELEGRAM },
  { ic: EM, name: 'Email', val: EMAIL, go: 'Send an email', href: EMAIL_LINK },
];

export default function Contact() {
  const [msg, setMsg] = useState('Hi Denzil, I would like to automate ');
  useEffect(() => {
    applySeo({
      title: 'Contact Denzil Automations | Book a Call or Message Us',
      description: 'Get in touch with Denzil Automations. Message us on WhatsApp or Telegram, or send an email, and we will show you exactly what we would automate in your business first.',
      path: '/contact',
    });
  }, []);

  const text = () => msg.trim() || 'Hi Denzil, I would like to automate my business.';
  const sendWA = () => window.open(`${CONTACT}?text=${encodeURIComponent(text())}`, '_blank', 'noopener');
  const sendTG = () => window.open(TELEGRAM, '_blank', 'noopener');

  return (
    <div className="deck">
      <DeckNav />

      <section className="ctsec">
        <div className="wrap">
          <div className="cx-head">
            <div className="eyebrow">Get In Touch</div>
            <h1 className="headline">Send the first <span className="acc">message.</span></h1>
            <p className="sub">Pick a channel and say hello. We reply fast, usually within minutes during working hours, and there is no obligation in starting a conversation.</p>
          </div>

          <div className="cx-channels">
            {CHANNELS.map((c) => (
              <a className="cx-card" key={c.name} href={c.href} target="_blank" rel="noopener">
                <span className="cx-ico"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">{c.ic}</svg></span>
                <span className="srv-t">{c.name}</span>
                <span className="cx-val">{c.val}</span>
                <span className="cx-go">{c.go} →</span>
              </a>
            ))}
          </div>

          <div className="cxc">
            <label className="cxc-lbl" htmlFor="cxmsg">Your message</label>
            <textarea
              id="cxmsg"
              className="cxc-in"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Hi Denzil, I would like to automate..."
            />
            <div className="cxc-btns">
              <button type="button" className="btn-p cxc-btn" onClick={sendWA}>Send on WhatsApp</button>
              <button type="button" className="btn-o cxc-btn" onClick={sendTG}>Send on Telegram</button>
            </div>
          </div>

          <div className="cx-trust">
            <span>Replies in minutes</span>
            <span>No obligation</span>
            <span>We map what to automate, free</span>
          </div>
        </div>
      </section>

      <DeckFooter />
    </div>
  );
}
