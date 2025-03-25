
import React from 'react';
import { Shield, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-purple/5 pt-20 pb-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-16">
          <div className="md:w-1/3">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-purple" />
              <span className="text-2xl font-bold text-gradient">TruthGuard</span>
            </div>
            <p className="text-foreground/70 mb-6">
              Protecting users from phishing attempts and online scams with advanced detection technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple/10 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Documentation</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">API</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Help Center</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">Report a Phishing Site</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto mb-6">
            <h3 className="text-xl font-semibold mb-4">Created By</h3>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              <span className="text-purple font-medium">Anugunj</span>
              <span className="text-purple font-medium">Tanishka</span>
              <span className="text-purple font-medium">Parul</span>
              <span className="text-purple font-medium">Pooja</span>
              <span className="text-purple font-medium">Khushi</span>
            </div>
            <p className="mt-3 text-foreground/70">Guide - Prof. Nilesh Mishra</p>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} TruthGuard. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
