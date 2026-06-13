import Brand from './Brand';
import { CONTACT } from '../site';

/* Shared dark footer, used by the landing page and every blog page so
   the foot of the site is identical wherever you are. */
export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Brand id="foot" />
            <p>We design and build the automations that quietly run your business, so you can spend your time on the work that grows it.</p>
            <div className="foot-social">
              <a href="https://www.instagram.com/denzilautomations/" target="_blank" rel="noopener" aria-label="Denzil Automations on Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://www.facebook.com/denzilautomations" target="_blank" rel="noopener" aria-label="Denzil Automations on Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="foot-col"><h4>Explore</h4><a href="/#work">What we build</a><a href="/#automations">Automations</a><a href="/#how">How it works</a><a href="/blog">Blog</a></div>
          <div className="foot-col"><h4>Company</h4><a href="/#faq">FAQ</a><a href={CONTACT}>Contact</a><a href={CONTACT}>Book a call</a></div>
          <div className="foot-col"><h4>Get started</h4><a href={CONTACT}>WhatsApp us</a><a href={CONTACT}>Request a quote</a></div>
        </div>
        <div className="foot-bottom"><span>{`© ${new Date().getFullYear()} Denzil Automations`}</span><span>Built to run while you sleep.</span></div>
      </div>
    </footer>
  );
}
