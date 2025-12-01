import GlassButton from '../../../components/base/GlassButton';
import FuturisticIcon from '../../../components/base/FuturisticIcon';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#3BBCE3]/10 to-[#5CC9F5]/5 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#5CC9F5]/40 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#3BBCE3]/60 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-[#5CC9F5]/30 rounded-full animate-float" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#3BBCE3]/80 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-[#5CC9F5]/50 rounded-full animate-float" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Chapter Label */}
            <div className="inline-flex items-center space-x-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#5CC9F5]" />
              <span className="text-xs font-medium text-[#64748B] tracking-[0.3em] uppercase font-orbitron">
                INNOVATION LAB
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-orbitron leading-tight">
              <span className="text-[#0F172A]">
                Building the
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] bg-clip-text text-transparent">
                Future of AI
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#475569] leading-relaxed max-w-xl">
              Transform your business with cutting-edge artificial intelligence solutions. We engineer intelligent systems that learn, adapt, and scale with your vision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GlassButton variant="primary" size="lg">
                <FuturisticIcon size="sm" className="mr-2">
                  <i className="ri-rocket-line"></i>
                </FuturisticIcon>
                Start Your Project
              </GlassButton>
              
              <GlassButton variant="secondary" size="lg">
                <FuturisticIcon size="sm" className="mr-2">
                  <i className="ri-play-circle-line"></i>
                </FuturisticIcon>
                Explore Solutions
              </GlassButton>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-[#5CC9F5] font-orbitron">500+</div>
                <div className="text-sm text-[#64748B]">AI Models Deployed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#5CC9F5] font-orbitron">98%</div>
                <div className="text-sm text-[#64748B]">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#5CC9F5] font-orbitron">24/7</div>
                <div className="text-sm text-[#64748B]">AI Support</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Main Illustration with Animation */}
              <div className="relative animate-float">
                <img 
                  src="https://static.readdy.ai/image/e80a6f2ce577225cac9c671381c07b7d/95856c8d48eab375aac50e55e4a76273.png"
                  alt="AI Neural Network Technology"
                  className="w-full h-auto object-contain relative z-10 transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute top-10 left-0 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float border border-[#5CC9F5]/20">
                <FuturisticIcon size="md">
                  <i className="ri-brain-line text-[#5CC9F5]"></i>
                </FuturisticIcon>
              </div>
              
              <div className="absolute top-32 right-8 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed border border-[#3BBCE3]/20">
                <FuturisticIcon size="sm">
                  <i className="ri-cpu-line text-[#3BBCE3]"></i>
                </FuturisticIcon>
              </div>
              
              <div className="absolute bottom-24 left-12 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float border border-[#5CC9F5]/20">
                <FuturisticIcon size="sm">
                  <i className="ri-database-2-line text-[#5CC9F5]"></i>
                </FuturisticIcon>
              </div>
              
              <div className="absolute bottom-40 right-0 w-14 h-14 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float-delayed border border-[#3BBCE3]/20">
                <FuturisticIcon size="sm">
                  <i className="ri-cloud-line text-[#3BBCE3]"></i>
                </FuturisticIcon>
              </div>

              {/* Glow Effects */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-float">
          <span className="text-sm text-[#64748B] font-medium">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-[#5CC9F5]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#5CC9F5] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
