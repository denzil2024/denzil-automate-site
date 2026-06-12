import { Link } from 'react-router-dom';

/* The crafted "rising automation" robot mark + two-tone wordmark.
   Shared across the landing hero, the blog header and the footer so the
   brand reads identically everywhere. `id` keeps the gradient defs unique
   when more than one logo renders on a page. */
export function Logo({ id }) {
  return (
    <svg className="mk" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <defs><linearGradient id={`bm${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#6d5efc" /><stop offset="1" stopColor="#a575ff" /></linearGradient></defs>
      <rect width="34" height="34" rx="10" fill={`url(#bm${id})`} />
      <g fill="#fff">
        <rect x="12.1" y="6.4" width="1.7" height="5.6" rx="0.85" /><circle cx="12.95" cy="5.9" r="1.6" />
        <rect x="20.2" y="6.4" width="1.7" height="5.6" rx="0.85" /><circle cx="21.05" cy="5.9" r="1.6" />
        <rect x="6.5" y="14.8" width="4.1" height="7.2" rx="2.05" /><rect x="23.4" y="14.8" width="4.1" height="7.2" rx="2.05" />
        <rect x="8.9" y="10.8" width="16.2" height="15.7" rx="7" />
      </g>
      <rect x="11.3" y="16.3" width="11.4" height="5.7" rx="2.85" fill="#2c2658" />
      <ellipse cx="15" cy="19.15" rx="1.3" ry="2.05" fill="#fff" /><ellipse cx="19" cy="19.15" rx="1.3" ry="2.05" fill="#fff" />
    </svg>
  );
}

export default function Brand({ id }) {
  return <Link className="brand" to="/"><Logo id={id} /><span className="bword">Denzil <span>Automations</span></span></Link>;
}
