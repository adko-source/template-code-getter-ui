import { Y as attr, Z as ensure_array_like, V as escape_html, R as pop, _ as stringify, P as push, $ as head } from "../../chunks/index.js";
function DocumentUploader($$payload, $$props) {
  push();
  let templateCodesList = [];
  $$payload.out += `<div${attr("class", templateCodesList.length == 0 ? "flex items-center justify-center min-h-screen bg-dashboard-bg bg-middle bg-cover" : "flex items-center justify-center h-1/4 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200")}><div class="flex flex-col items-center justify-center bg-white p-6 rounded-md shadow-lg w-full max-w-sm"><label for="file-upload" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"><div class="flex flex-col items-center justify-center"><svg class="w-8 h-8 text-gray-400 mb-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L8 14.586V2a1 1 0 112 0v12.586l6.293-6.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg> <span class="text-sm text-gray-500">Upload file</span></div> <input id="file-upload" type="file" class="hidden"></label> <span${attr("class", `${stringify("hidden")} text-sm text-red-500 mt-2`)}>The file type should be .xml</span></div></div> `;
  if (templateCodesList.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(templateCodesList);
    $$payload.out += `<div class="p-4 bg-gray-100 border border-gray-300 rounded-md"><h2 class="text-lg font-semibold mb-4">Template Codes</h2> <button class="w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none">Copy All</button> <ul class="mb-4 space-y-2"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$payload.out += `<li class="flex items-center justify-between p-2 bg-white border border-gray-200 rounded-md"><span class="text-sm font-mono">${escape_html(item)}</span> <button class="px-2 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">Copy</button></li>`;
    }
    $$payload.out += `<!--]--></ul></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Template Code Generator</title>`;
    $$payload2.out += `<meta name="description" content="Template Code Generator">`;
  });
  DocumentUploader($$payload);
}
export {
  _page as default
};
