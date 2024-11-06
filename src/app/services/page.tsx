"use client";

import * as motion from "framer-motion/client";
import { Icons } from "@/app/lib/data";
import { useRef, useState } from "react";
import Image from "next/image";
import Cylinder from "@/app/assets/cylinder.png";
import { useScroll } from "framer-motion";
import {
  designServices,
  serviceImages,
  serviceName,
  serviceText,
  serviceTextColor,
} from "../lib/serviceData";
import IdeaPage from "../ui/HaveAnIdea";
import Footer from "../ui/Footer";

export default function Home() {
  const [isHovered, setIsHovered] = useState(true);
  const design = "Design";
  const { scrollYProgress } = useScroll();
  console.log("scrollYProgress ", scrollYProgress);
  const container = useRef(null);

  return (
    <section className="flex flex-col flex-1 text-white h-screen p-16 gap-y-20">
      <motion.div className="flex flex-col justify-center items-center">
        <div className="flex flex-col flex-1 justify-center items-center lg:flex lg:flex-row lg:gap-x-8">
          <motion.span
            className="font-medium lg:text-[9rem] font-playfair_display md:text-9xl text-8xl"
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0.2 }}
          >
            Branding
          </motion.span>
          <Icons.GiCrossedSlashes
            size={128}
            className="opacity-[0.1] hover:opacity-[1]"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-x-8">
          <motion.h1
            className="font-medium lg:text-[9rem] font-playfair_display md:text-9xl text-8xl"
            initial={{ opacity: 0.2 }}
            whileHover={{ opacity: 1 }}
          >
            Digital
          </motion.h1>
          <motion.h1
            className="font-medium lg:text-[9rem] font-playfair_display md:text-9xl text-8xl"
            initial={{ opacity: 0.2 }}
            whileHover={{ opacity: 1 }}
          >
            Experts
          </motion.h1>
        </div>
      </motion.div>
      <motion.div
        className="flex text-white items-center justify-center p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <h1 className="text-3xl lg:w-2/5 lg:mr-72 w-full">
          The digital world creates room for a wide range of solutions. That's
          where we feel at home. We love to experiment and to rearrange the
          ordinary – creating digital products from tomorrow.
        </h1>
      </motion.div>

      {[0, 1, 2].map((data) => (
        <>
          <div className="flex items-center justify-center flex-col relative">
            <div className="bg-[#16151f] flex h-screen items-center rounded-full p-8 relative z-10">
              <motion.div
                animate={{
                  rotate: [360, 180, 90, 270, 360],
                }}
                transition={{
                  type: "tween",
                  duration: 5,
                  repeatDelay: 1,
                  repeat: Infinity,
                }}
              >
                <Image src={serviceImages[data]} alt="Cylinder" width={400} />
              </motion.div>
            </div>
            <motion.div className="flex absolute top-[95%]">
              {serviceName[data].split("").map((char, index) => (
                <motion.h1
                  className={`text-[${
                    serviceTextColor[data]
                  }] font-playfair_display lg:text-9xl md:text-7xl text-6xl ${
                    index < 3 ? "z-20" : "z-0"
                  }`}
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    delay: index / 10,
                    repeat: Infinity,
                  }}
                >
                  {char}
                </motion.h1>
              ))}
            </motion.div>
          </div>

          <div className="flex lg:flex-row flex-col gap-y-10 justify-between p-8 lg:gap-x-32 mt-20">
            <div className="flex flex-[0.1]"></div>
            <h1 className="text-3xl flex flex-[0.5]">{serviceText[data]}</h1>
            <div className="flex flex-[0.4] flex-col bg-black p-4">
              <h1 className="text-md p-4 text-gray-400">/Services</h1>
              {designServices[data].map((data, index) => (
                <ul key={index} className="p-4 border-b border-b-gray-600">
                  <li className="text-3xl">{data}</li>
                </ul>
              ))}
            </div>
            <div className="flex flex-[0.1]"></div>
          </div>
        </>
      ))}
      <div>
        <IdeaPage />
      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
