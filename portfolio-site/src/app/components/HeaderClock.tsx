"use client";

import { useEffect, useState } from "react";

function formatDate(d: Date) {
  const month = new Intl.DateTimeFormat(undefined, { month: "short" }).format(d);
  const day = d.getDate().toString().padStart(2, "0");
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}

export default function HeaderClock() {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // placeholder is the same character width, so hydration causes no layout shift
  const time = mounted && now ? now.toLocaleTimeString([], { hour12: false }) : "--:--:--";
  const date = mounted && now ? formatDate(now) : "";

  return (
    <header className="topbar mono">
      {date && <span className="topbar-date">{date}</span>}
      <span className="topbar-time">{time}</span>
    </header>
  );
}
