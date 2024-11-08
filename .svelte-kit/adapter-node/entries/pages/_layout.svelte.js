import { S as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out += `<div class="flex flex-col min-h-screen"><main class="flex-grow"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main></div>`;
}
export {
  _layout as default
};
