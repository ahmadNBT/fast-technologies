import SectionHeader from '../../../components/base/SectionHeader';
import GlassCard from '../../../components/base/GlassCard';
import FuturisticIcon from '../../../components/base/FuturisticIcon';
import WaveDivider from '../../../components/base/WaveDivider';

export default function WatchtowerSection() {
  const qaServices = [
    {
      title: "Automated Testing",
      description: "AI-powered test suites that adapt and evolve with your codebase",
      icon: <i className="ri-robot-line"></i>,
      coverage: "98%",
      tests: "15K+"
    },
    {
      title: "Security Scanning",
      description: "Real-time vulnerability detection and threat assessment",
      icon: <i className="ri-shield-check-line"></i>,
      coverage: "100%",
      tests: "24/7"
    },
    {
      title: "Performance Monitoring",
      description: "Continuous performance analysis and optimization recommendations",
      icon: <i className="ri-dashboard-line"></i>,
      coverage: "99.9%",
      tests: "Real-time"
    },
    {
      title: "Code Quality Analysis",
      description: "Deep code inspection with intelligent quality metrics",
      icon: <i className="ri-code-s-slash-line"></i>,
      coverage: "95%",
      tests: "Live"
    }
  ];

  const bugTypes = [
    { name: "Logic Error", icon: "ri-bug-line", color: "#EF4444" },
    { name: "Memory Leak", icon: "ri-memory-line", color: "#F59E0B" },
    { name: "Security Flaw", icon: "ri-shield-cross-line", color: "#DC2626" },
    { name: "Performance Issue", icon: "ri-speed-line", color: "#F97316" },
    { name: "UI Glitch", icon: "ri-eye-off-line", color: "#8B5CF6" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      <WaveDivider variant="top" className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          chapter="CHAPTER 06 — THE WATCHTOWER"
          title="The Watchtower"
          subtitle="A holographic radar scans for vulnerabilities. Advanced QA systems detect, analyze, and eliminate threats before they reach production environments."
        />

        <div className="relative">
          {/* Central Radar System */}
          <div className="flex justify-center mb-16">
            <div className="relative w-80 h-80">
              {/* Radar Base */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/10 rounded-full backdrop-blur-sm border border-[#5CC9F5]/30" />
              
              {/* Radar Rings */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-[#5CC9F5]/20 rounded-full animate-ping"
                  style={{
                    inset: `${i * 20}px`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}

              {/* Radar Sweep */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
                <div className="absolute top-1/2 left-1/2 w-px h-1/2 bg-gradient-to-t from-[#5CC9F5] to-transparent origin-bottom transform -translate-x-1/2" />
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-[#5CC9F5]/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 blur-sm" />
              </div>

              {/* Center Control */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-white/60 to-[#5CC9F5]/30 rounded-full backdrop-blur-sm border border-[#5CC9F5]/40 flex items-center justify-center">
                  <FuturisticIcon size="md">
                    <i className="ri-radar-line"></i>
                  </FuturisticIcon>
                </div>
              </div>

              {/* Detected Threats (Dissolving Bugs) */}
              {bugTypes.map((bug, index) => {
                const angle = (index * 72) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute w-8 h-8 flex items-center justify-center animate-pulse"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${index * 0.3}s`
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-full flex items-center justify-center text-white text-sm animate-ping"
                      style={{ backgroundColor: bug.color }}
                    >
                      <i className={bug.icon}></i>
                    </div>
                    {/* Dissolving Effect */}
                    <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50" style={{ animationDelay: `${index * 0.3 + 1}s` }} />
                  </div>
                );
              })}

              {/* Scan Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CC9F5]/40 to-transparent animate-pulse" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#3BBCE3]/40 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* QA Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {qaServices.map((service, index) => (
              <GlassCard 
                key={index}
                icon={service.icon}
                className="group hover:scale-[1.02] transition-all duration-500"
              >
                <div className="space-y-6">
                  {/* Service Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <FuturisticIcon size="md">
                        {service.icon}
                      </FuturisticIcon>
                      <div>
                        <h3 className="text-xl font-bold text-[#1E293B] mb-2 font-orbitron">
                          {service.title}
                        </h3>
                        <p className="text-[#64748B] leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/30 rounded-[16px] backdrop-blur-sm">
                      <div className="text-2xl font-bold text-[#5CC9F5] font-orbitron mb-1">
                        {service.coverage}
                      </div>
                      <div className="text-xs text-[#64748B]">Coverage</div>
                    </div>
                    <div className="text-center p-4 bg-white/30 rounded-[16px] backdrop-blur-sm">
                      <div className="text-2xl font-bold text-[#3BBCE3] font-orbitron mb-1">
                        {service.tests}
                      </div>
                      <div className="text-xs text-[#64748B]">Tests Run</div>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#10B981]/10 to-[#5CC9F5]/10 rounded-[16px] backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-[#10B981]">SCANNING</span>
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-4 bg-[#5CC9F5] rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Scanning Animation */}
                  <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5CC9F5] to-transparent w-1/3 animate-pulse" style={{ animationDuration: '2s' }} />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Threat Detection Log */}
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <FuturisticIcon size="md">
                    <i className="ri-file-list-3-line"></i>
                  </FuturisticIcon>
                  <h3 className="text-2xl font-bold text-[#1E293B] font-orbitron">
                    Real-time Threat Detection Log
                  </h3>
                </div>

                <div className="space-y-3">
                  {bugTypes.map((bug, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white/30 rounded-[16px] backdrop-blur-sm border border-white/20 group hover:border-[#5CC9F5]/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                          style={{ backgroundColor: bug.color }}
                        >
                          <i className={bug.icon}></i>
                        </div>
                        <div>
                          <div className="font-medium text-[#1E293B]">{bug.name}</div>
                          <div className="text-sm text-[#64748B]">Detected and neutralized</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm text-[#10B981] font-medium">RESOLVED</div>
                        <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* System Status */}
                <div className="mt-6 p-4 bg-gradient-to-r from-[#10B981]/10 to-[#5CC9F5]/10 rounded-[16px] backdrop-blur-sm border border-[#10B981]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="font-medium text-[#10B981]">All Systems Secure</span>
                    </div>
                    <div className="text-sm text-[#64748B]">
                      Last scan: {new Date().toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Floating Scan Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#5CC9F5] rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <WaveDivider variant="bottom" className="absolute bottom-0" />
    </section>
  );
}