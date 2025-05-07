
import React from 'react';

export default function SubmitSection() {
  return (
    <section className="bg-portland-green bg-opacity-50 py-16 border-t border-white/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-display mb-4 text-portland-dark">/contact</h2>
          </div>
          <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0 items-center">
            <img 
              src="/lovable-uploads/6119346f-4fe2-4456-be6f-701455661f67.png" 
              alt="Pencil" 
              className="h-32 mr-6"
            />
            <button className="bg-portland-cream text-portland-dark px-8 py-3 rounded-full font-bold">
              CONNECT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
