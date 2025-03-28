"use client"

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const outfits = [
    {
      id: 1,
      image: "/image.png",
      category: "Business Casual"
    },
    {
      id: 2,
      image: "/image4.png",
      category: "Smart Casual"
    },
    {
      id: 3,
      image: "/image3.png",
      category: "Formal"
    },
    {
      id: 4,
      image: "/image5.png",
      category: "Business"
    },
    {
      id: 5,
      image: "/image7.png",
      category: "Casual"
    },
    {
      id: 6,
      image: "/image8.png",
      category: "Smart"
    }
  ];

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === outfits.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? outfits.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className=" bg-[#0F223B] text-white pb-10 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl font-light mb-4">Outfit Ideas</h1>
          <p className="text-gray-300 text-xl w-xl">
            Get inspired by our community. Real customers like you styling
            great outfits based on our garments
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-4 overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (300 + 16)}px)` }}
            >
              {outfits.map((outfit) => (
                <div
                  key={outfit.id}
                  className="relative flex-none w-[300px]"
                >
                  <div className="relative h-[400px] group mr-6">
                    <Image
                      width={400}
                      height={400}
                      src={outfit.image}
                      alt={`Outfit ${outfit.id}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-black text-white px-6 py-2 rounded-full text-sm uppercase tracking-wide">
                        Shop Look
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="flex gap-2">
            {outfits.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">
            Check them all
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;