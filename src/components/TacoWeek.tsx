
import React from 'react';

export default function TacoWeek() {
  return (
    <section className="bg-portland-orange text-white py-16 border-t border-white/20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/lovable-uploads/bc0de962-256a-4ead-ba8d-2f22935373c5.png" 
              alt="AI Waitlist" 
              className="max-w-xs mx-auto"
            />
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-5xl md:text-6xl font-display mb-6 text-center md:text-right">
              COMING SOON
            </h2>
            
            <div className="border-2 border-white p-6 max-w-md text-center">
              <h3 className="text-3xl md:text-4xl font-display mb-2">YOUR EMBEDDED</h3>
              <h3 className="text-3xl md:text-4xl font-display mb-2">AI STRATEGIST</h3>
              <h3 className="text-3xl md:text-4xl font-display">FOR DAOS</h3>
            </div>
            
            <button className="bg-portland-cream text-portland-dark px-8 py-2 rounded-full font-bold mt-6">
              JOIN WAITLIST
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
