
import React, { useRef, useEffect } from 'react';
import { AlertTriangle, Eye, Link, Mail, CreditCard, CheckCircle } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                (el as HTMLElement).classList.add('opacity-100');
                (el as HTMLElement).classList.remove('opacity-0', 'translate-y-10');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const phishingTypes = [
    {
      icon: Link,
      title: "Deceptive URLs",
      description: "Phishing sites often use URLs that mimic legitimate websites with subtle differences.",
      example: "Example: amaz0n.com or paypa1.com"
    },
    {
      icon: Mail,
      title: "Email Phishing",
      description: "Emails that appear to be from legitimate companies but contain malicious links.",
      example: "Often includes urgent calls to action to create panic"
    },
    {
      icon: CreditCard,
      title: "Financial Phishing",
      description: "Sites that mimic banks or payment services to steal financial information.",
      example: "Look for secure (HTTPS) connections on financial sites"
    },
    {
      icon: Eye,
      title: "Visual Deception",
      description: "Websites that look identical to legitimate sites but have subtle differences.",
      example: "Check for poor grammar, low-quality logos, or unusual layouts"
    }
  ];

  const safetyTips = [
    "Verify website URLs before entering personal information",
    "Check for HTTPS and a padlock icon in your browser's address bar",
    "Be suspicious of unexpected emails asking for personal information",
    "Don't click on links in emails - type the address directly instead",
    "Use a password manager to avoid entering credentials on fake sites",
    "Enable two-factor authentication on your important accounts"
  ];

  return (
    <section id="how-it-works" className="py-20 relative" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-full h-full bg-purple/5 rounded-[50%] -translate-x-1/2 translate-y-1/4 -z-10"></div>

      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple/10 text-purple font-medium text-sm mb-4 animate-on-scroll opacity-0 transition-all duration-700">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span>Phishing Education</span>
          </div>
          <h2 className="text-gradient mb-4 animate-on-scroll opacity-0 transition-all duration-700">
            Understanding Phishing Attacks
          </h2>
          <p className="text-foreground/80 animate-on-scroll opacity-0 transition-all duration-700">
            Learn how to recognize and protect yourself from the most common types of phishing attacks
            that target your personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {phishingTypes.map((type, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 animate-on-scroll opacity-0 transition-all duration-700"
            >
              <div className="w-12 h-12 rounded-full bg-purple/10 flex items-center justify-center mb-4">
                <type.icon className="w-6 h-6 text-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-foreground/70 mb-3">{type.description}</p>
              <div className="bg-purple/5 rounded-lg p-3 text-sm">
                <span className="font-medium">👉 {type.example}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="purple-glass rounded-2xl p-8 md:p-12 animate-on-scroll opacity-0 transition-all duration-700">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How to Stay Safe Online
              </h3>
              <p className="text-foreground/80 mb-6">
                Follow these essential tips to protect yourself from phishing attacks and
                keep your personal information secure.
              </p>
              <ul className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h4 className="font-semibold text-lg">Real vs. Fake Website Example</h4>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <h5 className="font-medium">Legitimate Website:</h5>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-2">
                    <p>✓ Correct domain (company.com)</p>
                    <p>✓ HTTPS secure connection</p>
                    <p>✓ Professional design, no spelling errors</p>
                    <p>✓ Doesn't ask for excessive personal information</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    <h5 className="font-medium">Phishing Website:</h5>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 text-sm space-y-2">
                    <p>✗ Misspelled domain (c0mpany.com)</p>
                    <p>✗ No HTTPS or invalid certificate</p>
                    <p>✗ Poor design, grammar mistakes</p>
                    <p>✗ Requests sensitive information unnecessarily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
