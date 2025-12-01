
export default function ServicesGrid() {
  const services = [
    {
      icon: "ri-smartphone-line",
      title: "Flutter App Development",
      tagline: "One Codebase. Four Platforms.",
      description: "iOS, Android, Web & Desktop with clean UI and fast performance.",
      features: ["Cross-platform compatibility", "Native performance", "Beautiful UI/UX", "Rapid development"]
    },
    {
      icon: "ri-reactjs-line",
      title: "React JS Web Applications",
      tagline: "High-Speed Web Interfaces.",
      description: "Dashboards, portals, single-page apps, and enterprise UI systems.",
      features: ["Modern React 18+", "TypeScript support", "Responsive design", "Performance optimized"]
    },
    {
      icon: "ri-server-line",
      title: "Laravel Backend Systems",
      tagline: "Strong, Secure Foundations.",
      description: "APIs, CRMs, authentication, SaaS backends, cloud-ready architectures.",
      features: ["RESTful APIs", "Database design", "Security first", "Scalable architecture"]
    },
    {
      icon: "ri-palette-line",
      title: "UI/UX Design",
      tagline: "Interfaces People Love.",
      description: "Wireframes, prototypes, design systems, user flow mapping.",
      features: ["User research", "Prototyping", "Design systems", "Usability testing"]
    },
    {
      icon: "ri-bug-line",
      title: "QA & Testing Services",
      tagline: "No Bugs. No Surprises.",
      description: "Manual & automated testing for web & mobile.",
      features: ["Automated testing", "Manual QA", "Performance testing", "Security audits"]
    },
    {
      icon: "ri-robot-line",
      title: "AI Agents & Automation",
      tagline: "Intelligence for Operations.",
      description: "Chatbots, workflow automation, document intelligence, predictive AI.",
      features: ["Custom AI solutions", "Process automation", "Machine learning", "Data analytics"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-sora">
            What We Do Best.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-8 border border-[#5CC9F5]/20 hover:border-[#5CC9F5]/40 transition-all duration-300 hover:shadow-lg shadow-sm h-full">
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-2xl text-[#5CC9F5]`}></i>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-sora">
                  {service.title}
                </h3>

                {/* Service Tagline */}
                <div className="text-[#5CC9F5] font-semibold mb-4 font-inter">
                  {service.tagline}
                </div>

                {/* Service Description */}
                <p className="text-[#475569] mb-6 leading-relaxed font-inter">
                  {service.description}
                </p>

                {/* Service Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#5CC9F5] rounded-full" />
                      <span className="text-sm text-[#475569] font-inter">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Line */}
                <div className="w-0 h-1 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#5CC9F5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3BBCE3] transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
