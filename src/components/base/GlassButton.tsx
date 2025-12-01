
import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function GlassButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  href 
}: GlassButtonProps) {
  const baseClasses = `
    relative overflow-hidden whitespace-nowrap cursor-pointer
    transition-all duration-500 ease-out
    backdrop-blur-[18px] border-2
    font-medium tracking-wide
    hover:scale-105 hover:-translate-y-1
    active:scale-95
    group
  `;

  const sizeClasses = {
    sm: 'px-6 py-3 text-sm rounded-[20px]',
    md: 'px-8 py-4 text-base rounded-[24px]',
    lg: 'px-12 py-5 text-lg rounded-[28px]'
  };

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-white/20 to-white/10
      border-gradient-to-r from-[#5CC9F5] to-[#3BBCE3]
      text-[#1E293B] hover:text-[#0F172A]
      shadow-[0_8px_32px_rgba(92,201,245,0.3)]
      hover:shadow-[0_12px_40px_rgba(92,201,245,0.5)]
      before:absolute before:inset-0 before:bg-gradient-to-r 
      before:from-[#5CC9F5]/20 before:to-[#3BBCE3]/20 
      before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `,
    secondary: `
      bg-white/10 border-white/30
      text-[#1E293B] hover:text-[#0F172A]
      shadow-[0_4px_20px_rgba(255,255,255,0.1)]
      hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)]
      hover:bg-white/20 hover:backdrop-blur-[24px]
      before:absolute before:inset-0 before:bg-white/10 
      before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
    `
  };

  const glowEffect = variant === 'primary' ? (
    <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-pulse" />
  ) : null;

  const innerReflection = (
    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-[inherit] opacity-60" />
  );

  const content = (
    <>
      {glowEffect}
      {innerReflection}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </>
  );

  const allClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={allClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={allClasses}>
      {content}
    </button>
  );
}
