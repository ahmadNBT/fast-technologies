
interface WaveDividerProps {
  className?: string;
  variant?: 'top' | 'bottom';
}

export default function WaveDivider({ className = '', variant = 'bottom' }: WaveDividerProps) {
  return (
    <div className={`relative w-full h-24 overflow-hidden ${className}`}>
      {/* Wave Shape */}
      <svg
        className={`absolute w-full h-full ${variant === 'top' ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="rgba(255,255,255,0.8)"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          fill="rgba(255,255,255,0.4)"
        />
      </svg>
      
      {/* Gradient Line */}
      <div className={`
        absolute w-full h-px bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3]
        ${variant === 'top' ? 'bottom-0' : 'top-0'}
      `} />
      
      {/* Moving Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#5CC9F5]/40 rounded-full animate-move-right" />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-[#3BBCE3]/60 rounded-full animate-move-right-delayed" />
        <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-[#5CC9F5]/30 rounded-full animate-move-right-slow" />
      </div>
    </div>
  );
}
