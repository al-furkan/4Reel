import Image from "next/image";

export default function BrandLandingPage() {
  return (
    <div className="min-h-auto bg-white">
      {/* Our Approach Section */}
      <section className="px-4 py-8 md:py-10 lg:py-10 max-w-[1440px] mx-auto text-black">
        <h2 className="text-[32px] md:text-[64px] font-medium mb-12 md:mb-16">
          Our approach
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-xl">
          {/* Left Column */}
          <div className="space-y-8 md:space-y-12">
            <div className="border-t border-gray-200 pt-6">
              <h3 className="  font-normal mb-3">
                A simple philosophy:<br />quality over quantity.
              </h3>
            </div>
            
            <div className="hidden md:block border-t border-gray-200 pt-6">
              <h3 className="text-xl font-normal mb-3">
                Performance & emotion.<br />You need both.
              </h3>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6 md:space-y-8">
            <p className="text-xl font-[Suisse Intl] ">
              We build brands that stand out on shelves, in their fields. Our brands have helped 
              rapidly delivering strategic vision. Combine with profile nurturing among 
              emotional connection with our clients, and ensuring exceptional quality, that 
              come over to get there.
            </p>

             <div className="block md:hidden border-t border-gray-200 pt-6">
              <h3 className="text-xl font-normal mb-3">
                Performance & emotion.<br />You need both.
              </h3>
            </div>
            
            <p className="text-xl font-[Suisse Intl]">
              We craft brands that become category leaders. These brands aren't built on 
              products alone. Emotional connection and sustainable growth are the two essen 
              tials to get there. This is how you drive retention and a dvocacy.
            </p>
          </div>
        </div>
      </section>

    <section className="max-w-[1440px] mx-auto overflow-hidden text-black">
  <marquee
    direction="right"
    scrollamount="5"
    className="font-degular font-medium text-[80px] md:text-[160px] leading-[90px] md:leading-[170px] whitespace-nowrap"
  >
    We make sure we build every website on a solid foundation
  </marquee>
</section>

      {/* CTA Section with Image */}
      <section className="px-4 pb-12 md:pb-16 lg:pb-20 max-w-[1440px] mx-auto text-black">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - CTA Content */}
          <div className="space-y-6">
            <h2 className="text-[32px] md:text-[104px] leading-[88px]
 font-[Degular Demo] ">
              Accelerate<br />your launch
            </h2>
            
            <p className="text-sm md:text-base text-gray-700 max-w-md">
              Get a free consultation with our experts<br />
              to find the right solutions for your project.
            </p>
            
            <button className="bg-black text-white px-14 py-2 text-sm md:text-base hover:bg-gray-800 transition-colors duration-200 rounded">
              Book Now
            </button>
          </div>
          
          {/* Right - Image */}
          <div className="relative">
            <div className="relative w-full aspect-square md:aspect-auto md:h-96 lg:h-[500px]">
              {/* Purple fabric/material image placeholder */}
              
              {/* THREE text overlay */}
              <div className="absolute bottom-0 left-0 right-0">
                <Image
  src="/home/logoimg.png"
  alt="External Image"
  width={500}
  height={300}
  className="w-full h-full"
/>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Optimized Spacing */}
      <div className="h-12 md:h-16"></div>
    </div>
  );
}