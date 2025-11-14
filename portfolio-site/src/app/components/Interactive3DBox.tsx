"use client";

import { useEffect, useRef, useState } from "react";

export default function Interactive3DBox() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ x: number; y: number; z: number; vx: number; vy: number; vz: number }>>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Initialize particles
    const particleCount = 30;
    const initialParticles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 150,
      z: (Math.random() - 0.5) * 150,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      vz: (Math.random() - 0.5) * 0.3,
    }));
    setParticles(initialParticles);

    const animate = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let { x, y, z, vx, vy, vz } = particle;
          x += vx;
          y += vy;
          z += vz;

          // Bounce off boundaries
          if (Math.abs(x) > 75) vx = -vx;
          if (Math.abs(y) > 75) vy = -vy;
          if (Math.abs(z) > 75) vz = -vz;

          return { x, y, z, vx, vy, vz };
        })
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - rotation.y, y: e.clientY - rotation.x });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setRotation({
        x: e.clientY - dragStart.y,
        y: e.clientX - dragStart.x,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{
        perspective: "1000px",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <div
        className="relative w-64 h-64"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transition: isDragging ? "none" : "transform 0.1s ease-out",
        }}
      >
        {/* 3D Box faces */}
        {[
          { rotate: "rotateY(0deg)", translate: "translateZ(128px)" },
          { rotate: "rotateY(180deg)", translate: "translateZ(-128px)" },
          { rotate: "rotateY(90deg)", translate: "translateZ(128px)" },
          { rotate: "rotateY(-90deg)", translate: "translateZ(128px)" },
          { rotate: "rotateX(90deg)", translate: "translateZ(128px)" },
          { rotate: "rotateX(-90deg)", translate: "translateZ(128px)" },
        ].map((face, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 border-2 border-slate-500/50 bg-slate-800/30"
            style={{
              transform: `${face.rotate} ${face.translate}`,
              backfaceVisibility: "hidden",
            }}
          />
        ))}

        {/* Particles */}
        {particles.map((particle, i) => {
          const scale = (particle.z + 150) / 300; // Scale based on z-depth
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                transform: `translate3d(${particle.x}px, ${particle.y}px, ${particle.z}px) scale(${scale})`,
                opacity: 0.7 * scale,
                left: "50%",
                top: "50%",
                marginLeft: "-4px",
                marginTop: "-4px",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

