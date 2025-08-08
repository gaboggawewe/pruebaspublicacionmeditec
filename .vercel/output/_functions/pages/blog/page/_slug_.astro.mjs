/* empty css                                           */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import { $ as $$Blogs } from '../../../chunks/Blogs_ChV7munz.mjs';
import { $ as $$PageHeader } from '../../../chunks/PageHeader_B1uRuW9C.mjs';
import { $ as $$Shape } from '../../../chunks/Shape_BsNlbRA4.mjs';
import { c as config, $ as $$Base } from '../../../chunks/Base_BO0XG6xc.mjs';
import { s as sortByDate, $ as $$Pagination } from '../../../chunks/sortFunctions_j6JoI-yU.mjs';
import { g as getSinglePage } from '../../../chunks/contentParser_OfUWdbO7.mjs';
import { g as getEntryBySlug } from '../../../chunks/_astro_content_iYN5TcHd.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const blogIndex = await getEntryBySlug(
    config.settings.blog_folder,
    "-index"
  );
  const { slug } = Astro2.params;
  const posts = await getSinglePage(config.settings.blog_folder);
  const sortedPosts = sortByDate(posts);
  const recentPost = sortedPosts.filter((item) => !item.data.featured);
  const totalPages = Math.ceil(recentPost.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = recentPost.slice(indexOfFirstPost, indexOfLastPost);
  const page_data = {
    index_title: blogIndex.data.title,
    slug: `page / ${slug}`
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": blogIndex.data.title, "meta_title": blogIndex.data.meta_title, "description": blogIndex.data.description, "image": blogIndex.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> <section class="section"> <div class="container"> <h2 class="h4 mb-4">Recent Posts</h2> ${renderComponent($$result2, "Blogs", $$Blogs, { "posts": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": config.settings.blog_folder, "totalPages": totalPages, "currentPage": currentPage })} </div> </section> ` })}`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/blog/page/[slug].astro", void 0);

const $$file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/blog/page/[slug].astro";
const $$url = "/blog/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
