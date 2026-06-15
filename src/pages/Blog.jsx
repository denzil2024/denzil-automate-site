import { useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { CONTACT } from '../site';
import { applySeo } from '../seo';
import { posts, formatPostDate } from '../blog/posts.jsx';

const POSTS_PER_PAGE = 9;

function CoverFallback({ title }) {
  const letter = (title || 'D').trim()[0].toUpperCase();
  return <div className="bl-cover-fallback">{letter}</div>;
}

function PostCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="bl-card">
      <div className="bl-card-cover">
        {post.cover
          ? <img src={post.cover} alt={post.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          : <CoverFallback title={post.title} />}
        <span className="bl-cat-pill">{post.category.label}</span>
      </div>
      <div className="bl-card-body">
        <h3 className="bl-card-title">{post.title}</h3>
        <p className="bl-card-excerpt">{post.excerpt}</p>
        <div className="bl-card-meta">
          <span>{formatPostDate(post.date)}</span>
          <span className="bl-meta-dot" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedPost({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="bl-featured">
      <div className="bl-featured-cover">
        {post.cover
          ? <img src={post.cover} alt={post.title} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          : <CoverFallback title={post.title} />}
        <span className="bl-cat-pill">{post.category.label}</span>
      </div>
      <div className="bl-featured-body">
        <span className="eyebrow">Featured</span>
        <h2 className="bl-featured-title">{post.title}</h2>
        <p className="bl-featured-excerpt">{post.excerpt}</p>
        <div className="bl-card-meta">
          <span>{`By ${post.author}`}</span>
          <span className="bl-meta-dot" />
          <span>{formatPostDate(post.date)}</span>
          <span className="bl-meta-dot" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

function buildPageList(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out = [];
  for (let i = 0; i < sorted.length; i++) {
    out.push(sorted[i]);
    if (i < sorted.length - 1 && sorted[i + 1] - sorted[i] > 1) out.push('…');
  }
  return out;
}

function Pagination({ current, total }) {
  if (total <= 1) return null;
  const pages = buildPageList(current, total);
  const hrefFor = (n) => (n === 1 ? '/blog' : `/blog?page=${n}`);
  return (
    <nav className="bl-pagination" aria-label="Blog pagination">
      <a href={hrefFor(current - 1)} className={`bl-page-btn${current <= 1 ? ' disabled' : ''}`}>← Prev</a>
      {pages.map((p, i) =>
        p === '…'
          ? <span key={`e${i}`} className="bl-page-ellipsis">…</span>
          : <a key={p} href={hrefFor(p)} className={`bl-page-btn${p === current ? ' active' : ''}`} aria-current={p === current ? 'page' : undefined}>{p}</a>,
      )}
      <a href={hrefFor(current + 1)} className={`bl-page-btn${current >= total ? ' disabled' : ''}`}>Next →</a>
    </nav>
  );
}

export default function Blog() {
  const [searchParams] = useSearchParams();

  const sorted = useMemo(() => [...posts].sort((a, b) => new Date(b.date) - new Date(a.date)), []);
  const featuredPost = sorted[0] || null;
  const paginatable = useMemo(() => sorted.slice(1), [sorted]);
  const totalPages = Math.max(1, Math.ceil(paginatable.length / POSTS_PER_PAGE));
  const requested = parseInt(searchParams.get('page') || '1', 10);
  const page = Number.isFinite(requested) ? Math.min(Math.max(1, requested), totalPages) : 1;

  const { featured, gridPosts } = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return {
      featured: page === 1 ? featuredPost : null,
      gridPosts: paginatable.slice(start, start + POSTS_PER_PAGE),
    };
  }, [featuredPost, paginatable, page]);

  useEffect(() => {
    applySeo({
      title: page === 1 ? 'Blog | Denzil Automations' : `Blog (Page ${page}) | Denzil Automations`,
      description: 'Practical playbooks on lead response, follow-up and AI automation for growing businesses, from the team at Denzil Automations.',
      path: page === 1 ? '/blog' : `/blog?page=${page}`,
    });
  }, [page]);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [page]);

  return (
    <>
      <SiteHeader />

      <section className="bl-hero">
        <div className="wrap">
          <span className="eyebrow">The blog</span>
          <h1>Automation, <span className="bl-hero-grad">without the noise.</span></h1>
          <p>Playbooks on responding faster, following up automatically, and putting your busywork on autopilot, written by the team that builds it.</p>
        </div>
      </section>

      <section className="block soft bl-list">
        <div className="wrap">
          {featured && <FeaturedPost post={featured} />}

          {gridPosts.length > 0 && (
            <>
              <h2 className="bl-list-h">{page === 1 ? 'More from the blog' : `Page ${page} of ${totalPages}`}</h2>
              <div className="bl-grid">
                {gridPosts.map((p) => <PostCard key={p.slug} post={p} />)}
              </div>
            </>
          )}

          <Pagination current={page} total={totalPages} />

          {posts.length === 0 && <div className="bl-empty">No posts yet. Check back soon.</div>}
        </div>
      </section>

      <section className="block bl-cta-sec">
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <div className="bl-cta-card">
            <span className="bl-cta-eyebrow"><span>Work with us</span></span>
            <h2>Reading is good.<br /><span className="accent">Doing is better.</span></h2>
            <p>Tell us what is slowing you down and we will show you exactly what we would automate first.</p>
            <a className="bl-cta-btn" href={CONTACT}>Book a call →</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
