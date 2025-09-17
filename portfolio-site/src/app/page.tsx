import TypewriterText from "./components/TypewriterText";
import FavoriteSong from "./components/FavoriteSong";
import HeaderClock from "./components/HeaderClock";
import ProjectCard from "./components/ProjectCard";
import ExperienceCard from "./components/ExperienceCard";
import TechCard from "./components/TechCard";

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
          <h2 style={{ fontSize: 24, margin: 0, color: 'white' }}>Skills</h2>
        </div>
        <p style={{ color: '#b3b3b3', fontSize: 14, marginBottom: 24, fontFamily: 'monospace' }}>
          $ cd skills
        </p>
        
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <TechCard
            title="Languages"
            skills={["Python", "Java", "C", "JavaScript", "Swift", "Go", "SQL", "TypeScript"]}
          />
          <TechCard
            title="Technologies"
            skills={["FastAPI", "Docker", "Ollama", "Expo", "YOLO", "Google Workspace", "Microsoft Office"]}
          />
          <TechCard
            title="Tools & Platforms"
            skills={["Visual Studio Code", "IntelliJ", "Git", "Emacs", "Xpra", "Windows", "MacOS", "Linux (Ubuntu)"]}
          />
        </div>
      </section>
      
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
        <p style={{ color: '#b3b3b3', fontSize: 14, marginBottom: 24, fontFamily: 'monospace' }}>
          $ cd experience
        </p>
        
        <ExperienceCard
          title="Backend Intern - AI & SaaS"
          company="Xircls"
          technologies={["Python", "FastAPI", "Docker", "LangChain", "Ollama", "AI/ML"]}
          dateRange="June 2025 - Sept 2025"
          achievements={[
            "Built scalable backend systems with FastAPI and Docker for AI-powered applications",
            "Optimized machine learning workflows using LangChain and Ollama for efficient model deployment",
            "Developed secure, reliable multi-agent routing systems for complex AI task execution",
            "Implemented prompt-based task execution frameworks for enhanced AI interaction capabilities"
          ]}
        />
        
        <ExperienceCard
          title="Co-Founder"
          company="Rally"
          technologies={["Go", "Swift", "postgreSQL", "AWS"]}
          dateRange="Sept 2025 - Present"
          achievements={[
            "A volleyball app that combines stat tracking and social networking allowing players to record game performance, share highlights, and connect with teammates"
          ]}
        />
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
        <p style={{ color: '#b3b3b3', fontSize: 14, marginBottom: 24, fontFamily: 'monospace' }}>
          $ cd projects
        </p>
        
        <div>
          <ProjectCard
            title="SeeForMe"
            status="Completed"
            category="Accessibility"
            description="An accessibility-focused mobile app that uses AI-powered computer vision and audio guidance to help visually impaired users to nagivate indoor environments independently."
            features={[
              "Developing AI-powered computer vision pipeline to detect and describe objects in real time",
              "Implemented audio guidance system for indoor navigation with natural, accessible voice feedback",
              "Built mobile interface for quick interaction and seamless user experience"
            ]}
            technologies={["Typescript", "React Native", "YOLO", "TensorFlow Lite", "Machine Learning"]}
          />
          
          <ProjectCard
            title="Sonata - Discord Music Bot"
            status="Completed"
            category="Music Streaming"
            description="A Discord music bot that streams high-quality audio, supports playlists and queue management and offers interactive commands for seamless group listening."
            features={[
              "Built high-quality audio streaming with support for YouTube",
              "Implemented playlist management with load functionality and queue persistence",
              "Created interactive commands for play, pause, and skip",
              "Developed user-friendly interface with real-time status updates",
              "Added support for multiple voice channels and server-specific configurations"
            ]}
            technologies={["Python", "Discord.py", "FFmpeg", "YouTube-DL", "AsyncIO"]}
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
        <p style={{ color: '#b3b3b3', fontSize: 14, marginBottom: 24, fontFamily: 'monospace' }}>
          $ cd contact_me
        </p>
        
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