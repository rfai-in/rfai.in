import AudioPlayer from "./AudioPlayer";
import audioData from "../public/audioData.json";

import React, { lazy, Suspense } from "react";

// Use lazy loading for the AudioPlayer component
const AudioPlayer2 = lazy(() => import("./AudioPlayer2"));

export default function Music1() {
  const shouldRenderAudioPlayer = true;

  return (
    <div>
      <div className="mx-auto flex max-w-full flex-col items-center justify-center">
        {/* <h2 className="text-base font-semibold leading-7 text-indigo-900 mb-5">Solutions we provide</h2> */}
        <p className="mt-20 mb-5 text-4xl font-bold tracking-tight text-[#333] sm:text-5xl">
          Browse Music
          <br className="hidden sm:inline lg:hidden" />
        </p>
      </div>

      <div className="grid max-w-full p-5 sm:grid-cols-2 sm:gap-10">
        {audioData.map((audio, index) => (
          <Suspense key={index} fallback={<div>Loading...</div>}>
            <AudioPlayer2 url={audio.url} title={audio.title} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
