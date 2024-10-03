"use client";

import "./globals.css";
import MobileContent from "../app/assets/MobileContent.svg";
import Image from "next/image";
import MegaPhone from "../app/assets/Megaphone.png";
import GraphicPen from "@/app/assets/Graphic.png";
import WebPage from "@/app/assets/WebPage.png";
import { motion } from "framer-motion";
import Orange from "@/app/assets/Yellow.svg";
import { Icons } from "./lib/data";
import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [isWebHovered, setIsWebHovered] = useState(false);
  const [isDMHovered, setIsDMHovered] = useState(false);

  return (
    <div className="flex flex-col md:flex-row flex-1 bg-[var(--primary-color)] items-center md:justify-evenly justify-center flex-wrap">
      {/* Normal */}
      <motion.div
        className="flex relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ ease: "spring", duration: 2, opacity: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {!isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={MobileContent}
              alt="Mobile Content Box"
              className="min-w-[300px] p-4"
            />
            <div className="absolute inset-0 flex justify-evenly items-center flex-col">
              <Image
                src={GraphicPen}
                alt="Graphic Pen"
                className="w-96 h-96 p-4"
              />
              <h1 className="text-[var(--primary-text-color)] text-4xl max-w-full text-center p-7">
                Engaging designs that inspire action
              </h1>
            </div>
          </motion.div>
        )}

        {/* Hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={Orange}
              alt="Mobile Content Box"
              className="min-w-[300px] p-4"
            />
            <div className="absolute inset-0 flex justify-evenly flex-col">
              <h1 className="text-[var(--tertiary-text-color)] text-lg max-w-full text-center p-8">
                <br></br>
                At Silicactus, we believe that effective graphic design is at
                the heart of every successful brand. Our talented team of
                designers is dedicated to creating visually stunning and
                impactful designs that resonate with your target audience.
                <br />
                <br />
                We specialize in crafting unique logos, engaging social media
                graphics, and compelling marketing materials that reflect your
                brand's identity and values. By combining creativity with
                strategic thinking, we ensure that every design not only looks
                great but also serves its purpose in driving engagement and
                conversions. Let us help you tell your story through
                eye-catching visuals that leave a lasting impression.
              </h1>
              <button className="flex items-center justify-center">
                <Icons.FaCircleChevronRight size="24px" />
                <h1 className="p-3">Learn More</h1>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex relative"
        onHoverStart={() => setIsWebHovered(true)}
        onHoverEnd={() => setIsWebHovered(false)}
        transition={{ ease: "spring", duration: 2, opacity: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {!isWebHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={MobileContent}
              alt="Mobile Content Box"
              className="min-w-[300px] p-4"
            />
            <div className="absolute inset-0 flex justify-evenly flex-col items-center">
              <Image src={WebPage} alt="Web Page" className="w-96 h-96 p-4" />
              <h1 className="text-[var(--primary-text-color)] text-4xl max-w-full text-center p-6">
                Crafting dynamic websites that perform
              </h1>
            </div>
          </motion.div>
        )}

        {isWebHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={Orange}
              alt="Mobile Content Box"
              className="min-w-[300px] p-4"
            />
            <div className="absolute inset-0 flex justify-evenly flex-col">
              <h1 className="text-[var(--tertiary-text-color)] text-lg max-w-full text-center p-8">
                <br></br>
                At Silicactus, we understand that a well-crafted website is
                crucial for establishing a strong online presence. Our skilled
                team of web developers is committed to building responsive,
                user-friendly, and visually appealing websites tailored to meet
                the unique needs of your business. We utilize the latest
                technologies and best practices to ensure that your website not
                only looks stunning but also performs seamlessly across all
                devices. By focusing on both aesthetics and functionality, we
                create digital experiences that engage visitors and drive
                conversions.
              </h1>
              <button className="flex items-center justify-center">
                <Icons.FaCircleChevronRight size="24px" />
                <h1 className="p-3">Learn More</h1>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div
        className="flex relative"
        onHoverStart={() => setIsDMHovered(true)}
        onHoverEnd={() => setIsDMHovered(false)}
        transition={{ ease: "spring", duration: 2, opacity: 0.5 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {!isDMHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={MobileContent}
              alt="Mobile Content Box"
              className="min-w-[300px] p-4"
            />
            <div className="absolute inset-0 flex justify-evenly items-center flex-col">
              <Image
                src={MegaPhone}
                alt="Megaphone"
                className="w-96 h-96 p-4"
              />
              <h1 className="text-[var(--primary-text-color)] text-4xl max-w-full text-center p-4">
                Boost your brand's online presence
              </h1>
            </div>
          </motion.div>
        )}

        {isDMHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src={Orange}
              alt="Mobile Content Box"
              className="min-w-[300px] p-4"
            />
            <div className="absolute inset-0 flex justify-evenly flex-col">
              <h1 className="text-[var(--tertiary-text-color)] text-lg max-w-full text-center p-8">
                <br></br>
                In today’s competitive landscape, effective digital marketing
                strategies are essential for business growth. At Silicactus, our
                digital marketing experts are dedicated to crafting tailored
                campaigns that elevate your brand’s visibility and connect you
                with your target audience. From search engine optimization (SEO)
                to social media management and email marketing, we leverage
                data-driven insights to create impactful marketing solutions
                that deliver results. Our holistic approach ensures that every
                campaign aligns with your brand's goals, fostering engagement
                and driving sustainable growth. Let us amplify your online
                presence and help you reach new heights through innovative
                digital marketing strategies.
              </h1>
              <button className="flex items-center justify-center">
                <Icons.FaCircleChevronRight size="24px" />
                <h1 className="p-3">Learn More</h1>
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
