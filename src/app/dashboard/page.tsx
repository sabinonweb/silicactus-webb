import MobileFramework from "@/app/assets/MobileSvg.svg";
import Framework from "@/app/assets/Framework.svg";
import Image from "next/image";
import SiliLogo from "@/app/assets/SiliCactus.svg";
import Link from "next/link";
import Cyborg from "@/app/assets/Cyborg.png";
import LG from "@/app/assets/1024.svg";
import { Icons } from "../lib/data";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden gap-y-16">
      <div className="flex justify-between lg:justify-around items-center">
        <Image src={SiliLogo} alt="SiliCactus Logo" />

        <div className="border border-[var(--primary-color)] p-2 rounded-full lg:flex min-w-[400px] justify-around hidden">
          <Link href="/services">Services</Link>
          <Link href="/services">Pricing</Link>
          <Link href="/services">About</Link>
          <Link href="/services">Contact</Link>
        </div>

        <div className="lg:flex gap-8 hidden">
          <Link
            href="/connect"
            className="border border-[var(--primary-color)] p-2 bg-[var(--primary-color)] flex items-center gap-2 rounded-lg"
          >
            <h1 className="text-[var(--secondary-text-color)]">Stories</h1>
          </Link>
          <Link
            href="/connect"
            className="border border-[var(--primary-color)] p-2 bg-[var(--primary-color)] flex items-center gap-2 rounded-lg"
          >
            <Icons.FaCircleChevronRight className="text-[var(--secondary-text-color)]" />
            <h1 className="text-[var(--secondary-text-color)]">Get In Touch</h1>
          </Link>
        </div>
        <Icons.HiBars3 size={40} className="lg:hidden" />
      </div>
      {/* <div className="flex flex-col justify-center">
        <div className="w-full relative">
          <div className="relative flex justify-center">
            <Image
              src={MobileFramework}
              alt="Framework"
              className="w-full sm:hidden"
            />
            <Image
              src={Framework}
              alt="Framework"
              className="hidden lg:block w-full object-cover"
            />
            <Image
              src={LG}
              alt="Framework"
              className="hidden sm:block lg:hidden w-full"
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <h1 className="font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-4">
              Embark On your Technological Journey with Professionals
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-y-6">
          <div className="flex w-5/6 text-slate-400 justify-evenly flex-1 self-center">
            <div className="flex-[0.7]"></div>
            <h1 className="pr-8 p-4 lg:w-1/4 w-full">
              Welcome to SiliCactus. Your gateway to providing high end services
              with us to your valued customers.
            </h1>
          </div>
          <div className="flex">
            <div className="flex-[0.71] "></div>
            <button className="border border-[var(--primary-color)] p-2 bg-[var(--primary-color)] flex items-center gap-2 rounded-lg lg:self-end">
              <h1 className="text-[var(--secondary-text-color)]">
                Explore More
              </h1>
              <Icons.FaArrowRight className="text-[var(--secondary-text-color)]" />
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}
