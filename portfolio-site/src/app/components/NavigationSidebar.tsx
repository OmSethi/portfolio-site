"use client";

interface NavigationSidebarProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function NavigationSidebar({ onNavigate, activeSection }: NavigationSidebarProps) {
  const menuItems = [
    { id: "home", label: "HOME", icon: "🏠" },
    { id: "about", label: "ABOUT", icon: "👤" },
    { id: "experience", label: "EXPERIENCE", icon: "💼" },
    { id: "education", label: "EDUCATION", icon: "🎓" },
    { id: "contact", label: "CONTACT", icon: "✉️" },
  ];

  return (
    <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-6 hover:bg-slate-700/40 transition-colors duration-200 h-full flex flex-col">
      {/* Home Button */}
      <button
        onClick={() => onNavigate("home")}
        className={`w-full text-left mb-6 p-3 rounded flex items-center gap-3 transition-colors ${
          activeSection === "home"
            ? "bg-slate-700/50 text-white"
            : "text-slate-300 hover:bg-slate-700/30"
        }`}
      >
        <span className="text-xl">🏠</span>
        <span className="font-semibold">HOME</span>
      </button>

      {/* Menu Items */}
      <div className="flex-1 space-y-2">
        {menuItems.slice(1).map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left p-3 rounded flex items-center gap-3 transition-colors ${
              activeSection === item.id
                ? "bg-slate-700/50 text-white"
                : "text-slate-300 hover:bg-slate-700/30"
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Download CV Button */}
      <button className="w-full mt-6 p-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded flex items-center justify-center gap-2 transition-colors">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>Download CV</span>
      </button>
    </div>
  );
}

