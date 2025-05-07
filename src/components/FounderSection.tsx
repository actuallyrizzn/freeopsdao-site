
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import BrandName from './BrandName';

export default function FounderSection() {
  return (
    <section className="bg-portland-cream text-portland-dark py-16 border-t border-white/20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl md:text-7xl font-display mb-12">who we are</h2>
            
            <div className="mb-6">
              <p className="text-lg">
                twitter <a href="http://x.com/freeopsdao" className="text-portland-green underline">@freeopsdao</a>
              </p>
              <p className="text-lg">
                telegram <a href="https://t.me/freeopsdao" className="text-portland-green underline">t.me/freeopsdao</a>
              </p>
            </div>
            
            <h3 className="text-3xl font-display mb-4"><BrandName size="3xl" /> COLLECTIVE</h3>
            
            <p className="text-lg mb-4">
              <BrandName /> is a collective of governance architects, ops wizards, and market thinkers that helps DAOs become unstoppable.
            </p>
            
            <p className="text-lg">
              We've helped DAOs survive votes, deploy funds, calm chaos, and win community trust. We've advised everyone from memecoin insurgents to IBM-aligned enterprises.
            </p>
          </div>
          
          <div className="relative">
            {/* Team members in inverted triangle - aligned with header */}
            <div className="flex flex-col items-center">
              {/* Top row - center - aligned with "who we are" */}
              <div className="flex justify-center mb-8">
                <TeamMember 
                  name="Rizzn" 
                  imagePath="/lovable-uploads/8784b191-4f7c-4a59-a63e-74fde8e14977.png"
                  bgColor="bg-portland-green"
                />
              </div>
              
              {/* Bottom row - two members */}
              <div className="flex justify-center space-x-8 md:space-x-16">
                <TeamMember 
                  name="Schlomo" 
                  imagePath="/lovable-uploads/48fbea78-39ea-4adc-88b5-c05b610accbf.png"
                  bgColor="bg-portland-orange"
                />
                <TeamMember 
                  name="Chucky" 
                  imagePath="/lovable-uploads/c17b284d-1dea-4a72-a475-a651c3af9ff3.png"
                  bgColor="bg-portland-purple"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TeamMemberProps {
  name: string;
  imagePath: string;
  bgColor: string;
}

function TeamMember({ name, imagePath, bgColor }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${bgColor} flex items-center justify-center mb-4`}>
        <Avatar className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden">
          <AvatarImage src={imagePath} alt={name} className="object-cover" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-xl font-bold">{name}</span>
    </div>
  );
}
