"use client";

import NavigationBar from "../ui/dashboard/NavigationBar";
import HeroSection from "./HeroSection";
import VideoPlayer from "./VideoPlayer";

export default function Home() {
  return (
    <main className="flex flex-col overflow-y-scroll">
      <HeroSection />
      <NavigationBar />
    </main>
  );
}
