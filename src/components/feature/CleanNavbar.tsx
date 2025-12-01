import { useState } from 'react';

export default function CleanNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/e80a6f2ce577225cac9c671381c07b7d/ba4aa0bbf9b8ecf313007505099877ba.png" 
                alt="FAST TECHNOLOGIES Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-[#0F172A] font-sora">FAST TECHNOLOGIES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#process" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
              Process
            </a>
            <a href="#projects" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
              Projects
            </a>
            <a href="#contact" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
              Contact
            </a>
            <button className="bg-[#5CC9F5] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3BBCE3] transition-colors duration-200 whitespace-nowrap">
              Start Project
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E5E7EB]">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="#process" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
                Process
              </a>
              <a href="#projects" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
                Projects
              </a>
              <a href="#contact" className="text-[#475569] hover:text-[#5CC9F5] transition-colors duration-200 font-medium">
                Contact
              </a>
              <button className="bg-[#5CC9F5] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3BBCE3] transition-colors duration-200 w-fit whitespace-nowrap">
                Start Project
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
