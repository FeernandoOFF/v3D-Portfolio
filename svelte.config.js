import { vitePreprocess } from "@astrojs/svelte";
import seqPreprocessor from "svelte-sequential-preprocessor";

export default {
  preprocess: seqPreprocessor([vitePreprocess()]),
};
