interface TechCardProps {
  title: string;
  skills: string[];
}

export default function TechCard({
  title,
  skills,
}: TechCardProps) {
  return (
    <div style={{ 
      border: '1px solid #282828',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.02)',
      flex: 1,
      minWidth: '200px'
    }}>
      {/* title */}
      <h3 style={{ 
        color: 'white', 
        fontSize: 16, 
        fontWeight: 600, 
        marginBottom: 12 
      }}>
        {title}
      </h3>
      
      {/* skills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              fontSize: 11,
              padding: '3px 6px',
              borderRadius: '4px',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
