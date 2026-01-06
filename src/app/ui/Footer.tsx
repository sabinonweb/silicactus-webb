"use client";

import Link from "next/link";
import { navItems, socialLinks } from "../lib/navItems";
import { Icons } from "../lib/data";
import * as motion from "framer-motion/client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.3"],
  });
  console.log("usescsdajkc ", scrollYProgress);
  const opacity = useTransform(scrollYProgress, [0, 2], [0, 1]);
  console.log("opacity sajndaksdnkca", opacity);

  return (
    <div className="flex flex-col items-center p-4 flex-wrap gap-y-4 ">
      <motion.div
        ref={ref}
        className="text-white font-playfair_display lg:text-[16rem] md:text-[12rem] sm:text-[8rem] text-8xl p-4 bg-[#1c1c26] rounded-lg"
        style={{ opacity }}
      >
        silicactus
      </motion.div>
      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="bg-[#1c1c26] flex flex-col p-8 text-4xl rounded-lg lg:w-80">
          {navItems.map((data, index) => (
            <Link
              key={index}
              className={`text-white p-2 ${
                pathname === data.href ? "border-b-2 border-b-gray-500" : ""
              }`}
              href={data.href}
            >
              {data.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 bg-[#1c1c26] p-6 rounded-lg">
            <Icons.PiSunThin color="white" size={30} />
            <h1 className="text-white text-xl">
              business.silicactus@gmail.com
            </h1>
          </div>
          <div className="flex gap-4 bg-[#1c1c26] p-6 rounded-lg">
            <Icons.PiSunThin color="white" size={30} />
            <h1 className="text-white text-xl">+977 9810643801</h1>
          </div>
          <div className="flex bg-[#1c1c26] flex-1 flex-col rounded-lg">
            <div className="flex gap-4 items-center p-4">
              <h1 className="text-xl">Privacy Policy</h1>
              <Icons.VscChevronRight size={24} />
            </div>
            <div className="flex gap-4 items-center p-4">
              <h1 className="text-xl">Imprint</h1>
              <Icons.VscChevronRight size={24} />
            </div>
          </div>
        </div>

        <div className="bg-[#1c1c26] flex flex-col p-8 rounded-lg lg:w-80 gap-y-8">
          <h1 className="text-4xl">Connect</h1>
          <div className="flex flex-col">
            {socialLinks.map((data, index) => (
              <Link
                key={index}
                className="text-white p-2 text-lg"
                href={data.href}
              >
                {data.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-white text-6xl">Immersive</h1>
            <h1 className="text-white text-6xl">Experiences</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h1>Local Time</h1>
              <Icons.CiStopwatch />
            </div>

            <div></div>
            <h1>UTC +5:45</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
