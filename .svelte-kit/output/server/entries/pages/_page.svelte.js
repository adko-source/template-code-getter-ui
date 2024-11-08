import { c as create_ssr_component, e as each, v as validate_component } from "../../chunks/ssr.js";
import { e as escape } from "../../chunks/escape.js";
const DocumentUploader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let templateCodesList = [];
  return ` <div class="${"flex items-center justify-center " + escape(
    templateCodesList.length == 0 ? "min-h-screen bg-dashboard-bg bg-middle bg-cover" : "h-1/4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200",
    true
  )}"> <div class="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow-lg w-full max-w-sm"><label for="file-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"><div class="flex flex-col items-center justify-center" data-svelte-h="svelte-1tni5oj"><svg class="w-8 h-8 text-gray-400 mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L8 14.586V2a1 1 0 112 0v12.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span class="text-sm text-gray-500">Upload file</span></div> <input id="file-upload" type="file" class="hidden"></label> <span class="${escape("hidden", true) + " text-sm text-red-500 mt-2"}">The file type should be .xml</span></div></div> ${templateCodesList.length > 0 ? `<div class="p-4 bg-gray-100 border border-gray-300 rounded-md"><h2 class="text-lg font-semibold mb-4" data-svelte-h="svelte-1gyfhyx">Template Codes</h2>  <button class="w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none" data-svelte-h="svelte-1gua5x7">Copy All</button>  <ul class="mb-4 space-y-2">${each(templateCodesList, (item) => {
    return `<li class="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md"><span class="text-sm font-mono">${escape(item)}</span> <button class="px-2 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none" data-svelte-h="svelte-kiarm">Copy</button> </li>`;
  })}</ul></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1f0v5m1_START -->${$$result.title = `<title>Template Code Generator</title>`, ""}<meta name="description" content="Template Code Generator"><!-- HEAD_svelte-1f0v5m1_END -->`, ""} ${validate_component(DocumentUploader, "DocumentUploader").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
