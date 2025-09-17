import Image from "next/image";

interface FavoriteSongProps {
  title: string;
  artist: string;
  coverSrc: string;
}

export default function FavoriteSong({ title, artist, coverSrc }: FavoriteSongProps) {
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 12,
      borderRadius: 12,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(6px)',
      width: '50%'
    }}>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          width: 8,
          height: 8,
          borderRadius: '9999px',
          background: '#22c55e',
          boxShadow: '0 0 0 2px rgba(34,197,94,0.28)',
          animation: 'pulse-glow 1.8s ease-in-out infinite'
        }}
      />
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
      }}>
        <Image
          src={coverSrc}
          alt={`${title} cover`}
          width={56}
          height={56}
          style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'spin-slow 9s linear infinite' }}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ fontWeight: 600 }}>{title}</span>
        <span style={{ color: '#999' }}>{artist}</span>
      </div>
    </div>
  );
}
