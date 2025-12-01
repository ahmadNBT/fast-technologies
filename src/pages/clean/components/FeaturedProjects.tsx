
export default function FeaturedProjects() {
  const projects = [
    {
      title: "FinanceFlow Pro",
      category: "Fintech App",
      description: "Complete financial management platform with real-time analytics, secure transactions, and AI-powered insights.",
      image: "https://readdy.ai/api/search-image?query=Modern%20fintech%20mobile%20app%20interface%20showing%20clean%20dashboard%20with%20financial%20charts%2C%20transaction%20history%2C%20and%20payment%20features%2C%20minimalist%20design%20with%20blue%20accents%2C%20professional%20banking%20app%20UI&width=400&height=300&seq=fintech-001&orientation=landscape",
      technologies: ["Flutter", "Laravel", "AI Analytics"],
      features: ["Real-time transactions", "AI insights", "Multi-currency support", "Advanced security"]
    },
    {
      title: "SupportBot Dashboard",
      category: "AI Support Agent Dashboard",
      description: "Intelligent customer support platform with automated responses, sentiment analysis, and performance tracking.",
      image: "https://readdy.ai/api/search-image?query=Clean%20AI%20chatbot%20dashboard%20interface%20with%20conversation%20analytics%2C%20automated%20response%20settings%2C%20customer%20satisfaction%20metrics%2C%20modern%20admin%20panel%20design%20with%20blue%20color%20scheme&width=400&height=300&seq=ai-dashboard-001&orientation=landscape",
      technologies: ["React", "AI/ML", "Real-time APIs"],
      features: ["24/7 automation", "Sentiment analysis", "Multi-language support", "Performance analytics"]
    },
    {
      title: "LogiTrack Platform",
      category: "Booking & Logistics Platform",
      description: "Comprehensive logistics management system with route optimization, real-time tracking, and automated scheduling.",
      image: "https://readdy.ai/api/search-image?query=Professional%20logistics%20management%20platform%20interface%20showing%20delivery%20tracking%2C%20route%20optimization%20maps%2C%20scheduling%20calendar%2C%20clean%20business%20application%20design%20with%20blue%20navigation&width=400&height=300&seq=logistics-001&orientation=landscape",
      technologies: ["React", "Laravel", "GPS Integration"],
      features: ["Route optimization", "Real-time tracking", "Automated scheduling", "Fleet management"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-sora">
            Work That Speaks.
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto font-inter">
            Discover how we've helped businesses transform their ideas into successful digital products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl border border-[#E5E7EB] hover:border-[#5CC9F5]/40 transition-all duration-300 hover:shadow-xl shadow-sm overflow-hidden h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Blue title bar overlay */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3]" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#5CC9F5] px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-sora">
                    {project.title}
                  </h3>

                  <p className="text-[#475569] mb-4 leading-relaxed font-inter">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-[#5CC9F5]/10 text-[#5CC9F5] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-[#5CC9F5] rounded-full" />
                        <span className="text-sm text-[#475569] font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="w-full bg-[#5CC9F5]/10 text-[#5CC9F5] py-3 rounded-lg font-medium hover:bg-[#5CC9F5] hover:text-white transition-all duration-200 whitespace-nowrap">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-[#475569] mb-6 font-inter">
            Ready to see your project featured here?
          </p>
          <button className="bg-[#5CC9F5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3BBCE3] transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
