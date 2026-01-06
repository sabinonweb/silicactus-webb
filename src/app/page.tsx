"use client";

import { useScroll, useTransform } from "framer-motion";
import { Icons } from "./lib/data";
import Image from "next/image";
import Cog from "@/app/assets/cog.png";
import * as motion from "framer-motion/client";
import { useRef } from "react";
import IdeaPage from "./ui/HaveAnIdea";
import Footer from "./ui/Footer";
import { aboutUs } from "./lib/about";

export default function Home() {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start 0.3"],
  });
  console.log("scrollYProgress ", scrollYProgress);

  const paragraph =
    "You can do big things with small teams, but it's hard to do small things with big teams. And small is often plenty. That's the power of small – you do what needs to be done rather than overdoing it.";

  const words = paragraph.split(" ");

  const methodsParagraph =
    "At our place, you won't find yourself stuck in outdated structures. Whether you're dressed in joggers or flip-flops in our studio – We communicate through our creations. We speak your language. Every project is a passion project for us. We adhere to a few essential methods that are non-negotiable, ensuring tangible success in every partnership";

  const methodsWords = methodsParagraph.split("");

  return (
    <div className="flex text-gray-500 p-8 flex-col h-[600vh]">
      <div className="flex flex-col lg:text-9xl md:text-7xl sm:text-6xl text-5xl items-center p-4 justify-center flex-1 sticky top-0 h-screen -z-10">
        <h1 className="p-4">Helping brands who</h1>

        <h1 className="flex items-center p-4 gap-4">
          like to
          <Icons.RiArrowDownWideFill className="border-4 border-orange-400 p-4 rounded-full animate-bounce" />{" "}
          be diferent
        </h1>
      </div>

      <section className="flex h-screen bg-white w-full -z-20"></section>
      <section className="flex h-screen w-full bg-black z-10 md:flex-row flex-col">
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
        <div className="text-white flex-[0.5] items-center justify-center flex ">
          <div
            className="text-white flex space-x-2 flex-wrap lg:text-5xl md:text-4xl font-semibold text-3xl"
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

      <section className="flex h-screen w-full bg-black z-10 flex-col gap-y-10">
        <h1 className="text-6xl text-white font-semibold border-b border-b-gray-500 py-6">
          Our Methods
        </h1>
        <div className="flex lg:flex-row flex-col">
          <p className="text-3xl text-white p-2 py-6 flex-[0.7]">
            At our place, you won't find yourself stuck in outdated structures.
            Whether you're dressed in joggers or flip-flops in our studio – We
            communicate through our creations. We speak your language. Every
            project is a passion project for us. We adhere to a few essential
            methods that are non-negotiable, ensuring tangible success in every
            partnership
          </p>
          <div className="flex text-white flex-[0.3] justify-evenly items-center">
            <span>
              <h1 className="text-3xl">7</h1>
              <h1>Team</h1>
            </span>
            <span>
              <h1 className="text-3xl">2022</h1>
              <h1>Founded</h1>
            </span>
            <span>
              <h1 className="text-3xl">1</h1>
              <h1>Client</h1>
            </span>
          </div>
        </div>

        <div className="p-8">
          {aboutUs.map((data, index) => (
            <motion.ul
              key={index}
              className={`p-8 text-white border-b border-b-gray-600 ${
                index === 0 ? "border-t border-t-gray-600" : ""
              }`}
            >
              <li className="text-4xl">{data}</li>
            </motion.ul>
          ))}
        </div>
      </section>
      <div className="bg-black ">
        <IdeaPage />
      </div>
      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
}
