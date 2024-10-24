"use client";

import Image from "next/image";
import SiliLogo from "@/app/assets/SiliCactus.svg";
import Link from "next/link";
import { Icons } from "../lib/data";
import * as motion from "framer-motion/client";
import { useRef, useState } from "react";
import { animate, AnimatePresence, useScroll } from "framer-motion";
import NavigationOverlay from "./NavigationOverlay";
import { transform } from "next/dist/build/swc";

export default function Home() {
  const paragraph = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraph,
    offset: ["start 0.25", "start 0.5"],
  });
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

  return (
    <div className="flex relative h-full">
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
      <div className="flex flex-col overflow-hidden justify-between flex-1 relative h-full bg-cover bg-center z-10 ">
        <div></div>

        <div className="flex justify-between lg:justify-between items-center fixed w-full self-center px-10">
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

        <div className="flex flex-col gap-y-4 z-0">
          <motion.h1
            className="font-playfair_display text-white text-6xl font-bold lg:text-9xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Technology
          </motion.h1>
          <motion.div
            className="text-white text-4xl gap-y-4 flex flex-col lg:text-7xl"
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
            style={{ opacity: scrollYProgress }}
          >
            Welcome to SiliCactus. Your gateway to providing high end services
            with us to your valued customers.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
