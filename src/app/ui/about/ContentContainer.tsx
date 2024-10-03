"use client";

import MobileContent from "@/app/assets/MobileContent.svg";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Orange from "@/app/assets/Yellow.svg";
import { Icons } from "@/app/lib/data";
import React, { useState } from "react";

interface Content {
  Icon: StaticImageData;
  DisplayText: string;
  MainText: string;
}

export default function ContentContainer({
  Icon,
  DisplayText,
  MainText,
}: Content) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="flex relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ ease: "spring", duration: 0.5, opacity: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {!isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={MobileContent}
            alt="Mobile Content Box"
            className="min-w-[300px] p-4"
          />
          <div className="absolute inset-0 flex justify-evenly items-center flex-col">
            <Image
              src={Icon}
              alt={`Icon for the respective field`}
              className="w-96 h-96 p-4"
            />
            <h1 className="text-[var(--primary-text-color)] text-4xl max-w-full text-center p-7">
              {DisplayText}
            </h1>
          </div>
        </motion.div>
      )}

      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={Orange}
            alt="Mobile Content Box"
            className="min-w-[300px] p-4"
          />
          <div className="absolute inset-0 flex justify-center flex-col">
            <h1 className="text-[var(--tertiary-text-color)] text-lg max-w-full text-center p-8">
              <br></br>
              {MainText}
            </h1>
            <button className="flex items-center justify-center">
              <Icons.FaCircleChevronRight size="24px" />
              <h1 className="p-3">Learn More</h1>
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
