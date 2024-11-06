import MegaPhone from "../app/assets/Megaphone.png";
import GraphicPen from "@/app/assets/Graphic.png";
import WebPage from "@/app/assets/WebPage.png";
import ContentContainer from "@/app/ui/about/ContentContainer";
import HeroSection from "./dashboard/HeroSection";
import VideoPlayer from "./dashboard/VideoPlayer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <HeroSection />
    </div>
  );
}
