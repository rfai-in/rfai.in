// src/components/AudioPlayer.tsx
import React, { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr";
import BottomBar from "./BottomBar";

const AudioPlayer: React.FC<{ url: string; title: string; genera: string; }> = ({
  url,
  title,
  genera,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      new Plyr(audioRef.current, {
        controls: [
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "download",
        ],
        hideControls: false,
      });
    }
  }, []);

  return (
    <div className="mx-auto my-4 hover:shadow-md max-w-md rounded-lg border-2 border-gray-300 p-4 hover:border-gray-400 sm:my-0">
      <p className="mb-5 text-center text-[#333">{title}</p>
      <audio ref={audioRef} className="" controls>
        <source src={url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      {/* <span className="text-[#333] text-sm dark:bg-gray-700 dark:text-gray-300">{genera}</span> */}
      
    </div>

  );
};

export default AudioPlayer;
