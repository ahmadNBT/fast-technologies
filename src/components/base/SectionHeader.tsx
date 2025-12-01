
interface SectionHeaderProps {
  chapter: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeader({ chapter, title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {/* Chapter Label */}
      <div className="inline-flex items-center space-x-4 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#5CC9F5]" />
        <span className="text-sm font-medium text-[#64748B] tracking-[0.2em] uppercase font-orbitron">
          {chapter}
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#3BBCE3]" />
      </div>

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
        <span className="bg-gradient-to-r from-[#1E293B] via-[#475569] to-[#1E293B] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Glowing Divider */}
      <div className="flex justify-center mt-8">
        <div className="relative w-32 h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5CC9F5] via-white to-[#3BBCE3]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] animate-pulse opacity-60" />
          
          {/* Floating Particles */}
          <div className="absolute -top-1 left-4 w-2 h-2 bg-[#5CC9F5]/60 rounded-full animate-float" />
          <div className="absolute -top-0.5 right-6 w-1 h-1 bg-[#3BBCE3]/80 rounded-full animate-float-delayed" />
        </div>
      </div>
    </div>
  );
}
