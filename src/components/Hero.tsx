
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Sparkles, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('stagger-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="flex flex-col items-center text-center">
          {/* Centered logo with margin bottom for spacing */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/ffc1bc93-8c95-4ffe-beef-a96c26d0eb14.png"
              alt="FOVY Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
          
          <div className="flex flex-col justify-center items-center space-y-6 max-w-3xl mx-auto">
            <div>
              <div className="stagger-item inline-flex animate-fade-in items-center rounded-full bg-gradient-to-r from-slate-800/90 to-slate-900/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-blue-400 shadow-md">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>AI-Powered Career Growth</span>
              </div>
              <h1 className="stagger-item animate-fade-in mt-4 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-white">
                <span className="text-blue-400">Map</span> your career with <span className="text-blue-400">AI</span>
              </h1>
              <p className="stagger-item animate-fade-in mt-4 max-w-[600px] text-lg text-white">
                FOVY helps freelancers visualize skills, enhance client communication, and build career confidence through AI-driven career mapping.
              </p>
            </div>
            <div className="stagger-item flex animate-fade-in flex-col sm:flex-row gap-4">
              <Button className="btn-gradient-dark h-12 px-6 rounded-xl flex items-center shadow-lg shadow-blue-900/30">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 h-12 px-6 rounded-xl text-white shadow-md hover:bg-slate-700/80">
                How It Works
              </Button>
            </div>
            <div className="stagger-item animate-fade-in grid grid-cols-3 gap-8 pt-4 max-w-xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/70 backdrop-blur-sm shadow-md">
                  <Brain className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-sm text-white">AI Mind Mapping</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/70 backdrop-blur-sm shadow-md">
                  <MessageSquare className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-sm text-white">Client Communication</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800/80 to-slate-900/70 backdrop-blur-sm shadow-md">
                  <Sparkles className="h-5 w-5 text-blue-400" />
                </div>
                <div className="text-sm text-white">Confidence Building</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
