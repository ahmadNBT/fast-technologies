
import { ReactNode } from 'react';

interface FuturisticIconProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
  className?: string;
}

export default function FuturisticIcon({ 
  children, 
  size = 'md', 
  animate = true, 
  className = '' 
}: FuturisticIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-16 h-16 text-2xl'
  };

  return (
    <div className={`
      relative flex items-center justify-center
      ${sizeClasses[size]}
      ${className}
    `}>
      {/* Holographic Background */}
      <div className={`
        absolute inset-0 rounded-full
        bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20
        backdrop-blur-sm border border-[#5CC9F5]/30
        ${animate ? 'animate-pulse' : ''}
      `} />
      
      {/* Glow Ring */}
      <div className={`
        absolute inset-0 rounded-full
        bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3]
        opacity-20 blur-sm
        ${animate ? 'animate-ping' : ''}
      `} />
      
      {/* Icon Content */}
      <div className={`
        relative z-10 text-[#3BBCE3]
        ${animate ? 'animate-float' : ''}
      `}>
        {children}
      </div>
      
      {/* Floating Particles */}
      {animate && (
        <>
          <div className="absolute -top-1 -right-1 w-1 h-1 bg-[#5CC9F5] rounded-full animate-float" />
          <div className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-[#3BBCE3] rounded-full animate-float-delayed" />
        </>
      )}
    </div>
  );
}
