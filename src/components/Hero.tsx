
import React, { useEffect, useRef } from 'react';
import { Shield, Check, Lock } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1 }
    );

    const current = heroRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-transparent -z-10"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-[15%] w-64 h-64 bg-purple/5 rounded-full filter blur-3xl animate-float opacity-50"></div>
      <div className="absolute bottom-1/4 left-[10%] w-72 h-72 bg-purple/10 rounded-full filter blur-3xl animate-pulse-soft"></div>
      
      <div className="container-custom relative">
        <div 
          ref={heroRef}
          className="max-w-3xl mx-auto text-center space-y-8 opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple/10 text-purple font-medium text-sm animate-fade-in">
            <Shield className="w-4 h-4 mr-2" />
            <span>Protecting Your Digital Safety</span>
          </div>
          
          <h1 className="text-gradient">
            Detect Phishing Websites Before They Harm You
          </h1>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            TruthGuard uses advanced AI technology to instantly identify malicious websites,
            protecting you from identity theft and financial fraud.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#scanner" className="btn-primary w-full sm:w-auto animate-fade-in animate-delay-200">
              Scan Website Now
            </a>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto animate-fade-in animate-delay-300">
              Learn How It Works
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="glass rounded-xl p-6 animate-fade-in animate-delay-400">
              <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Detection</h3>
              <p className="text-foreground/70">ML-powered analysis to identify even the most sophisticated phishing attempts</p>
            </div>
            
            <div className="glass rounded-xl p-6 animate-fade-in animate-delay-500">
              <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-4 mx-auto">
                <Check className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Results</h3>
              <p className="text-foreground/70">Get instant analysis of any suspicious URL before you visit</p>
            </div>
            
            <div className="glass rounded-xl p-6 animate-fade-in animate-delay-500">
              <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-4 mx-auto">
                <Lock className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy Focused</h3>
              <p className="text-foreground/70">We never store your scanned URLs or personal information</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
