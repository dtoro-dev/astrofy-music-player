import usePlayerStore from "@/store/playerStore";
import CurrentSong from "./CurrentSong";
import VolumeControl from "./VolumeControl";
import PanelPlayer from "./PanelPlayer";

const Player = () => {
  const { currentMusic } = usePlayerStore((state) => state);

  return (
    <div className="flex flex-row justify-between w-full p-4 z-50">
      <CurrentSong {...currentMusic.song} />
      <PanelPlayer />
      <VolumeControl />
    </div>
  );
};

export default Player;
