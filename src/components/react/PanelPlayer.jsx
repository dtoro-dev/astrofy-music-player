import {
  Pause as PauseIcon,
  Play as PlayIcon,
  Random as RandomIcon,
  BeforeSong as BeforeSongIcon,
  NextSong as NextSongIcon,
  Repeat as RepeatIcon,
} from "@/icons/react";
import usePlayerStore from "@/store/playerStore";
import SongControl from "./SongControl";
import { useRef, useEffect } from "react";

const PanelPlayer = () => {
  const { isPlaying, setIsPlaying, currentMusic, volume } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef();

  useEffect(() => {
    const { song, playlist, songs } = currentMusic;

    if (song) {
      const src = `/music/${playlist?.id}/0${song?.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = volume;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handlePlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center gap-4">
        <button className="w-11 h-11 flex justify-center items-center opacity-70 hover:opacity-100 transition">
          <RandomIcon className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex justify-center items-center opacity-70 hover:opacity-100 transition">
          <BeforeSongIcon className="w-6 h-6" />
        </button>
        <button
          className="w-11 h-11 bg-white rounded-full text-black flex justify-center items-center"
          onClick={() => handlePlay()}
        >
          {isPlaying ? (
            <PauseIcon className="w-6 h-6" />
          ) : (
            <PlayIcon className="w-6 h-6" />
          )}
        </button>
        <button className="w-12 h-12 flex justify-center items-center opacity-70 hover:opacity-100 transition">
          <NextSongIcon className="w-6 h-6" />
        </button>
        <button className="w-12 h-12 flex justify-center items-center opacity-70 hover:opacity-100 transition">
          <RepeatIcon className="w-6 h-6" />
        </button>
      </div>
      <audio ref={audioRef} />
      <SongControl audio={audioRef} />
    </div>
  );
};

export default PanelPlayer;
