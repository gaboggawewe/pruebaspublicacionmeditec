/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead, u as unescapeHTML, f as renderScript, d as renderComponent } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_BqhgKW_4.mjs';
import { $ as $$Shape } from '../chunks/Shape_Dh0QIH2F.mjs';
import 'clsx';
import { m as markdownify, $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://pinwheel-astro.vercel.app");
const $$CounterComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CounterComponent;
  const { counter } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="counter mt-16"> <div class="row mx-0 rounded-[20px] bg-white px-10 shadow-lg lg:py-10"> ', ' </div> </div> <script>\n  // astro:page-load event is fired when the page is loaded\n  document.addEventListener("astro:page-load", () => {\n    const counters = document.querySelectorAll(".count");\n    const speed = 700;\n    counters.forEach((counter) => {\n      const animate = () => {\n        const value = +counter.getAttribute("aria-valuenow");\n        const data = +counter.innerText;\n\n        const time = value / speed;\n        if (data < value) {\n          counter.innerText = Math.ceil(data + time);\n          setTimeout(animate, 1);\n        } else {\n          counter.innerText = value;\n        }\n      };\n\n      animate();\n    });\n  });\n<\/script>'])), maybeRenderHead(), counter.map((item) => renderTemplate`<div class="border-border sm:col-6 lg:col-3 px-10 py-10 text-center lg:border-r lg:py-0 last:lg:border-none"> <h2> <span class="count"${addAttribute(item.number, "aria-valuenow")}>
0
</span> <span${addAttribute("text-primary", "class")}${addAttribute({
    color: item.color
  }, "style")}>
+
</span> </h2> <p>${item.name}</p> </div>`));
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/impacto/CounterComponent.astro", void 0);

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { gallery } = Astro2.props;
  const { title, images } = gallery;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row justify-center text-center"> <div class="col-8"> <h2>${unescapeHTML(markdownify(title))}</h2> </div> </div> <div class="relative"> <div class="row" id="photo-gallery"> ${images.map((image) => renderTemplate`<div class="picture-item col-6 mt-12"> ${" "} <img class="w-full"${addAttribute(image, "src")} alt=""> </div>`)} <div class="js-shuffle-sizer col-1"></div> </div> <img class="absolute -bottom-5 -left-5 -z-[1]" src="images/shape-2.png" alt=""> <img class="absolute -right-5 bottom-20 -z-[1] h-16 w-16" src="images/shape.png" alt=""> </div> </div> </section> ${renderScript($$result, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/impacto/Gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/impacto/Gallery.astro", void 0);

const $$Impacto = createComponent(async ($$result, $$props, $$slots) => {
  const impacto = await getEntryBySlug("impacto", "index");
  const { counter, gallery, features, members } = impacto.data;
  const page_data = {
    ...impacto.data,
    content: impacto.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": impacto.data.title, "meta_title": impacto.data.meta_title, "description": impacto.data.description, "image": impacto.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero py-16"> <div class="container -mt-14"> <div class="page-hero-content mx-auto max-w-[768px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> ${renderComponent($$result2, "CounterComponent", $$CounterComponent, { "counter": counter })} <!-- benifit --> <!-- gellary --> ${renderComponent($$result2, "Gallery", $$Gallery, { "gallery": gallery })} <!-- our works --> <!-- <Works features={features} /> por si se quiere usar despues --> </div> </section> ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/impacto.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/impacto.astro";
const $$url = "/impacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
