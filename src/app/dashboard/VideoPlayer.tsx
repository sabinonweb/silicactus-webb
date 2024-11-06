"use client";

import NextVideo from "next-video";
import Introduction from "../../../videos/Introduction.mp4";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

export default function VideoPlayer() {
  return (
    <section className="flex flex-1 h-[100vh] justify-center items-center">
      <div className="h-4/5 w-4/5 bg-red-400 relative rounded-full flex items-center justify-center">
        {/* <CldVideoPlayer
          src="Introduction"
          preload="true"
          width="500"
          height="400"
          fontFace="Source Serif Pro"
          autoPlay={true}
          muted={true}
        /> */}
        <div className="flex p-4">
          <NextVideo
            src={Introduction}
            autoPlay={true}
            muted={true}
            className="rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
