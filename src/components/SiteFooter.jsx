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
