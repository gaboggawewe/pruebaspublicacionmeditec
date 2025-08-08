import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import 'clsx';
import { h as humanize, s as slugify } from './Base_BO0XG6xc.mjs';

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
const $$BlogCategories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogCategories;
  const { categories } = Astro2.props;
  const params = Astro2.params;
  return renderTemplate`${maybeRenderHead()}<div class="category-filter mb-10 mt-3 rounded-xl bg-[#EEEEEE] p-4"> <ul class="filter-list flex flex-wrap items-center"> <li> <a${addAttribute(`filter-btn ${!params.category ? "filter-btn-active" : void 0} btn btn-sm`, "class")} href="/categories">All Categories</a> </li> ${categories.map((category) => renderTemplate`<li> <a${addAttribute(`filter-btn ${params.category === slugify(category) ? "filter-btn-active" : void 0} btn btn-sm`, "class")}${addAttribute(`/categories/${slugify(category)}`, "href")}> ${humanize(category)} </a> </li>`)} </ul> </div>`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/layouts/components/blog/BlogCategories.astro", void 0);

export { $$BlogCategories as $ };
