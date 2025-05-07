
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    toast({
      title: "Message sent",
      description: "We'll get back to you soon!",
    });
  };

  return (
    <section className="bg-portland-green bg-opacity-50 py-16 border-t border-white/20" id="contact">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-5xl md:text-7xl font-display mb-4 text-portland-dark">/contact</h2>
            <div className="mt-4 hidden md:block">
              <div className="max-w-[240px]">
                <img 
                  src="/lovable-uploads/1b67f968-c8b6-4133-a68d-1629c5e36295.png" 
                  alt="FODAI Logo" 
                  className="w-full border-3 border-white rounded-md"
                />
                <div className="mt-2 bg-portland-dark inline-block rounded-md border-3 border-white p-1">
                  <h2 className="font-display text-3xl">
                    <span className="text-portland-green">F</span>
                    <span className="text-portland-pink ml-1">O</span>
                    <span className="text-portland-orange ml-0.5">D</span>
                    <span className="text-portland-blue ml-0.5">A</span>
                    <span className="text-portland-purple ml-0.5">I</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-portland-dark font-medium">Name</label>
                  <Input id="name" placeholder="Your name" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-portland-dark font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" className="w-full" />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block mb-2 text-portland-dark font-medium">Subject</label>
                <Input id="subject" placeholder="Subject" className="w-full" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-portland-dark font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" className="w-full min-h-[120px]" />
              </div>
              
              <div className="flex justify-end">
                <button type="submit" className="bg-portland-cream text-portland-dark px-8 py-3 rounded-full font-bold">
                  CONNECT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
