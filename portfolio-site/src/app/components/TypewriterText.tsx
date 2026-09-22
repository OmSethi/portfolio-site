'use client';

import { useState, useEffect, useMemo } from 'react';

/*
 * A comma's ink sits in the lower-left of its monospace cell, so the cell's
 * trailing whitespace plus the following space cell reads as a gap and a half.
 * Pulling the comma's own cell in evens it against the other word gaps.
 */
function tightenCommas(text: string) {
  return text.split(/(,)/).map((part, i) =>
    part === ',' ? (
      <span key={i} className="tight-comma">
        ,
      </span>
    ) : (
      part
    )
  );
}

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypewriterText({ text, speed = 100, className = '' }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // compute graphemes, memoized so the typing effect doesn't re-arm every render
  const graphemes = useMemo(() => {
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
  }, [text]);

  // reset on text change
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    // honour reduced motion: land on the full string immediately
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(text);
      setCurrentIndex(graphemes.length);
      return;
    }

    if (currentIndex >= graphemes.length) return;
    const timeout = setTimeout(() => {
      setDisplayText(graphemes.slice(0, currentIndex + 1).join(''));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, graphemes, speed, text]);

  return (
    <span className={className}>
      {/* the full string is always in the markup, so static export + AT get the name */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {tightenCommas(displayText)}
        <span className="type-caret" />
      </span>
    </span>
  );
}
