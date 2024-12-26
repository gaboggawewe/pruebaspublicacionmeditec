/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute } from '../../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { c as config, h as humanize, s as slugify, $ as $$Base } from '../../chunks/Base_D_VI9eFi.mjs';
import { d as dateFormat, r as readingTime } from '../../chunks/readingTime_FXIn3rWG.mjs';
import { jsx, Fragment } from 'react/jsx-runtime';
import { DiscussionEmbed } from 'disqus-react';
import 'react';
import { FaRegUserCircle, FaRegCalendarAlt, FaRegClock, FaRegFolder } from 'react-icons/fa';
import { $ as $$Image } from '../../chunks/_astro_assets_BlX11tkN.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_DSvihOp6.mjs';
export { renderers } from '../../renderers.mjs';

const Disqus = () => {
  const { disqus } = config;
  return /* @__PURE__ */ jsx(Fragment, { children: disqus.enable && /* @__PURE__ */ jsx("div", { className: "row mt-16 justify-center ", children: /* @__PURE__ */ jsx(
    DiscussionEmbed,
    {
      shortname: disqus.shortname,
      config: disqus.settings
    }
  ) }) });
};

const $$Astro$1 = createAstro("https://pinwheel-astro.vercel.app");
const $$BlogSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogSingle;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${maybeRenderHead()}<section class="section blog-single"> <div class="container"> <div class="row justify-center"> <div class="lg:col-10"> ${renderComponent($$result, "Image", $$Image, { "class": "w-full rounded-xl", "src": post.data.image, "alt": "", "width": 920, "height": 450 })} </div> <div class="mt-10 max-w-[810px] lg:col-9"> <h1 class="h2"> ${post.data.title} </h1> <div class="mb-5 mt-6 flex items-center space-x-2"> <ul class="mb-4"> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegUserCircle", FaRegUserCircle, { "className": "mr-2 -mt-1 inline-block" })} ${humanize(post.data.author)} </li> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegCalendarAlt", FaRegCalendarAlt, { "className": "mr-2 -mt-1 inline-block" })} ${dateFormat(post.data.date)} </li> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegClock", FaRegClock, { "className": "mr-2 -mt-1 inline-block" })} ${readingTime(post.body)} </li> <li class="mr-4 inline-block"> ${renderComponent($$result, "FaRegFolder", FaRegFolder, { "className": "mr-2 -mt-1 inline-block" })} ${post.data.categories.map((category, index) => renderTemplate`<a${addAttribute(`/categories/${slugify(category)}`, "href")} class="hover:text-primary"> ${humanize(category)} ${index !== post.data.categories.length - 1 && ","} </a>`)} </li> </ul> </div> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> ${renderComponent($$result, "Disqus", Disqus, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/function-components/Disqus", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/BlogSingle.astro", void 0);

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
async function getStaticPaths() {
  const posts = await getSinglePage(config.settings.blog_folder);
  const paths = posts.map((post) => ({
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
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BlogSingle", $$BlogSingle, { "post": post })} ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/blog/[single].astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/blog/[single].astro";
const $$url = "/blog/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
