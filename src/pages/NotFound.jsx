import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { applySeo } from '../seo';

/* Real 404 page. Rendered for any unmatched route and prerendered to
   dist/404.html, which server.js serves with a 404 status so search
   engines treat unknown URLs as not-found instead of soft-404s. */
export default function NotFound() {
  useEffect(() => {
    applySeo({
      title: 'Page Not Found | Denzil Automations',
      description: 'Sorry, we could not find that page. It may have moved, or the link may be wrong.',
      path: '/404',
      robots: 'noindex, follow',
    });
  }, []);

  return (
    <>
      <SiteHeader />
      <section className="block soft">
        <div className="wrap">
          <div className="cta">
            <span className="eyebrow">Error 404</span>
            <h2>We could not find that page</h2>
            <p>The page you were looking for has moved or never existed. Let us point you back to something useful.</p>
            <div className="nf-actions">
              <Link className="btn btn-primary btn-lg" to="/">Back to home</Link>
              <Link className="btn btn-light btn-lg" to="/blog">Read the blog</Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
