"use client";

import Link from "next/link";
import { Icons } from "@/app/lib/data";
import { useState } from "react";
import Image from "next/image";
import SiliLogo from "@/app/assets/SiliCactus.svg";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import NavigationOverlay from "./NavigationOverlay";

export default function NavigationBar() {
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
    <section className="flex relative py-4">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="flex fixed lg:h-full rounded-lg items-center p-8 inset-0 w-full bg-[#14141b]/95 origin-top z-50"
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

      <div className="flex flex-col justify-between flex-1 relative h-full z-30 p-10">
        <div className="flex justify-between lg:justify-between items-center fixed w-full self-center px-10">
          <div className="flex gap-8">
            <Image
              src={SiliLogo}
              alt="SiliCactus Logo"
              className="bg-[#14141b] shadow-6xl border border-[#14141b] p-6 rounded-lg"
            />

            <button
              className="bg-[#14141b] shadow-2xl border border-[#14141b] p-4 rounded-lg hidden lg:flex items-center justify-between w-72 z-10"
              onClick={() => {
                console.log("CLicked");
                setIsOpen((isOpen) => !isOpen);
              }}
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
      </div>
    </section>
  );
}
