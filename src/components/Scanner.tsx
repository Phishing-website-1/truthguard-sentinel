
import React, { useState } from 'react';
import { Search, Shield, ShieldOff, Check, X, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const Scanner = () => {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | {
    safe: boolean;
    score: number;
    reasons: string[];
  }>(null);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a URL to scan.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate URL format
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
    } catch (e) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL including the domain name.",
        variant: "destructive",
      });
      return;
    }
    
    setIsScanning(true);
    setScanResult(null);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // This is demo functionality - in a real app, this would be an API call
      const isSafe = Math.random() > 0.5;
      const score = isSafe ? Math.floor(Math.random() * 30) + 70 : Math.floor(Math.random() * 50);
      
      const possibleReasons = [
        "Domain age is suspicious",
        "URL contains suspicious patterns",
        "Website uses deceptive elements",
        "Similar to known phishing domains",
        "Suspicious redirect patterns detected",
        "Missing SSL certificate",
        "Domain recently registered"
      ];
      
      // Randomly select 2-4 reasons if not safe
      const reasons = isSafe 
        ? [] 
        : Array.from({length: Math.floor(Math.random() * 3) + 2}, () => 
            possibleReasons[Math.floor(Math.random() * possibleReasons.length)]
          ).filter((v, i, a) => a.indexOf(v) === i); // Remove duplicates
      
      setScanResult({
        safe: isSafe,
        score: score,
        reasons: reasons
      });
      setIsScanning(false);
      
      toast({
        title: isSafe ? "Website Appears Safe" : "Potential Phishing Detected",
        description: isSafe 
          ? "Our scan didn't detect any obvious threats." 
          : "This website shows signs of being potentially malicious.",
        variant: isSafe ? "default" : "destructive",
      });
    }, 2000);
  };
  
  return (
    <section id="scanner" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent -z-10"></div>
      
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 stagger-animate">
          <h2 className="text-gradient mb-4">Scan Any Suspicious URL</h2>
          <p className="text-foreground/80">
            Enter a website address below to check if it's safe or potentially malicious.
            Our advanced algorithms will analyze it in seconds.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleScan} className="glass rounded-2xl p-8 shadow-lg animate-fade-in animate-delay-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="input-primary pl-10"
                  placeholder="Enter website URL (e.g., example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isScanning}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  "btn-primary whitespace-nowrap",
                  isScanning && "opacity-70 cursor-not-allowed"
                )}
                disabled={isScanning}
              >
                {isScanning ? (
                  <>
                    <Circle className="w-5 h-5 mr-2 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" />
                    Scan Now
                  </>
                )}
              </button>
            </div>
            
            {scanResult && (
              <div 
                className={cn(
                  "mt-8 rounded-xl p-6 animate-fade-in",
                  scanResult.safe 
                    ? "bg-green-50 border border-green-100" 
                    : "bg-red-50 border border-red-100"
                )}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center",
                      scanResult.safe ? "bg-green-100" : "bg-red-100"
                    )}
                  >
                    {scanResult.safe ? (
                      <Shield className="w-8 h-8 text-green-600" />
                    ) : (
                      <ShieldOff className="w-8 h-8 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">
                      {scanResult.safe ? "Website Appears Safe" : "Potential Phishing Detected"}
                    </h3>
                    <p className={scanResult.safe ? "text-green-700" : "text-red-700"}>
                      {scanResult.safe 
                        ? "Our scan didn't identify any obvious threats with this website." 
                        : "This website shows signs of being potentially malicious."}
                    </p>
                  </div>
                  <div className="hidden md:block">
                    <div className="relative w-24 h-24">
                      <div 
                        className="w-full h-full rounded-full flex items-center justify-center border-8 border-gray-100"
                        style={{
                          background: `conic-gradient(${scanResult.safe ? '#10b981' : '#ef4444'} ${scanResult.score}%, #f3f4f6 0)`
                        }}
                      >
                        <div className="bg-white w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full flex items-center justify-center">
                          <span className={`text-xl font-bold ${scanResult.safe ? 'text-green-600' : 'text-red-600'}`}>
                            {scanResult.score}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {!scanResult.safe && scanResult.reasons.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-3">Risk Factors Detected:</h4>
                    <ul className="space-y-2">
                      {scanResult.reasons.map((reason, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-800">{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {scanResult.safe && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                    <h4 className="font-medium text-gray-900 mb-3">Safety Checks Passed:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800">No suspicious URL patterns detected</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800">Not found in known phishing databases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-800">Website structure appears legitimate</span>
                      </li>
                    </ul>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 italic">
                    This scan provides an automated risk assessment based on our algorithms.
                    Always exercise caution when visiting unfamiliar websites.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Scanner;
