/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import { $ as $$Blogs } from '../chunks/Blogs_ChV7munz.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_B1uRuW9C.mjs';
import { $ as $$Shape } from '../chunks/Shape_BsNlbRA4.mjs';
import { $ as $$BlogCategories } from '../chunks/BlogCategories_0nmQLDep.mjs';
import { c as config, $ as $$Base } from '../chunks/Base_BO0XG6xc.mjs';
import { g as getSinglePage } from '../chunks/contentParser_5ovzcg5V.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_CGcbBwlH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { blog_folder } = config.settings;
  const posts = await getSinglePage(blog_folder);
  const categories = await getTaxonomy(blog_folder, "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "categories" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": { title: "Categories" } })} </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": posts })} </div> </section> ` })}`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/categories/index.astro", void 0);

const $$file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
