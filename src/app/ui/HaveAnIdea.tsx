import { Icons } from "../lib/data";
import * as motion from "framer-motion/client";

export default function IdeaPage() {
  const backgroundVariants = {
    initial: {
      backgroundColor: "#000000",
      color: "#ffffff",
    },
    hover: {
      backgroundColor: "#94fbdb",
      color: "#000000",
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: [0, 0, 0, 0.67],
      },
    },
  };

  return (
    <div className="flex h-screen items-center justify-center flex-col gap-y-8">
      <div className="flex flex-col items-center gap-y-4">
        <div className="text-white text-5xl">Have an</div>
        <div className="text-white text-5xl italic font-playfair_display">
          idea?
        </div>
      </div>

      <motion.button
        className="border-[#94fbdb] border px-6 py-2 flex items-center justify-center gap-2 rounded-full"
        variants={backgroundVariants}
        initial="initial"
        whileHover="hover"
      >
        <h1>Tell us more</h1>
        <Icons.VscChevronRight />
      </motion.button>
    </div>
  );
}
