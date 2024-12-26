/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_BqhgKW_4.mjs';
import { $ as $$Shape } from '../chunks/Shape_Dh0QIH2F.mjs';
import { h as humanize, $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { $ as $$Cta } from '../chunks/Cta_DvkQt6V3.mjs';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlX11tkN.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as Icon from 'react-feather';
import { useState } from 'react';
import { marked } from 'marked';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { g as getSinglePage } from '../chunks/contentParser_DSvihOp6.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_DBM3driJ.mjs';
export { renderers } from '../renderers.mjs';

const CareerBenifits = ({ benifits: { title, description, benifit_list } }) => {
  return /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center lg:col-8", children: [
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx("p", { className: "mt-4", children: description })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "row mt-14 text-center", children: benifit_list.map((item, i) => {
      const FeatherIcon = Icon[humanize(item.icon)];
      return /* @__PURE__ */ jsxs("div", { className: "mb-10 sm:col-6 lg:col-4 ", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: `mx-auto h-[90px] w-[100px]`,
              style: {
                fill: item.color,
                opacity: 0.1
              },
              viewBox: "0 0 200 200",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M47.1,-61.5C62.2,-53.9,76.5,-41.7,83.1,-25.9C89.6,-10.2,88.6,9.1,82.4,26.4C76.2,43.6,64.9,58.7,50.4,70.5C35.8,82.2,17.9,90.6,0,90.7C-18,90.7,-35.9,82.4,-48.4,70C-61,57.6,-68.1,41,-73.6,23.9C-79.1,6.9,-83,-10.7,-78.6,-26C-74.3,-41.3,-61.6,-54.3,-47.1,-62.1C-32.6,-70,-16.3,-72.7,-0.1,-72.5C16,-72.3,32,-69.2,47.1,-61.5Z",
                  transform: "translate(100 100)"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "benifit-icon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[28%]", children: /* @__PURE__ */ jsx(FeatherIcon, { color: item.color, size: 48 }) })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "h4 mb-4 mt-8", children: item.title }),
        /* @__PURE__ */ jsx("p", { children: item.content })
      ] }, i);
    }) })
  ] }) });
};

const JobPosts = ({ posts, categories, career: { title, subtitle } }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab ? posts : posts.filter((post) => post.data.categories.includes(tab));
  return /* @__PURE__ */ jsx("section", { className: "section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto text-center lg:col-8", children: [
      /* @__PURE__ */ jsx("h2", { children: title }),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: { __html: marked.parseInline(subtitle) }
        }
      ),
      /* @__PURE__ */ jsxs("ul", { className: "filter-list mt-8 flex flex-wrap items-center justify-center", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `filter-btn ${!tab ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
            onClick: () => setTab(""),
            children: "All Categories"
          }
        ) }),
        categories.map((category, i) => /* @__PURE__ */ jsx("li", { onClick: () => setTab(category), children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `filter-btn ${tab === category ? "filter-btn-active" : void 0} btn btn-sm cursor-pointer`,
            children: humanize(category)
          }
        ) }, `category-${i}`))
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "row mt-12", children: filterPost.map((post, i) => /* @__PURE__ */ jsx("div", { className: "mb-8 md:col-6", children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white p-5 shadow-lg lg:p-10", children: [
      /* @__PURE__ */ jsx("h3", { className: "h4", children: post.data.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-6", children: post.data.excerpt }),
      /* @__PURE__ */ jsxs("ul", { className: "mt-6 flex flex-wrap items-center text-dark", children: [
        /* @__PURE__ */ jsxs("li", { className: "my-1 mr-8 inline-flex items-center", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "mr-1",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z",
                  fill: "currentColor"
                }
              )
            }
          ),
          post.data.job_nature
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "my-1 mr-8 inline-flex items-center", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "mr-1",
              width: "16",
              height: "20",
              viewBox: "0 0 23 33",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M11.5007 0.970703C5.61504 0.970703 0.824219 5.75958 0.824219 11.6472C0.824219 20.1359 10.3612 31.2259 10.7669 31.6956L11.5007 32.5401L12.2345 31.6937C12.6402 31.2259 22.1772 20.1359 22.1772 11.6472C22.1772 5.75958 17.3863 0.970703 11.5007 0.970703ZM11.5007 29.5351C9.2761 26.7709 2.7654 18.1229 2.7654 11.6472C2.7654 6.83111 6.68463 2.91188 11.5007 2.91188C16.3167 2.91188 20.236 6.83111 20.236 11.6472C20.236 18.1171 13.7253 26.7709 11.5007 29.5351ZM11.5007 6.09347C8.28998 6.09347 5.67716 8.70629 5.67716 11.917C5.67716 15.1277 8.28998 17.7405 11.5007 17.7405C14.7114 17.7405 17.3242 15.1277 17.3242 11.917C17.3242 8.70629 14.7114 6.09347 11.5007 6.09347ZM11.5007 15.7993C9.35957 15.7993 7.61834 14.0581 7.61834 11.917C7.61834 9.77588 9.35957 8.03464 11.5007 8.03464C13.6418 8.03464 15.383 9.77588 15.383 11.917C15.383 14.0581 13.6418 15.7993 11.5007 15.7993Z",
                  fill: "currentColor"
                }
              )
            }
          ),
          post.data.location
        ] }),
        /* @__PURE__ */ jsx("li", { className: "my-1 mr-8", children: /* @__PURE__ */ jsxs(
          "a",
          {
            className: "inline-flex items-center font-semibold text-primary",
            href: `/career/${post.slug}`,
            children: [
              "Read More",
              /* @__PURE__ */ jsx(AiOutlineArrowRight, { className: "ml-1.5 text-xl font-bold" })
            ]
          }
        ) })
      ] })
    ] }) }, `post-${i}`)) })
  ] }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const careerIndex = await getEntryBySlug(
    "careers",
    "-index"
  );
  const { benifits, career, image } = careerIndex.data;
  const categories = await getTaxonomy("careers", "categories");
  const jobposts = await getSinglePage("careers");
  const page_data = {
    title: careerIndex.data.title,
    page_title: careerIndex.data.page_title,
    content: careerIndex.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": careerIndex.data.title, "meta_title": careerIndex.data.meta_title, "description": careerIndex.data.description, "image": careerIndex.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} <div class="col-12 mt-14"> <div class="relative"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": "", "height": 532, "width": 1044, "class": "w-full rounded" })} ${renderComponent($$result2, "Image", $$Image, { "class": "lg:h-[150px] lg:w-[150px] absolute -left-[8%] bottom-[12%] z-[-1] h-20 w-20 -rotate-90 lg:-left-8 lg:bottom-4", "src": "/images/shape.png", "height": 130, "width": 130, "alt": "" })} ${renderComponent($$result2, "Image", $$Image, { "class": "absolute -bottom-4 -right-4 z-[-1] h-16 w-16 -rotate-90", "src": "/images/shape.png", "alt": "", "height": 64, "width": 64 })} </div> </div> </div> </section>  ${renderComponent($$result2, "CareerBenifits", CareerBenifits, { "benifits": benifits, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/CareerBenifits", "client:component-export": "default" })} ${renderComponent($$result2, "JobPosts", JobPosts, { "client:load": true, "categories": categories, "career": career, "posts": jobposts, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/JobPosts", "client:component-export": "default" })} ${renderComponent($$result2, "Cta", $$Cta, {})} ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/career/index.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/career/index.astro";
const $$url = "/career";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
