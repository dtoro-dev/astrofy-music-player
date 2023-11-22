import { Pause as PauseIcon, Play as PlayIcon } from "@/icons/react";
import usePlayerStore from "@/store/playerStore";

const CardPlayButton = ({ id, size = 'small' }) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist?.id === id;

  const handlePlay = async () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    const res = await fetch(`/api/get-info-playlist.json?id=${id}`);
    const data = await res.json();
    const { songs, playlist } = data;

    setIsPlaying(true);
    setCurrentMusic({ songs, playlist, song: songs[0] });
  };

  return (
    <button
      className="card-play-button rounded-full bg-green-500 p-4 text-black hover:scale-105 trasition hover:bg-green-400"
      onClick={() => handlePlay()}
    >
      {isPlayingPlaylist ? (
        <PauseIcon className="w-6 h-6" />
      ) : (
        <PlayIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default CardPlayButton;
