import { Ruler, Scissors } from 'lucide-react'
import React from 'react'

const Proof = () => {
  return (
    // <div className='w-full h-screen bg-[#C2A86C] flex justify-center items-center mt-10'>
    //     <div className='flex justify-around items-center p-10'>
    //         <div className='flex flex-col justify-between items-center'>
    //             <h1>Precision-crafted fashion for every body</h1>
    //         </div>
    //     </div>
    // </div>
        <div className="h-auto bg-[#C2A86C]  flex items-center">
      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column - Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-[#1a1a1a] text-5xl lg:text-6xl font-light leading-tight">
             Precision-crafted<br />
            tailoring for<br />
            every body
          </h1>
         

          
          <p className="text-[#4a4a4a] text-lg max-w-md">
            Crafted with precision, tailored for you. Our advanced algorithm, backed by a decade of sizing data, guarantees the perfect fit before our artisans bring it to life. Hard to believe? Experience it yourself.
          </p>

          <button className="mt-8 px-8 py-3 border-2 border-[#1a1a1a] text-[#1a1a1a] rounded-full hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
            Know more
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-1/2">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="relative">
              <video src='/desktop.mp4' autoPlay loop muted playsInline/>
              
              {/* Measurement Icons */}
              <div className="absolute -left-4 top-0 bg-white p-3 rounded-full shadow-md">
                <Ruler className="w-6 h-6 text-[#1a1a1a]" />
              </div>
              <div className="absolute right-4 bottom-4 bg-white p-3 rounded-full shadow-md">
                <Scissors className="w-6 h-6 text-[#1a1a1a]" />
              </div>

              {/* Custom Label */}
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                <span className="text-sm font-medium">CUSTOM SUIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proof