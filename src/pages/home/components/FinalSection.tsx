import GlassButton from '../../../components/base/GlassButton';
import FuturisticIcon from '../../../components/base/FuturisticIcon';
import WaveDivider from '../../../components/base/WaveDivider';

export default function FinalSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-[#F9FAFB] overflow-hidden">
      <WaveDivider variant="top" className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Chapter Header */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#5CC9F5]" />
            <span className="text-sm font-medium text-[#64748B] tracking-[0.3em] uppercase font-orbitron">
              FINAL CHAPTER — BEGIN YOUR FUTURE
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#3BBCE3]" />
          </div>
        </div>

        {/* Giant Hologram Portal */}
        <div className="relative flex justify-center mb-16">
          <div className="relative w-96 h-96">
            {/* Portal Rings */}
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute border border-[#5CC9F5]/30 rounded-full animate-ping"
                style={{
                  inset: `${i * 20}px`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '4s'
                }}
              />
            ))}

            {/* Portal Core */}
            <div className="absolute inset-16 bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-full backdrop-blur-lg border border-[#5CC9F5]/40 animate-pulse" />
            
            {/* Inner Portal */}
            <div className="absolute inset-24 bg-gradient-to-br from-white/60 to-[#5CC9F5]/30 rounded-full backdrop-blur-sm" />

            {/* Portal Energy */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#5CC9F5] rounded-full transform -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#3BBCE3] rounded-full transform -translate-x-1/2" />
              <div className="absolute left-0 top-1/2 w-2 h-2 bg-[#5CC9F5] rounded-full transform -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-2 h-2 bg-[#3BBCE3] rounded-full transform -translate-y-1/2" />
            </div>

            {/* Portal Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl text-[#5CC9F5] animate-pulse">
                <i className="ri-rocket-2-line"></i>
              </div>
            </div>

            {/* Floating Particles Around Portal */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30) * (Math.PI / 180);
              const radius = 220;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={i}
                  className="absolute w-3 h-3 bg-[#5CC9F5]/60 rounded-full animate-float"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: '4s'
                  }}
                />
              );
            })}

            {/* Portal Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full opacity-10 blur-3xl animate-pulse" />
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-orbitron leading-tight">
            <span className="bg-gradient-to-r from-[#1E293B] via-[#475569] to-[#1E293B] bg-clip-text text-transparent">
              Ready to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] bg-clip-text text-transparent">
              Something Exceptional?
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#64748B] leading-relaxed mb-12">
            Your journey through <strong className="text-[#1E293B] font-orbitron">FAST TECHNOLOGIES</strong> ends here, but your digital transformation begins now. 
            Step through the portal and let us craft your vision into reality.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
          <GlassButton variant="primary" size="xl" className="group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <FuturisticIcon size="md" className="mr-3">
              <i className="ri-rocket-line"></i>
            </FuturisticIcon>
            <span className="relative z-10">Start Your Project</span>
            {/* Button Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-[28px] opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500" />
          </GlassButton>
          
          <GlassButton variant="secondary" size="xl" className="group">
            <FuturisticIcon size="md" className="mr-3">
              <i className="ri-calendar-line"></i>
            </FuturisticIcon>
            Schedule Consultation
          </GlassButton>
        </div>

        {/* Portal Entry Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              value: "500+", 
              label: "Projects Launched", 
              icon: "ri-rocket-2-line",
              description: "Successful digital transformations"
            },
            { 
              value: "99.9%", 
              label: "Client Satisfaction", 
              icon: "ri-heart-3-line",
              description: "Exceptional service delivery"
            },
            { 
              value: "24/7", 
              label: "Support Available", 
              icon: "ri-customer-service-2-line",
              description: "Always here when you need us"
            }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="relative p-8 bg-white/40 backdrop-blur-lg rounded-[28px] border border-[#5CC9F5]/20 hover:border-[#5CC9F5]/40 transition-all duration-500 hover:scale-105">
                {/* Stat Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-[20px] backdrop-blur-sm border border-[#5CC9F5]/30 mb-6 group-hover:scale-110 transition-transform duration-500">
                  <i className={`${stat.icon} text-2xl text-[#5CC9F5]`}></i>
                </div>
                
                {/* Stat Value */}
                <div className="text-4xl font-bold text-[#1E293B] font-orbitron mb-2">
                  {stat.value}
                </div>
                
                {/* Stat Label */}
                <div className="text-lg font-medium text-[#475569] mb-2">
                  {stat.label}
                </div>
                
                {/* Stat Description */}
                <div className="text-sm text-[#64748B]">
                  {stat.description}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#5CC9F5]/5 to-[#3BBCE3]/5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-white/40 backdrop-blur-lg rounded-[28px] border border-[#5CC9F5]/20">
            <h3 className="text-2xl font-bold text-[#1E293B] font-orbitron mb-6">
              Ready to Begin Your Digital Journey?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-[16px] flex items-center justify-center">
                  <i className="ri-mail-line text-xl text-[#5CC9F5]"></i>
                </div>
                <div>
                  <div className="font-medium text-[#1E293B]">Email Us</div>
                  <div className="text-sm text-[#64748B]">hello@fasttechnologies.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-[16px] flex items-center justify-center">
                  <i className="ri-phone-line text-xl text-[#5CC9F5]"></i>
                </div>
                <div>
                  <div className="font-medium text-[#1E293B]">Call Us</div>
                  <div className="text-sm text-[#64748B]">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Success Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#5CC9F5] rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Portal Energy Streams */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5CC9F5]/30 to-transparent animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-[#3BBCE3]/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-[#5CC9F5]/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-[#3BBCE3]/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      <WaveDivider variant="bottom" className="absolute bottom-0" />
    </section>
  );
}