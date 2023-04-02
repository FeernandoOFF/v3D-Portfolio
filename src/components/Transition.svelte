<script>
  import { onMount } from "svelte";
  import { fade, scale, fly } from "svelte/transition";

  let mounted = false;

  onMount(() => {
    mounted = true;
    window.onNavigate = () => {
      mounted = false;
    };
    window.onMount = () => {
      mounted = true;
    };
  });
</script>

{#if !mounted}
  <div
    transition:fade
    class="h-screen w-screen bg-base-200 fixed top-0 z-50 grid place-items-center"
  >
    <p
      out:scale
      in:fly={{ delay: 2, y: 100 }}
      class="font-serif text-xl md:text-6xl"
    >
      FEERNANDOOFF
    </p>
  </div>
{/if}
