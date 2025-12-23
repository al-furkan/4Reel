import React from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function VideoProductionLanding() {
  return (
    <div className="min-h-screen bg-[#171719] text-white">
      {/* Hero Section */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 py-8 md:py-10">
        <div className="mb-8">
          <h1 className="text-[40px] md:text-[64px] font-bold mb-2">
            Watch the work
          </h1>
          <p className="text-2xl md:text-[40px] text-[#FFFFFF]">
            One brand. Four angles.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Video 1 - Interview */}
          <div className="hidden md:block relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=600&fit=crop" 
              alt="Interview scene" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Video 2 - Flag Scene */}
          <div className="hidden md:block relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=600&fit=crop" 
              alt="Flag production" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Video 3 - Urban Night */}
          <div className="hidden md:block relative aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=600&fit=crop" 
              alt="Urban scene" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Video 4 - Ski Jump with Play Button */}
          <div className="relative aspect-[3/4] bg-gradient-to-b from-cyan-500 to-blue-600 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop" 
              alt="Ski jump" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-7 h-7 text-black ml-1" fill="black" />
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-12">
          <p className="text-base text-gray-400 uppercase tracking-wider mb-4">
            HOW TO GET STARTED
          </p>
          <h2 className="text-[32px] md:text-[64px] font-[Degular Demo] leading-[64px] tracking-normal mb-16">
            We ensure that every video we produce is<br className="hidden md:block" /> built on a strong foundation
          </h2>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Book a discovery call */}
          <div className="relative bg-[linear-gradient(138.39deg,_#DCEEF9_1.15%,_#1D6FA4_130.86%)] rounded-lg p-8 text-black overflow-hidden">
            <div className="absolute top-6 right-6">
            <Image
        src="/icon/Layer.png"
        alt="Hero Image"
        width={64}
        height={64}
        className="w-16 h-16"
      />
            </div>
            
            <div className="mb-4">
              <p className="text-sm font-medium mb-20">• Now</p>
              <h3 className="text-xl font-medium font-[Degular Demo] mb-4">Book a discovery call</h3>
              <p className="text-sm text-[#171719]">
                Consult with an expert to discuss your objectives and requirements. Receive a complimentary website launch checklist along with guidance for a successful launch.
              </p>
            </div>
            
            <button className="w-full bg-black text-white py-2 px-4 rounded font-medium hover:bg-gray-900 transition-colors">
              Book Now
            </button>
          </div>

          {/* Card 2 - Get a proposal */}
          <div className="relative bg-[#2C2C2C] rounded-lg p-8 border border-gray-700 overflow-hidden group hover:border-gray-600 transition-colors">
                 <div className="absolute top-6 right-6">
            <Image
        src="/icon/Bauhaus.png"
        alt="Hero Image"
        width={64}
        height={64}
        className="w-16 h-16"
      />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-20">• 1-2 Days</p>
              <h3 className="text-xl font-[Degular Demo] mb-4">Get a proposal</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                We provide more than just estimates. Our team will develop a strategic plan tailored to your project goals, complete with recommendations and a structured web framework.
              </p>
            </div>
          </div>

          {/* Card 3 - Launch your project */}
          <div className="relative bg-[#2C2C2C] rounded-lg p-8 border border-gray-700 overflow-hidden group hover:border-gray-600 transition-colors">
            <div className="absolute top-6 right-6">
               <Image
        src="/icon/Bauhaus.png"
        alt="Hero Image"
        width={64}
        height={64}
        className="w-16 h-16"
      />
            </div>
            
            <div>
              <p className="text-sm text-gray-400 mb-20">• 4-5 Weeks</p>
              <h3 className="text-xl font-[Degular Demo] mb-4">Launch your project</h3>
              <p className="text-sm text-[#B8B8B8] leading-relaxed">
                Experience seamless onboarding via Slack, ensuring we are prepared to begin promptly. We will conduct a kick-off meeting, provide weekly updates, and maintain regular communication through Loom videos and messages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}