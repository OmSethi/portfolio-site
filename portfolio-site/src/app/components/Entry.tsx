'use client';

import { useKeyboardNav } from './KeyboardNav';

interface EntryProps {
  id: string;
  title: string;
  meta?: string;
  live?: boolean;
  stack: string[];
  children: React.ReactNode;
}

export default function Entry({ id, title, meta, live = false, stack, children }: EntryProps) {
  const { cursorId, setCursorId, isOpen, toggle } = useKeyboardNav();
  const open = isOpen(id);

  return (
    <div className="entry">
      <button
        type="button"
        data-nav-id={id}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="entry-head"
        onClick={() => toggle(id)}
        onFocus={() => setCursorId(id)}
        onBlur={() => setCursorId(null)}
      >
        <span className="entry-title">
          {cursorId === id && (
            <span className="nav-caret" aria-hidden="true">
              ▊
            </span>
          )}
          {title}
          {live && <span className="live-dot" aria-hidden="true" />}
        </span>
        {meta && <span className="entry-meta mono muted">{meta}</span>}
        <span className="entry-toggle mono" aria-hidden="true">
          {open ? '[ close ]' : '[ details ]'}
        </span>
      </button>

      <div
        id={`${id}-panel`}
        className={`entry-panel${open ? ' is-open' : ''}`}
        inert={!open}
      >
        <div className="entry-panel-inner">
          <div className="entry-panel-content">
            {children}
            <div className="stack mono">Stack: {stack.join(' / ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
