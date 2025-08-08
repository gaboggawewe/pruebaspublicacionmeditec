/* empty css                                     */
import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_BO0XG6xc.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
import { Star } from 'react-feather';
import SwiperCore from 'swiper';
/* empty css                                  */
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'clsx';
import { marked } from 'marked';
/* empty css                                       */
import { g as getEntryBySlug } from '../chunks/_astro_content_iYN5TcHd.mjs';
export { renderers } from '../renderers.mjs';

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
          /* @__PURE__ */ jsx("p", { children: item.content }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `review-rating mt-6 flex items-center justify-center space-x-2.5 ${item.rating}  `,
              children: [
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {}),
                /* @__PURE__ */ jsx(Star, {})
              ]
            }
          )
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

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
const $$TextSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TextSection;
  const { content, title, description } = Astro2.props;
  marked.setOptions({
    breaks: true,
    gfm: true
  });
  return renderTemplate`${maybeRenderHead()}<section class="section" data-astro-cid-rrtow3tb> <div class="container" data-astro-cid-rrtow3tb> <div class="row justify-center text-center mb-8" data-astro-cid-rrtow3tb> <div class="lg:col-8" data-astro-cid-rrtow3tb> <h2 class="h3 mb-4" data-astro-cid-rrtow3tb>${title}</h2> <p class="text-lg" data-astro-cid-rrtow3tb>${description}</p> </div> </div> <div class="content prose prose-lg mx-auto" data-astro-cid-rrtow3tb> <div class="markdown-content" data-astro-cid-rrtow3tb>${unescapeHTML(marked.parse(content))}</div> </div> </div> </section> `;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/layouts/components/TextSection.astro", void 0);

const $$Testimonios = createComponent(async ($$result, $$props, $$slots) => {
  const homepage = await getEntryBySlug("homepage", "index");
  const testimonios = await getEntryBySlug("testimonios", "index");
  const { testimonial } = homepage.data;
  const { Content } = testimonios.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": testimonial.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="reviews"> <div class="container"> <div class="row justify-center text-center"> <div class="lg:col-8"> <h2>${testimonial.title}</h2> <p class="mt-4">${testimonial.description}</p> </div> </div> <div class="row mt-10"> <div class="col-12"> ${renderComponent($$result2, "TestimonialSlider", TestimonialSlider, { "list": testimonial.testimonial_list, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/TestimonialSlider", "client:component-export": "default" })} </div> </div> </div> </section> ${renderComponent($$result2, "TextSection", $$TextSection, { "content": testimonios.body, "title": testimonios.data.title, "description": testimonios.data.description })} ` })}`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/testimonios.astro", void 0);

const $$file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/testimonios.astro";
const $$url = "/testimonios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
