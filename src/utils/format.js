export const formatTime = (time) => {
  if (!time) return "0:00";

  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;

}