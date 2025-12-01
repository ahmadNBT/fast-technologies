import SectionHeader from '../../../components/base/SectionHeader';
import GlassCard from '../../../components/base/GlassCard';
import FuturisticIcon from '../../../components/base/FuturisticIcon';
import WaveDivider from '../../../components/base/WaveDivider';

export default function FoundrySection() {
  const serverLayers = [
    {
      title: "API Gateway",
      description: "Intelligent routing and rate limiting for optimal performance",
      icon: <i className="ri-route-line"></i>,
      height: "h-24",
      systems: ["REST", "GraphQL", "WebSocket", "gRPC"]
    },
    {
      title: "Authentication Layer",
      description: "Multi-factor security with JWT and OAuth integration",
      icon: <i className="ri-shield-keyhole-line"></i>,
      height: "h-32",
      systems: ["JWT", "OAuth2", "SAML", "2FA"]
    },
    {
      title: "Business Logic Core",
      description: "Laravel-powered application logic with elegant architecture",
      icon: <i className="ri-cpu-line"></i>,
      height: "h-40",
      systems: ["Eloquent", "Artisan", "Queues", "Events"]
    },
    {
      title: "Database Engine",
      description: "High-performance data persistence with intelligent caching",
      icon: <i className="ri-database-2-line"></i>,
      height: "h-32",
      systems: ["MySQL", "Redis", "Elasticsearch", "MongoDB"]
    },
    {
      title: "Infrastructure Layer",
      description: "Scalable cloud deployment with auto-scaling capabilities",
      icon: <i className="ri-cloud-line"></i>,
      height: "h-24",
      systems: ["Docker", "Kubernetes", "AWS", "CDN"]
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
      <WaveDivider variant="top" className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          chapter="CHAPTER 05 — THE BACKEND FOUNDRY"
          title="The Backend Foundry"
          subtitle="A forge of APIs, logic blocks, and secure systems forming transparent layers. Watch as Laravel's elegant architecture powers enterprise-grade backend solutions."
        />

        <div className="relative">
          {/* Foundry Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Vertical Energy Streams */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#5CC9F5]/20 to-transparent animate-pulse"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
            
            {/* Horizontal Connections */}
            <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3BBCE3]/30 to-transparent animate-pulse" />
            <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5CC9F5]/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Server Layer Stack */}
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="space-y-6">
              {serverLayers.map((layer, index) => (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <GlassCard className={`${layer.height} transform hover:scale-[1.02] transition-all duration-500`}>
                    <div className="h-full flex items-center justify-between p-6">
                      {/* Layer Info */}
                      <div className="flex items-center space-x-6 flex-1">
                        <div className="relative">
                          <FuturisticIcon size="lg">
                            {layer.icon}
                          </FuturisticIcon>
                          {/* Glowing Ring */}
                          <div className="absolute -inset-3 border border-[#5CC9F5]/30 rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '4s' }} />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-[#1E293B] mb-2 font-orbitron">
                            {layer.title}
                          </h3>
                          <p className="text-[#64748B] leading-relaxed mb-4">
                            {layer.description}
                          </p>
                          
                          {/* System Tags */}
                          <div className="flex flex-wrap gap-2">
                            {layer.systems.map((system, systemIndex) => (
                              <div
                                key={systemIndex}
                                className="px-3 py-1 bg-white/40 rounded-full backdrop-blur-sm border border-[#5CC9F5]/20 text-xs font-medium text-[#475569]"
                              >
                                {system}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Status Indicators */}
                      <div className="flex flex-col items-end space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                          <span className="text-xs font-medium text-[#10B981]">ACTIVE</span>
                        </div>
                        
                        {/* Performance Bars */}
                        <div className="space-y-1">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="w-16 h-1 bg-white/30 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full animate-pulse"
                                style={{ 
                                  width: `${70 + (index * 5) + (i * 10)}%`,
                                  animationDelay: `${i * 0.2}s`
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Layer Connection Lines */}
                    {index < serverLayers.length - 1 && (
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="w-px h-6 bg-gradient-to-b from-[#5CC9F5]/60 to-[#3BBCE3]/60 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#5CC9F5] rounded-full animate-ping" />
                      </div>
                    )}
                  </GlassCard>

                  {/* Data Flow Particles */}
                  <div className="absolute right-0 top-1/2 transform translate-x-8 -translate-y-1/2 pointer-events-none">
                    <div className="flex flex-col space-y-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-[#3BBCE3] rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Foundry Forge Effects */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Sparks */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#5CC9F5] rounded-full animate-ping"
                style={{
                  top: `${10 + (i * 7)}%`,
                  left: `${5 + (i * 8)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
            
            {/* Code Fragments */}
            <div className="absolute top-1/6 right-1/6 text-xs text-[#5CC9F5]/30 font-mono animate-float transform rotate-12">
              {'Route::api()'}
            </div>
            <div className="absolute bottom-1/6 left-1/6 text-xs text-[#3BBCE3]/30 font-mono animate-float-delayed transform -rotate-12">
              {'Eloquent::query()'}
            </div>
            <div className="absolute top-2/3 right-1/3 text-xs text-[#5CC9F5]/30 font-mono animate-float transform rotate-6">
              {'Cache::remember()'}
            </div>
          </div>

          {/* Laravel Logo Forge */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF2D20]/20 to-[#5CC9F5]/20 rounded-[20px] backdrop-blur-sm border border-[#FF2D20]/30 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="ri-laravel-line text-2xl text-[#FF2D20]"></i>
              </div>
              <div className="absolute -inset-2 border border-[#FF2D20]/20 rounded-[24px] animate-ping" />
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { value: "99.99%", label: "API Uptime", icon: "ri-pulse-line" },
            { value: "<50ms", label: "Response Time", icon: "ri-timer-flash-line" },
            { value: "10K+", label: "Requests/sec", icon: "ri-speed-up-line" },
            { value: "256-bit", label: "Encryption", icon: "ri-lock-2-line" }
          ].map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-[18px] backdrop-blur-sm border border-[#5CC9F5]/30 mb-3">
                <i className={`${metric.icon} text-xl text-[#5CC9F5]`}></i>
              </div>
              <div className="text-2xl font-bold text-[#1E293B] font-orbitron mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-[#64748B]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider variant="bottom" className="absolute bottom-0" />
    </section>
  );
}