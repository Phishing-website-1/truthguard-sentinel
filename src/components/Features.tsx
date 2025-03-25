
import React, { useEffect, useRef } from 'react';
import { Shield, Lock, AlertTriangle, Database, BarChart, Eye } from 'lucide-react';

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const features = [
    {
      icon: Shield,
      title: "Real-time Phishing Detection",
      description: "Advanced algorithms that analyze URLs and website content to identify phishing attempts instantly."
    },
    {
      icon: Database,
      title: "Extensive Threat Database",
      description: "Continuously updated database of known phishing websites and attack patterns for maximum protection."
    },
    {
      icon: AlertTriangle,
      title: "Suspicious Link Warnings",
      description: "Get alerts before visiting potentially dangerous websites that could compromise your security."
    },
    {
      icon: Lock,
      title: "Data Privacy Protection",
      description: "We never store your scanned URLs or personal information, ensuring complete privacy."
    },
    {
      icon: BarChart,
      title: "Detailed Safety Reports",
      description: "Comprehensive analysis of each scanned website with specific risk factors identified."
    },
    {
      icon: Eye,
      title: "Visual Safety Indicators",
      description: "Clear visual cues that help you quickly understand the safety status of any website."
    }
  ];
  
  return (
    <section id="features" className="py-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-purple/5 rounded-[50%] translate-x-1/2 -translate-y-1/4 -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 stagger-animate">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple/10 text-purple font-medium text-sm mb-4">
            <Shield className="w-4 h-4 mr-2" />
            <span>Powerful Protection Features</span>
          </div>
          <h2 className="text-gradient mb-4">
            Advanced Tools to Keep You Safe Online
          </h2>
          <p className="text-foreground/80">
            TruthGuard combines cutting-edge technology with user-friendly design to provide
            comprehensive protection against online threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (featureRefs.current[index] = el)}
              className="glass rounded-xl p-6 transition-all duration-700 opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div 
          className="purple-glass rounded-2xl p-8 md:p-12 mt-16 opacity-0 translate-y-10 transition-all duration-700"
          ref={(el) => (featureRefs.current[6] = el)}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Protected with TruthGuard
              </h3>
              <p className="text-foreground/80 mb-6">
                In today's digital landscape, phishing threats are becoming increasingly sophisticated. 
                TruthGuard helps you navigate the web with confidence by providing instant alerts 
                about potential security risks.
              </p>
              <a href="#scanner" className="btn-primary inline-flex">
                Try It Now
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-6 bg-gray-100 flex items-center px-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-4 h-[calc(100%-1.5rem)] flex flex-col">
                  <div className="h-6 w-3/4 bg-gray-200 rounded-full mb-3"></div>
                  <div className="flex-1 bg-red-50 rounded-lg border border-red-100 p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-2">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="h-4 w-40 bg-red-200 rounded-full mx-auto"></div>
                      <div className="h-3 w-32 bg-red-100 rounded-full mx-auto mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple/20 rounded-full filter blur-xl animate-pulse-soft"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
