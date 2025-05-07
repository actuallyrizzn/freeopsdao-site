
import React from 'react';

export default function AISection() {
  return (
    <section className="bg-portland-orange text-white py-16 border-t border-white/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-5/12">
            <img 
              src="/lovable-uploads/c5997c4e-64b2-41d2-8322-b4a7aae87c75.png" 
              alt="Human orchestration illustration" 
              className="w-full max-w-md mx-auto border-4 border-white rounded-lg"
            />
          </div>
          
          <div className="w-full md:w-7/12">
            <h2 className="text-4xl md:text-5xl font-display mb-8">
              The human orchestration layer for your{' '}
              <span className="relative inline-block">
                agentic
                <span className="absolute top-0 left-0 right-0 bottom-0 border-2 border-white rounded-full transform scale-110 -translate-x-0.5 -translate-y-0.5"></span>
              </span>{' '}
              tools, toys and teams.
            </h2>
            
            <div className="mt-8">
              <p className="text-lg mb-4">
                We specialize in developing and deploying agentic AI tools 
                that enhance DAO operations, governance, and member engagement.
              </p>
              <p className="text-lg">
                Our custom AI solutions integrate seamlessly with your existing workflows
                to bring intelligence and automation to your decentralized organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
