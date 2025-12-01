import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function GlassNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      transition-all duration-500 ease-out
      ${isScrolled 
        ? 'bg-white/20 backdrop-blur-[24px] shadow-[0_8px_32px_rgba(92,201,245,0.15)]' 
        : 'bg-transparent backdrop-blur-[12px]'
      }
      border-b border-white/10
    `}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://static.readdy.ai/image/e80a6f2ce577225cac9c671381c07b7d/ba4aa0bbf9b8ecf313007505099877ba.png" 
              alt="FAST TECHNOLOGIES Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold text-[#0F172A] font-sora">FAST TECHNOLOGIES</span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group py-2 px-4"
              >
                <span className={`
                  text-sm font-medium transition-colors duration-300
                  ${location.pathname === item.path 
                    ? 'text-[#3BBCE3]' 
                    : 'text-[#475569] hover:text-[#1E293B]'
                  }
                `}>
                  {item.name}
                </span>
                
                {/* Scanning Line Animation */}
                <div className={`
                  absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3]
                  transition-all duration-300
                  ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}
                `}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
                </div>
                
                {/* Floating Glow Indicator */}
                {location.pathname === item.path && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#5CC9F5] rounded-full animate-pulse" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-[#475569] hover:text-[#1E293B] transition-colors">
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
