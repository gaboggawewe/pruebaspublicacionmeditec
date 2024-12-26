/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, a as addAttribute, d as renderComponent } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { m as markdownify, $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlX11tkN.mjs';
/* empty css                                 */
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { Play } from 'react-feather';
import YouTube from 'react-youtube';
import { AiFillCheckCircle } from 'react-icons/ai';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://pinwheel-astro.vercel.app");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.props;
  const { title, button, image, content } = banner;
  return renderTemplate`${maybeRenderHead()}<section class="section banner relative custom-banner" data-astro-cid-ez673g47> <div class="container -mt-16" data-astro-cid-ez673g47> <div class="row items-center" data-astro-cid-ez673g47> <div class="lg:col-6" data-astro-cid-ez673g47> <h1 class="banner-title" data-astro-cid-ez673g47>${unescapeHTML(markdownify(title))}</h1> <p class="mt-6" data-astro-cid-ez673g47>${unescapeHTML(markdownify(content))}</p> ${button.enable && renderTemplate`<a class="btn btn-white mt-8"${addAttribute(button.link, "href")} data-astro-cid-ez673g47> ${button.label} </a>`} </div> <div class="lg:col-6" data-astro-cid-ez673g47> ${renderComponent($$result, "Image", $$Image, { "class": "w-full object-contain", "alt": "banner", "src": image, "width": 603, "height": 396, "data-astro-cid-ez673g47": true })} </div> </div> </div> ${renderComponent($$result, "Image", $$Image, { "class": "banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]", "alt": "banner", "src": "/images/banner-shape.png", "width": 496, "height": 466, "data-astro-cid-ez673g47": true })} </section> `;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/Banner.astro", void 0);

const VideoComponent = ({
  height,
  width,
  src,
  title,
  video_id,
  video_height,
  video_width
}) => {
  const [play, setPlay] = useState(false);
  const videoOptions = {
    borderRadius: "16px",
    playerVars: {
      autoplay: 1
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: !play ? /* @__PURE__ */ jsxs("div", { className: "relative text-center", children: [
    /* @__PURE__ */ jsx("button", { className: "video-play-btn", onClick: () => setPlay(true), children: /* @__PURE__ */ jsx(Play, {}) }),
    /* @__PURE__ */ jsx(
      "img",
      {
        width,
        height,
        src,
        alt: title,
        className: "inline h-auto max-w-full rounded-2xl"
      }
    )
  ] }) : /* @__PURE__ */ jsx("div", { className: "youtube mx-auto text-center", children: /* @__PURE__ */ jsx(
    YouTube,
    {
      videoId: video_id,
      opts: videoOptions,
      iframeClassName: `  aspect-video ${video_height} ${video_width} max-w-full bg-transparent rounded-2xl`
    }
  ) }) });
};

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
const $$Service = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Service;
  const { service } = Astro2.props;
  const { homepage_tab, our_service } = service;
  return renderTemplate`${maybeRenderHead()}<section class="section services" data-astro-cid-5vn3d7dx> <div class="container" data-astro-cid-5vn3d7dx> <!-- <HomepageTab client:load homepage_tab={homepage_tab} /> --> ${our_service.map((item, index) => renderTemplate`<div class="gx-5 row mt-12 items-center lg:mt-0 service-item" data-astro-cid-5vn3d7dx> <div${addAttribute(`lg:col-7 ${index % 2 === 0 ? "order-0" : "order-1"}`, "class")} data-astro-cid-5vn3d7dx> ${item.image && renderTemplate`<div class="relative" data-astro-cid-5vn3d7dx> ${renderComponent($$result, "Image", $$Image, { "class": "w-full object-contain", "alt": "service", "width": 667, "height": 498, "src": item.image, "style": `height: 400px; width: 550px; ${index % 2 !== 0 ? "float: right;" : ""}`, "data-astro-cid-5vn3d7dx": true })} </div>`} ${item.video && renderTemplate`${renderComponent($$result, "VideoComponent", VideoComponent, { "client:load": true, "src": item.video.thumbnail, "height": 370, "width": 700, "title": item.title, "video_id": item.video.video_id, "video_width": "w-[700px]", "video_height": "h-[370px]", "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/VideoComponent", "client:component-export": "default", "data-astro-cid-5vn3d7dx": true })}`} </div> <div${addAttribute(`mt-6 lg:col-5 lg:mt-0 ${index % 2 === 0 ? "order-1" : "order-0"}`, "class")} data-astro-cid-5vn3d7dx> <div class="text-container" data-astro-cid-5vn3d7dx> <h2 class="lg:text-4xl" data-astro-cid-5vn3d7dx>${item.title}</h2> <p class="mt-4 text-base" data-astro-cid-5vn3d7dx>${item.description}</p> ${item.button && item.button.enable && renderTemplate`<a class="btn btn-white mt-6"${addAttribute(item.button.link, "href")} data-astro-cid-5vn3d7dx> ${item.button.label} </a>`} <ul class="mt-6 text-dark lg:-ml-4" data-astro-cid-5vn3d7dx> ${item.list && item.list.map((list) => renderTemplate`<li class="mb-2 flex items-center rounded px-4" data-astro-cid-5vn3d7dx> ${renderComponent($$result, "AiFillCheckCircle", AiFillCheckCircle, { "className": "mr-3 fill-primary text-white", "data-astro-cid-5vn3d7dx": true })} ${list} </li>`)} </ul> </div> </div> </div>`)} </div> </section> `;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/Service.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntryBySlug("homepage", "index");
  const { banner, key_features, service, testimonial } = homepage.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Banner", $$Banner, { "banner": banner })}  ${renderComponent($$result2, "Service", $$Service, { "service": service })}  ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/index.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
