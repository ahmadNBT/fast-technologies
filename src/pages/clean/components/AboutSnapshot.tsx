
export default function AboutSnapshot() {
  const stats = [
    {
      number: "50+",
      label: "Apps Delivered",
      description: "Successful projects launched"
    },
    {
      number: "100%",
      label: "Cross-Platform Expertise",
      description: "Flutter, React, Laravel mastery"
    },
    {
      number: "Global",
      label: "Trusted by Startups",
      description: "Worldwide client satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6 font-sora">
            Fast, Focused, Future-Ready.
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-[#475569] leading-relaxed font-inter">
              FAST TECHNOLOGIES is a high-performance software development studio building modern Flutter apps, 
              React dashboards, scalable Laravel backends, and AI Agents for growing businesses.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 hover:border-[#5CC9F5]/30">
                {/* Stat Number */}
                <div className="text-4xl md:text-5xl font-bold text-[#5CC9F5] mb-3 font-sora">
                  {stat.number}
                </div>
                
                {/* Stat Label */}
                <div className="text-xl font-semibold text-[#0F172A] mb-2 font-sora">
                  {stat.label}
                </div>
                
                {/* Stat Description */}
                <div className="text-[#475569] font-inter">
                  {stat.description}
                </div>

                {/* Decorative line */}
                <div className="w-12 h-1 bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-4">
            <div className="w-2 h-2 bg-[#5CC9F5] rounded-full" />
            <div className="w-16 h-px bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3]" />
            <div className="w-3 h-3 bg-[#3BBCE3] rounded-full" />
            <div className="w-16 h-px bg-gradient-to-r from-[#3BBCE3] to-[#5CC9F5]" />
            <div className="w-2 h-2 bg-[#5CC9F5] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
