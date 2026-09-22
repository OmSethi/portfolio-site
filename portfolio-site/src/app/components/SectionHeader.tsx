interface SectionHeaderProps {
  title: string;
  count?: number;
}

export default function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      {count !== undefined && (
        <span className="section-count mono" aria-hidden="true">
          [ {String(count).padStart(2, '0')} ]
        </span>
      )}
    </div>
  );
}
