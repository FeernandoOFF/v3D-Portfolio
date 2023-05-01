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

<button
  class="focus:bg-transparent border border-neutral-400 rounded-full p-2 md:p-4 fixed md:bottom-10 md:right-10 bottom-5 right-5 grid place-items-center bg-#4f4f4f"
  aria-label="Show options"
  on:click={handleK}
>
  <i
    class="bg-neutral-400 focus:outline-2 focus:outline-red-300 i-carbon-mac-command"
  />
</button>

{#if open}
  <div
    transition:fade
    aria-hidden="true"
    class="h-screen w-screen fixed top-0 grid place-items-center z-50"
    style="backdrop-filter: blur(16px);    background-color: rgba(57, 57, 57, 0.537); "
    on:click={handleK}
  >
    <div
      role="dialog"
      on:click|stopPropagation
      class="p-4 bg-base-300 rounded-md flex flex-col max-w-md w-full"
    >
      <input
        type="text"
        placeholder="Search..."
        class="bg-transparent px-4 py-2 rounded-md border-2 border-gray-400 focus:outline-secondary"
      />
      <slot />
    </div>
  </div>
{/if}
