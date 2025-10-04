'use client';

import { useState } from 'react';

interface DropdownSectionProps {
  title: string;
  summary: string;
  children: React.ReactNode;
  isLast?: boolean;
  showGreenDot?: boolean;
}

export default function DropdownSection({ title, summary, children, isLast = false, showGreenDot = false }: DropdownSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: isLast ? 0 : 16 }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: 'pointer',
          padding: '12px 16px',
          border: '1px solid #333',
          borderRadius: '8px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.2s',
          marginBottom: isOpen ? 12 : 0
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)'}
      >
        <div>
          <div style={{ fontWeight: 600, color: '#d1d5db', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
            {title}
            {showGreenDot && (
              <span
                aria-hidden="true"
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '9999px',
                  background: '#22c55e',
                  boxShadow: '0 0 0 2px rgba(34,197,94,0.28)',
                  animation: 'pulse-glow 1.8s ease-in-out infinite'
                }}
              />
            )}
          </div>
          <div style={{ color: '#9ca3af', fontSize: '14px' }}>
            {summary}
          </div>
        </div>
        <div
          style={{
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            color: '#9ca3af',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          ›
        </div>
      </div>
      
      <div
        style={{
          maxHeight: isOpen ? '1000px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, padding 0.3s ease',
          padding: isOpen ? '16px' : '0 16px',
          borderLeft: isOpen ? '1px solid #333' : '1px solid transparent',
          borderRight: isOpen ? '1px solid #333' : '1px solid transparent',
          borderBottom: isOpen ? '1px solid #333' : '1px solid transparent',
          borderRadius: '0 0 8px 8px',
          backgroundColor: 'rgba(255, 255, 255, 0.01)'
        }}
      >
        {children}
      </div>
    </div>
  );
}
