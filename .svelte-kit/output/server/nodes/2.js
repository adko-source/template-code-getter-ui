import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.Cdmc0QEw.js","_app/immutable/chunks/disclose-version._Nb4vAZO.js","_app/immutable/chunks/runtime.b43-5qqS.js","_app/immutable/chunks/legacy.DHU_fcaa.js","_app/immutable/chunks/render.D1XsaFYV.js","_app/immutable/chunks/if.BgX00Gz2.js","_app/immutable/chunks/lifecycle.J5QB2aai.js"];
export const stylesheets = [];
export const fonts = [];
