"use client";

import Image from "next/image";
import SiliLogo from "@/app/assets/SiliCactus.svg";
import Link from "next/link";
import { Icons } from "../lib/data";
import * as motion from "framer-motion/client";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavigationOverlay from "../ui/NavigationOverlay";
import Globe from "@/app/assets/Vector.svg";
import "@/app/styles/hero.css";
import useMousePosition from "../utils/dashboard/useMousePosition";

export default function HeroSection() {
  const paragraph = useRef(null);

  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  console.log("isHovered ", isHovered);

  return (
    <section className="flex relative flex-[0.8] flex-col px-8">
      {/* <div className="flex flex-col justify-evenly flex-1 relative h-full z-10 p-8 bg-red-400"> */}
      <div className="flex flex-col gap-y-4 relative flex-1 justify-center">
        <motion.div
          className="text-white absolute h-[100%] lg:top-[25%] top-[30%] mask"
          animate={{
            WebkitMaskPosition: `${x - size}px ${y - size}px`,
            WebkitMaskSize: `${isHovered ? "400px" : "40px"}`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <h1
            className={`text-white text-5xl lg:text-7xl font-playfair_display font-bold lg:w-3/5 sm:w-4/5`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Behind every innovation lies a story untold,
          </h1>
          <h1
            className={`text-white text-5xl lg:text-7xl font-playfair_display font-bold lg:w-3/5 sm:w-4/5`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            A vision that sees beyond the visible world.
          </h1>
        </motion.div>

        <motion.h1
          className="font-playfair_display text-white text-7xl font-bold lg:text-9xl z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Technology
        </motion.h1>
        <motion.div
          className="text-white text-6xl gap-y-4 flex flex-col lg:text-7xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
        >
          <p className="font-poppins">
            The <strong>Definite</strong> Side
          </p>
          <p className="font-poppins">
            & The <strong>Insightful</strong> Eye
          </p>
        </motion.div>
      </div>

      <div className="flex w-full md:w-2/4">
        <motion.p className="font-poppins text-white text-3xl" ref={paragraph}>
          Welcome to SiliCactus. Your gateway to providing high end services
          with us to your valued customers.
        </motion.p>
      </div>
    </section>
  );
}
