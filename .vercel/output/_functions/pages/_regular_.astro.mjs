/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_BqhgKW_4.mjs';
import { $ as $$Shape } from '../chunks/Shape_Dh0QIH2F.mjs';
import { $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { g as getSinglePage } from '../chunks/contentParser_DSvihOp6.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://pinwheel-astro.vercel.app");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Default;
  const { data } = Astro2.props;
  const { Content } = await data.render();
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </section>`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/Default.astro", void 0);

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
async function getStaticPaths() {
  const pages = await getSinglePage("pages");
  const paths = pages.map((page) => ({
    params: {
      regular: page.slug
    },
    props: { page }
  }));
  return paths;
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  const page_data = {
    ...page.data
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </div> </section> ${renderComponent($$result2, "Default", $$Default, { "data": page })} ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/[regular].astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/[regular].astro";
const $$url = "/[regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
