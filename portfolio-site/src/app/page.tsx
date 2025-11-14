"use client";

import TypewriterText from "./components/TypewriterText";
import HeaderClock from "./components/HeaderClock";
import TechCard from "./components/TechCard";
import DropdownSection from "./components/DropdownSection";

export default function Home() {

  return (
    <main style={{ 
      padding: '2rem 1.5rem', 
      maxWidth: '56rem', 
      margin: "0 auto", 
      width: '100%',
      willChange: 'scroll-position',
      transform: 'translateZ(0)'
    }}>
      <HeaderClock />

      {/* Hero Section - Split Layout */}
      <div style={{ 
        display: 'flex', 
        gap: 'clamp(2rem, 5vw, 3rem)', 
        alignItems: 'flex-start',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        width: '100%'
      }}>
        {/* Left Side - Text Content */}
        <div style={{ flex: '1 1 min(100%, 35rem)' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            marginBottom: '1rem',
            lineHeight: 1.2,
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            <TypewriterText text="Hello, I'm Om Sethi 👋" speed={140} />
          </h1>

          <p style={{ 
            color: '#ededed', 
            fontSize: 'clamp(0.9rem, 2vw, 1.125rem)', 
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            Junior studying computer science at University at Buffalo with a focus in full stack and AI development
          </p>

          <p style={{ 
            color: '#b3b3b3', 
            fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-inter), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            I like to develop full-stack applications, build AI-powered tools, and solve complex problems with code.
          </p>

          <div style={{ 
            display: "flex", 
            gap: 20, 
            marginTop: '1rem'
          }}>
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/omsethi-dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                transition: "transform 0.2s ease",
                cursor: "pointer",
                color: '#ededed'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/OmSethi" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                transition: "transform 0.2s ease",
                cursor: "pointer",
                color: '#ededed'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/omsethii" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                transition: "transform 0.2s ease",
                cursor: "pointer",
                color: '#ededed'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div style={{ 
          flex: '0 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'clamp(150px, 20vw, 200px)',
          minWidth: '150px'
        }}>
          <div style={{
            width: '100%',
            aspectRatio: '1',
            maxWidth: '200px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            position: 'relative',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src="/profile-photo.png"
              alt="Om Sethi"
              style={{ 
                objectFit: 'cover',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                display: 'block'
              }}
            />
          </div>
        </div>
      </div>

      <section style={{ 
        marginBottom: '2rem',
        border: '1px solid #282828',
        borderRadius: '12px',
        padding: '1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        width: '100%'
      }}>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0, color: 'white' }}>Work Experience</h2>
        </div>
        
        <DropdownSection
          title="Software Engineer Intern - AI"
          summary="Xircls | June 2025 - Sept 2025"
        >
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Key Achievements
            </h3>
            <ul style={{ color: '#d1d5db', lineHeight: 1.6, paddingLeft: '20px' }}>
              <li style={{ marginBottom: 8, listStyleType: 'disc' }}>
                Built scalable backend systems with FastAPI and Docker for AI-powered applications
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc' }}>
                Optimized machine learning workflows using LangChain and Ollama for efficient model deployment
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc' }}>
                Developed secure, reliable multi-agent routing systems for complex AI task execution
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc' }}>
                Implemented prompt-based task execution frameworks for enhanced AI interaction capabilities
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Technologies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["Python", "FastAPI", "Docker", "LangChain", "Ollama", "AI/ML"].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: '#333',
                    color: '#d1d5db',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '14px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DropdownSection>
        
        <DropdownSection
          title="Co-Founder"
          summary="Rally | Sept 2025 - Present"
          showGreenDot={true}
        >
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Key Achievements
            </h3>
            <ul style={{ color: '#d1d5db', lineHeight: 1.6, paddingLeft: '20px' }}>
              <li style={{ marginBottom: 8, listStyleType: 'disc' }}>
                A volleyball app that combines stat tracking and social networking allowing players to record game performance, share highlights, and connect with teammates
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Technologies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["Go", "Swift", "postgreSQL", "AWS"].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: '#333',
                    color: '#d1d5db',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '14px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DropdownSection>
      </section>

      <section style={{
        marginBottom: '2rem',
        border: '1px solid #282828',
        borderRadius: '12px',
        padding: '1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)'
      }}>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0, color: 'white' }}>Projects</h2>
        </div>
        
        <DropdownSection
          title="AirCommand"
          summary="In Progress • Computer Vision"
          showGreenDot={true}
        >
          <p style={{ color: '#d1d5db', marginBottom: 24, lineHeight: 1.6 }}>
            A real-time hand gesture control system that enables volume control, play-pause, app switching with 95% gesture recognition accuracy and under 200ms response time.
          </p>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Features
            </h3>
            <ul style={{ color: '#d1d5db', lineHeight: 1.6, paddingLeft: '20px' }}>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Currently developing a real-time hand gesture control system using Python, MediaPipe, and OpenCV with 95% gesture recognition accuracy and under 200ms response time
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Building a modular gesture recognition architecture currently supporting 4+ gesture types (thumbs up/down, fist, palm) using object-oriented design patterns achieving 25-30 FPS real time processing
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Implementing a computer vision pipeline that processes live video streaming with 21-point hand landmark detection, featuring two-phase execution system (200ms activation delay + 600ms cooldown) to prevent false triggers
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Technologies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["Python", "OpenCV", "MediaPipe", "Computer Vision", "Real-time Processing"].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: '#333',
                    color: '#d1d5db',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '14px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DropdownSection>
        
        <DropdownSection
          title="Eden"
          summary="Completed • AI Security Monitoring"
        >
          <p style={{ color: '#d1d5db', marginBottom: 24, lineHeight: 1.6 }}>
            An AI-powered security monitoring system that processes 25+ live camera feeds in real-time, detecting incidents (fighting, theft, vandalism) with 92% accuracy and automatically alerting security personnel.
          </p>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Features
            </h3>
            <ul style={{ color: '#d1d5db', lineHeight: 1.6, paddingLeft: '20px' }}>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Engineered an AI-powered security monitoring system using YOLO across 25+ live camera feeds, detecting incidents (fighting, theft, vandalism) with accuracy improving from 75% → 92%
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Built a multi-agent verification system using person tracking and spatial analysis to validate threats
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Integrated real-time video analysis with automated alerting, enabling instant security dispatch via Twilio in under 2 seconds
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Implemented three specialized AI agents working in real-time: Detection Agent (scans feeds using YOLOv8), Classification Agent (identifies incident types), and Analysis Agent (generates timestamped reports)
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Developed interactive 3D campus map with real-time camera status visualization and automated footage archiving with thumbnails and metadata
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Technologies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["React", "TypeScript", "Next.js", "YOLO", "PyTorch", "OpenCV", "Twilio", "Real-time Processing"].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: '#333',
                    color: '#d1d5db',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '14px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DropdownSection>
        
        <DropdownSection
          title="Sonata - Discord Music Bot"
          summary="Completed • Music Streaming"
        >
          <p style={{ color: '#d1d5db', marginBottom: 24, lineHeight: 1.6 }}>
            A Discord music bot that streams high-quality audio, supports playlists and queue management and offers interactive commands for seamless group listening.
          </p>
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Features
            </h3>
            <ul style={{ color: '#d1d5db', lineHeight: 1.6, paddingLeft: '20px' }}>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Built high-quality audio streaming with support for YouTube
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Implemented playlist management with load functionality and queue persistence
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Created interactive commands for play, pause, and skip
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Developed user-friendly interface with real-time status updates
              </li>
              <li style={{ marginBottom: 8, listStyleType: 'disc', color: '#9ca3af' }}>
                Added support for multiple voice channels and server-specific configurations
          </li>
        </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: 12, color: 'white' }}>
              Technologies
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {["Python", "Discord.py", "FFmpeg", "YouTube-DL", "AsyncIO"].map((tech, index) => (
                <span
                  key={index}
                  style={{
                    background: '#333',
                    color: '#d1d5db',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '14px'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DropdownSection>
      </section>

      <section style={{
        marginBottom: '2rem',
        border: '1px solid #282828',
        borderRadius: '12px',
        padding: '1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)'
      }}>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0, color: 'white' }}>Skills</h2>
        </div>
        
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <TechCard
            title="Languages"
            skills={["Python", "Java", "C", "JavaScript", "Swift", "Go","TypeScript"]}
          />
          <TechCard
            title="Technologies"
            skills={["FastAPI", "Docker", "Ollama", "Expo", "YOLO", "OpenAI"]}
          />
          <TechCard
            title="Tools & Platforms"
            skills={["Visual Studio Code", "IntelliJ", "Git", "Emacs", "Xpra", "Windows", "MacOS", "Linux (Ubuntu)"]}
          />
        </div>
      </section>

      <section style={{
        border: '1px solid #282828',
        borderRadius: '12px',
        padding: '1.5rem',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        width: '100%'
      }}>
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 24, margin: 0, color: 'white' }}>Get In Touch</h2>
        </div>
        
        <div style={{ 
          border: '1px solid #282828',
          borderRadius: '8px',
          padding: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.02)'
        }}>
          <p style={{ 
            color: '#b3b3b3', 
            fontSize: 14, 
            lineHeight: 1.6,
            margin: 0
          }}>
            Whether you&apos;d like to talk about projects, opportunities, or just chat, don&apos;t hesitate to reach out. I enjoy meeting new people and exploring new ideas.
          </p>
          
          <br />
          <br />
          
          <p style={{ 
            color: '#b3b3b3', 
            fontSize: 14, 
            lineHeight: 1.6,
            margin: 0
          }}>
            omsethi205@gmail.com
          </p>
        </div>
      </section>
    </main>
  );
}
