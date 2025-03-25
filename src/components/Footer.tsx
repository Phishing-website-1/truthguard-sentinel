
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-purple/5 py-10">
      <div className="container-custom">
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
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
          
          <div className="border-t border-gray-200 mt-6 pt-6">
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
