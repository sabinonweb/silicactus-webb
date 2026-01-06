"use client";

import Link from "next/link";
import { Icons } from "@/app/lib/data";
import { useState } from "react";
import Image from "next/image";
import SiliLogo from "@/app/assets/SiliCactus.svg";
import { motion, AnimatePresence } from "framer-motion";
import NavigationOverlay from "./NavigationOverlay";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

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
        ) : null}
      </AnimatePresence>

      <div className="flex flex-col justify-between flex-1 relative h-full z-30 p-10">
        <div className="flex justify-between lg:justify-between items-center fixed w-full self-center px-10">
          <div className="flex gap-8">
            <Image
              src={SiliLogo}
              alt="SiliCactus Logo"
              className="bg-[#14141b] shadow-6xl border border-[#14141b] p-6 rounded-lg cursor-pointer"
              onClick={() => {
                console.log("Logo clicked");
              }}
            />

            <button
              className="bg-[#14141b] shadow-2xl border border-[#14141b] p-4 rounded-lg hidden lg:flex items-center justify-between w-72 z-10"
              onClick={() => {
                console.log("Clicked");
                setIsOpen((prev) => !prev);
              }}
            >
              <h1 className="text-white font-playfair_display">
                {pathname === "/"
                  ? "HOME"
                  : pathname.replace("/", "").toUpperCase()}
              </h1>
              <Icons.HiBars2 size={20} color="white" />
            </button>
          </div>

          <div className="lg:flex hidden">
            <Link
              href="/contact"
              className="border border-[var(--primary-color)] p-4 bg-[var(--primary-color)] flex items-center gap-4 rounded-lg"
            >
              <h1 className="text-[var(--secondary-text-color)] font-playfair_display">
                Get In Touch
              </h1>
              <Icons.BsArrowLeftRight color="white" />
            </Link>
          </div>

          <motion.button
            className="bg-[#14141b] shadow-2xl border border-[#14141b] p-4 rounded-lg lg:hidden z-30"
            whileTap={{ rotate: "180deg" }}
            whileHover={{ rotate: "180deg" }}
            onClick={() => {
              setIsOpen((prev) => !prev);
              console.log("isOpen:", !isOpen);
            }}
          >
            <Icons.HiBars2 size={40} className="lg:hidden" color="white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
