import { CONTACT, TELEGRAM } from '../site';

/* Fixed bottom-right quick-contact: Telegram (primary, as requested) + WhatsApp,
   on every page. Matches the brand deck. */
export default function FloatButtons() {
  return (
    <div className="float-stack">
      <a className="fab tg" href={TELEGRAM} target="_blank" rel="noopener" aria-label="Message us on Telegram">
        <span className="ping" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#fff" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71l-4.14-3.06-1.99 1.93c-.23.23-.42.42-.83.42z" />
        </svg>
        <span className="tip">Telegram us — fast reply</span>
      </a>
      <a className="fab wa" href={CONTACT} target="_blank" rel="noopener" aria-label="Message us on WhatsApp">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#fff" d="M12 2a10 10 0 00-8.6 15.05L2 22l5.1-1.33A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.18-1.14l-.3-.18-3.03.79.81-2.95-.2-.31A8.2 8.2 0 1112 20.2zm4.5-6.13c-.25-.12-1.46-.72-1.69-.8s-.39-.12-.56.13-.64.8-.78.96-.29.19-.54.06a6.7 6.7 0 01-1.97-1.22 7.4 7.4 0 01-1.37-1.7c-.14-.25 0-.38.11-.5l.37-.43c.12-.15.16-.25.25-.42s.04-.31-.02-.43-.56-1.34-.76-1.84-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31s-.86.84-.86 2.05.88 2.38 1 2.55 1.74 2.66 4.22 3.73c.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18s.21-1.07.14-1.18-.22-.18-.47-.3z" />
        </svg>
        <span className="tip">WhatsApp us</span>
      </a>
    </div>
  );
}
