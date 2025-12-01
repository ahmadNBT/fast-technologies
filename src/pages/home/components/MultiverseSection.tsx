import SectionHeader from '../../../components/base/SectionHeader';
import GlassCard from '../../../components/base/GlassCard';
import FuturisticIcon from '../../../components/base/FuturisticIcon';
import WaveDivider from '../../../components/base/WaveDivider';

export default function MultiverseSection() {
  const platforms = [
    {
      name: "iOS",
      icon: <i className="ri-apple-line"></i>,
      description: "Native Swift development with seamless App Store integration",
      position: "top-left",
      color: "#5CC9F5"
    },
    {
      name: "Android",
      icon: <i className="ri-android-line"></i>,
      description: "Kotlin-powered applications for Google Play ecosystem",
      position: "top-right", 
      color: "#3BBCE3"
    },
    {
      name: "Desktop",
      icon: <i className="ri-computer-line"></i>,
      description: "Cross-platform desktop solutions for Windows, Mac, Linux",
      position: "bottom-left",
      color: "#5CC9F5"
    },
    {
      name: "Web",
      icon: <i className="ri-global-line"></i>,
      description: "Progressive web applications with offline capabilities",
      position: "bottom-right",
      color: "#3BBCE3"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
      <WaveDivider variant="top" className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          chapter="CHAPTER 03 — THE MULTIVERSE ENGINE"
          title="The Multiverse Engine"
          subtitle="Screens for iOS, Android, Desktop, and Web orbit around a glowing code core. Watch as Flutter's unified codebase powers applications across infinite digital dimensions."
        />

        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Core */}
          <div className="relative z-20">
            <div className="w-32 h-32 relative">
              {/* Rotating Core */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                <div className="w-full h-full bg-gradient-to-br from-[#5CC9F5]/30 to-[#3BBCE3]/30 rounded-[28px] backdrop-blur-lg border border-[#5CC9F5]/40" />
              </div>
              
              {/* Inner Glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-white/40 to-[#5CC9F5]/20 rounded-[20px] backdrop-blur-sm" />
              
              {/* Core Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <FuturisticIcon size="lg">
                  <i className="ri-flutter-line"></i>
                </FuturisticIcon>
              </div>
              
              {/* Pulsing Rings */}
              <div className="absolute inset-0 animate-ping">
                <div className="w-full h-full border-2 border-[#5CC9F5]/30 rounded-[28px]" />
              </div>
              <div className="absolute -inset-4 animate-ping" style={{ animationDelay: '1s' }}>
                <div className="w-full h-full border border-[#3BBCE3]/20 rounded-[32px]" />
              </div>
            </div>
          </div>

          {/* Orbiting Platforms */}
          {platforms.map((platform, index) => {
            const angle = (index * 90) - 45; // Start from top-left
            const radius = 280;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <div
                key={platform.name}
                className="absolute z-10"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  animation: `orbit 20s linear infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <GlassCard className="w-64 h-48 transform hover:scale-105 transition-all duration-500">
                  <div className="h-full flex flex-col justify-between p-6">
                    {/* Platform Header */}
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-[16px] bg-gradient-to-br from-white/40 to-${platform.color}/20 flex items-center justify-center border border-${platform.color}/30`}>
                        <div className="text-2xl" style={{ color: platform.color }}>
                          {platform.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#1E293B] font-orbitron">
                        {platform.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {platform.description}
                    </p>

                    {/* Connection Indicator */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full animate-pulse`}
                            style={{ 
                              backgroundColor: platform.color,
                              animationDelay: `${i * 0.3}s`
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-medium" style={{ color: platform.color }}>
                        CONNECTED
                      </span>
                    </div>
                  </div>
                </GlassCard>

                {/* Glowing Wire to Center */}
                <div 
                  className="absolute top-1/2 left-1/2 origin-left h-px bg-gradient-to-r opacity-60 animate-pulse"
                  style={{
                    width: `${radius}px`,
                    background: `linear-gradient(to right, ${platform.color}40, transparent)`,
                    transform: `rotate(${angle + 180}deg) translateY(-50%)`
                  }}
                />
              </div>
            );
          })}

          {/* Data Streams */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#5CC9F5] rounded-full animate-float"
                style={{
                  top: `${20 + (i * 10)}%`,
                  left: `${15 + (i * 8)}%`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>

          {/* Code Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 text-xs text-[#5CC9F5]/40 font-mono animate-float">
              {'<Flutter/>'}
            </div>
            <div className="absolute top-3/4 right-1/4 text-xs text-[#3BBCE3]/40 font-mono animate-float-delayed">
              {'Widget()'}
            </div>
            <div className="absolute bottom-1/4 left-1/3 text-xs text-[#5CC9F5]/40 font-mono animate-float">
              {'setState()'}
            </div>
          </div>
        </div>

        {/* Platform Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#1E293B] font-orbitron mb-2">
                {platform.name === 'iOS' ? '2B+' : platform.name === 'Android' ? '3B+' : platform.name === 'Desktop' ? '1.5B+' : '4.6B+'}
              </div>
              <div className="text-sm text-[#64748B]">Active Devices</div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider variant="bottom" className="absolute bottom-0" />

      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(280px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(280px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
}