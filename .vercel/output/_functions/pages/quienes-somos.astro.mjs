/* empty css                                     */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as renderComponent, a as addAttribute } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { h as humanize, m as markdownify, $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import * as Icon from 'react-feather';
import { $ as $$Shape } from '../chunks/Shape_Dh0QIH2F.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlX11tkN.mjs';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../renderers.mjs';

const Projects = ({ projects }) => {
  return /* @__PURE__ */ jsx("div", { className: "col-12 ", children: /* @__PURE__ */ jsx("div", { className: "row", children: projects.map((item, i) => {
    const FeatherIcon = Icon[humanize(item.icon)];
    return /* @__PURE__ */ jsx("div", { className: "lg:col-6", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center space-x-4 rounded-lg bg-[#fafafa] px-6 py-8 lg:mt-6  ${projects.length - 1 === i ? "mb-0" : "mb-6 "} `,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "relative inline-flex h-24 w-24 items-center justify-center p-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "project-icon text-[#c4e5d6]", children: [
              " ",
              /* @__PURE__ */ jsx(FeatherIcon, { className: "font-semibold" })
            ] }),
            /* @__PURE__ */ jsx(
              "svg",
              {
                className: "absolute left-0 top-0 h-full w-full",
                width: "90",
                height: "90",
                viewBox: "0 0 90 90",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx(
                  "path",
                  {
                    opacity: "0.1",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M42.8833 0.00928958C63.2143 -0.38584 82.2759 11.853 88.3264 31.1979C94.1797 49.9121 84.027 68.9907 68.0244 80.3913C52.4387 91.4948 31.5679 93.9094 16.0849 82.6642C0.66775 71.4667 -3.27813 50.9537 2.58684 32.8642C8.48561 14.6704 23.699 0.382132 42.8833 0.00928958Z",
                    fill: "#FFCC99"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "h5 font-primary", children: item.title }),
            /* @__PURE__ */ jsxs("p", { className: "mt-4", children: [
              item.content,
              " "
            ] })
          ] })
        ]
      }
    ) }, `item-${i}`);
  }) }) });
};

const $$Astro$1 = createAstro("https://pinwheel-astro.vercel.app");
const $$ProjecManagement = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjecManagement;
  const {
    features: {
      project_management: {
        title,
        content,
        management,
        feature_service,
        feature_tab
      }
    }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section features pb-0"> <div class="container"> <div class="row"> <div class="mx-auto text-center lg:col-7"> <h2>${unescapeHTML(markdownify(title))}</h2> <p class="mt-4">${unescapeHTML(markdownify(content))}</p> </div> </div> <div class="p mt-14 rounded-xl bg-white p-6 shadow-lg lg:px-12 lg:py-16"> <div class="row"> ${renderComponent($$result, "Projects", Projects, { "client:load": true, "projects": management.projects, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/Projects", "client:component-export": "default" })} </div> </div> </div> </section>`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/quienes-somos/ProjecManagement.astro", void 0);

const $$Astro = createAstro("https://pinwheel-astro.vercel.app");
const $$OurMembers = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OurMembers;
  const {
    members: { title, description, member_list }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row"> <div class="mx-auto -mt-10 text-center lg:col-10"> <h2>${title}</h2> <p class="mt-4"> ${description} </p> </div> </div> <div class="row mt-12 justify-center"> <div class="lg:col-20"> <div class="flex flex-wrap justify-center"> ${member_list.map((item, index) => renderTemplate`<div${addAttribute(`mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center ${index === member_list.length - 1 && member_list.length % 3 === 1 ? "lg:col-span-3" : ""}`, "class")}> <div class="member-avatar inline-flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "height": 112, "width": 112, "class": "rounded-full h-28 w-28", "src": item.image, "alt": "" })} </div> <div class="mt-6 w-full flex-1 rounded-xl bg-white px-4 py-8 shadow-lg"> <h5 class="font-primary">${item.name}</h5> <p class="mt-1.5">${item.field}</p> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/components/quienes-somos/OurMembers.astro", void 0);

const $$QuienesSomos = createComponent(async ($$result, $$props, $$slots) => {
  const quienesSomos = await getEntryBySlug("quienes-somos", "index");
  const { members } = quienesSomos.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": quienesSomos.data.title, "meta_title": quienesSomos.data.meta_title, "description": quienesSomos.data.description, "image": quienesSomos.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero py-16"> <div class="container -mt-16"> <div class="page-hero-content mx-auto max-w-[768px] text-center"> ${renderComponent($$result2, "OurMembers", $$OurMembers, { "members": members })} </div> </div></section> ${renderComponent($$result2, "ProjecManagement", $$ProjecManagement, { "features": quienesSomos.data })} ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/quienes-somos.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/quienes-somos.astro";
const $$url = "/quienes-somos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QuienesSomos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
