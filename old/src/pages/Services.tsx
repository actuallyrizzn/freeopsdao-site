
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BrandName from '../components/BrandName';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-portland-dark text-white py-16">
          <div className="container px-4 mx-auto">
            <h1 className="text-5xl md:text-7xl font-display mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl">
              <BrandName /> provides specialized services to help decentralized organizations thrive in an evolving ecosystem.
            </p>
          </div>
        </section>
        
        {/* Services grid */}
        <section className="bg-portland-cream py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-5xl font-display mb-12">How we can help</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-portland-dark hover:border-portland-green transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-portland-green flex items-center justify-center mb-4">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <CardTitle>Governance Design</CardTitle>
                  <CardDescription>Building robust governance frameworks for DAOs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We design custom governance structures that enable effective decision-making while maintaining decentralized principles.</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Token economics design</li>
                    <li>Voting mechanisms</li>
                    <li>Proposal frameworks</li>
                    <li>Multi-sig management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-portland-dark hover:border-portland-blue transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-portland-blue flex items-center justify-center mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <CardTitle>AI Integration</CardTitle>
                  <CardDescription>Enhancing DAOs with intelligent tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We integrate AI systems to streamline operations and improve decision-making processes in your DAO.</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Automated governance</li>
                    <li>Data analysis & insights</li>
                    <li>Member engagement tools</li>
                    <li>Prediction markets</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-portland-dark hover:border-portland-pink transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-portland-pink flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <CardTitle>Treasury Management</CardTitle>
                  <CardDescription>Optimizing DAO financial operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We help DAOs establish sustainable financial practices and investment strategies.</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Financial planning</li>
                    <li>Investment strategies</li>
                    <li>Risk management</li>
                    <li>Contributor compensation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-portland-dark hover:border-portland-purple transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-portland-purple flex items-center justify-center mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <CardTitle>Community Building</CardTitle>
                  <CardDescription>Growing engaged & active communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We design strategies to build thriving communities around your decentralized organization.</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Onboarding processes</li>
                    <li>Engagement frameworks</li>
                    <li>Reward systems</li>
                    <li>Cultural development</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-portland-dark hover:border-portland-orange transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-portland-orange flex items-center justify-center mb-4">
                    <span className="text-2xl">📝</span>
                  </div>
                  <CardTitle>Documentation & Learning</CardTitle>
                  <CardDescription>Creating knowledge infrastructure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We help DAOs document processes and create learning resources for contributors and community.</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Process documentation</li>
                    <li>Educational content</li>
                    <li>Onboarding materials</li>
                    <li>Knowledge management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-portland-dark hover:border-portland-lime transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-portland-lime flex items-center justify-center mb-4">
                    <span className="text-2xl">🧩</span>
                  </div>
                  <CardTitle>Crisis Management</CardTitle>
                  <CardDescription>Navigating turbulent periods</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">We provide support during challenging times to help DAOs survive and thrive beyond crises.</p>
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>Emergency governance</li>
                    <li>Conflict resolution</li>
                    <li>Recovery planning</li>
                    <li>Community stabilization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Call to action */}
        <section className="bg-portland-green text-white py-16">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display mb-6">Ready to elevate your DAO?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Our team of governance architects, ops wizards, and market thinkers are ready to help your decentralized organization reach its full potential.
            </p>
            <Link to="/#contact">
              <button className="bg-portland-cream text-portland-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 mx-auto hover:scale-105 transition-transform">
                GET IN TOUCH
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
