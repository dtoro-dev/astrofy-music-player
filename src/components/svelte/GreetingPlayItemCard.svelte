<script lang="ts">
  import type { Playlist } from "@/lib/data";
  import CardPlayButton from "./CardPlayButton.svelte";
  export let playlist: Playlist;

  let isHovered = false;

  const { id, title, artists, cover } = playlist;
  const artistsString = artists.join(", ");
</script>

<article class="group relative">
  <div
    class="absolute right-6 bottom-2 translate-y-3 transition-all duration-700 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10"
  >
    <CardPlayButton id={id} />
  </div>
  <a
    href={`/playlist/${id}`}
    class="playlist-item transition-all duration-300 flex relative p-2 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl bg-zinc-800/40 hover:bg-zinc-800/60 w-96"
    on:mouseover={() => (isHovered = true)}
    on:mouseout={() => (isHovered = false)}
    on:focus={() => (isHovered = true)}
    on:blur={() => (isHovered = false)}
  >
    <picture class="h-12 w-12 flex-none">
      <img
        src={cover}
        alt={`Cover of ${title} by ${artistsString}`}
        class="object-cover w-full h-full rounded-md"
      />
    </picture>
    <div class="flex flex-auto flex-col truncate">
      <h4 class="text-white text-md font-bold">{title}</h4>
    </div>
    {#if isHovered}
      <button
        class={`w-11 h-11 bg-green-500 rounded-full text-black justify-center items-center flex`}
      >
        <svg
          class="w-6 h-6"
          role="img"
          height="16"
          width="16"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 16 16"
          ><path
            d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"
          /></svg
        >
      </button>
    {/if}
  </a>
</article>
