/* empty css                                     */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import { $ as $$Shape } from '../chunks/Shape_BsNlbRA4.mjs';
import '../chunks/index_CvbikOoI.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_ByzmE2sD.mjs';
import { $ as $$Base } from '../chunks/Base_BO0XG6xc.mjs';
import { g as getEntryBySlug } from '../chunks/_astro_content_DzRQikgI.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import SwiperCore from 'swiper';
/* empty css                                  */
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
const $$OurMembers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OurMembers;
  const {
    members: { title, description, member_list }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row"> <div class="mx-auto -mt-10 text-center lg:col-10"> <h2>${title}</h2> <p class="mt-4"> ${description} </p> </div> </div> <div class="row mt-12 justify-center"> <div class="lg:col-20"> <div class="flex flex-wrap justify-center"> ${member_list.map((item, index) => renderTemplate`<div${addAttribute(`mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center ${index === member_list.length - 1 && member_list.length % 3 === 1 ? "lg:col-span-3" : ""}`, "class")}> <div class="member-avatar inline-flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "height": 112, "width": 112, "class": "rounded-full h-28 w-28", "src": item.image, "alt": "" })} </div> <div class="mt-6 w-full flex-1 rounded-xl bg-white px-4 py-8 shadow-lg"> <h5 class="font-primary">${item.name}</h5> <p class="mt-1.5">${item.field}</p> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/layouts/components/quienes-somos/OurMembers.astro", void 0);

const TestimonialSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);
  return /* @__PURE__ */ jsxs("div", { className: "reviews-carousel relative", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        pagination: {
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true
        },
        onSwiper: (swiper2) => {
          setSwiper(swiper2);
        },
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        breakpoints: {
          992: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        },
        children: list.map((item, i) => /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "review", children: [
          /* @__PURE__ */ jsx("div", { className: "review-author-avatar bg-gradient", children: /* @__PURE__ */ jsx("img", { src: item.avatar, alt: "" }) }),
          /* @__PURE__ */ jsx("h4", { className: "mb-2", children: item.author }),
          /* @__PURE__ */ jsx("p", { className: "mb-4 text-[#666]", children: item.organization }),
          /* @__PURE__ */ jsx("div", { children: item.content.split("\n").map((line, index) => /* @__PURE__ */ jsx("p", { className: "mb-2", children: line.trim() }, index)) })
        ] }) }, "feature-" + i))
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsx(
      "div",
      {
        width: "100%",
        className: "swiper-pagination reviews-carousel-pagination !bottom-0",
        style: { width: "100%" },
        ref: paginationRef
      }
    ) })
  ] });
};

const $$QuienesSomos = createComponent(async ($$result, $$props, $$slots) => {
  const quienesSomos = await getEntryBySlug("quienes-somos", "index");
  const { members } = quienesSomos.data;
  const { testimonial } = quienesSomos.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": quienesSomos.data.title, "meta_title": quienesSomos.data.meta_title, "description": quienesSomos.data.description, "image": quienesSomos.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero py-16"> <div class="container -mt-16"> <div class="page-hero-content mx-auto max-w-[768px] text-center"> ${renderComponent($$result2, "OurMembers", $$OurMembers, { "members": members })} </div> </div></section> <section class="reviews"> <div class="container"> <div class="row justify-center text-center"> <div class="lg:col-8"> <h2>${testimonial.title}</h2> <p class="mt-4">${testimonial.description}</p> </div> </div> <div class="row mt-10"> <div class="col-12"> ${renderComponent($$result2, "TestimonialSlider", TestimonialSlider, { "list": testimonial.testimonial_list, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/TestimonialSlider2", "client:component-export": "default" })} </div> </div> </div> </section> ` })}`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/quienes-somos.astro", void 0);

const $$file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/quienes-somos.astro";
const $$url = "/quienes-somos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuienesSomos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
