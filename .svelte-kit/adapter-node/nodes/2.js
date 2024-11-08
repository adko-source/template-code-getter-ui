import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.sd068dSI.js","_app/immutable/chunks/disclose-version.B8h2QlWB.js","_app/immutable/chunks/runtime.DCPRCs3i.js","_app/immutable/chunks/legacy.CIEuMqzE.js","_app/immutable/chunks/render.CvSk9r6e.js","_app/immutable/chunks/if.BwmA_LbK.js","_app/immutable/chunks/lifecycle.DlsWbQ9Y.js"];
export const stylesheets = [];
export const fonts = [];
