import Image from 'next/image';
import React from 'react';

function Happy() {
  return (
    <div className="min-h-screen bg-[#9B4F3C]">
      <div className="relative min-h-screen">
        
        <div className="grid grid-cols-3 gap-4 p-8">
          
          <div className="space-y-4">
            <Image 
              src="/image10.png" 
              alt="Wedding party" 
              className="w-full h-80 object-cover rounded-lg"
              width={400}
              height={400}
            />
            <Image
              src="/image11.png" 
              alt="Couple in suits" 
              className="w-full h-96 object-cover rounded-lg"
              width={400}
              height={400}
            />
          </div>

          
          <div className="space-y-4 mt-16">
            <Image 
              src="/image7.png" 
              alt="Man in overcoat" 
              className="w-full h-[500px] object-cover rounded-lg"
              width={400}
              height={400}
            />
          </div>

          
          <div className="space-y-4 mt-32">
            <Image 
              src="/image8.png" 
              alt="Man in suit" 
              className="w-full h-80 object-cover rounded-lg"
              width={400}
              height={400}
            />
            <Image 
              src="/image9.png" 
              alt="Men in formal wear" 
              className="w-full h-96 object-cover rounded-lg"
              width={400}
              height={400}
            />
          </div>
        </div>

        
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 max-w-xl text-white p-8">
          <h1 className="text-6xl font-light leading-tight mb-6">
            Perfect fit garments, to your specifications
          </h1>
          <p className="text-lg mb-8">
            From fabrics and buttons to pocket styles and lining colors, personalize your handcrafted look. Take control and feel confident with our Perfect Fit Guarantee.
          </p>
          <button className="text-white hover:text-white/80 transition-colors underline underline-offset-4">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Happy;