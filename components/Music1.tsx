import AudioPlayer from "./AudioPlayer";
import audioData from "../public/audioData.json";
import React, { lazy, Suspense, useState } from "react";

const AudioPlayer2 = lazy(() => import("./AudioPlayer2"));

// to not limit how many to render when search is not empty
// https://chat.openai.com/share/cc9b37c3-9516-4739-87e9-424f4e2093db

export default function Music1() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter audioData based on the search term
  const reversedAudioData = [...audioData].reverse();

  const filteredAudioData = reversedAudioData.filter((audio) =>
    audio.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    audio.genera.toLowerCase().includes(searchTerm.toLowerCase()) ||
    audio.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const limitedAudioData = filteredAudioData.slice(0, 12);

  return (
    <div>
      <div className="mx-auto flex max-w-full flex-col items-center justify-center">
        {/* <p className="mt-20 mb-5 text-4xl font-bold tracking-tight text-[#333] sm:text-5xl">
          Browse Music
          <br className="hidden sm:inline lg:hidden" />
        </p> */}
        {/* Add the search input */}
        <input
          type="text"
          placeholder="describe your music..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:w-[60%] rounded-xl shadow-xl text-md font-semibold px-4 py-4 border-2 border-gray-400 mt-10 sm:mb-10"
        />
      </div>

      <div className="grid max-w-full p-5 sm:grid-cols-3 sm:gap-10">
        {limitedAudioData.map((audio, index) => (
          <Suspense key={index} fallback={<div>Loading...</div>}>
            <AudioPlayer2 url={audio.url} title={audio.title} genera={audio.genera}/>
          </Suspense>
        ))}
      </div>
    </div>
  );
}
