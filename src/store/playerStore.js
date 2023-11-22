import { create } from "zustand";

const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: {
    playlist: null,
    song: null,
    songs: [],
  },
  volume: 1,
  previewVol: 0,
  currentTime: 0,
  setCurrentTime: (currentTime) => set({ currentTime }),
  setPreviewVol: (previewVol) => set({ previewVol }),
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

export default usePlayerStore;