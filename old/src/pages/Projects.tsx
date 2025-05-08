
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionBlock from '../components/SectionBlock';

export default function Projects() {
  const ProjectIllustration = () => (
    <div className="flex items-center justify-center px-4 py-3 mr-4 border border-white/30 rounded-lg bg-white/10">
      <span className="text-2xl border border-white rounded-full p-2 mx-1">✍️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">📦</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">⚙️</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SectionBlock 
          title="/projects" 
          subtitle="Build, Ship, Iterate"
          backgroundColor="bg-portland-pink" 
          illustration={<ProjectIllustration />}
        />
        <section className="bg-portland-dark text-white py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-display mb-6">Our Current Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-white/30 rounded-lg">
                <h3 className="text-2xl font-display mb-4">ai Governance Assistant</h3>
                <p className="mb-4">
                  An intelligent assistant designed to help DAOs streamline their governance processes through 
                  automated proposal management, voting facilitation, and result analysis.
                </p>
                <div className="text-portland-green">In Development</div>
              </div>
              <div className="p-6 border border-white/30 rounded-lg">
                <h3 className="text-2xl font-display mb-4">DAO Operations Toolkit</h3>
                <p className="mb-4">
                  A comprehensive suite of tools designed to help DAOs manage day-to-day operations more efficiently,
                  including treasury management, member coordination, and project tracking.
                </p>
                <div className="text-portland-pink">Coming Soon</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
