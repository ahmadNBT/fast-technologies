import FuturisticIcon from '../base/FuturisticIcon';

export default function GlassFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "ri-twitter-line", href: "#", label: "Twitter" },
    { icon: "ri-linkedin-line", href: "#", label: "LinkedIn" },
    { icon: "ri-github-line", href: "#", label: "GitHub" },
    { icon: "ri-dribbble-line", href: "#", label: "Dribbble" }
  ];

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative mt-20 bg-white/5 backdrop-blur-md border-t border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5CC9F5]/5 to-[#3BBCE3]/5"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://static.readdy.ai/image/e80a6f2ce577225cac9c671381c07b7d/ba4aa0bbf9b8ecf313007505099877ba.png" 
                alt="FAST TECHNOLOGIES Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="text-2xl font-bold text-[#0F172A] font-sora">FAST TECHNOLOGIES</span>
            </div>

            {/* Description */}
            <p className="text-[#64748B] leading-relaxed mb-6">
              Transforming ideas into intelligent digital realities with cutting-edge software solutions and futuristic design.
            </p>

            {/* Contact Info */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group relative"
                >
                  <FuturisticIcon size="sm">
                    <i className={social.icon}></i>
                  </FuturisticIcon>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-[#1E293B] mb-4 font-orbitron">
                    <a href={link.href} className="hover:text-[#3BBCE3] transition-colors">
                      {link.label}
                    </a>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          {/* Dock Background */}
          <div className="bg-white/45 backdrop-blur-[18px] border-t border-white/20">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Copyright */}
                <div className="flex items-center space-x-6">
                  <p className="text-sm text-[#64748B]">
                    © {currentYear} FAST TECHNOLOGIES. All rights reserved.
                  </p>
                  <a 
                    href="https://readdy.ai/?origin=logo" 
                    className="text-sm text-[#5CC9F5] hover:text-[#3BBCE3] transition-colors font-medium"
                  >
                    Website Builder
                  </a>
                </div>

                {/* Neon Rings and Lights */}
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-[#5CC9F5] rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-[#3BBCE3] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-2 h-2 bg-[#5CC9F5] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  
                  {/* Holographic FAST TECHNOLOGIES Icon */}
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#5CC9F5]/30 animate-float">
                      <i className="ri-flashlight-line text-[#3BBCE3] text-sm"></i>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full opacity-20 blur-sm animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-2 left-1/4 w-1 h-1 bg-[#5CC9F5]/60 rounded-full animate-float" />
            <div className="absolute top-4 right-1/3 w-1.5 h-1.5 bg-[#3BBCE3]/40 rounded-full animate-float-delayed" />
            <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-[#5CC9F5]/50 rounded-full animate-float" />
          </div>
        </div>
      </div>
    </footer>
  );
}
