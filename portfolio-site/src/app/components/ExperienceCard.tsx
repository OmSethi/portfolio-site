interface ExperienceCardProps {
  title: string;
  company: string;
  technologies: string[];
  dateRange: string;
  achievements: string[];
  isActive?: boolean;
}

export default function ExperienceCard({
  title,
  company,
  technologies,
  dateRange,
  achievements,
  isActive = false,
}: ExperienceCardProps) {
  return (
    <div style={{ 
      marginBottom: 32,
      border: '1px solid #282828',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.02)'
    }}>
      {/* Job Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <h3 style={{ 
          color: 'white', 
          fontSize: 20, 
          fontWeight: 600, 
          margin: 0
        }}>
          {title}
        </h3>
        {isActive && (
          <span
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
      
      {/* Company Name */}
      <p style={{ 
        color: '#b3b3b3', 
        fontSize: 16, 
        marginBottom: 8 
      }}>
        {company}
      </p>
      
      {/* Date Range */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center',
        marginBottom: 12
      }}>
        <span style={{ color: '#b3b3b3', fontSize: 14 }}>
          {dateRange}
        </span>
      </div>
      
      {/* Achievements */}
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: '0 0 16px 0',
        lineHeight: 1.6
      }}>
        {achievements.map((achievement, index) => (
          <li key={index} style={{ 
            color: '#b3b3b3', 
            fontSize: 14,
            marginBottom: 6,
            paddingLeft: 16,
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              top: '6px',
              width: '4px',
              height: '4px',
              backgroundColor: '#b3b3b3',
              borderRadius: '50%'
            }} />
            {achievement}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div>
        <h4 style={{ color: 'white', fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Technologies Used</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {technologies.map((tech, index) => (
            <span
              key={index}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: 12,
                padding: '4px 8px',
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
