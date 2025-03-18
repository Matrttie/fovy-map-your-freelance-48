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
      <div className="absolute top-[25%] left-[15%] w-80 h-80 rounded-full bg-gradient-to-br from-blue-100/50 to-blue-200/40 blur-3xl random-breathing-1"></div>
      <div className="absolute bottom-[15%] right-[25%] w-96 h-96 rounded-full bg-gradient-to-tl from-indigo-100/40 to-purple-100/30 blur-3xl random-breathing-2"></div>
      <div className="absolute top-[45%] right-[35%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-50/30 to-indigo-100/30 blur-3xl random-float-3"></div>
      <div className="absolute bottom-[35%] left-[20%] w-72 h-72 rounded-full bg-gradient-to-tl from-purple-50/30 to-blue-100/30 blur-3xl random-float-1"></div>
      
      <div className="container px-4 md:px-6 relative z-10" ref={containerRef}>
        <div className="grid gap-12 lg:grid-cols-[1fr,1fr] lg:gap-8">
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <div className="stagger-item inline-flex animate-fade-in items-center rounded-full bg-gradient-to-r from-white/90 to-blue-50/80 backdrop-blur-sm px-3 py-1 text-sm font-medium text-blue-500 shadow-md gentle-pulse">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>AI-Powered Career Growth</span>
              </div>
              <h1 className="stagger-item animate-fade-in mt-4 text-5xl font-bold leading-tight md:text-6xl text-slate-800">
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Map</span> your career<br />with AI
              </h1>
              <p className="stagger-item animate-fade-in mt-4 max-w-[600px] text-lg text-slate-600">
                FOVY helps freelancers visualize skills, enhance client communication, and build career confidence through AI-driven career mapping.
              </p>
            </div>
            <div className="stagger-item flex animate-fade-in flex-col gap-4 sm:flex-row">
              <Button className="btn-gradient h-12 px-6 rounded-xl flex items-center shadow-lg shadow-blue-400/20">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-white/80 backdrop-blur-sm border border-slate-200 h-12 px-6 rounded-xl text-slate-800 shadow-md gentle-pulse">
                How It Works
              </Button>
            </div>
            <div className="stagger-item animate-fade-in grid grid-cols-3 gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md gentle-float">
                  <Brain className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">AI Mind Mapping</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md gentle-float-slow">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">Client Communication</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-white/80 to-blue-50/70 backdrop-blur-sm shadow-md gentle-float">
                  <Sparkles className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-slate-700">Confidence Building</div>
              </div>
            </div>
          </div>
          <div className="stagger-item animate-scale-in relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[500px] glass-card p-6 rounded-3xl shadow-xl bg-gradient-to-br from-white/30 to-blue-50/20 backdrop-blur-md border border-white/50 random-breathing-1">
              <img 
                src="/lovable-uploads/316d1b63-283e-498c-88ad-8a3ba32b5578.png" 
                alt="FOVY App UI" 
                className="w-full h-auto object-contain rounded-2xl"
              />
              
              <div className="absolute -top-8 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-100/50 to-indigo-100/40 backdrop-blur-sm border border-white/50 random-float-2"></div>
              <div className="absolute -bottom-12 -right-6 w-24 h-24 rounded-full bg-gradient-to-tl from-indigo-100/50 to-purple-100/40 backdrop-blur-sm border border-white/50 random-float-1"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-50/50 to-white/30 backdrop-blur-sm border border-white/50 random-float-4"></div>
              
              <div className="absolute -bottom-6 left-1/4 w-14 h-14 rounded-full bg-blue-200/40 blur-xl random-float-3"></div>
              <div className="absolute top-1/3 right-5 w-10 h-10 rounded-full bg-blue-200/40 blur-xl random-float-5"></div>
              <div className="absolute bottom-1/4 left-10 w-12 h-12 rounded-full bg-indigo-200/40 blur-xl random-float-2"></div>
              <div className="absolute top-10 left-1/3 w-8 h-8 rounded-full bg-purple-200/40 blur-xl random-float-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
