import adapter from '@sveltejs/adapter-auto';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  target: '#svelte',  // This tells SvelteKit where to mount the app
  preprocess: vitePreprocess()
};
export default config;
