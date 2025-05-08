
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-portland-dark text-white">
        <section className="py-16 border-t border-white/20">
          <div className="container px-4 mx-auto">
            <h1 className="text-5xl md:text-7xl font-display mb-8">contact</h1>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
