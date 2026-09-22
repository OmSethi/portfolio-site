"use client";

import Image from "next/image";
import TypewriterText from "./components/TypewriterText";
import HeaderClock from "./components/HeaderClock";
import SectionHeader from "./components/SectionHeader";
import Entry from "./components/Entry";
import KeyboardNavProvider from "./components/KeyboardNav";
import { profile, socials, experiences, projects, skills } from "@/data/content";

export default function Home() {
  return (
    <KeyboardNavProvider>
      <div className="page">
        <main className="col">
          <HeaderClock />

          <div className="hero">
            <div className="hero-top">
              <div className="hero-lead">
                <h1 className="hero-name">
                  <TypewriterText text={profile.heading} speed={140} />
                </h1>
                <p>{profile.bio}</p>
              </div>
              <div className="hero-avatar">
                <Image
                  src="/profile-photo.png"
                  alt=""
                  width={460}
                  height={460}
                  priority
                  unoptimized
                />
              </div>
            </div>

            <p className="aside">{profile.aside}</p>

            <div className="socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <section className="section">
            <SectionHeader title="Work Experience" count={experiences.length} />
            {experiences.map((e) => (
              <Entry
                key={e.id}
                id={e.id}
                title={`${e.company} · ${e.role}`}
                meta={e.period}
                live={e.current}
                stack={e.stack}
              >
                <ul>
                  {e.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </Entry>
            ))}
          </section>

          <section className="section">
            <SectionHeader title="Projects" count={projects.length} />
            {projects.map((p) => (
              <Entry
                key={p.id}
                id={p.id}
                title={p.name}
                stack={p.stack}
              >
                <p>{p.blurb}</p>
                <ul>
                  {p.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </Entry>
            ))}
          </section>

          <section className="section">
            <SectionHeader title="Skills" />
            <dl>
              {skills.map((g) => (
                <div className="skill-row" key={g.id}>
                  <dt>{g.label}</dt>
                  <dd className="mono">{g.items.join(" / ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="section contact">
            <SectionHeader title="Get In Touch" />
            <p>{profile.contactCopy}</p>
            <a className="mono" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </section>

          <footer className="footer-hint mono">
            ↑↓ navigate &middot; enter expand &middot; esc close
          </footer>
        </main>
      </div>
    </KeyboardNavProvider>
  );
}
