'use client';

import { useId } from 'react';
import { useKeyboardNav } from './KeyboardNav';

interface DropdownSectionProps {
  title: string;
  summary: string;
  children: React.ReactNode;
  isLast?: boolean;
  showGreenDot?: boolean;
}

export default function DropdownSection({ title, summary, children, isLast = false, showGreenDot = false }: DropdownSectionProps) {
  const id = useId();
  const { selectedId, setSelectedId } = useKeyboardNav();
  const isOpen = selectedId === id;

  return (
    <div style={{ marginBottom: isLast ? 0 : 16 }}>
      <button
        type="button"
        data-nav-id={id}
        aria-expanded={isOpen}
        onClick={() => setSelectedId(isOpen ? null : id)}
        style={{
          appearance: 'none',
          font: 'inherit',
          textAlign: 'left',
          width: '100%',
          cursor: 'pointer',
          padding: '12px 16px',
          border: '1px solid var(--border-soft)',
          borderRadius: '8px',
          backgroundColor: isOpen ? 'var(--panel-hover)' : 'var(--panel)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.2s',
          marginBottom: isOpen ? 12 : 0
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--panel-hover)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = isOpen ? 'var(--panel-hover)' : 'var(--panel)'}
      >
        <div>
          <div style={{ fontWeight: 600, color: 'var(--text-strong)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
            {isOpen && (
              <span
                className="nav-caret"
                aria-hidden="true"
                style={{
                  color: 'var(--caret)',
                  animation: 'blink 1s step-end infinite'
                }}
              >
                ▊
              </span>
            )}
            {title}
            {showGreenDot && (
              <span
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '9999px',
                  background: 'var(--accent-green)',
                  boxShadow: '0 0 0 2px rgba(34,197,94,0.28)',
                  animation: 'pulse-glow 1.8s ease-in-out infinite'
                }}
              />
            )}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            {summary}
          </div>
        </div>
        <div
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            color: 'var(--text-muted)',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          ›
        </div>
      </button>

      <div
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, padding 0.3s ease',
          padding: isOpen ? '16px' : '0 16px',
          borderLeft: isOpen ? '1px solid var(--border-soft)' : '1px solid transparent',
          borderRight: isOpen ? '1px solid var(--border-soft)' : '1px solid transparent',
          borderBottom: isOpen ? '1px solid var(--border-soft)' : '1px solid transparent',
          borderRadius: '0 0 8px 8px',
          backgroundColor: 'var(--panel-subtle)'
        }}
      >
        {children}
      </div>
    </div>
  );
}
