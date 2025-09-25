interface ProjectCardProps {
  title: string;
  status: "Completed" | "In Progress" | "Planned";
  category: string;
  description: string;
  features: string[];
  technologies: string[];
}

export default function ProjectCard({
  title,
  status,
  category,
  description,
  features,
  technologies,
}: ProjectCardProps) {

  return (
    <div style={{ marginBottom: 32, backgroundColor: 'transparent', border: '1px solid #282828', borderRadius: '8px', padding: '24px', width: '100%' }}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {(status === "Completed" || status === "In Progress") && (
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

      {/* Category */}
      <p className="text-gray-400 text-sm mb-4">{category}</p>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>

      {/* Key Features */}
      <div className="mb-4">
        <h4 className="text-white font-semibold text-sm mb-2">Key Features & Impact</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-300 text-sm flex items-start">
              <span className="text-blue-400 mr-2 mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

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
