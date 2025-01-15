/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$Base, m as markdownify } from '../chunks/Base_D_VI9eFi.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlX11tkN.mjs';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntryBySlug("pages", "404");
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": entry.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="flex h-[40vh] items-center justify-center"> <div class="text-center"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/404.png", "class": "mb-4 inline", "alt": "logo", "height": 120, "width": 120 })} <h1 class="mb-4">${unescapeHTML(markdownify(entry.data.title))}</h1> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </section> ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/404.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
