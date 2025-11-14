'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypewriterText({ text, speed = 100, className = '' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // reset on text change
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  // compute graphemes
  const graphemes = (() => {
    try {
      // use segmenter if available
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Seg = (Intl as any)?.Segmenter;
      if (typeof Seg !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const segmenter = new Seg(undefined, { granularity: 'grapheme' }) as any;
        // segment text
        return Array.from(segmenter.segment(text), (s: { segment: string }) => s.segment);
      }
    } catch {
      // fallback
    }
    // fallback split
    return Array.from(text);
  })();

  useEffect(() => {
    if (currentIndex >= graphemes.length) return;
    const timeout = setTimeout(() => {
      setDisplayText(graphemes.slice(0, currentIndex + 1).join(''));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, graphemes, speed]);

  return (
    <span className={className}>
      {displayText}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: 0,
          height: '1em',
          borderRight: '1px solid currentColor',
          marginLeft: 0,
          animation: 'blink 0.8s step-end infinite'
        }}
      />
    </span>
  );
}
