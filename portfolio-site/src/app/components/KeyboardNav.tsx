'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface KeyboardNavValue {
  cursorId: string | null;
  setCursorId: (id: string | null) => void;
  isOpen: (id: string) => boolean;
  toggle: (id: string) => void;
  closeAll: () => void;
}

const KeyboardNavContext = createContext<KeyboardNavValue>({
  cursorId: null,
  setCursorId: () => {},
  isOpen: () => false,
  toggle: () => {},
  closeAll: () => {}
});

export function useKeyboardNav() {
  return useContext(KeyboardNavContext);
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
}

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function KeyboardNavProvider({ children }: { children: React.ReactNode }) {
  const [cursorId, setCursorId] = useState<string | null>(null);
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set());

  const isOpen = useCallback((id: string) => openIds.has(id), [openIds]);

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const closeAll = useCallback(() => setOpenIds(new Set()), []);

  // move real DOM focus so Enter/Space stays native to the button
  const focusItem = useCallback((id: string) => {
    setCursorId(id);
    const el = document.querySelector<HTMLElement>(`[data-nav-id="${CSS.escape(id)}"]`);
    if (!el) return;
    el.focus({ preventScroll: true });
    requestAnimationFrame(() => {
      el.scrollIntoView({
        block: 'center',
        behavior: prefersReducedMotion() ? 'auto' : 'smooth'
      });
    });
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target)) return;

      if (e.key === 'Escape') {
        // close the focused item first, then everything, then release the cursor
        if (cursorId && openIds.has(cursorId)) {
          e.preventDefault();
          toggle(cursorId);
        } else if (openIds.size > 0) {
          e.preventDefault();
          closeAll();
        } else if (cursorId) {
          e.preventDefault();
          (document.activeElement as HTMLElement | null)?.blur();
          setCursorId(null);
        }
        return;
      }

      // Enter/Space are deliberately not handled here. The focused <button>
      // fires them natively, and intercepting would toggle twice.
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

      const items = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-id]'));
      if (items.length === 0) return;

      e.preventDefault();

      const current = items.findIndex((el) => el.dataset.navId === cursorId);
      let next: number;
      if (current === -1) {
        // nothing selected yet: down enters at the top, up enters at the bottom
        next = e.key === 'ArrowDown' ? 0 : items.length - 1;
      } else {
        next = e.key === 'ArrowDown' ? current + 1 : current - 1;
        // clamp at both ends, no wraparound
        if (next < 0 || next >= items.length) return;
      }

      const id = items[next].dataset.navId;
      if (id) focusItem(id);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [cursorId, openIds, toggle, closeAll, focusItem]);

  return (
    <KeyboardNavContext.Provider value={{ cursorId, setCursorId, isOpen, toggle, closeAll }}>
      {children}
    </KeyboardNavContext.Provider>
  );
}
