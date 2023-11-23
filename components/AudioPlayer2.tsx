// src/components/AudioPlayer.tsx
import React, { useEffect, useRef } from "react";
import "plyr/dist/plyr.css";
import Plyr from "plyr";
import { title } from "process";

const AudioPlayer: React.FC<{ url: string, title: string }> = ({ url, title }) => {
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
    <div className="max-w-md mx-auto my-8 p-4 rounded-md shadow-md">
      <p className="text-center mb-5 border-gray-400">{title}</p>
      <audio ref={audioRef} className="" controls>
        <source src={url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
