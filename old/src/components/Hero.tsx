
import React from 'react';
import BrandName from './BrandName';

export default function Hero() {
  return (
    <section className="bg-portland-dark text-white py-16 md:py-24 border-t border-b border-white/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="w-full md:w-3/5">
            <h1 className="text-7xl md:text-9xl font-display mb-4">
              <span className="text-portland-green">w</span>
              <span className="text-portland-orange">e</span>
              <span className="text-portland-blue">b</span>
              <span className="text-portland-purple">3</span>
              <span className="text-portland-lime"> </span>
              <span className="text-portland-pink">meets</span>
            </h1>
            
            <div className="mt-4">
              <h2 className="text-7xl md:text-9xl font-display">
                <span className="text-portland-blue">the</span>
                <span className="text-portland-lime"> </span>
                <span className="text-portland-orange">agentic</span>
                <span className="text-portland-lime"> </span>
                <span className="text-portland-pink">internet</span>
              </h2>
            </div>
            
            <div className="mt-16 text-left">
              <div className="text-xl md:text-3xl font-bold opacity-70">
                <span>/ strategy / governance / tokenomics / ai integration</span>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-end items-start md:pt-2">
            <img 
              src="/lovable-uploads/dd8a23b0-b7f2-4198-84b7-e5822da2351f.png" 
              alt="Toys, Tools, Teams Diagram" 
              className="w-52 h-52 md:w-64 md:h-64 object-contain"
            />
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/f81ecf51-e447-4dbd-8a3e-0eb5f0e00175.png" 
              alt="Lime slice" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h3 className="text-4xl md:text-6xl font-display text-right">
              START A CONVERSATION →
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
