/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import { $ as $$BlogCategories } from '../../chunks/BlogCategories_0nmQLDep.mjs';
import { $ as $$Blogs } from '../../chunks/Blogs_ChV7munz.mjs';
import { $ as $$PageHeader } from '../../chunks/PageHeader_B1uRuW9C.mjs';
import { $ as $$Shape } from '../../chunks/Shape_BsNlbRA4.mjs';
import { s as slugify, c as config, $ as $$Base, h as humanize } from '../../chunks/Base_BO0XG6xc.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_OfUWdbO7.mjs';
import { g as getTaxonomy } from '../../chunks/taxonomyParser_DOzMDsFv.mjs';
export { renderers } from '../../renderers.mjs';

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
async function getStaticPaths() {
  const categories = await getTaxonomy(
    config.settings.blog_folder,
    "categories"
  );
  return categories.map((item) => {
    const category = slugify(item);
    return {
      params: { category },
      props: {
        item
      }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const categories = await getTaxonomy(config.settings.blog_folder, "categories");
  const { category } = Astro2.params;
  const { item } = Astro2.props;
  const posts = await getSinglePage(config.settings.blog_folder);
  const filterByTags = taxonomyFilter(posts, "categories", category);
  const page_data = {
    index_title: "Categories",
    slug: item
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": category }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-8 pt-16"> <div class="container"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} <h1 class="h2 mb-14 text-center">
Showing posts from <span class="text-primary">${humanize(item)}</span> category
</h1> </div> </div> </section> <section class="section"> <div class="container"> ${renderComponent($$result2, "BlogCategories", $$BlogCategories, { "categories": categories })} ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": filterByTags })} </div> </section> ` })}`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/categories/[category].astro", void 0);

const $$file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
