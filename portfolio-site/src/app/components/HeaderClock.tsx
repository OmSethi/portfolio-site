"use client";

import { useEffect, useState } from "react";

function formatDate(d: Date) {
  const weekday = new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(d);
  const month = new Intl.DateTimeFormat(undefined, { month: "long" }).format(d);
  const day = d.getDate().toString().padStart(2, "0");
  const year = d.getFullYear();
  return `${weekday}, ${month} ${day}, ${year}`;
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

  if (!mounted || !now) {
    return (
      <header style={{ textAlign: "center", marginBottom: "2rem", width: "100%" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, letterSpacing: 1 }}>
          --:--:--
        </div>
        <div style={{ color: "#9ca3af", marginTop: 4 }}>
          Loading...
        </div>
      </header>
    );
  }

  const time = now.toLocaleTimeString([], { hour12: false });
  const date = formatDate(now);

  return (
    <header style={{ textAlign: "center", marginBottom: "2rem", width: "100%" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, letterSpacing: 1 }}>
        {time}
      </div>
      <div style={{ color: "#9ca3af", marginTop: 4 }}>
        {date}
      </div>
    </header>
  );
}
