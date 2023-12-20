import { useRouter } from "next/router";
import audioData from "../../../public/audioData.json";
import Head from "next/head";
import Header from "../../../components/Header";
import React, { useState, useEffect, useRef, memo } from "react";

import Footer from "../../../components/Footer";

export default function Episods() {

    const [data, setData] = useState<{
        title: any[];
        url: any[];
        genera: any[];
    } | null>(null);

    const router = useRouter();
    const { title } = router.query;

    // Find the episode with the matching URL
    const episode = audioData.find((ep) => ep.title === title);


    // https://chat.openai.com/share/9ab62daf-502d-402d-9693-c659466dcaff


    if (!data) {
        // Loading state or handle other cases where data is not available
        return <div>Loading...</div>;
    }

    // Check if the episode is found
    if (!episode) {
        return <p>Loading</p>;
    }


    return (
        <div>
            <Head>
                <title>Lexicap | {episode.title} </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <div className="mt-5 px-4 sm:m-10">

            </div>

            {/* <Footer /> */}
        </div>
    );
}