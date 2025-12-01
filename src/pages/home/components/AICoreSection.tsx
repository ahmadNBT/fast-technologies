import SectionHeader from '../../../components/base/SectionHeader';
import GlassCard from '../../../components/base/GlassCard';
import FuturisticIcon from '../../../components/base/FuturisticIcon';
import WaveDivider from '../../../components/base/WaveDivider';

export default function AICoreSection() {
  const aiCapabilities = [
    {
      title: "Natural Language Processing",
      description: "Advanced text analysis and generation with contextual understanding",
      icon: <i className="ri-chat-3-line"></i>,
      accuracy: "99.2%",
      models: ["GPT-4", "BERT", "T5", "Claude"]
    },
    {
      title: "Computer Vision",
      description: "Real-time image and video analysis with object recognition",
      icon: <i className="ri-eye-line"></i>,
      accuracy: "97.8%",
      models: ["YOLO", "ResNet", "Vision Transformer", "CLIP"]
    },
    {
      title: "Predictive Analytics",
      description: "Machine learning models that forecast trends and behaviors",
      icon: <i className="ri-line-chart-line"></i>,
      accuracy: "94.5%",
      models: ["XGBoost", "Random Forest", "Neural Networks", "LSTM"]
    },
    {
      title: "Intelligent Automation",
      description: "AI-powered workflows that adapt and optimize themselves",
      icon: <i className="ri-robot-2-line"></i>,
      accuracy: "96.7%",
      models: ["Reinforcement Learning", "Decision Trees", "Genetic Algorithms", "Swarm Intelligence"]
    }
  ];

  const dataCircuits = [
    { path: "M10,50 Q50,10 90,50 Q50,90 10,50", delay: "0s" },
    { path: "M20,30 Q60,20 80,60 Q40,80 20,30", delay: "0.5s" },
    { path: "M30,70 Q70,30 90,70 Q50,90 30,70", delay: "1s" },
    { path: "M15,60 Q55,15 85,60 Q45,85 15,60", delay: "1.5s" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
      <WaveDivider variant="top" className="absolute top-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          chapter="CHAPTER 07 — THE AI CORE"
          title="The AI Core"
          subtitle="A bright cubic AI core activates. Intelligent pathways open as neural networks process infinite data streams, creating adaptive solutions that learn and evolve."
        />

        <div className="relative">
          {/* Central AI Core */}
          <div className="flex justify-center mb-16">
            <div className="relative w-64 h-64">
              {/* Main Core Cube */}
              <div className="absolute inset-0 perspective-1000">
                <div className="relative w-full h-full transform-style-preserve-3d animate-spin" style={{ animationDuration: '20s' }}>
                  {/* Cube Faces */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5CC9F5]/30 to-[#3BBCE3]/30 backdrop-blur-lg border border-[#5CC9F5]/40 rounded-[32px] transform rotateY-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3BBCE3]/30 to-[#5CC9F5]/30 backdrop-blur-lg border border-[#3BBCE3]/40 rounded-[32px] transform rotateY-90" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5CC9F5]/30 to-[#3BBCE3]/30 backdrop-blur-lg border border-[#5CC9F5]/40 rounded-[32px] transform rotateY-180" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3BBCE3]/30 to-[#5CC9F5]/30 backdrop-blur-lg border border-[#3BBCE3]/40 rounded-[32px] transform rotateY-270" />
                </div>
              </div>

              {/* Inner Energy Core */}
              <div className="absolute inset-8 bg-gradient-to-br from-white/60 to-[#5CC9F5]/40 rounded-[24px] backdrop-blur-sm animate-pulse" />
              
              {/* AI Brain Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl text-[#5CC9F5] animate-pulse">
                  <i className="ri-brain-line"></i>
                </div>
              </div>

              {/* Energy Rings */}
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute border border-[#5CC9F5]/30 rounded-full animate-ping"
                  style={{
                    inset: `${-20 - i * 15}px`,
                    animationDelay: `${i * 0.7}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}

              {/* Data Streams */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  {dataCircuits.map((circuit, index) => (
                    <g key={index}>
                      <path
                        d={circuit.path}
                        fill="none"
                        stroke="#5CC9F5"
                        strokeWidth="0.5"
                        opacity="0.6"
                        className="animate-pulse"
                        style={{ animationDelay: circuit.delay }}
                      />
                      <circle r="1" fill="#3BBCE3" opacity="0.8">
                        <animateMotion
                          dur="4s"
                          repeatCount="indefinite"
                          begin={circuit.delay}
                        >
                          <mpath href={`#circuit-${index}`} />
                        </animateMotion>
                      </circle>
                      <path id={`circuit-${index}`} d={circuit.path} fill="none" opacity="0" />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Floating Neural Nodes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 45) * (Math.PI / 180);
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-[#5CC9F5]/60 rounded-full animate-pulse"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* AI Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {aiCapabilities.map((capability, index) => (
              <GlassCard 
                key={index}
                icon={capability.icon}
                className="group hover:scale-[1.02] transition-all duration-500"
              >
                <div className="space-y-6">
                  {/* Capability Header */}
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <FuturisticIcon size="md">
                        {capability.icon}
                      </FuturisticIcon>
                      {/* Neural Network Animation */}
                      <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-full h-full border border-[#5CC9F5]/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E293B] mb-2 font-orbitron">
                        {capability.title}
                      </h3>
                      <p className="text-[#64748B] leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </div>

                  {/* Accuracy Meter */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#475569]">Accuracy Rate</span>
                      <span className="text-lg font-bold text-[#5CC9F5] font-orbitron">{capability.accuracy}</span>
                    </div>
                    <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#5CC9F5] to-[#3BBCE3] rounded-full animate-pulse"
                        style={{ width: capability.accuracy }}
                      />
                    </div>
                  </div>

                  {/* AI Models */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#5CC9F5] rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-[#475569]">Supported Models</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {capability.models.map((model, modelIndex) => (
                        <div
                          key={modelIndex}
                          className="flex items-center space-x-2 p-2 bg-white/40 rounded-[12px] backdrop-blur-sm border border-[#5CC9F5]/20"
                        >
                          <div className="w-1 h-1 bg-[#3BBCE3] rounded-full animate-pulse" style={{ animationDelay: `${modelIndex * 0.2}s` }} />
                          <span className="text-xs text-[#475569] font-medium font-mono">
                            {model}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Processing Status */}
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#10B981]/10 to-[#5CC9F5]/10 rounded-[16px] backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-[#10B981]">PROCESSING</span>
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-3 bg-[#5CC9F5] rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Neural Network Visualization */}
          <div className="max-w-5xl mx-auto">
            <GlassCard className="p-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#1E293B] font-orbitron mb-2">
                    Neural Network Activity
                  </h3>
                  <p className="text-[#64748B]">Real-time visualization of AI processing pathways</p>
                </div>

                {/* Network Layers */}
                <div className="relative h-64 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#5CC9F5]/5 to-[#3BBCE3]/5 backdrop-blur-sm">
                  {/* Input Layer */}
                  <div className="absolute left-8 top-1/2 transform -translate-y-1/2 space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-[#5CC9F5] rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>

                  {/* Hidden Layers */}
                  <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 space-y-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-[#3BBCE3] rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>

                  <div className="absolute left-2/3 top-1/2 transform -translate-y-1/2 space-y-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-[#5CC9F5] rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.15 + 0.5}s` }}
                      />
                    ))}
                  </div>

                  {/* Output Layer */}
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-6">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 bg-[#10B981] rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.3 + 1}s` }}
                      />
                    ))}
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#5CC9F5" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3BBCE3" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    {Array.from({ length: 20 }).map((_, i) => (
                      <line
                        key={i}
                        x1={`${10 + (i % 4) * 5}%`}
                        y1={`${20 + (i % 4) * 20}%`}
                        x2={`${80 + (i % 3) * 5}%`}
                        y2={`${25 + (i % 3) * 25}%`}
                        stroke="url(#connectionGradient)"
                        strokeWidth="1"
                        className="animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </svg>

                  {/* Data Flow Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#5CC9F5] rounded-full animate-float"
                        style={{
                          top: `${20 + (i * 6)}%`,
                          left: `${10 + (i * 8)}%`,
                          animationDelay: `${i * 0.3}s`,
                          animationDuration: '3s'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* AI Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                  {[
                    { value: "2.4B", label: "Parameters", icon: "ri-database-line" },
                    { value: "156ms", label: "Inference Time", icon: "ri-timer-line" },
                    { value: "99.7%", label: "Uptime", icon: "ri-pulse-line" },
                    { value: "24/7", label: "Learning", icon: "ri-brain-line" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#5CC9F5]/20 to-[#3BBCE3]/20 rounded-[16px] backdrop-blur-sm border border-[#5CC9F5]/30 mb-3">
                        <i className={`${stat.icon} text-lg text-[#5CC9F5]`}></i>
                      </div>
                      <div className="text-xl font-bold text-[#1E293B] font-orbitron mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-[#64748B]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Floating AI Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#5CC9F5] rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <WaveDivider variant="bottom" className="absolute bottom-0" />
    </section>
  );
}