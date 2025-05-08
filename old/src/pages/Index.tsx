
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Description from '../components/Description';
import SectionBlock from '../components/SectionBlock';
import AISection from '../components/AISection';
import ContactForm from '../components/ContactForm';
import FounderSection from '../components/FounderSection';
import Footer from '../components/Footer';

const Index = () => {
  const GovernanceIllustration = () => (
    <div className="flex items-center justify-center px-4 py-3 mr-4 border border-white/30 rounded-lg bg-white/10">
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🏛️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🗳️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">⚖️</span>
    </div>
  );
  
  const ServicesIllustration = () => (
    <div className="flex items-center justify-center px-4 py-3 mr-4 border border-white/30 rounded-lg bg-white/10">
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🛠️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🤝</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">💼</span>
    </div>
  );

  const ProjectIllustration = () => (
    <div className="flex items-center justify-center px-4 py-3 mr-4 border border-white/30 rounded-lg bg-white/10">
      <span className="text-2xl border border-white rounded-full p-2 mx-1">✍️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">📦</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">⚙️</span>
    </div>
  );

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
      <Hero />
      <AISection />
      <SectionBlock 
        title="/services" 
        subtitle="How We Can Help"
        backgroundColor="bg-portland-purple" 
        textColor="text-white"
        illustration={<ServicesIllustration />}
        buttonColor="bg-portland-cream text-portland-dark"
        linkTo="/services"
      />
      <SectionBlock 
        title="/governance" 
        subtitle="No Rulers, Just Rules"
        backgroundColor="bg-portland-lime" 
        illustration={<GovernanceIllustration />}
        linkTo="/governance"
      />
      <SectionBlock 
        title="/projects" 
        subtitle="Build, Ship, Iterate"
        backgroundColor="bg-portland-pink" 
        illustration={<ProjectIllustration />}
        linkTo="/projects"
      />
      <SectionBlock 
        title="/clients" 
        subtitle="Who We Work With"
        backgroundColor="bg-[#8CDED0]" 
        textColor="text-portland-dark"
        illustration={<ClientIllustration />}
        buttonColor="bg-portland-green text-white"
        linkTo="/clients"
      />
      <Description />
      <ContactForm />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default Index;
