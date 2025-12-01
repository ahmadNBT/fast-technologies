
export default function ProcessTimeline() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "Understand idea, users, goals",
      icon: "ri-search-line",
      details: "We dive deep into your vision, analyze your target audience, and define clear project objectives."
    },
    {
      number: "02",
      title: "Design",
      description: "UI/UX, flows, interactions",
      icon: "ri-palette-line",
      details: "Create wireframes, prototypes, and design systems that deliver exceptional user experiences."
    },
    {
      number: "03",
      title: "Develop",
      description: "Flutter, React, Laravel",
      icon: "ri-code-s-slash-line",
      details: "Build robust, scalable applications using cutting-edge technologies and best practices."
    },
    {
      number: "04",
      title: "Test",
      description: "QA cycles, performance checks",
      icon: "ri-bug-line",
      details: "Rigorous testing ensures your product is bug-free, secure, and performs flawlessly."
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploy & deliver",
      icon: "ri-rocket-line",
      details: "Seamless deployment with ongoing support to ensure your success in the market."
    }
  ];

  return (
    <section id="process" className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-sora">
            How We Deliver.
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto font-inter">
            Our proven 5-step process ensures your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full transform -translate-y-1/2" />
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Circle */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-white border-4 border-[#5CC9F5] rounded-full flex items-center justify-center shadow-lg relative z-10">
                      <i className={`${step.icon} text-xl text-[#5CC9F5]`}></i>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#5CC9F5] mb-2 font-sora">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3 font-sora">
                      {step.title}
                    </h3>
                    <p className="text-[#475569] mb-4 font-inter">
                      {step.description}
                    </p>
                    <p className="text-sm text-[#475569] leading-relaxed font-inter">
                      {step.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                {/* Step Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-white border-4 border-[#5CC9F5] rounded-full flex items-center justify-center shadow-lg">
                    <i className={`${step.icon} text-lg text-[#5CC9F5]`}></i>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <div className="text-sm font-bold text-[#5CC9F5] mb-1 font-sora">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2 font-sora">
                    {step.title}
                  </h3>
                  <p className="text-[#475569] mb-3 font-inter">
                    {step.description}
                  </p>
                  <p className="text-sm text-[#475569] leading-relaxed font-inter">
                    {step.details}
                  </p>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 mt-12 w-px h-8 bg-gradient-to-b from-[#5CC9F5] to-[#3BBCE3]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#5CC9F5] mb-2 font-sora">2-8 weeks</div>
            <div className="text-[#475569] font-inter">Average delivery time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#5CC9F5] mb-2 font-sora">100%</div>
            <div className="text-[#475569] font-inter">On-time delivery rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#5CC9F5] mb-2 font-sora">24/7</div>
            <div className="text-[#475569] font-inter">Support availability</div>
          </div>
        </div>
      </div>
    </section>
  );
}
