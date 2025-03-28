"use client"

import React, { useEffect, useState } from 'react'
import {AnimatePresence, motion} from "framer-motion";
import { Globe, Menu, MessagesSquare, MoveUpRight, ShoppingBag, User, X } from 'lucide-react';
import { Dosis } from 'next/font/google';

const dosis = Dosis({
    weight: "400",
    subsets: ["latin"]
})

const Navbar = () => {
    const [lastScroll, setLastScroll] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if(currentScroll < lastScroll){
                setVisible(true)
            }else {
                setVisible(false)
            }

            setLastScroll(currentScroll)

        }
        

        window.addEventListener("scroll", handleScroll)

        return () => { window.removeEventListener("scroll", handleScroll)}
    },[lastScroll])

    
  return (
    <>
    <motion.div
     initial={{opacity:1, y:0}}
     animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        backgroundColor: lastScroll > 1 ? "#ffffff": "transparent"
        
     }}
     transition={{duration: 0.5, ease: "easeInOut"}}


     className={`sticky w-full top-0 p-4 min-h-[3pc] ${dosis.className} z-50`}>
        
        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center gap-6'>
                <Menu className={`w-7 h-7 ${lastScroll > 1? "text-black" : "text-white"}`} onClick={() => setMenuOpen((prev) => prev = !prev)}/>

                
                <div className={`flex gap-10 items-center  ${lastScroll > 1? "text-black font-light": "text-white font-semibold"} max-sm:hidden`}>
                    <h3>Lookbooks</h3>
                    <h3>Custom clothing</h3>
                    <h3>Custom footwear</h3>
                    <h3 className='flex items-center gap-1'>Women <span><MoveUpRight className='w-4 h-4'/></span></h3>
                </div>
            </div>
            <div className='lg:mr-44 flex items-center'>
                <h1 className={`font-[900] text-center text-3xl ${lastScroll>1 ? "text-black" : "text-white"}`}>Monarc</h1>
            </div>
            <div className={`flex justify-center items-center gap-8 ${lastScroll > 1 ? "text-black": "text-white"}`}>
                <MessagesSquare className='w-5 h-5'/>
                <p className='flex gap-2 items-center max-sm:hidden'><Globe className='w-5 h-5'/> Global</p>
                <p className='flex gap-2 items-center max-sm:hidden'><User className='w-5 h-5'/> Login</p>
                <p className='flex gap-2 items-center'><ShoppingBag className='w-5 h-5'/> Shop</p>
            </div>
        </div>

     </motion.div>
     <AnimatePresence>
     {
        menuOpen && (
         
            <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" , transition: {duration: 0.4, ease: "easeInOut"}}}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-[18rem] h-full shadow-lg shadow-gray-700 z-[100] p-6 bg-[#B35A2E]"
          >
            
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">Menu</h2>
              <X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
            </div>

            
            <ul className="mt-6 space-y-4 text-lg font-light ">
              <li className="cursor-pointer text-gray-300 hover:text-gray-500">Lookbooks</li>
              <li className="cursor-pointer text-gray-300 hover:text-gray-500">Custom Clothing</li>
              <li className="cursor-pointer text-gray-300 hover:text-gray-500">Custom Footwear</li>
              <li className="cursor-pointer text-gray-300 hover:text-gray-500 flex items-center gap-1">
                Women <MoveUpRight className="w-4 h-4"/>
              </li>
            </ul>
          </motion.div>
         
        )}
        </AnimatePresence>
     
        
    </>
  )
}

export default Navbar