<script lang="ts">
  import { copy, type CopyDetail } from "@svelte-put/copy";
  let copied = "";
  function handleCopied(e: CustomEvent<CopyDetail>) {
    copied = e.detail.text;
  }
</script>

<div
  class="border-2 border-slate-200 rounded-2xl max-w-[300px] py-4 text-right flex justify-center gap-4 items-center  opacity-70 hover:opacity-100 cursor-copy"
>
  <div class="w-7 h-7">
    <slot />
  </div>

  <button type="button" use:copy on:copied={handleCopied}
    >me@feernandooff.com</button
  >
</div>
