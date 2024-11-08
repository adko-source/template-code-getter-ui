import { S as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out += `<body class="flex flex-col min-h-screen"><main class="flex-grow"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main></body>`;
}
export {
  _layout as default
};
