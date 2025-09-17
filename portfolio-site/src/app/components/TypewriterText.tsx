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

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  // Compute grapheme clusters so emojis don't split into '?' first
  const graphemes = (() => {
    try {
      // Using Intl.Segmenter when available for correct grapheme segmentation
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const Seg = (Intl as any)?.Segmenter;
      if (typeof Seg !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const segmenter = new Seg(undefined, { granularity: 'grapheme' }) as any;
        // segmenter.segment(text) returns an iterable of segments
        return Array.from(segmenter.segment(text), (s: { segment: string }) => s.segment);
      }
    } catch {
      // Fallback below
    }
    // Fallback: this may still split some complex emojis but covers most cases
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
