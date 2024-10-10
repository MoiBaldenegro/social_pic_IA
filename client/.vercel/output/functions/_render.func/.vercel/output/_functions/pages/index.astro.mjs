/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BkfUIB1O.mjs';
import 'kleur/colors';
import { $ as $$App } from '../chunks/App_DESXAiC5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "App", $$App, {})}`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/pages/index.astro", void 0);

const $$file = "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
