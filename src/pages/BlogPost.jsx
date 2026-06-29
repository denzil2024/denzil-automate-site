import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import DeckNav from '../components/DeckNav';
import DeckFooter from '../components/DeckFooter';
import { CONTACT } from '../site';
import { applySeo, ORIGIN } from '../seo';
import '../landing-deck.css';
import '../blog-dark.css';
import { getPostBySlug, getRelatedPosts, formatPostDate } from '../blog/posts.jsx';

function CoverFallback({ title }) {
  const letter = (title || 'D').trim()[0].toUpperCase();
  return <div className="bp-hero-fallback">{letter}</div>;
}

function RelatedCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="bl-card">
      <div className="bl-card-cover">
        {post.cover
          ? <img src={post.cover} alt={post.title} loading="lazy" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          : <div className="bl-cover-fallback">{(post.title || 'D').trim()[0].toUpperCase()}</div>}
        <span className="bl-cat-pill">{post.category.label}</span>
      </div>
      <div className="bl-card-body">
        <h3 className="bl-card-title">{post.title}</h3>
        <div className="bl-card-meta">
          <span>{formatPostDate(post.date)}</span>
          <span className="bl-meta-dot" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (!post) return;
    const canonical = `${ORIGIN}/blog/${post.slug}`;
    const image = post.cover ? `${ORIGIN}${post.cover}` : `${ORIGIN}/og-cover.jpg`;
    const desc = post.metaDescription || post.excerpt;

    applySeo({
      title: post.seoTitle || `${post.title} | Denzil Automations`,
      description: desc,
      path: `/blog/${post.slug}`,
      image,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BlogPosting',
            headline: post.title,
            description: desc,
            image,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            author: { '@type': 'Organization', name: post.author },
            publisher: { '@type': 'Organization', name: 'Denzil Automations', logo: { '@type': 'ImageObject', url: `${ORIGIN}/favicon.svg` } },
            mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
            articleSection: post.category?.label,
            url: canonical,
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: `${ORIGIN}/blog` },
              { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
            ],
          },
        ],
      },
    });

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const Body = post.content;
  const related = getRelatedPosts(post.slug, 3);

  return (
    <div className="deck">
      <DeckNav />

      <article>
        <header className="bp-head">
          <div className="wrap">
            <Link to="/blog" className="bp-category">{post.category.label}</Link>
            <h1>{post.title}</h1>
            <p className="bp-lede">{post.excerpt}</p>
            <div className="bp-byline">
              <span className="bp-byline-rule" />
              <p className="bp-byline-author">{`Published by ${post.author}`}</p>
              <p className="bp-byline-meta">{`Updated ${formatPostDate(post.updated || post.date)} · ${post.readTime}`}</p>
            </div>
          </div>

          <div className="bp-hero-wrap">
            <div className="bp-hero-image">
              {post.cover
                ? <img src={post.cover} alt={post.title} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                : <CoverFallback title={post.title} />}
            </div>
          </div>
        </header>

        <div className="bp-body">
          <div className="bp-prose">
            <Body />
          </div>
        </div>
      </article>

      <section className="block bl-cta-sec">
        <div className="wrap" style={{ maxWidth: 1000 }}>
          <div className="bl-cta-card">
            <span className="bl-cta-eyebrow"><span>Work with us</span></span>
            <h2>Don't just read the playbook.<br /><span className="accent">Run it.</span></h2>
            <p>Book a short call and we will map your busywork and show you exactly what to automate first.</p>
            <a className="bl-cta-btn" href={CONTACT}>Book a call →</a>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="block bl-related">
          <div className="wrap">
            <div className="shead"><span className="eyebrow">Keep reading</span><h2>More from the blog</h2></div>
            <div className="bl-grid">
              {related.map((p) => <RelatedCard key={p.slug} post={p} />)}
            </div>
          </div>
        </section>
      )}

      <DeckFooter />
    </div>
  );
}
