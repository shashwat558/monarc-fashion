import Image from 'next/image';
import React from 'react';

function NoName() {
  return (
    <div className="min-h-screen bg-white">
      <section className="flex flex-col justify-center lg:flex-row min-h-screen p-10">
        <div className="relative flex-1 h-full">
          <Image 
            src="/image10.png"
            alt="Rolled fabric textures"
            className="h-full w-full object-cover shadow-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center px-16 py-20">
          <div className="max-w-lg">
            <h1 className="text-[56px] leading-tight font-light text-gray-800 mb-6">
              Our planet<br />appreciates it
            </h1>
            <p className="text-gray-700 text-lg mb-10">
              Look good, feel good, and tread lightly. Every unique piece means less waste and more impact where it matters
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white text-gray-800 transition-colors duration-200">
              {"Learn how it's made"}
            </button>
          </div>
        </div>
      </section>
      
      <section className="flex flex-col-reverse lg:flex-row min-h-screen p-10">
        <div className="flex-1 flex flex-col justify-center items-center px-16 py-20">
          <div className="max-w-lg">
            <h1 className="text-[56px] text-gray-800 leading-tight font-light mb-6">
              Style that <br />speaks
            </h1>
            <p className="text-gray-700 text-lg mb-10">
              Style with purpose, crafted exclusively for you—because true sustainability begins with thoughtful design, precision tailoring, and a perfect fit that eliminates waste and elevates your wardrobe for years to come.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white text-gray-800 transition-colors duration-200">
              Style that speaks
            </button>
          </div>
        </div>
        <div className="relative flex-1 h-full">
          <Image 
            src="/image11.png"
            alt="Rolled fabric textures"
            className="w-full h-full object-cover shadow-lg"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}

export default NoName;
