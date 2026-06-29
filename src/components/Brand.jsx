import { Link } from 'react-router-dom';

/* The "Run Mark": a confident D (Denzil) with a play / run symbol set into
   its counter, press go once and the automation runs. Gradient cobalt to cyan.
   Shared across the landing hero, the blog header and the footer so the brand
   reads identically everywhere. `id` keeps the gradient defs unique when more
   than one logo renders on a page. */
export function Logo({ id }) {
  return (
    <svg className="mk" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`bm${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c9a030" /><stop offset="1" stopColor="#e2b84a" />
        </linearGradient>
      </defs>
      <path fill={`url(#bm${id})`} fillRule="evenodd" d="M9 8 H22 C33 8 41 15 41 24 C41 33 33 40 22 40 H9 Z M18 16 V32 H22 C28 32 33 28.5 33 24 C33 19.5 28 16 22 16 Z" />
      <path fill="#3bb273" d="M21 18 L31 24 L21 30 Z" />
    </svg>
  );
}

export default function Brand({ id }) {
  return <Link className="brand" to="/"><Logo id={id} /><span className="bword">Denzil <span>Automations</span></span></Link>;
}
