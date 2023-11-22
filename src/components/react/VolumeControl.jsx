import { Slider } from "./Slider";
import usePlayerStore from "@/store/playerStore";
import { Volume as VolumeIcon } from "@/icons/react";

const VolumeControl = () => {
  const { volume, setVolume } = usePlayerStore((state) => state);

  return (
    <div className="flex justify-center items-center gap-x-2">
      <VolumeIcon />
      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[95px]"
        onValueChange={(value) => setVolume(value / 100)}
      />
    </div>
  );
};

export default VolumeControl;
