import React, { lazy, Suspense, useEffect, useState } from "react";
import audioData from "../public/audioData.json";

const AudioPlayer2 = lazy(() => import("./AudioPlayer2"));

// https://chat.openai.com/share/6c62cb05-7926-48f7-99fb-be892912893f

const itemsPerPage = 12;

export default function Music1() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allLoadedAudioData, setAllLoadedAudioData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);


  // Move filteredAudioData outside of useEffect
  const reversedAudioData = [...audioData].reverse();
  const filteredAudioData = reversedAudioData.filter(
    (audio) =>
      audio.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      audio.genera.toLowerCase().includes(searchTerm.toLowerCase()) ||
      audio.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Update the total number of items when search term changes
    setTotalItems(filteredAudioData.length);


    // Load the initial 12 items for the filtered data
    const initialItems = filteredAudioData.slice(0, itemsPerPage);
    setAllLoadedAudioData(initialItems);

    // Reset current page to 1 when search term changes
    setCurrentPage(1);
  }, [searchTerm]);

  const handleLoadMore = () => {
    // Calculate the start and end index for the current page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the array based on the current page
    const newItems = filteredAudioData.slice(startIndex, endIndex);

    // Update the state to include the newly loaded items
    setAllLoadedAudioData((prevData) => [...prevData, ...newItems]);

    // Increment the current page on clicking "Load More"
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="mx-auto flex max-w-full flex-col items-center justify-center">
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
          className="sm:w-[60%] rounded-xl shadow-xl text-md font-semibold px-4 py-4 border-2 border-gray-400 mt-10 sm:mb-10"
        />

        <div className="mb-5 flex-col hidden lg:block">

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
        <Suspense fallback=
          {<div className="flex items-center justify-center">
            Loading...
          </div>}>
          {allLoadedAudioData.map((audio, index) => (
            <AudioPlayer2 key={index} url={audio.url} title={audio.title} genera={audio.genera} />
          ))}
        </Suspense>
      </div>

      <div className="flex items-center justify-center mt-2 md:mt-5 lg:mt-5">

        {allLoadedAudioData.length < totalItems && (
          <button onClick={handleLoadMore} className="py-2.5 px-5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
            Load More
          </button>
        )}

      </div>
    </div>
  );
}
