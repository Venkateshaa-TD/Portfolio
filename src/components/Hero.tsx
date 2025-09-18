import { ArrowDown, Download, Github, Linkedin, Mail, Server, Database, Brain, Code, Cloud, Smartphone, Cpu, Globe, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Career titles with their domain-specific tech stacks
  const careerDomains = [
    {
      title: 'Software Engineer',
      description: 'Building robust software solutions',
      diagram: {
        center: { name: 'Application', icon: Code, color: 'from-blue-500 to-cyan-500' },
        nodes: [
          { name: 'Frontend', icon: Globe, color: 'from-green-500 to-emerald-500', angle: 0 },
          { name: 'Backend', icon: Server, color: 'from-purple-500 to-pink-500', angle: 72 },
          { name: 'Database', icon: Database, color: 'from-orange-500 to-red-500', angle: 144 },
          { name: 'Testing', icon: Shield, color: 'from-indigo-500 to-purple-500', angle: 216 },
          { name: 'DevOps', icon: Cloud, color: 'from-teal-500 to-cyan-500', angle: 288 }
        ],
        connections: ['React', 'Node.js', 'PostgreSQL', 'Jest', 'Docker']
      }
    },
    {
      title: 'Full Stack Developer',
      description: 'End-to-end web development',
      diagram: {
        center: { name: 'Full Stack', icon: Zap, color: 'from-yellow-500 to-orange-500' },
        nodes: [
          { name: 'React', icon: Code, color: 'from-blue-500 to-cyan-500', angle: 0 },
          { name: 'Node.js', icon: Server, color: 'from-green-500 to-emerald-500', angle: 60 },
          { name: 'MongoDB', icon: Database, color: 'from-purple-500 to-pink-500', angle: 120 },
          { name: 'API', icon: Globe, color: 'from-orange-500 to-red-500', angle: 180 },
          { name: 'Cloud', icon: Cloud, color: 'from-indigo-500 to-purple-500', angle: 240 },
          { name: 'Mobile', icon: Smartphone, color: 'from-teal-500 to-cyan-500', angle: 300 }
        ],
        connections: ['TypeScript', 'Express', 'Mongoose', 'REST', 'AWS', 'React Native']
      }
    },
    {
      title: 'Data Analyst',
      description: 'Transforming data into insights',
      diagram: {
        center: { name: 'Analytics', icon: Brain, color: 'from-purple-500 to-pink-500' },
        nodes: [
          { name: 'Data', icon: Database, color: 'from-blue-500 to-cyan-500', angle: 0 },
          { name: 'Processing', icon: Cpu, color: 'from-green-500 to-emerald-500', angle: 90 },
          { name: 'Visualization', icon: Globe, color: 'from-orange-500 to-red-500', angle: 180 },
          { name: 'Reports', icon: Shield, color: 'from-indigo-500 to-purple-500', angle: 270 }
        ],
        connections: ['Python', 'Pandas', 'Tableau', 'SQL']
      }
    },
    {
      title: 'AI Specialist',
      description: 'Building intelligent systems',
      diagram: {
        center: { name: 'AI System', icon: Brain, color: 'from-pink-500 to-purple-500' },
        nodes: [
          { name: 'ML Models', icon: Cpu, color: 'from-blue-500 to-cyan-500', angle: 0 },
          { name: 'Neural Nets', icon: Zap, color: 'from-green-500 to-emerald-500', angle: 72 },
          { name: 'Data Prep', icon: Database, color: 'from-orange-500 to-red-500', angle: 144 },
          { name: 'Training', icon: Server, color: 'from-purple-500 to-pink-500', angle: 216 },
          { name: 'Deploy', icon: Cloud, color: 'from-teal-500 to-cyan-500', angle: 288 }
        ],
        connections: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'GPU', 'MLOps']
      }
    },
    {
      title: 'Machine Learning Engineer',
      description: 'ML model development & deployment',
      diagram: {
        center: { name: 'ML Pipeline', icon: Zap, color: 'from-cyan-500 to-blue-500' },
        nodes: [
          { name: 'Feature Eng', icon: Code, color: 'from-green-500 to-emerald-500', angle: 0 },
          { name: 'Model Train', icon: Brain, color: 'from-purple-500 to-pink-500', angle: 60 },
          { name: 'Validation', icon: Shield, color: 'from-orange-500 to-red-500', angle: 120 },
          { name: 'Production', icon: Server, color: 'from-indigo-500 to-purple-500', angle: 180 },
          { name: 'Monitoring', icon: Globe, color: 'from-teal-500 to-cyan-500', angle: 240 },
          { name: 'Retraining', icon: Cpu, color: 'from-yellow-500 to-orange-500', angle: 300 }
        ],
        connections: ['Python', 'MLflow', 'Kubernetes', 'Docker', 'Prometheus', 'AutoML']
      }
    },
    {
      title: 'React Developer',
      description: 'Modern frontend development',
      diagram: {
        center: { name: 'React App', icon: Code, color: 'from-blue-500 to-cyan-500' },
        nodes: [
          { name: 'Components', icon: Globe, color: 'from-green-500 to-emerald-500', angle: 0 },
          { name: 'State Mgmt', icon: Database, color: 'from-purple-500 to-pink-500', angle: 90 },
          { name: 'Routing', icon: Zap, color: 'from-orange-500 to-red-500', angle: 180 },
          { name: 'Testing', icon: Shield, color: 'from-indigo-500 to-purple-500', angle: 270 }
        ],
        connections: ['JSX', 'Redux', 'Router', 'Jest']
      }
    },
    {
      title: 'Backend Developer',
      description: 'Server-side architecture',
      diagram: {
        center: { name: 'API Server', icon: Server, color: 'from-green-500 to-emerald-500' },
        nodes: [
          { name: 'Endpoints', icon: Globe, color: 'from-blue-500 to-cyan-500', angle: 0 },
          { name: 'Auth', icon: Shield, color: 'from-purple-500 to-pink-500', angle: 72 },
          { name: 'Database', icon: Database, color: 'from-orange-500 to-red-500', angle: 144 },
          { name: 'Cache', icon: Zap, color: 'from-indigo-500 to-purple-500', angle: 216 },
          { name: 'Deploy', icon: Cloud, color: 'from-teal-500 to-cyan-500', angle: 288 }
        ],
        connections: ['Express', 'JWT', 'MongoDB', 'Redis', 'AWS']
      }
    },
    {
      title: 'Database Architect',
      description: 'Data structure & optimization',
      diagram: {
        center: { name: 'Database', icon: Database, color: 'from-orange-500 to-red-500' },
        nodes: [
          { name: 'Schema', icon: Code, color: 'from-blue-500 to-cyan-500', angle: 0 },
          { name: 'Queries', icon: Cpu, color: 'from-green-500 to-emerald-500', angle: 90 },
          { name: 'Performance', icon: Zap, color: 'from-purple-500 to-pink-500', angle: 180 },
          { name: 'Security', icon: Shield, color: 'from-indigo-500 to-purple-500', angle: 270 }
        ],
        connections: ['SQL', 'Indexing', 'Optimization', 'Encryption']
      }
    },
    {
      title: 'Career Guidance Expert',
      description: 'Educational technology solutions',
      diagram: {
        center: { name: 'Career Platform', icon: Globe, color: 'from-teal-500 to-cyan-500' },
        nodes: [
          { name: 'Assessment', icon: Brain, color: 'from-purple-500 to-pink-500', angle: 0 },
          { name: 'Database', icon: Database, color: 'from-blue-500 to-cyan-500', angle: 72 },
          { name: 'Analytics', icon: Cpu, color: 'from-green-500 to-emerald-500', angle: 144 },
          { name: 'Mobile App', icon: Smartphone, color: 'from-orange-500 to-red-500', angle: 216 },
          { name: 'Cloud', icon: Cloud, color: 'from-indigo-500 to-purple-500', angle: 288 }
        ],
        connections: ['React', 'MongoDB', 'Python', 'React Native', 'AWS']
      }
    },
    {
      title: 'Educational Technologist',
      description: 'Learning platform development',
      diagram: {
        center: { name: 'EdTech System', icon: Brain, color: 'from-indigo-500 to-purple-500' },
        nodes: [
          { name: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500', angle: 0 },
          { name: 'Content', icon: Globe, color: 'from-green-500 to-emerald-500', angle: 72 },
          { name: 'Analytics', icon: Cpu, color: 'from-purple-500 to-pink-500', angle: 144 },
          { name: 'Mobile', icon: Smartphone, color: 'from-orange-500 to-red-500', angle: 216 },
          { name: 'AI Tutor', icon: Zap, color: 'from-teal-500 to-cyan-500', angle: 288 }
        ],
        connections: ['TypeScript', 'CMS', 'ML', 'Flutter', 'OpenAI']
      }
    }
  ];

  // Career title rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentTitle((prev) => (prev + 1) % careerDomains.length);
      }, 500);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
      
    }, 4000);

    return () => clearInterval(interval);
  }, [careerDomains.length]);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentDomain = careerDomains[currentTitle];

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3e%3cdefs%3e%3cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3e%3cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(0,255,255,0.1)' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23grid)'/%3e%3c/svg%3e")`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Animated Tech Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400 opacity-15 font-mono text-xs animate-matrix-fall"
              style={{
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 3 + 4 + 's'
              }}
            >
              {['</', '/>', '{}', '[]', '=>', '&&', '||', 'AI', 'ML', 'DB'][Math.floor(Math.random() * 10)]}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Venkateshaa T D
              </h1>
              
              {/* Career Title with Code Transition */}
              <div className="mb-4 h-16 flex items-center justify-center lg:justify-start">
                <span 
                  className={`text-xl md:text-2xl lg:text-3xl font-bold text-cyan-300 transition-all duration-500 transform ${
                    isAnimating 
                      ? 'opacity-0 scale-95 blur-sm skew-x-2 text-green-400' 
                      : 'opacity-100 scale-100 blur-0 skew-x-0'
                  }`}
                  style={{
                    textShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
                    fontFamily: 'monospace',
                    letterSpacing: isAnimating ? '2px' : '0px'
                  }}
                >
                  {currentDomain.title}
                </span>
              </div>
              
              {/* Domain Description */}
              <div className="mb-8 h-6">
                <p className={`text-md text-blue-200 transition-all duration-500 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}>
                  {currentDomain.description}
                </p>
              </div>
              
              <p className="text-lg md:text-xl mb-12 max-w-2xl text-blue-100/90 leading-relaxed">
                Passionate about building intelligent systems, developing innovative web applications like Career Compass, 
                and solving real-world problems through technology.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  onClick={scrollToProjects}
                >
                  View Projects
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <a 
  href="/VENKATESHAA T D - Resume.pdf" 
  download 
>
  <Button
    size="lg"
    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
  >
    Download Resume
    <Download className="ml-2 h-5 w-5" />
  </Button>
</a>
                
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {[
                  { Icon: Github, href: 'https://github.com/Venkateshaa-TD', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/venkateshaa-thiyagarajan-76a584321/', label: 'LinkedIn' },
                  { Icon: Mail, href: '#contact', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm hover:scale-110 group"
                    aria-label={label}
                  >
                    <Icon className="h-6 w-6 text-white group-hover:text-cyan-300 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - DYNAMIC TECH DOMAIN DIAGRAM */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              
              {/* Tech Domain Diagram Container */}
              <div className={`absolute inset-0 transition-all duration-1000 ${
                isAnimating ? 'opacity-0 scale-90 rotate-12' : 'opacity-100 scale-100 rotate-0'
              }`}>
                
                {/* Center Node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${currentDomain.diagram.center.color} flex items-center justify-center shadow-2xl animate-pulse-slow relative`}>
                    <currentDomain.diagram.center.icon className="w-10 h-10 text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-ping"></div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold whitespace-nowrap">
                    {currentDomain.diagram.center.name}
                  </div>
                </div>

                {/* Orbiting Nodes */}
                {currentDomain.diagram.nodes.map((node, index) => {
                  const radius = 140;
                  const angle = (node.angle * Math.PI) / 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div
                      key={node.name}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(${x - 32}px, ${y - 32}px)`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {/* Connection Line */}
                      <div 
                        className="absolute top-8 left-8 w-px bg-gradient-to-r from-cyan-400/40 to-transparent animate-pulse"
                        style={{
                          height: `${radius}px`,
                          transformOrigin: 'top',
                          transform: `rotate(${180 + node.angle}deg)`
                        }}
                      />
                      
                      {/* Node */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 animate-float-node relative`}>
                        <node.icon className="w-8 h-8 text-white" />
                        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity"></div>
                      </div>
                      
                      {/* Node Label */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xs font-medium whitespace-nowrap">
                        {node.name}
                      </div>
                      
                      {/* Tech Label */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-cyan-300 text-xs font-mono whitespace-nowrap opacity-80">
                        {currentDomain.diagram.connections[index]}
                      </div>
                    </div>
                  );
                })}

                {/* Orbital Rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-cyan-400/20 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-blue-400/10 rounded-full animate-reverse-spin"></div>

              </div>

              {/* Floating Tech Labels */}
              <div className="absolute -top-6 -left-8 text-xs font-mono text-cyan-400 opacity-50 animate-float-tech">
                {currentDomain.title.split(' ')[0]}
              </div>
              <div className="absolute -top-4 -right-8 text-xs font-mono text-green-400 opacity-50 animate-float-tech" style={{ animationDelay: '1s' }}>
                Tech Stack
              </div>
              <div className="absolute -bottom-8 -left-6 text-xs font-mono text-blue-400 opacity-50 animate-float-tech" style={{ animationDelay: '2s' }}>
                Architecture
              </div>
              <div className="absolute -bottom-6 -right-6 text-xs font-mono text-purple-400 opacity-50 animate-float-tech" style={{ animationDelay: '1.5s' }}>
                Domain
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-cyan-400/60" />
      </div>
    </section>
  );
};

export default Hero;
