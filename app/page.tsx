import Happy from "@/components/Happy";
import HeroSection from "@/components/HeroSection";
import ImageCaraousel from "@/components/ImageCaraousel";
import MoreInformation from "@/components/MoreInformation";
import Navbar from "@/components/Navbar";
import NoName from "@/components/NoName";
import OutfitIdea from "@/components/OutfitIdeas";
import Proof from "@/components/Proof";





export default function Home() {
  return (
    <>
     <Navbar />
      <div className="relative z-10 w-full">
        <HeroSection />
      </div>
      <div className="w-full">
        <ImageCaraousel />

      </div>
      <Proof />
      <OutfitIdea />
      <NoName />
      <Happy />
      <MoreInformation />
    </>
  );
}
