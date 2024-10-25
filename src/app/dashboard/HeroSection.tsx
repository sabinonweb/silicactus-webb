"use client";

import Image from "next/image";
import SiliLogo from "@/app/assets/SiliCactus.svg";
import Link from "next/link";
import { Icons } from "../lib/data";
import * as motion from "framer-motion/client";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import NavigationOverlay from "./NavigationOverlay";
import Globe from "@/app/assets/Looper BG.svg";
import "@/app/styles/hero.css";
import useMousePosition from "../utils/dashboard/useMousePosition";

export default function HeroSection() {
  const paragraph = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigationVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: { scaleY: 0 },
  };
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;
  console.log("isHovered ", isHovered);

  return (
    <section className="flex relative h-full">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="flex fixed z-20 lg:h-full rounded-lg items-center p-8 inset-0 w-full bg-[#14141b]/95 origin-top"
            variants={navigationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <NavigationOverlay setIsOpen={setIsOpen} />
          </motion.div>
        ) : (
          "null"
        )}
      </AnimatePresence>

      <div className="flex flex-col justify-between flex-1 relative h-full z-10">
        <div className="flex justify-between lg:justify-between items-center fixed w-full self-center px-10 z-50">
          <div className="flex gap-8 z-30">
            <Image
              src={SiliLogo}
              alt="SiliCactus Logo"
              className="bg-[#14141b] shadow-6xl border border-[#14141b] p-6 rounded-lg"
            />

            <button
              className="bg-[#14141b] shadow-2xl border border-[#14141b] p-4 rounded-lg hidden lg:flex items-center justify-between w-72"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
              <h1 className="text-white font-playfair_display">Home</h1>
              <Icons.HiBars2 size={20} color="white" />
            </button>
          </div>

          <div className="lg:flex hidden">
            <Link
              href="/connect"
              className="border border-[var(--primary-color)] p-4 bg-[var(--primary-color)] flex items-center gap-4 rounded-lg"
            >
              <h1 className="text-[var(--secondary-text-color)] font-playfair_display">
                Get In Touch
              </h1>
              <Icons.BsArrowLeftRight color="white" />
            </Link>
          </div>
          <motion.button
            className={`bg-[#14141b] shadow-2xl border border-[#14141b] p-4 rounded-lg lg:hidden z-30`}
            whileTap={{ rotate: "180deg" }}
            whileHover={{ rotate: "180deg" }}
            onClick={() => {
              setIsOpen((isOpen) => !isOpen);
              console.log("siOpne", isOpen);
              console.log("clicked");
            }}
          >
            <Icons.HiBars2 size={40} className="lg:hidden " color="white" />
          </motion.button>
        </div>

        <div className="flex flex-[0.1]"></div>

        <div className="flex flex-col gap-y-4 relative flex-1 p-4 justify-center">
          <motion.div
            className="z-10 text-white absolute"
            animate={{
              WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
              WebkitMaskSize: `${isHovered ? "400px" : "40px"}`,
            }}
            transition={{ type: "tween", ease: "backOut" }}
          >
            <h1
              className={`text-white text-5xl lg:text-7xl font-playfair_display font-bold lg:w-3/5`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Behind every innovation lies a story untold,
            </h1>
            <h1
              className={`text-white text-5xl lg:text-7xl font-playfair_display font-bold lg:w-3/5`}
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
            className="text-white text-5xl gap-y-4 flex flex-col lg:text-7xl"
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

        <div className="flex w-full md:w-3/4">
          <motion.p
            className="font-poppins text-white text-3xl"
            ref={paragraph}
          >
            Welcome to SiliCactus. Your gateway to providing high end services
            with us to your valued customers.
          </motion.p>
        </div>
      </div>
      <Image
        src={Globe}
        alt="Pattern"
        className="absolute self-center -z-10 rotate-180"
        layout="responsive"
      />
    </section>
  );
}
