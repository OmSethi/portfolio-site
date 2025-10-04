import TypewriterText from "./components/TypewriterText";
import FavoriteSong from "./components/FavoriteSong";
import HeaderClock from "./components/HeaderClock";
import TechCard from "./components/TechCard";
import DropdownSection from "./components/DropdownSection";

export default function Home() {
  return (
    <main style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <HeaderClock />

      <h1 style={{ fontSize: 48, marginBottom: 12 }}>
        <TypewriterText text="Hello, I'm Om Sethi 👋" speed={140} />
      </h1>

      <blockquote style={{
        borderLeft: '3px solid rgba(255,255,255,0.15)',
        paddingLeft: 16,
        margin: '16px 0 24px 0',
        color: '#b3b3b3'
      }}>
        I&apos;m a junior studying CS at the University at Buffalo with a interest in AI and full-stack development. Experienced in building machine learning workflows, multi-agent applications, and mobile apps that combine data and usability. Passionate about building tools that have impact.
      </blockquote>

      <p style={{ color: '#b3b3b3', marginBottom: 28 }}>
        Outside of tech, I’m 6’5 — just as good at debugging code as I am at grabbing things off the top shelf. When im not coding, you can usually find me playing volleyball or watching F1 every weekend. I also love music — check out my current favorite song below!
      </p>

      <div style={{ marginBottom: 36 }}>
        <FavoriteSong
          title="Disillusioned"
          artist="Daniel Caesar"
          coverSrc="/globe.svg"
        />
      </div>

      <section style={{ 
        marginBottom: 36,
        border: '1px solid #282828',
        borderRadius: '12px',
        padding: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)'
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
        marginBottom: 36,
        border: '1px solid #282828',
        borderRadius: '12px',
        padding: '24px',
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
          title="Sonata - Discord Music Bot"
          summary="Completed • Music Streaming"
          showGreenDot={true}
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
        marginBottom: 36,
        border: '1px solid #282828',
        borderRadius: '12px',
        padding: '24px',
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
        padding: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)'
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