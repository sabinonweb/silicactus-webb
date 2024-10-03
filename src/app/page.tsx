import "./globals.css";
import MobileContent from "../app/assets/MobileContent.svg";
import Image from "next/image";
import MegaPhone from "../app/assets/Megaphone.png";
import GraphicPen from "@/app/assets/Graphic.png";
import WebPage from "@/app/assets/WebPage.png";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row flex-1 bg-[var(--primary-color)] items-center md:justify-evenly justify-center flex-wrap">
      <div className="flex relative">
        <Image
          src={MobileContent}
          alt="Mobile Content Box"
          className="min-w-[300px] p-4"
        />
        <div className="absolute inset-0 flex justify-evenly items-center flex-col">
          <Image src={GraphicPen} alt="Megaphone" className="w-96 h-96" />
          <h1 className="text-[var(--primary-text-color)] text-4xl max-w-full text-center p-7">
            Engaging designs that inspire action
          </h1>
        </div>
      </div>
      <div className="flex relative">
        <Image
          src={MobileContent}
          alt="Mobile Content Box"
          className="min-w-[300px] p-4"
        />
        <div className="absolute inset-0 flex justify-evenly items-center flex-col">
          <Image src={WebPage} alt="Megaphone" className="w-96 h-96" />
          <h1 className="text-[var(--primary-text-color)] text-4xl max-w-full text-center p-6">
            Crafting dynamic websites that perform
          </h1>
        </div>
      </div>
      <div className="flex relative">
        <Image
          src={MobileContent}
          alt="Mobile Content Box"
          className="min-w-[300px] p-4"
        />
        <div className="absolute inset-0 flex justify-evenly items-center flex-col">
          <Image src={MegaPhone} alt="Megaphone" className="w-96 h-96" />
          <h1 className="text-[var(--primary-text-color)] text-4xl max-w-full text-center p-4">
            Boost your brand's online presence
          </h1>
        </div>
      </div>
    </div>
  );
}
