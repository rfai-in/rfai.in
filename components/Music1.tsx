import AudioPlayer from "./AudioPlayer";
import AudioPlayer2 from "./AudioPlayer2";

export default function Music1() {
  return (
    <div>
      <div className="mx-auto flex flex-col items-center justify-center max-w-full">
        {/* <h2 className="text-base font-semibold leading-7 text-indigo-900 mb-5">Solutions we provide</h2> */}
        <p className="mt-20 text-4xl font-bold tracking-tight text-[#333] sm:text-5xl">
          Browse Music
          <br className="hidden sm:inline lg:hidden" />
        </p>
      </div>

      <div className="grid sm:grid-cols-2 p-5 sm:gap-10 max-w-full">
        <AudioPlayer2 url="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" title="First Project" />
        <AudioPlayer2 url="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3" title="Second Time" />
      </div>
    </div>
  );
}
