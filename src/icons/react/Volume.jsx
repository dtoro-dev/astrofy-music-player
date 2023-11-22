import usePlayerStore from "@/store/playerStore";
import {
  SoundHigh as SoundHighIcon,
  SoundLow as SoundLowIcon,
  SoundMedium as SoundMediumIcon,
  SoundOff as SoundOffIcon,
} from "@/icons/react";

const Volume = () => {
  const { volume, setVolume, previewVol, setPreviewVol } = usePlayerStore(
    (state) => state
  );

  const handleMuteOn = () => {
    setPreviewVol(volume);
    setVolume(0);
  };

  const handleMuteOff = () => {
    setVolume(previewVol);
  };

  const displayIconVolume = () => {
    const newVolume = volume * 100;

    if (newVolume === 0) {
      return (
        <button className="opacity-70 hover:opacity-100 transition" onClick={() => handleMuteOff(previewVol)}>
          <SoundOffIcon className="w-6 h-6" />
        </button>
      );
    }

    if (newVolume <= 25 && newVolume > 0) {
      return (
        <button className="opacity-70 hover:opacity-100 transition" onClick={() => handleMuteOn()}>
          <SoundLowIcon className="w-6 h-6" />
        </button>
      );
    }

    if (newVolume <= 75 && newVolume > 25) {
      return (
        <button className="opacity-70 hover:opacity-100 transition" onClick={() => handleMuteOn()}>
          <SoundMediumIcon className="w-6 h-6" />
        </button>
      );
    }

    if (newVolume <= 100 && newVolume > 75) {
      return (
        <button className="opacity-70 hover:opacity-100 transition" onClick={() => handleMuteOn()}>
          <SoundHighIcon className="w-6 h-6" />
        </button>
      );
    }
  };
  
  return <>{displayIconVolume()}</>;
};

export default Volume;
