import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, a as addAttribute } from './astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import 'clsx';
import { m as markdownify } from './Base_D_VI9eFi.mjs';

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { page_data } = Astro2.props || {};
  const { title, index_title, page_title, slug, content } = page_data || {};
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <h1 class="mb-5 mt-8">${unescapeHTML(markdownify(
    page_data?.page_title ? page_data?.page_title : page_data?.title
  ))}</h1> <p>${unescapeHTML(markdownify(content))}</p> ${page_data.buttons && renderTemplate`<div class="mt-11 justify-center sm:flex"> ${page_data.buttons.map(
    (button) => button?.enable && renderTemplate`<a${addAttribute(`btn m-3 block sm:inline-block ${button?.outline ? "btn-outline-primary" : "btn-primary"} `, "class")}${addAttribute(button?.link, "href")}> ${button?.label} </a>`
  )} </div>`} </div>`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
