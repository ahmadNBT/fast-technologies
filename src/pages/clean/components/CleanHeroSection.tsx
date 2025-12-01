
export default function CleanHeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
                We Build Fast, Beautiful &{' '}
                <span className="text-[#5CC9F5]">Scalable</span>{' '}
                Digital Products.
              </h1>
              <p className="text-xl text-[#475569] leading-relaxed max-w-lg">
                Apps. Dashboards. AI Automation. Engineered with precision.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#5CC9F5] hover:bg-[#3BBCE3] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
                Start a Project
              </button>
              <button className="border-2 border-[#5CC9F5] text-[#5CC9F5] hover:bg-[#5CC9F5] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap">
                See Our Services
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img 
                src="https://static.readdy.ai/image/e80a6f2ce577225cac9c671381c07b7d/95856c8d48eab375aac50e55e4a76273.png"
                alt="AI and Machine Learning Technology Illustration"
                className="w-full h-auto object-contain"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-3 h-3 bg-[#5CC9F5] rounded-full animate-pulse"></div>
              <div className="absolute top-32 right-8 w-2 h-2 bg-[#3BBCE3] rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-20 left-16 w-4 h-4 bg-[#5CC9F5] rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-32 right-12 w-2 h-2 bg-[#3BBCE3] rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#5CC9F5]/10 to-[#3BBCE3]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-[#3BBCE3]/10 to-[#5CC9F5]/5 rounded-full blur-3xl"></div>
    </section>
  );
}
