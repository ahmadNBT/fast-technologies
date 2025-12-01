
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  icon?: ReactNode;
}

export default function GlassCard({ children, className = '', hover = true, icon }: GlassCardProps) {
  return (
    <div className={`
      relative group
      bg-white/45 backdrop-blur-[18px]
      rounded-[26px] border border-white/20
      shadow-[0_8px_32px_rgba(92,201,245,0.15)]
      ${hover ? 'hover:scale-[1.03] hover:shadow-[0_16px_48px_rgba(92,201,245,0.25)] transition-all duration-500 ease-out' : ''}
      overflow-hidden
      ${className}
    `}>
      {/* Hologram Icon */}
      {icon && (
        <div className="absolute top-4 left-4 w-8 h-8 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full opacity-20 animate-pulse" />
            <div className="relative z-10 text-[#3BBCE3] text-lg">
              {icon}
            </div>
          </div>
        </div>
      )}
      
      {/* Inner Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-[#5CC9F5]/10 rounded-[26px] opacity-60" />
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
      </div>
      
      {/* Particle Drift Effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-[#5CC9F5]/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float" />
      <div className="absolute bottom-4 left-6 w-1 h-1 bg-[#3BBCE3]/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float-delayed" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        {children}
      </div>
    </div>
  );
}
