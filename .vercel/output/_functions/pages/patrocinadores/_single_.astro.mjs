/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, u as unescapeHTML, a as addAttribute } from '../../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/_astro_assets_BlX11tkN.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_BqhgKW_4.mjs';
import { $ as $$Shape } from '../../chunks/Shape_Dh0QIH2F.mjs';
import { $ as $$Base, m as markdownify, h as humanize } from '../../chunks/Base_D_VI9eFi.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_DSvihOp6.mjs';
import { a as getEntryBySlug } from '../../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
async function getStaticPaths() {
  const integrations = await getSinglePage("patrocinadores");
  const paths = integrations.map((post) => ({
    params: {
      single: post.slug
    },
    props: { post }
  }));
  return paths;
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const integraionsIndex = await getEntryBySlug(
    "patrocinadores",
    "-index"
  );
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const page_data = {
    ...post.data,
    index_title: integraionsIndex.data.title,
    slug: post.slug
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post.data.title, "meta_title": post.data.meta_title, "description": post.data.description, "image": post.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-8 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </div> </section> <section class="section career-single pt-0"> <div class="container"> <div class="lg:gx-4 row"> <div class="mx-auto lg:col-8"> <div class="lg:py-[60px] rounded-xl bg-white p-7 shadow-lg lg:px-12"> <div class="mb-8 px-4 text-center"> ${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto", "src": post.data.image, "alt": "", "height": 80, "width": 80 })} <h1 class="mt-6">${post.data.title}</h1> <p class="mt-6">${unescapeHTML(markdownify(post.data.excerpt))}</p> <a class="btn btn-primary mt-8 px-10"${addAttribute(post.data.button.link, "href")}>${humanize(post.data.button.label)} ${humanize(post.data.name)}</a> </div> <div class="content">${renderComponent($$result2, "Content", Content, {})}</div> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/patrocinadores/[single].astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/patrocinadores/[single].astro";
const $$url = "/patrocinadores/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
