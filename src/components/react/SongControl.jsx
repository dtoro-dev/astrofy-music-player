import usePlayerStore from "@/store/playerStore"
import { useEffect } from "react";
import { Slider } from "./Slider";
import { formatTime } from "@/utils/format";

const SongControl = ({audio}) => {
  const {currentTime, setCurrentTime} = usePlayerStore((state) => state);

  useEffect(() => {
    audio.current.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio?.current?.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  }

  const duration = audio?.current?.duration;

  return (
    <div className="flex gap-2 text-sm">
      <span className=" opacity-60">{formatTime(currentTime)}</span>
      <Slider
        defaultValue={[0]}
        max={audio.current?.duration ?? 0}
        min={0}
        value={[currentTime]}
        className="w-[500px]"
        onValueChange={(value) => {
          audio.current.currentTime = value;
          setCurrentTime(value);
        }}
      />
      <span className=" opacity-60">{formatTime(duration)}</span>
    </div>
  )
}

export default SongControl