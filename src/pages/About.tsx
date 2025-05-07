
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-portland-dark text-white">
        <section className="py-16 border-t border-white/20">
          <div className="container px-4 mx-auto">
            <h1 className="text-5xl md:text-7xl font-display mb-8">about</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="prose prose-lg prose-invert">
                <h2 className="text-3xl font-display mt-8 mb-4">Our Origin</h2>
                <p className="text-xl mb-6">
                  Founded in anticipation of a pivotal snapshot vote at FreeRossDAO on January 27, 2022 
                  (<a href="https://snapshot.box/#/s:freerossdao.eth/proposal/0x2ef2d7073715fb495b12e0cb068536baac370ede23b6f198ba3a37cb4e7d0c58" 
                     className="text-portland-green hover:underline" 
                     target="_blank" 
                     rel="noopener noreferrer">proposal link</a>), 
                  FreeOpsDAO began as a structured initiative as a dedicated effort to coordinate writing, 
                  management, human resources, and community engagement within FreeRossDAO. Our initial success 
                  quickly positioned us as experts in decentralized governance, leading us to assist in 
                  launching and enhancing multiple DAOs and DAO infrastructures throughout the web3 ecosystem.
                </p>

                <h2 className="text-3xl font-display mt-8 mb-4">Impact & Influence</h2>
                <p className="text-xl mb-6">
                  The governance frameworks and operational practices pioneered by FreeOpsDAO have significantly 
                  influenced numerous DAOs, including prominent organizations like UkraineDAO, AssangeDAO, and 
                  FutarchyDAO. Our methodologies have set a new standard in decentralized governance and 
                  organizational effectiveness.
                </p>

                <h2 className="text-3xl font-display mt-8 mb-4">Embracing the ai Renaissance</h2>
                <p className="text-xl mb-6">
                  In 2024, recognizing the transformative potential of agentic ai, FreeOpsDAO shifted our 
                  strategic focus towards harnessing artificial intelligence technologies. Leveraging our 
                  extensive ai expertise that predates the current large language model renaissance, we are 
                  uniquely positioned to bridge these groundbreaking ai tools with the decentralized 
                  governance principles of web3.
                </p>
              </div>
              
              <div className="prose prose-lg prose-invert">
                <h2 className="text-3xl font-display mt-8 mb-4">Our Role Today</h2>
                <p className="text-xl mb-6">
                  Today, FreeOpsDAO proudly stands at the intersection of decentralized governance and 
                  agentic ai. We empower both traditional enterprises and innovative underground economies, 
                  fostering environments where these powerful technologies converge to create vibrant, 
                  sustainable ecosystems.
                </p>

                <h2 className="text-3xl font-display mt-8 mb-4">Join the Movement</h2>
                <p className="text-xl mb-6">
                  We invite visionaries, technologists, and innovators passionate about decentralized 
                  governance and ai-driven futures to join our journey. Together, let's shape a singularity 
                  where autonomy, innovation, and economic freedom flourish.
                </p>

                <div className="border-t border-white/20 pt-8 mt-8">
                  <p className="text-xl">
                    Connect with us through our community channels or actively participate in our governance discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
