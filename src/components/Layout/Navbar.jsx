"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Video Content",
    duration: "2-3 Weeks",
    icon: (
     <Link href="/video-content">
              <Image 
                src="/icon/a.png" 
                alt="4REEL Logo" 
                width={70} 
                height={70}
                className="h-18 w-18"
              />
        </Link>
    )
  },
  {
    title: "Social Media Content Planner",
    duration: "1-3 Weeks",
    icon: (
       <Link href="/social-media" >
              <Image 
                src="/icon/b.png" 
                alt="4REEL Logo" 
                width={70} 
                height={70}
                className="h-18 w-18"
              />
        </Link>
    )
  },
  {
    title: "Web Design",
    duration: "2-5 Weeks",
    icon: (
      <Link href="/web-design" >
              <Image 
                src="/icon/c.png" 
                alt="4REEL Logo" 
                width={70} 
                height={70}
                className="h-18 w-18"
              />
        </Link>
    )
  },
  {
    title: "Development",
    duration: "4-8 Weeks",
    icon: (
       <Link href="/development" >
              <Image 
                src="/icon/d.png" 
                alt="4REEL Logo" 
                width={70} 
                height={70}
                className="h-18 w-18"
              />
        </Link>
    )
  }
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeAll = () => {
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      
      {/* Navigation */}
      <nav className="max-w-[1440px] mx-auto bg-black  text-white p-4 md:p-8 flex items-center justify-between relative z-40">
        <div className="flex items-center gap-12 bg-[#151515E0] rounded-lg p-4">
           <Link href="/" className="">
              <Image 
                src="/logo/Logo.png" 
                alt="4REEL Logo" 
                width={72} 
                height={22}
                className="h-6 w-auto"
              />
            </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8  text-base font-[250] text-[#FAFAFA]">
            <button 
              className="flex items-center gap-2  "
              onClick={toggleServices}
            >
              Services 
              {isServicesOpen ? (
                 <Image 
                src="/icon/plusr.png" 
                alt="4REEL Logo" 
                width={8} 
                height={8}
                className="h-3 w-auto"
              />
              ) : (
                <Image 
                src="/icon/plus.png" 
                alt="4REEL Logo" 
                width={8} 
                height={8}
                className="h-3 w-auto"
              />
              )}
            </button>
            <Link href="/case-studies" className=" ">
              Case studies
            </Link>
            <Link href="/about" className="mr-7 ">
              About
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 bg-[#151515E0] rounded-lg px-4 py-2.5">  
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-[#FAFAFA] font-[250]">Available for Q4</span>
          </div>
          <Link 
            href="#contact" 
            className="bg-white text-black px-4 py-2 rounded-[5px] font-[500] "
          >
            Let's Work
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
           <Image 
                src="/icon/menur.png" 
                alt="4REEL Logo" 
                width={8} 
                height={8}
                className="h-11 w-11"
              />
          ) : (
              <Image 
                src="/icon/menu.png" 
                alt="4REEL Logo" 
                width={8} 
                height={8}
                className="h-11 w-11"
              />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[36px] bg-white text-black z-50 overflow-y-auto h-screen">
            <div className="flex justify-between items-center px-10 pt-6">
             <Link href="/" className="">
              <Image 
                src="/logo/Logob.png" 
                alt="4REEL Logo" 
                width={72} 
                height={22}
                className="h-6 w-auto"
              />
            </Link>
            <button 
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
           <Image 
                src="/icon/menur.png" 
                alt="4REEL Logo" 
                width={8} 
                height={8}
                className="h-11 w-11"
              />
          ) : (
              <Image 
                src="/icon/menu.png" 
                alt="4REEL Logo" 
                width={8} 
                height={8}
                className="h-11 w-11"
              />
          )}
        </button>


        </div>
          <div className="flex flex-col justify-between p-4 space-y-0 min-h-[calc(100vh-92px)]">
           <div>

             {/* Services Toggle */}
            <button 
              className="flex items-center justify-between w-full text-2xl border-b border-[#D5D5D5]  py-2"
              onClick={toggleServices}
            >
              Services 
              {isServicesOpen ? (
                 <Image 
                src="/icon/plusbr.png" 
                alt="4REEL Logo" 
                width={9} 
                height={9}
                className="h-3 w-auto"
              />
              ) : (
                 <Image 
                src="/icon/plusb.png" 
                alt="4REEL Logo" 
                width={8} 
                height={8}
                className="h-3 w-auto"
              />
              )}
            </button>
            
            {/* Mobile Services Cards */}
            {isServicesOpen && (
              <div className="space-y-4 py-6">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 border border-[#D5D5D5] rounded-lg hover:border-gray-400 transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-blue-500 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-normal text-lg">{service.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1.5 rounded-md whitespace-nowrap">
                      {service.duration}
                    </span>
                  </div>
                ))}
              </div>
            )}
            
            <Link href="/case-studies" className="block text-2xl py-6 border-b border-[#D5D5D5]">Case studies</Link>
            <Link href="/about-us" className="block text-2xl py-6 border-b border-[#D5D5D5]">About</Link>
           </div>

            {/* Bottom Section - Testimonial */}
            <div className="mt-8 pt-6">
              <div className="bg-[#DDEFFC] p-6 rounded-lg">
                <p className="text-base leading-relaxed mb-4">
                  "4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."
                </p>
                <div className="text-base text-[#50515B] ">
                  <p className="">Fleur Heyns</p>
                  <p className="">Co-founder & CEO at PROOF</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     {/* Desktop Services Dropdown */}
{isServicesOpen && !isMenuOpen && (
  <>
    {/* Backdrop Overlay */}
    <div
      className="hidden md:block fixed inset-0 top-[92px] bg-black/50 z-30"
      onClick={closeAll}
    />

    {/* Dropdown Container */}
    <div className="hidden md:block fixed top-[140px] left-0 right-0 z-40">
      <div className="max-w-[1344px] mx-auto flex flex-col lg:flex-row px-4 py-12 bg-white rounded-lg shadow-2xl gap-6">
        
        {/* Left Section: Heading + Testimonial */}
        <div className="flex-1 flex flex-col justify-between text-black ">
          {/* Heading */}
          <div>
            <h2 className="text-[56px] font-degular font-medium mb-3">
               Accelerate your launch
           </h2>
            <p >
              Get a free consultation with our experts to find the right solutions for your project.
            </p>
          </div>

          {/* Testimonial */}
          <div className="max-w-[636px]">
            <div className="bg-[#DDEFFC] p-4 rounded-lg">
              <p className=" mb-4">
                "4Reel helped us bring our vision of data-backed storytelling to life in a novel, engaging and highly memorable way."
              </p>
              <div className="text-sm text-[#50515B]">
                <p>Fleur Heyns</p>
                <p>Co-founder & CEO at PROOF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Services Grid */}
        <div className="flex-1 grid grid-cols-2 gap-6 text-black">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-6 border-1 border-[#D5D5D5] rounded-2xl hover:bg-[radial-gradient(40.23%_37.63%_at_50%_50%,_#FF6EC7_0%,_rgba(255,255,255,0)_100%)] transition-all cursor-pointer bg-white"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-2 bg-[#F2F2F2] rounded-[4px] px-2 py-3">
             <div className="w-10 h-10 bg-[#FAFAFA] rounded-[3px] flex items-center justify-center">   
              <Image 
                src="/icon/plusb.png" 
                alt="4REEL Logo" 
                width={44} 
                height={44}
                className="h-4 w-4"
              />
                </div>
                <span className="text-sm text-gray-600  px-3 flex items-center justify-center">
                  {service.duration}
                </span>
                </div>
                  <div className="w-16 h-16 text-blue-500 mb-6">
                {service.icon}
              </div>
              </div>
             
              <h3 className="text-lg  font-[500] ">{service.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  </>
)}

    </>
  );
}