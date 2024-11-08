import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="flex flex-col min-h-screen"><main class="flex-grow">${slots.default ? slots.default({}) : ``}</main>  </body>`;
});
export {
  Layout as default
};
