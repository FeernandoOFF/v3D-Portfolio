<script lang="ts">
  import { shortcut, type ShortcutEventDetails } from "@svelte-put/shortcut";

  let scale = 1;
  function handleK(detail: ShortcutEventDetails) {
    scale = scale == 1 ? 1.5 : 1;
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

<div class="bg-orange-200 h-10 w-10 fixed bottom-0 right-0" style:scale>
  bottom
</div>
