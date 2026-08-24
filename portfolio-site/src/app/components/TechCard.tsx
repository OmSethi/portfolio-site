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
      border: '1px solid var(--border)',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: 'var(--panel)',
      flex: 1,
      minWidth: '200px'
    }}>
      {/* title */}
      <h3 style={{ 
        color: 'var(--heading)', 
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
              backgroundColor: 'var(--chip)',
              color: 'var(--heading)',
              fontSize: 11,
              padding: '3px 6px',
              borderRadius: '4px',
              border: '1px solid var(--border-strong)'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
