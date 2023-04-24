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
  use:shortcut={{
    trigger: {
      key: "Escape",
      callback: () => (open = false),
    },
  }}
/>

<div
  class="bg-transparent border border-neutral-400 rounded-full rounded-full h-14 w-14 fixed bottom-10 right-10 grid place-items-center focus:border-red-300"
>
  <button
    class="bg-neutral-400 focus:outline-2 focus:outline-red-300 i-carbon-mac-command"
    on:click={handleK}
  />
</div>

{#if open}
  <div
    transition:fade
    class="h-screen w-screen fixed top-0 grid place-items-center z-50"
    style="backdrop-filter: blur(16px);    background-color: rgba(57, 57, 57, 0.537); "
    on:click={handleK}
  >
    <div class="p-4 bg-base-300 rounded-md flex flex-col max-w-md w-full">
      <input
        type="text"
        placeholder="Search..."
        class="bg-transparent px-4 py-2 rounded-md border-2 border-gray-400 focus:outline-secondary"
      />
      <slot />
    </div>
  </div>
{/if}
