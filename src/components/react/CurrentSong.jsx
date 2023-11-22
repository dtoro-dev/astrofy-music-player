import { Heart } from "@/icons/react";

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className="flex items-center gap-5 relative overflow-hidden w-[250px]">
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>
      <div className="flex flex-col">
        <h3 className="font-medium block text-white">{title}</h3>
        <p className="block text-gray-400 text-sm">{artists?.join(",")}</p>
      </div>
      <div className="flex justify-end items-center">
        {title ? (
          <button className="opacity-70 hover:opacity-100 transition">
            <Heart className="w-6 h-6" />
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default CurrentSong;
