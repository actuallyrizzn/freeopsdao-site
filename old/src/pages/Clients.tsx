
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionBlock from '../components/SectionBlock';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function Clients() {
  const ClientIllustration = () => (
    <div className="flex items-center justify-center px-4 py-3 mr-4 border border-white/30 rounded-lg bg-white/10">
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🤝</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🏛️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🧑‍💼</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SectionBlock 
          title="/clients" 
          subtitle="Who We Work With"
          backgroundColor="bg-[#8CDED0]" 
          textColor="text-portland-dark"
          illustration={<ClientIllustration />}
          buttonColor="bg-portland-green text-white"
        />
        <section className="bg-portland-dark text-white py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-display mb-10">Our Clients</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Quasar Logo */}
              <Card className="overflow-hidden bg-white text-portland-dark">
                <div className="p-6">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img 
                      src="/lovable-uploads/1f526e34-8577-404b-898e-ca65719c7a66.png" 
                      alt="Quasar Logo" 
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-display mb-2">Quasar</h3>
                  <p className="text-sm text-gray-700">
                    A pioneering quantum computing company focused on building next-generation solutions for complex computational problems.
                  </p>
                </div>
              </Card>
              
              {/* CyrusOne Logo */}
              <Card className="overflow-hidden bg-white text-portland-dark">
                <div className="p-6">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img 
                      src="/lovable-uploads/7204d531-0769-4517-9598-aa34e99157a1.png" 
                      alt="CyrusOne Logo" 
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-display mb-2">CyrusOne</h3>
                  <p className="text-sm text-gray-700">
                    A global data center real estate investment trust that provides mission-critical facilities to ensure the continued operation of IT infrastructure.
                  </p>
                </div>
              </Card>
              
              {/* FreeRossDAO Logo - Updated from Eyedelic */}
              <Card className="overflow-hidden bg-white text-portland-dark">
                <div className="p-6">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img 
                      src="/lovable-uploads/65bd8e03-bef4-45ce-b71c-4656df5c6d7e.png" 
                      alt="FreeRossDAO Logo" 
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-display mb-2">FreeRossDAO</h3>
                  <p className="text-sm text-gray-700">
                    A DAO originally formed as a collective buyer for Ross Ulbricht's artwork, ultimately ended up the leaders of the successful effort to make it politically safe for Ulbricht to get a full Presidential pardon.
                  </p>
                </div>
              </Card>
              
              {/* IBM Logo */}
              <Card className="overflow-hidden bg-white text-portland-dark">
                <div className="p-6">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img 
                      src="/lovable-uploads/616e27c9-de80-4e20-afa8-6aae3c2e9e3b.png" 
                      alt="IBM Logo" 
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-display mb-2">IBM</h3>
                  <p className="text-sm text-gray-700">
                    A global technology corporation leading innovation in cloud computing, artificial intelligence, and quantum computing solutions.
                  </p>
                </div>
              </Card>
              
              {/* Texas Blockchain Council Logo */}
              <Card className="overflow-hidden bg-white text-portland-dark">
                <div className="p-6">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img 
                      src="/lovable-uploads/c3e34454-bf73-46f7-83bf-ffc3cb9b18a5.png" 
                      alt="Texas Blockchain Council Logo" 
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-display mb-2">Texas Blockchain Council</h3>
                  <p className="text-sm text-gray-700">
                    A nonprofit organization dedicated to promoting blockchain innovation and education throughout Texas and beyond.
                  </p>
                </div>
              </Card>
              
              {/* XRAM Capital Logo */}
              <Card className="overflow-hidden bg-white text-portland-dark">
                <div className="p-6">
                  <div className="h-32 flex items-center justify-center mb-4">
                    <img 
                      src="/lovable-uploads/5deb787c-edad-497b-8a3b-198a054786a9.png" 
                      alt="XRAM Capital Logo" 
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-display mb-2">XRAM Capital</h3>
                  <p className="text-sm text-gray-700">
                    An investment firm specializing in blockchain technologies and digital assets with a focus on long-term value creation.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
