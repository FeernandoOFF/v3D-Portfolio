<script lang="ts">
  import { shortcut, type ShortcutEventDetails } from "@svelte-put/shortcut";
  export let actions: string[];

  let dialog: HTMLDialogElement;

  function handleK() {
    dialog.showModal();
  }
  function closeDialog() {
    console.log("closing");
    dialog.close();
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

<button
  class="focus:bg-transparent border border-neutral-400 rounded-full p-3 fixed md:bottom-10 md:right-10 bottom-5 right-5 grid place-items-center bg-#4f4f4f"
  aria-label="Show options"
  on:click={handleK}
>
  <span class="icon-[carbon--mac-command]" />

  <dialog bind:this={dialog} class="w-full max-w-md bg-base-300 rounded-md p-0">
    <button class="float-right">x</button>
    <div class="flex flex-col w-full">
      <input
        type="text"
        placeholder="Search..."
        class="bg-transparent border-b-2 px-4 py-2 border-gray-400 focus:outline-gray"
      />
      <div class="section">
        <p>Navigation</p>
        {#each actions as link}
          <a href={link}>
            {link}
          </a>
        {/each}
      </div>
    </div>
  </dialog>
</button>

<style>
  dialog::backdrop {
    background: rgba(160, 161, 161, 0.25);
    border-color: rgba(203, 202, 202, 0.25);
    border-width: 1px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
</style>
