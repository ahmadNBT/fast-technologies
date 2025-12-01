import SectionHeader from '../../../components/base/SectionHeader';
import GlassCard from '../../../components/base/GlassCard';
import FuturisticIcon from '../../../components/base/FuturisticIcon';
import WaveDivider from '../../../components/base/WaveDivider';

export default function ReactorSection() {
  const reactFeatures = [
    {
      title: "Component Architecture",
      description: "Modular, reusable components that scale infinitely",
      icon: <i className="ri-puzzle-line"></i>,
      atoms: ["JSX", "Props", "State", "Hooks"]
    },
    {
      title: "Real-time Interfaces",
      description: "Live data synchronization with instant user feedback",
      icon: <i className="ri-flashlight-line"></i>,
      atoms: ["WebSocket", "SSE", "GraphQL", "Redux"]
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast rendering with virtual DOM efficiency",
      icon: <i className="ri-speed-line"></i>,
      atoms: ["Lazy Loading", "Memoization", "Code Splitting", "Bundling"]
    },
    {
      title: "Progressive Enhancement",
      description: "Future-ready applications with modern web standards",
      icon: <i className="ri-rocket-line"></i>,
      atoms: ["PWA", "SSR", "Hydration", "Streaming"]
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      <WaveDivider variant="top" className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          chapter="CHAPTER 04 — THE WEB REACTOR ROOM"
          title="The Web Reactor Room"
          subtitle="React atoms spin like blue cores powering real-time interfaces. Watch as components fuse together, creating powerful web applications that respond to every user interaction."
        />

        {/* Central Reactor Core */}
        <div className="relative flex justify-center mb-16">
          <div className="relative w-48 h-48">
            {/* Main Reactor */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s' }}>
              <div className="w-full h-full bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-full backdrop-blur-lg border-2 border-[#5CC9F5]/40" />
            </div>
            
            {/* Inner Core */}
            <div className="absolute inset-8 bg-gradient-to-br from-white/60 to-[#5CC9F5]/30 rounded-full backdrop-blur-sm animate-pulse" />
            
            {/* React Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl text-[#5CC9F5] animate-spin" style={{ animationDuration: '8s' }}>
                <i className="ri-reactjs-line"></i>
              </div>
            </div>

            {/* Orbiting Electrons */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 animate-spin"
                style={{ 
                  animationDuration: `${6 + i * 2}s`,
                  animationDirection: i % 2 === 0 ? 'normal' : 'reverse'
                }}
              >
                <div 
                  className="absolute w-3 h-3 bg-[#3BBCE3] rounded-full shadow-lg"
                  style={{
                    top: '50%',
                    left: `${20 + i * 15}%`,
                    transform: 'translateY(-50%)',
                    boxShadow: '0 0 12px #3BBCE3'
                  }}
                />
              </div>
            ))}

            {/* Energy Rings */}
            <div className="absolute -inset-4 border border-[#5CC9F5]/20 rounded-full animate-ping" />
            <div className="absolute -inset-8 border border-[#3BBCE3]/10 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Asymmetric Feature Grid */}
        <div className="relative">
          {/* Neon Streams Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5CC9F5]/30 to-transparent animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#3BBCE3]/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#5CC9F5]/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reactFeatures.map((feature, index) => (
              <div
                key={index}
                className={`
                  ${index === 0 ? 'lg:col-span-2' : ''}
                  ${index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
              >
                <GlassCard 
                  icon={feature.icon}
                  className={`
                    h-full group
                    ${index % 2 === 0 ? 'transform lg:rotate-1' : 'transform lg:-rotate-1'}
                    hover:rotate-0 transition-all duration-700
                  `}
                >
                  <div className="space-y-6">
                    {/* Feature Header */}
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <FuturisticIcon size="md">
                          {feature.icon}
                        </FuturisticIcon>
                        {/* Spinning Ring */}
                        <div className="absolute -inset-2 border border-[#5CC9F5]/30 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '3s' }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1E293B] mb-2 font-orbitron">
                          {feature.title}
                        </h3>
                        <p className="text-[#64748B] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    {/* React Atoms */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#5CC9F5] rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-[#475569]">Core Atoms</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {feature.atoms.map((atom, atomIndex) => (
                          <div
                            key={atomIndex}
                            className="relative group/atom"
                          >
                            <div className="flex items-center space-x-2 p-3 bg-white/40 rounded-[16px] backdrop-blur-sm border border-[#5CC9F5]/20 hover:border-[#5CC9F5]/40 transition-all duration-300">
                              <div className="w-2 h-2 bg-[#3BBCE3] rounded-full animate-pulse" style={{ animationDelay: `${atomIndex * 0.2}s` }} />
                              <span className="text-xs text-[#475569] font-medium font-mono">
                                {atom}
                              </span>
                            </div>
                            {/* Atom Glow */}
                            <div className="absolute inset-0 bg-[#5CC9F5]/10 rounded-[16px] opacity-0 group-hover/atom:opacity-100 transition-opacity duration-300 blur-sm" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Energy Flow Indicator */}
                    <div className="relative h-12 overflow-hidden rounded-[16px] bg-gradient-to-r from-[#5CC9F5]/10 to-[#3BBCE3]/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5CC9F5]/30 to-transparent animate-pulse" />
                      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                        <div className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-[#5CC9F5] rounded-full animate-ping" />
                          <span className="text-xs text-[#64748B] font-medium">Energy Flow: Active</span>
                        </div>
                      </div>
                      {/* Moving Particles */}
                      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                        <div className="flex space-x-1">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-1 bg-[#3BBCE3] rounded-full animate-bounce"
                              style={{ animationDelay: `${i * 0.2}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Floating Code Snippets */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/6 left-1/6 text-sm text-[#5CC9F5]/30 font-mono animate-float transform rotate-12">
              {'useState()'}
            </div>
            <div className="absolute top-2/3 right-1/5 text-sm text-[#3BBCE3]/30 font-mono animate-float-delayed transform -rotate-12">
              {'useEffect()'}
            </div>
            <div className="absolute bottom-1/6 left-1/2 text-sm text-[#5CC9F5]/30 font-mono animate-float transform rotate-6">
              {'<Component />'}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { metric: "99.9%", label: "Uptime Guarantee", icon: "ri-shield-check-line" },
            { metric: "<100ms", label: "Response Time", icon: "ri-timer-line" },
            { metric: "10M+", label: "Components Rendered", icon: "ri-cpu-line" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-[20px] backdrop-blur-sm border border-[#5CC9F5]/30 mb-4">
                <i className={`${stat.icon} text-2xl text-[#5CC9F5]`}></i>
              </div>
              <div className="text-3xl font-bold text-[#1E293B] font-orbitron mb-2">
                {stat.metric}
              </div>
              <div className="text-sm text-[#64748B]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider variant="bottom" className="absolute bottom-0" />
    </section>
  );
}