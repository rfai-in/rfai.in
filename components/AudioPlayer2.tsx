// src/components/AudioPlayer.tsx
import React, { useEffect, useRef } from 'react';
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';

const AudioPlayer: React.FC<{ url: string }> = ({ url }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      new Plyr(audioRef.current);
    }
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-8">
      <audio ref={audioRef} controls>
        <source src={url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
