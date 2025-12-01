
export default function CleanFooter() {
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
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://static.readdy.ai/image/e80a6f2ce577225cac9c671381c07b7d/ba4aa0bbf9b8ecf313007505099877ba.png" 
                alt="FAST TECHNOLOGIES Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-[#0F172A] font-sora">FAST TECHNOLOGIES</span>
            </div>

            {/* Description */}
            <p className="text-[#475569] mb-6 max-w-md leading-relaxed font-inter">
              Building fast, beautiful, and scalable digital products for growing businesses. 
              Your trusted partner in digital transformation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#5CC9F5]"></i>
                <span className="text-[#475569] font-inter">hello@fasttechnologies.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-[#5CC9F5]"></i>
                <span className="text-[#475569] font-inter">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#0F172A] mb-4 font-sora">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-inter"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-[#0F172A] mb-4 font-sora">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#5CC9F5]/10 rounded-lg flex items-center justify-center text-[#5CC9F5] hover:bg-[#5CC9F5] hover:text-white transition-all duration-200"
                >
                  <i className={`${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#E5E7EB] mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-[#475569] text-sm mb-4 md:mb-0 font-inter">
              © {currentYear} FAST TECHNOLOGIES. All rights reserved.
            </div>
            
            {/* Readdy Link */}
            <div className="flex items-center space-x-4">
              <div className="text-[#475569] text-sm font-inter">
                <a 
                  href="https://readdy.ai/?origin=logo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#5CC9F5] transition-colors duration-200"
                >
                  Powered by Readdy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
