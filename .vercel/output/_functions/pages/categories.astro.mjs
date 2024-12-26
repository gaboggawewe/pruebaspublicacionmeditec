/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$Blogs } from '../chunks/Blogs_I9A8iV4X.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_BqhgKW_4.mjs';
import { $ as $$Shape } from '../chunks/Shape_Dh0QIH2F.mjs';
import { $ as $$BlogCategories } from '../chunks/BlogCategories_Bvjj8B-l.mjs';
import { $ as $$Base, c as config } from '../chunks/Base_D_VI9eFi.mjs';
import { g as getSinglePage } from '../chunks/contentParser_DSvihOp6.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_DBM3driJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const categories = await getTaxonomy(blog_folder, "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "categories" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": { title: "Categories" } })} </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": posts })} </div> </section> ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/categories/index.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
