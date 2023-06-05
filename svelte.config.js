import { vitePreprocess } from "@astrojs/svelte";
import { preprocessThrelte } from "@threlte/preprocess";
import seqPreprocessor from "svelte-sequential-preprocessor";

export default {
  preprocess: seqPreprocessor([preprocessThrelte(), vitePreprocess()]),
};
