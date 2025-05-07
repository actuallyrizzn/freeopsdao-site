
import React from 'react';
import BrandName from './BrandName';

export default function Description() {
  return (
    <section className="bg-portland-cream text-portland-dark py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl md:text-6xl font-display mb-8">
          we help <span className="relative inline-block">
            DAOs
            <span className="absolute top-0 left-0 right-0 bottom-0 border-2 border-portland-green rounded-full transform scale-110 -translate-x-0.5 -translate-y-0.5"></span>
          </span> become unstoppable.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="flex">
            <div className="w-32 h-32 mr-6 flex-shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M50,20 Q65,5 80,20 Q95,35 80,50 Q65,65 50,50 Q35,65 20,50 Q5,35 20,20 Q35,5 50,20 Z" fill="#C5B6FF" />
                <rect x="35" y="35" width="30" height="40" rx="15" fill="#8BBCF5" />
              </svg>
            </div>
            <div>
              <p className="text-lg mb-4">From governance architecture to AI integration, we embed with your team to make decentralization <strong>functional</strong>, <strong>resilient</strong>, and actually <strong>human</strong>.</p>
            </div>
          </div>
          
          <div>
            <p className="text-lg mb-4"><strong><BrandName /></strong> is a collective of governance architects, ops wizards, and market thinkers.</p>
            <p className="text-lg">We've helped DAOs survive votes, deploy funds, calm chaos, and win community trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
