
export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "FAST TECHNOLOGIES delivered our Flutter app ahead of schedule with exceptional quality. Their attention to detail and technical expertise exceeded our expectations. The app performs flawlessly across all platforms.",
      author: "Sarah Chen",
      position: "CEO",
      company: "TechStart Solutions",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20headshot%2C%20confident%20smile%2C%20modern%20office%20background%2C%20corporate%20portrait%20photography%2C%20clean%20professional%20lighting&width=80&height=80&seq=avatar-001&orientation=squarish",
      logo: "https://readdy.ai/api/search-image?query=Modern%20tech%20startup%20company%20logo%2C%20clean%20minimalist%20design%2C%20blue%20and%20white%20colors%2C%20professional%20business%20branding%2C%20simple%20geometric%20shapes&width=120&height=40&seq=logo-001&orientation=landscape",
      rating: 5
    },
    {
      quote: "The React dashboard they built for us transformed our business operations. The user interface is intuitive, fast, and our team productivity increased by 40%. Outstanding work and ongoing support.",
      author: "Michael Rodriguez",
      position: "CTO",
      company: "DataFlow Analytics",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20business%20man%20CTO%20headshot%2C%20confident%20expression%2C%20modern%20tech%20office%20background%2C%20corporate%20portrait%20photography%2C%20clean%20professional%20lighting&width=80&height=80&seq=avatar-002&orientation=squarish",
      logo: "https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%2C%20modern%20design%20with%20data%20visualization%20elements%2C%20blue%20gradient%20colors%2C%20professional%20business%20branding&width=120&height=40&seq=logo-002&orientation=landscape",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-sora">
            Clients Love Working With Us.
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto font-inter">
            Don't just take our word for it. Here's what our clients say about their experience working with FAST TECHNOLOGIES.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-8 border border-[#5CC9F5]/20 hover:border-[#5CC9F5]/40 transition-all duration-300 hover:shadow-lg shadow-sm h-full">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-double-quotes-l text-2xl text-[#5CC9F5]"></i>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <i key={starIndex} className="ri-star-fill text-[#5CC9F5] text-lg"></i>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[#475569] text-lg leading-relaxed mb-8 font-inter">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Avatar */}
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#5CC9F5]/20"
                    />
                    
                    {/* Author Details */}
                    <div>
                      <div className="font-semibold text-[#0F172A] font-sora">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[#475569] font-inter">
                        {testimonial.position} at {testimonial.company}
                      </div>
                    </div>
                  </div>

                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className="h-8 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="w-0 h-1 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <p className="text-[#475569] font-inter">Trusted by innovative companies worldwide</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {/* Placeholder company logos */}
            <div className="flex justify-center">
              <div className="w-24 h-8 bg-gradient-to-r from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-semibold text-[#5CC9F5]">STARTUP A</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-8 bg-gradient-to-r from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-semibold text-[#5CC9F5]">TECH B</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-8 bg-gradient-to-r from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-semibold text-[#5CC9F5]">SCALE C</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-8 bg-gradient-to-r from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-semibold text-[#5CC9F5]">GROW D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
