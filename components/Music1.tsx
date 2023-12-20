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

  const limitedAudioData = reversedAudioData.slice(0, 12);

  const filterlimited = filteredAudioData.slice(0, 5);

  return (
    <div>
      <div className="mx-auto flex flex-col max-w-full items-center justify-center">
        {/* <p className="mt-20 mb-5 text-4xl font-bold tracking-tight text-[#333] sm:text-5xl">
          Browse Music
          <br className="hidden sm:inline lg:hidden" />
        </p> */}
        {/* Add the search input */}
        <input
          type={"search"}
          placeholder="describe your music..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:w-[60%] rounded-xl text-md font-semibold px-4 py-4 border-2 bg-gray-100 border-gray-400 mt-10 sm:mb-3"
        />

        {searchTerm &&
          <div className="sm:w-[60%]  sm:h-[10%] rounded-xl bg-gray-100">
            {filterlimited.map((audio, index) => (
            <Suspense key={index} fallback={<div>Loading...</div>}>
              {/* <AudioPlayer2 url={audio.url} title={audio.title} genera={audio.genera} /> */}
              <p>{audio.title}</p>
              <p>{audio.genera}</p>
            </Suspense>
          ))}
          </div>
        }

          <div className="mb-5 mt-5 flex-col hidden lg:block">

            <span onClick={(e) => setSearchTerm("Indie Folk")} className="bg-gray-100 ml-5 cursor-pointer text-gray-800 text-lg font-medium me-2 px-2.5 py-1 rounded-lg dark:bg-gray-700 dark:text-gray-300">Indie Folk</span>
            <span onClick={(e) => setSearchTerm("Classical")} className="bg-gray-100 ml-5 cursor-pointer text-gray-800 text-lg font-medium me-2 px-2.5 py-1 rounded-lg dark:bg-gray-700 dark:text-gray-300">Classical</span>
            <span onClick={(e) => setSearchTerm("Jazz")} className="bg-gray-100 ml-5 cursor-pointer text-gray-800 text-lg font-medium me-2 px-2.5 py-1 rounded-lg dark:bg-gray-700 dark:text-gray-300">Jazz</span>
            <span onClick={(e) => setSearchTerm("Funk")} className="bg-gray-100 ml-5 cursor-pointer text-gray-800 text-lg font-medium me-2 px-2.5 py-1 rounded-lg dark:bg-gray-700 dark:text-gray-300">Funk</span>
            <span onClick={(e) => setSearchTerm("World")} className="bg-gray-100 ml-5 cursor-pointer text-gray-800 text-lg font-medium me-2 px-2.5 py-1 rounded-lg dark:bg-gray-700 dark:text-gray-300">World</span>
            <span onClick={(e) => setSearchTerm("Ambient")} className="bg-gray-100 ml-5 cursor-pointer text-gray-800 text-lg font-medium me-2 px-2.5 py-1 rounded-lg dark:bg-gray-700 dark:text-gray-300">Ambient</span>
            {/* <a onClick={(e) => setSearchTerm("Indie Folk")} className="bg-gray-100 ml-5 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Indie Folk</a>
          <a onClick={(e) => setSearchTerm("Indie Folk")} className="bg-gray-100 ml-5 text-gray-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Indie Folk</a> */}

          </div>
        
      </div>

      <div className="grid max-w-full p-5 sm:grid-cols-3 sm:gap-10">
        {limitedAudioData.map((audio, index) => (
          <Suspense key={index} fallback={<div>Loading...</div>}>
            <AudioPlayer2 url={audio.url} title={audio.title} genera={audio.genera} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
