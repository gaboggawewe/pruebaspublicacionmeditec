/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_B1uRuW9C.mjs';
import { $ as $$Shape } from '../chunks/Shape_BsNlbRA4.mjs';
import { h as humanize, $ as $$Base } from '../chunks/Base_BO0XG6xc.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { marked } from 'marked';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { g as getSinglePage } from '../chunks/contentParser_5ovzcg5V.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_CGcbBwlH.mjs';
import { g as getEntryBySlug } from '../chunks/_astro_content_DzRQikgI.mjs';
export { renderers } from '../renderers.mjs';

const IntegrateMedia = ({ integrations, categories }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab ? integrations : integrations.filter((post) => post.data.categories.includes(tab));
  const hasIncompleteLastRow = filterPost.length % 3 === 2;
  return /* @__PURE__ */ jsx("section", { className: "section pt-0", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:col-10" }) }),
    /* @__PURE__ */ jsx("div", { className: "integration-tab-items row mt-4", children: filterPost.map((item, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: `integration-tab-item mb-8 md:col-6 lg:col-4 ${hasIncompleteLastRow && i >= filterPost.length - 2 ? "lg:col-4 lg:translate-x-1/2" : ""}`,
        children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white px-10 pb-8 pt-11 shadow-lg h-full flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "integration-card-head flex items-center space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: item.data.image, alt: "" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "h4", children: humanize(item.data.name) }),
              item.data.categories.map((category, i2) => /* @__PURE__ */ jsx("span", { className: "font-medium", children: humanize(category) }, i2))
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "my-5 border-y border-border py-5 flex-grow", children: /* @__PURE__ */ jsx(
            "p",
            {
              dangerouslySetInnerHTML: {
                __html: marked.parseInline(
                  item.data.excerpt.slice(0, 80)
                )
              }
            }
          ) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: "group inline-flex items-center font-semibold text-dark hover:text-primary",
              href: `${item.data.url}`,
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                "Visítanos",
                /* @__PURE__ */ jsx(AiOutlineArrowRight, { className: "ml-1.5 text-xl font-bold duration-300 group-hover:ml-3" })
              ]
            }
          )
        ] })
      },
      i
    )) })
  ] }) });
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const patronNuevosIndex = await getEntryBySlug(
    "patrocinadores-nuevos",
    "-index"
  );
  const patronNuevosCategories = await getTaxonomy("patrocinadores-nuevos", "categories");
  const patrocinadoresNuevos = await getSinglePage("patrocinadores-nuevos");
  const patronIndex = await getEntryBySlug(
    "patrocinadores",
    "-index"
  );
  const patronCategories = await getTaxonomy("patrocinadores", "categories");
  const patrocinadores = await getSinglePage("patrocinadores");
  const collabIndex = await getEntryBySlug(
    "colaboradores",
    "-index"
  );
  const collabCategories = await getTaxonomy("colaboradores", "categories");
  const colaboradores = await getSinglePage("colaboradores");
  const patron_nuevos_data = {
    ...patronNuevosIndex.data,
    content: patronNuevosIndex.body
  };
  const page_data = {
    ...patronIndex.data,
    content: patronIndex.body
  };
  const collab_data = {
    ...collabIndex.data,
    content: collabIndex.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": patronNuevosIndex.data.title, "meta_title": patronNuevosIndex.data.meta_title, "description": patronNuevosIndex.data.description, "image": patronNuevosIndex.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container -mt-14"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": patron_nuevos_data })} </div> </section> ${renderComponent($$result2, "IntegrateMedia", IntegrateMedia, { "client:load": true, "integrations": patrocinadoresNuevos, "categories": patronNuevosCategories, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/IntegrateMedia", "client:component-export": "default" })} <section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> ${renderComponent($$result2, "IntegrateMedia", IntegrateMedia, { "client:load": true, "integrations": patrocinadores, "categories": patronCategories, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/IntegrateMedia", "client:component-export": "default" })} <section class="page-hero pb-14 pt-16"> <div class="container"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": collab_data })} </div> </section> ${renderComponent($$result2, "IntegrateMedia", IntegrateMedia, { "client:load": true, "integrations": colaboradores, "categories": collabCategories, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/IntegrateMedia", "client:component-export": "default" })} ` })}`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/patrocinadores/index.astro", void 0);

const $$file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/patrocinadores/index.astro";
const $$url = "/patrocinadores";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
