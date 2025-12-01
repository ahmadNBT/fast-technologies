
import SectionHeader from '../../../components/base/SectionHeader';
import GlassCard from '../../../components/base/GlassCard';
import FuturisticIcon from '../../../components/base/FuturisticIcon';
import WaveDivider from '../../../components/base/WaveDivider';

export default function BlueprintSection() {
  const designServices = [
    {
      icon: <i className="ri-palette-line"></i>,
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces that blend aesthetics with functionality, creating seamless user experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      icon: <i className="ri-smartphone-line"></i>,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions that deliver exceptional performance across all devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      icon: <i className="ri-global-line"></i>,
      title: "Web Platforms",
      description: "Scalable web applications built with cutting-edge technologies for optimal performance and security.",
      features: ["Frontend Development", "Backend Systems", "API Integration", "Cloud Deployment"]
    },
    {
      icon: <i className="ri-brain-line"></i>,
      title: "AI Integration",
      description: "Intelligent systems that learn, adapt, and evolve to meet your business needs with artificial intelligence.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: <i className="ri-shield-check-line"></i>,
      title: "Security Solutions",
      description: "Enterprise-grade security implementations that protect your digital assets and user data.",
      features: ["Encryption", "Authentication", "Compliance", "Monitoring"]
    },
    {
      icon: <i className="ri-rocket-line"></i>,
      title: "Performance Optimization",
      description: "Advanced optimization techniques that ensure your applications run at peak efficiency.",
      features: ["Speed Optimization", "Scalability", "Load Balancing", "Caching Strategies"]
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      <WaveDivider variant="top" className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          chapter="CHAPTER 02 — THE BLUEPRINT ROOM"
          title="The Blueprint Room"
          subtitle="You step into a chamber filled with sketches forming themselves in air. Each design element materializes as a holographic blueprint, showcasing our comprehensive software solutions."
        />

        {/* Asymmetric Futuristic Grid */}
        <div className="relative">
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-[#5CC9F5] rounded-lg" />
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <div
                key={index}
                className={`
                  ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                  ${index === 3 ? 'lg:col-span-2' : ''}
                  ${index === 4 ? 'md:col-span-1' : ''}
                `}
              >
                <GlassCard
                  icon={service.icon}
                  className={`
                    h-full
                    ${index % 2 === 0 ? 'transform lg:rotate-1' : 'transform lg:-rotate-1'}
                    hover:rotate-0 transition-transform duration-500
                  `}
                >
                  <div className="space-y-6">
                    {/* Service Header */}
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

                    {/* Animated UI Elements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#5CC9F5] rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-[#475569]">Key Features</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2 p-2 bg-white/30 rounded-lg backdrop-blur-sm"
                          >
                            <div className="w-1 h-1 bg-[#3BBCE3] rounded-full" />
                            <span className="text-xs text-[#475569] font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating Grid Icons */}
                    <div className="relative h-16 overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-8 gap-1 opacity-20">
                        {Array.from({ length: 32 }).map((_, i) => (
                          <div
                            key={i}
                            className={`
                              w-1 h-1 bg-[#5CC9F5] rounded-full
                              ${i % 3 === 0 ? 'animate-pulse' : ''}
                              ${i % 5 === 0 ? 'animate-float' : ''}
                            `}
                            style={{
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Pencil Hologram Animation */}
                    <div className="flex justify-end">
                      <div className="relative w-8 h-8">
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                          <FuturisticIcon size="sm" animate={false}>
                            <i className="ri-pencil-line"></i>
                          </FuturisticIcon>
                        </div>
                        <div className="absolute inset-0 bg-[#5CC9F5]/20 rounded-full animate-ping" />
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Diagonal Dividers */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5CC9F5]/30 to-transparent transform rotate-12" />
          <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#3BBCE3]/30 to-transparent transform -rotate-12" />
        </div>

        {/* Floating Particles Inside Grid */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-[#5CC9F5]/30 rounded-full animate-float" />
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-[#3BBCE3]/40 rounded-full animate-float-delayed" />
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-[#5CC9F5]/20 rounded-full animate-float" />
        </div>
      </div>

      <WaveDivider variant="bottom" className="absolute bottom-0" />
    </section>
  );
}
