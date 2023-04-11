<script lang="ts">
  import { shortcut, type ShortcutEventDetails } from "@svelte-put/shortcut";
  import { fade } from "svelte/transition";

  let open = false;

  function handleK() {
    open = !open;
  }
</script>

<svelte:window
  use:shortcut={{
    trigger: {
      key: "k",
      modifier: ["ctrl", "meta"],
      callback: handleK,
    },
  }}
/>

<div class="bg-orange-200 h-10 w-10 fixed bottom-0 right-0" on:click={handleK}>
  bottom
</div>

{#if open}
  <div
    transition:fade
    class="h-screen w-screen fixed top-0 grid place-items-center z-50"
    style="backdrop-filter: blur(16px);    background-color: rgba(57, 57, 57, 0.537); "
  >
    <div class="p-4 bg-base-300 rounded-md flex flex-col">
      <slot />
    </div>
  </div>
{/if}
