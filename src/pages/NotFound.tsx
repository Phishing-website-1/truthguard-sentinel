
import React from "react";
import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple/5 flex flex-col justify-center items-center p-4">
      <div className="glass rounded-2xl p-8 md:p-12 max-w-md w-full text-center">
        <div className="w-20 h-20 rounded-full bg-purple/10 flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-purple" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gradient">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        
        <p className="text-foreground/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="btn-primary inline-flex items-center">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
