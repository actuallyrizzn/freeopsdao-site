
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionBlock from '../components/SectionBlock';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import { 
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '../components/ui/collapsible';
import { Button } from '../components/ui/button';
import { ChevronDown, FileText, GavelIcon, Users, Vote } from 'lucide-react';

export default function Governance() {
  const GovernanceIllustration = () => (
    <div className="flex items-center justify-center px-4 py-3 mr-4 border border-white/30 rounded-lg bg-white/10">
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🏛️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">🗳️</span>
      <span className="text-2xl border border-white rounded-full p-2 mx-1">⚖️</span>
    </div>
  );

  const proposals = [
    {
      id: "prop-001",
      title: "Treasury Allocation Framework",
      status: "Passed",
      proposedDate: "April 15, 2025",
      votingEnds: "April 29, 2025",
      proposedBy: "Core Team",
      summary: "Establish a framework for allocating treasury funds to different initiatives and operational expenses.",
      description: `This proposal aims to create a transparent framework for how The Actual Portland DAO allocates its treasury resources. 

The proposed framework divides funds into four categories:
1. Operations (30%) - Day-to-day expenses, salaries, and maintenance
2. Growth Initiatives (40%) - Marketing, partnerships, and expansion
3. Community Grants (20%) - Supporting member-led projects and innovations
4. Emergency Reserve (10%) - Funds set aside for unforeseen circumstances

Each category will be managed by a designated committee that reports monthly to the DAO members on fund utilization and performance metrics.`,
      votes: { for: 87, against: 12, abstain: 5 }
    },
    {
      id: "prop-002",
      title: "Governance Structure Update",
      status: "Voting Active",
      proposedDate: "April 25, 2025",
      votingEnds: "May 9, 2025",
      proposedBy: "Governance Committee",
      summary: "Update the governance model to include specialized working groups for improved decision-making.",
      description: `This proposal suggests modifying our current governance model to incorporate specialized working groups that can focus on specific aspects of the DAO's operations.

The proposed working groups are:
1. Technology & Development
2. Community & Culture
3. Business Development & Partnerships
4. Treasury Management & Finance

Each working group would have delegated authority to make decisions within their domain, with major decisions still requiring a full DAO vote. This structure aims to increase efficiency while maintaining decentralized control.`,
      votes: { for: 56, against: 23, abstain: 12 }
    },
    {
      id: "prop-003",
      title: "Membership Criteria Revision",
      status: "Draft",
      proposedDate: "May 1, 2025",
      votingEnds: "Not scheduled",
      proposedBy: "Membership Committee",
      summary: "Revise the criteria and process for new members joining the DAO.",
      description: `This draft proposal aims to refine our membership onboarding process to ensure alignment with the DAO's values and goals.

Key changes include:
1. Implementation of a three-stage application process
2. Introduction of a mandatory orientation program
3. Creation of a mentorship system for new members
4. Adjustments to minimum token requirements

The goal is to create a more robust vetting process while remaining inclusive and accessible to qualified individuals who share our vision.`,
      votes: { for: 0, against: 0, abstain: 0 }
    }
  ];

  // Helper function to determine status badge styling
  const getStatusBadge = (status) => {
    switch(status) {
      case "Passed":
        return "bg-green-100 text-green-800 border border-green-300";
      case "Voting Active":
        return "bg-blue-100 text-blue-800 border border-blue-300";
      case "Draft":
        return "bg-gray-100 text-gray-800 border border-gray-300";
      case "Rejected":
        return "bg-red-100 text-red-800 border border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-300";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <SectionBlock 
          title="/governance" 
          subtitle="No Rulers, Just Rules"
          backgroundColor="bg-portland-lime" 
          illustration={<GovernanceIllustration />}
        />
        
        <section className="bg-portland-dark text-white py-16">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-4xl font-display mb-6">Our Governance Model</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-display mb-4">Decision Making</h3>
                <p className="mb-4">
                  We have a DAOhaus variety MolochDAO, which separates the concerns of investment and decision-making. 
                  Our voting token is $strategy (non-transferrable), of which there are only issued 99 total to our main decision makers. 
                  Our loot token is $tactics, which only has a supply of 132.
                </p>
                <p className="mb-4">
                  <a href="https://etherscan.io/address/0x4ea73619a52279311b25ae94e6886c450dfc239f" 
                     className="text-portland-lime hover:underline" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Link: $strategy
                  </a>
                </p>
                <p className="mb-4">
                  <a href="https://etherscan.io/address/0x962d268e8d3e6fe7aa3c97db0fc436978b70b714" 
                     className="text-portland-lime hover:underline" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Link: $tactics
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-display mb-4">Proposal Process</h3>
                <p className="mb-4">
                  Anyone, regardless of token holder status, may issue a proposal, but it can only be voted on by the $strategy holders.
                </p>
                <p className="mb-4">
                  <a href="https://admin.daohaus.club/#/molochv3/0x1/0x701945c2faadda357d213e0b165ecda0bee6b4fe/proposals" 
                     className="text-portland-lime hover:underline" 
                     target="_blank" 
                     rel="noopener noreferrer">
                    Issue a proposal
                  </a>
                </p>
              </div>
            </div>
            
            <Separator className="my-8 bg-white/20" />
            
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-display mb-8">Governance Proposals</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {proposals.map((proposal) => (
                  <Card key={proposal.id} className="bg-white/10 border-white/20 text-white h-full flex flex-col">
                    <CardHeader>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap justify-between items-start gap-2">
                          <CardTitle className="text-2xl font-display">{proposal.title}</CardTitle>
                          <div className={`px-3 py-1.5 rounded-full text-sm font-medium self-start ${getStatusBadge(proposal.status)}`}>
                            {proposal.status}
                          </div>
                        </div>
                        <CardDescription className="text-white/70">
                          Proposed by {proposal.proposedBy} on {proposal.proposedDate}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-lg mb-4">{proposal.summary}</p>
                      
                      <Collapsible className="w-full">
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" className="w-full flex justify-between border-white/30 hover:bg-white/10 hover:text-white mt-2">
                            View Full Proposal <ChevronDown className="h-4 w-4" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4">
                          <div className="bg-white/5 p-4 rounded-md border border-white/10">
                            <div className="whitespace-pre-line">{proposal.description}</div>
                            
                            {proposal.status !== "Draft" && (
                              <div className="mt-6">
                                <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                                  <Vote className="h-5 w-5" /> 
                                  Voting Results
                                </h4>
                                <div className="grid grid-cols-3 gap-4 mb-2">
                                  <div className="bg-green-800/30 p-3 rounded-md border border-green-700/30">
                                    <span className="block text-lg font-medium">For</span>
                                    <span className="block text-2xl">{proposal.votes.for}</span>
                                  </div>
                                  <div className="bg-red-800/30 p-3 rounded-md border border-red-700/30">
                                    <span className="block text-lg font-medium">Against</span>
                                    <span className="block text-2xl">{proposal.votes.against}</span>
                                  </div>
                                  <div className="bg-gray-800/30 p-3 rounded-md border border-gray-700/30">
                                    <span className="block text-lg font-medium">Abstain</span>
                                    <span className="block text-2xl">{proposal.votes.abstain}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            <div className="mt-6">
                              <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                                <FileText className="h-5 w-5" /> 
                                Additional Information
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <span className="block text-white/70">Proposal ID:</span>
                                  <span className="block">{proposal.id}</span>
                                </div>
                                <div>
                                  <span className="block text-white/70">Voting Period:</span>
                                  <span className="block">
                                    {proposal.status === "Draft" ? "Not yet scheduled" : `Ends ${proposal.votingEnds}`}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                    <CardFooter className="mt-auto flex justify-between border-t border-white/10 pt-4">
                      <div className="flex items-center gap-2 text-sm text-white/70">
                        <Users className="h-4 w-4" />
                        <span>
                          {proposal.status === "Draft" ? "Not yet open for voting" : 
                           `${proposal.votes.for + proposal.votes.against + proposal.votes.abstain} votes cast`}
                        </span>
                      </div>
                      
                      {proposal.status === "Voting Active" && (
                        <Button variant="outline" className="text-portland-lime border-portland-lime hover:bg-portland-lime/20">
                          Cast Vote
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
