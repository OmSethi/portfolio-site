'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface KeyboardNavValue {
  selectedId: string | null;
  setSelectedId: (id: string | null) => void;
}

const KeyboardNavContext = createContext<KeyboardNavValue>({
  selectedId: null,
  setSelectedId: () => {}
});

export function useKeyboardNav() {
  return useContext(KeyboardNavContext);
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable;
}

export default function KeyboardNavProvider({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const select = useCallback((id: string | null) => {
    setSelectedId(id);
    if (!id) return;
    // let the accordion begin expanding before we center it
    requestAnimationFrame(() => {
      const el = document.querySelector<HTMLElement>(`[data-nav-id="${id}"]`);
      el?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (isTypingTarget(e.target)) return;

      if (e.key === 'Escape') {
        if (selectedId) {
          e.preventDefault();
          setSelectedId(null);
        }
        return;
      }

      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

      const items = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-id]'));
      if (items.length === 0) return;

      e.preventDefault();

      const current = items.findIndex((el) => el.dataset.navId === selectedId);
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
      if (id) select(id);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedId, select]);

  return (
    <KeyboardNavContext.Provider value={{ selectedId, setSelectedId: select }}>
      {children}
    </KeyboardNavContext.Provider>
  );
}
