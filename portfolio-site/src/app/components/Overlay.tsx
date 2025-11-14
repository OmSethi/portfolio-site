"use client";

import { useEffect } from "react";

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Overlay({ isOpen, onClose, children }: OverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
        onClick={onClose}
        style={{
          animation: "fadeIn 0.3s ease-out",
        }}
      />
      
      {/* Overlay Content */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900 border-b border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto"
        style={{
          animation: "slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="max-w-4xl mx-auto p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-2xl"
            aria-label="Close"
          >
            ×
          </button>
          {children}
        </div>
      </div>

    </>
  );
}

