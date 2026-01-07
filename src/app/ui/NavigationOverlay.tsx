import Link from "next/link";
import { Icons } from "../lib/data";
import * as motion from "framer-motion/client";
import { navItems } from "../lib/navItems";

export default function NavigationOverlay({ setIsOpen }) {
  console.log("navitems: ", navItems);
  return (
    <div className="flex flex-1 w-full h-full flex-col justify-between p-2">
      <div className="flex items-center justify-between">
        <div></div>
        <motion.button
          className={`bg-black shadow-2xl border border-[#14141b] p-4 rounded-lg z-50`}
          whileTap={{ rotate: "180deg" }}
          whileHover={{ rotate: "180deg" }}
          onClick={() => {
            setIsOpen((isOpen) => !isOpen);
          }}
        >
          <Icons.IoClose size={40} color="gray" />
        </motion.button>
      </div>

      <h1 className="text-2xl font-playfair_display border-b p-4 uppercase text-gray-500 border-b-gray-500">
        Navigation
      </h1>
      <div className="font-playfair_display flex flex-col text-7xl gap-y-3">
        {navItems.map((data) => (
          <Link
            href={data.href}
            key={data.id}
            className="text-white hover:border-b hover:border-b-gray-500 active:border-b active:border-b-gray-500 hover:text-gray-500 p-4"
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            {data.title}
          </Link>
        ))}
      </div>
      {/* <div>
        <Link
          href="/policy"
          className="text-white text-2xl"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          Privacy Policy
        </Link>
      </div> */}
      <div></div>
    </div>
  );
}
