<script>
  import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";
  import { onMount } from "svelte";
  let load = false;

  onMount(() => (load = true));
</script>

{#if load}
  <LottiePlayer
    src="https://assets5.lottiefiles.com/temp/lf20_lUn0MW.json"
    autoplay={true}
    loop={true}
    renderer="svg"
    background="transparent"
    height={40}
    width={40}
  />
{/if}
