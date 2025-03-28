import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="h-full" style={{backgroundImage: `url("/path/to/your/image.jpg")`}}>
      <Navbar />
      </div>
    </div>
  );
}
