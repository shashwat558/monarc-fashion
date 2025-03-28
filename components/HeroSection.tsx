import React from 'react'

import { Dosis } from 'next/font/google'

const dosis = Dosis({
  weight: "500",
  subsets: ["latin"]
})
const HeroSection = () => {
  return (
    <div className='w-full h-screen -z-10 -mt-[68px]'>
        <div className="h-full bg-cover brightness-75 flex flex-col-reverse justify-between max-sm:bg-center" style={{backgroundImage: `url("/bg3.jpg")`}}>
      
      <div className={` ${dosis.className} md:mb-40 md:pl-10 pb-10 flex flex-col gap-5 align-text-bottom`}>
        <h1 className="text-7xl max-sm:text-center">Style that speaks your truth</h1>
        <p className="text-2xl tracking-wide font-semibold max-sm:text-center">Crafted for a perfect fit, designed for distinction.</p>
      </div>
      </div>
    </div>
  )
}

export default HeroSection