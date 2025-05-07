
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SectionBlockProps {
  title: string;
  subtitle?: string;
  backgroundColor: string;
  textColor?: string;
  illustration?: React.ReactNode;
  buttonColor?: string;
  linkTo?: string;
}

export default function SectionBlock({
  title,
  subtitle,
  backgroundColor,
  textColor = 'text-portland-dark',
  illustration,
  buttonColor = 'bg-portland-cream',
  linkTo
}: SectionBlockProps) {
  // Extract the path from the title (e.g., "/governance" -> "governance")
  const path = title.startsWith('/') ? title.substring(1) : title.toLowerCase();
  const finalLinkTo = linkTo || `/${path}`;
  
  return (
    <section className={`${backgroundColor} ${textColor} py-16 border-t border-white/20`}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/3">
            <h2 className="text-5xl md:text-7xl font-display mb-4">{title}</h2>
            {subtitle && <p className="text-xl mb-4 font-medium opacity-90">{subtitle}</p>}
          </div>
          <div className="w-full md:w-1/3 flex justify-end mt-6 md:mt-0">
            {illustration && <div className="mr-4">{illustration}</div>}
            <Link to={finalLinkTo}>
              <button className={`${buttonColor} text-portland-dark px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-transform hover:scale-105`}>
                EXPLORE
                <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
