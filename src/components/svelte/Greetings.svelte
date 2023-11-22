<script lang="ts">
  import { playlists } from "@/lib/data";
  import GreetingPlayItemCard from "./GreetingPlayItemCard.svelte";

  const getGreeting = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    if (currentHour < 12) {
      return "Buenos días";
    } else if (currentHour < 18) {
      return "Buenas tardes";
    } else {
      return "Buenas noches";
    }
  };

  const greeting = getGreeting();
</script>

<div>
  <h1 class="text-4xl font-bold pt-10">{greeting}</h1>
  <div class="flex flex-wrap mt-6 gap-4">
    {#each playlists as playlist}
      <GreetingPlayItemCard playlist={playlist} />
    {/each}
  </div>
</div>
