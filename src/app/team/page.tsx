"use client";
import { ChevronLeft, ChevronRight, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

// Import all team member images
import utx from "../assets/utx.jpg";
import sabin from "../assets/sabin.jpeg";
import bipul from "../assets/bipul.jpg";
import sanjay from "../assets/sanjay.png";
import Footer from "../ui/Footer";

export default function TeamPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Utkrist Mani Neupane",
      role: "Co-Founder",
      image: utx,
      linkedin: "https://www.linkedin.com/in/utkrist-neupane-50b637166/",
      github: "https://github.com/utkrist",
    },
    {
      name: "Sabin Ranabhat",
      role: "Co-Founder",
      image: sabin,
      linkedin: "https://linkedin.com/in/sabinonweb",
      github: "https://github.com/sabinonweb",
    },
    {
      name: "Bipul Lamsal",
      role: "Co-Founder",
      image: bipul,
      linkedin: "https://linkedin.com/in/bipul-lamsal",
      github: "https://github.com/BipulLamsal/",
    },
    {
      name: "Sanjay Pahari",
      role: "Co-Founder",
      image: sanjay,
      linkedin: "https://linkedin.com/in/sanjay-pahari",
      github: "https://github.com/freaktopus",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= teamMembers.length - 4 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-start mb-16">
          <div>
            <p className="text-gray-400 text-sm mb-3 uppercase tracking-wide">
              Our Team
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              Meet our Team
            </h1>
            <h2 className="text-4xl md:text-5xl text-gray-400 font-light mb-6">
              Passionate. Proactive. Expert.
            </h2>
            <p className="text-gray-400 max-w-xl">
              We lead with care, our core value and a shared passion for
              connecting the world.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="relative font-playfair_display">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/4] bg-gray-900">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
