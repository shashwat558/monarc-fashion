"use client"

import { Dosis } from 'next/font/google'
import React, { useState, useEffect } from 'react'
import {AnimatePresence, motion} from "framer-motion";

const dosis = Dosis({
    weight: "400",
    subsets: ["latin"]
})


const qualitiesArray = ["Tailored for You, Perfected for Fit", "Custom-Made, Unmatched Comfort", "Designed for You, Measured to Perfection", "Your Fit, Your Style, No Compromises", "Handcrafted Precision, Unrivaled Fit", "Beyond Custom – A Fit Like No Other"]

const Topbar = () => {

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % qualitiesArray.length);
        }, 6000)

        return () => clearInterval(intervalId)
    },[]);

    useEffect(() => {
        setText(qualitiesArray[index])
    },[index])

  return (
    <motion.div  className={`${dosis.className} w-full bg-gray-900 text-center p-1 min-h-8`}  style={{ perspective: 1000 }}>
     <AnimatePresence mode='wait'>
        <motion.p 
          key={text}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }} // Optional for smooth exit
          transition={{ duration: 0.3 }}
        className='text-md'>
            {text}
        </motion.p>
     </AnimatePresence>  
    </motion.div>
  )
}

export default Topbar