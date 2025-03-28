"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "./ui/carousel";

const images = [
  {default:"/bg3.jpg", hover:"/image2.png"},
  {default:"/image.png", hover: "/image3.png"},
  {default:"/image4.png", hover: "/image5.png"},
  {default:"/image6.png",hover: "/image7.png"},
  {default:"/image8.png", hover: "/image9.png"}
];

const ImageCarousel = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  return (
     <div className="w-full h-auto flex items-center flex-col justify-center pt-20 pb-20">
        <div className="w-full p-10 text-center">
            <h1 className="text-5xl font-bold mx-auto max-w-3xl">
                Tailored to perfection, head to toe.
            </h1>
        </div>
      <Carousel opts={{ align: "start" , dragFree: true}} className="w-full max-w-7xl h-full max-sm:p-10">
        <CarouselContent className="">
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className=" h-full flex items-center justify-center"
               onMouseOver={() => {
                setHoverIndex(index)
               }}
               onMouseLeave={() => {
                setHoverIndex(null)
               }}
              >
                <Image 
                  src={hoverIndex === index ? image.hover : image.default} 
                  alt={`Slide ${index + 1}`} 
                  width={600} 
                  height={600} 
                  className="rounded-sm object-cover w-full h-[500px] transition-all ease-in-out duration-500" // 
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-20 h-20 border-gray-700 cursor-pointer"/>
        <CarouselNext className="max-sm:hidden w-20 h-20 border-gray-700 cursor-pointer"/>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
