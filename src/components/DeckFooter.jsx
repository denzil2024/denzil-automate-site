import { Link } from 'react-router-dom';
import { CONTACT, TELEGRAM, WHATSAPP_DISPLAY, TELEGRAM_DISPLAY, EMAIL, EMAIL_LINK } from '../site';

/* Shared dark footer for the deck-styled pages. */
export default function DeckFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="ft-grid">
          <div>
            <div className="ft-brand-row"><span className="logo-word"><b>Denzil</b> Automations<span className="dot">.</span><small>Business Automation</small></span></div>
            <div className="ft-tagline">We automate the work you shouldn&rsquo;t be doing.</div>
            <p className="ft-desc">Business automation systems built on production-grade infrastructure. n8n workflows, WhatsApp AI pipelines, CRM automation, and custom integrations, delivered globally.</p>
          </div>
          <div>
            <div className="ft-col-t">Services</div>
            <div className="ft-links">
              <a href="/#services">WhatsApp Pipelines</a>
              <a href="/#services">n8n Workflows</a>
              <a href="/#services">CRM Automation</a>
              <a href="/#services">API Integrations</a>
            </div>
          </div>
          <div>
            <div className="ft-col-t">Company</div>
            <div className="ft-links">
              <a href="/#about">About</a>
              <a href="/#stack">Stack</a>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <div className="ft-col-t">Reach Us Fast</div>
            <div className="ft-links">
              <a href={CONTACT} target="_blank" rel="noopener">WhatsApp {WHATSAPP_DISPLAY}</a>
              <a href={TELEGRAM} target="_blank" rel="noopener">Telegram {TELEGRAM_DISPLAY}</a>
              <a href={EMAIL_LINK}>{EMAIL}</a>
            </div>
          </div>
        </div>
        <div className="ft-bottom">
          <div className="ft-copy">© 2026 Denzil Automations · All Rights Reserved · Remote Worldwide</div>
          <div className="ft-legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="ft-dots"><span className="ft-dot" /><span className="ft-dot" /><span className="ft-dot" /></div>
        </div>
      </div>
    </footer>
  );
}
