

import type { Metadata } from "next";
import { Dosis} from "next/font/google";
import "./globals.css";
import Topbar from "@/components/Topbar";

import Footer from "@/components/Footer";


const dosis = Dosis({
  weight: "500",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dosis.className}  antialiased`}
      >
        <Topbar />
        
        
        <div className="flex flex-col">
          
          {children}

        </div>
        <Footer />
      
      </body>
    </html>
  );
}
