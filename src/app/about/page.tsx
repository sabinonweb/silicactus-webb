"use client";

import { useScroll, useTransform } from "framer-motion";
import { Icons } from "../lib/data";
import Image from "next/image";
import Cog from "@/app/assets/cog.png";
import * as motion from "framer-motion/client";
import { useRef } from "react";

export default function Page() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.3"],
  });
  console.log("scrollYProgress ", scrollYProgress);

  const paragraph =
    "You can do big things with small teams, but it's hard to do small things with big teams. And small is often plenty. That's the power of small – you do what needs to be done rather than overdoing it.";

  const words = paragraph.split(" ");

  return (
    <div className="flex text-gray-500 p-8 flex-col h-[300vh]">
      <div className="flex flex-col lg:text-9xl md:text-7xl sm:text-6xl text-5xl items-center p-4 justify-center flex-1 sticky top-0 h-screen -z-10">
        <h1 className="p-4">Helping brands who</h1>

        <h1 className="flex items-center p-4 gap-4">
          like to
          <Icons.RiArrowDownWideFill className="border-4 border-orange-400 p-4 rounded-full animate-bounce" />{" "}
          be diferent
        </h1>
      </div>

      <section className="flex h-screen bg-white w-full -z-20"></section>
      <section className="flex h-screen w-full bg-black z-10">
        {/* <div className="flex flex-[0.5]"></div> */}
        <div className="flex flex-[0.5] justify-center items-center">
          <motion.div
            animate={{
              rotate: [360, 180, 90, 270, 360],
            }}
            transition={{
              type: "tween",
              duration: 10,
              repeatDelay: 1,
              repeat: Infinity,
            }}
          >
            <Image src={Cog} alt="Cog" width={600} />
          </motion.div>
        </div>
        <div className="text-white flex-[0.5] items-center justify-center flex">
          <div
            className="text-white flex space-x-2 flex-wrap text-5xl font-semibold"
            ref={element}
          >
            {words.map((word, index) => {
              const start = index / words.length;
              const end = start + 1 / words.length;

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );
              return (
                <span>
                  <span className="absolute opacity-[0.3]">{word}</span>
                  <motion.span
                    key={index}
                    className="text-bold"
                    style={{ opacity }}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
