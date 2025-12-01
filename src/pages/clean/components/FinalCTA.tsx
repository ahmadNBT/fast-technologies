
export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background gradient shape */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#5CC9F5]/5 to-[#3BBCE3]/5" />
      
      {/* Floating geometric elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/10 rounded-full animate-float" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-[#3BBCE3]/10 to-[#5CC9F5]/10 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-[#5CC9F5]/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-20 right-1/4 w-12 h-12 bg-[#3BBCE3]/15 rounded-lg animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6 leading-tight font-sora">
          Your Next Big Product 
          <span className="bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] bg-clip-text text-transparent"> Starts Here.</span>
        </h2>

        {/* Subheading */}
        <p className="text-xl text-[#475569] mb-12 leading-relaxed max-w-2xl mx-auto font-inter">
          Ready to transform your idea into a powerful digital solution? Let's build something exceptional together.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="bg-[#5CC9F5] text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-[#3BBCE3] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap group">
            <span className="flex items-center space-x-3">
              <span>Start Your Project</span>
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform duration-300"></i>
            </span>
          </button>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#5CC9F5]/20 hover:border-[#5CC9F5]/40 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-2xl text-[#5CC9F5]"></i>
            </div>
            <h3 className="font-semibold text-[#0F172A] mb-2 font-sora">Email Us</h3>
            <p className="text-[#475569] font-inter">hello@fasttechnologies.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#5CC9F5]/20 hover:border-[#5CC9F5]/40 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-phone-line text-2xl text-[#5CC9F5]"></i>
            </div>
            <h3 className="font-semibold text-[#0F172A] mb-2 font-sora">Call Us</h3>
            <p className="text-[#475569] font-inter">+1 (555) 123-4567</p>
          </div>

          {/* Location Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#5CC9F5]/20 hover:border-[#5CC9F5]/40 transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-2xl text-[#5CC9F5]"></i>
            </div>
            <h3 className="font-semibold text-[#0F172A] mb-2 font-sora">Visit Us</h3>
            <p className="text-[#475569] font-inter">San Francisco, CA</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5CC9F5] mb-1 font-sora">2-8</div>
            <div className="text-sm text-[#475569] font-inter">Weeks Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5CC9F5] mb-1 font-sora">50+</div>
            <div className="text-sm text-[#475569] font-inter">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5CC9F5] mb-1 font-sora">100%</div>
            <div className="text-sm text-[#475569] font-inter">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#5CC9F5] mb-1 font-sora">24/7</div>
            <div className="text-sm text-[#475569] font-inter">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}
