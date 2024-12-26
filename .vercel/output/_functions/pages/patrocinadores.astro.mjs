/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_BqhgKW_4.mjs';
import { $ as $$Shape } from '../chunks/Shape_Dh0QIH2F.mjs';
import { h as humanize, $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { marked } from 'marked';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { g as getSinglePage } from '../chunks/contentParser_DSvihOp6.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_DBM3driJ.mjs';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../renderers.mjs';

const IntegrateMedia = ({ integrations, categories }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab ? integrations : integrations.filter((post) => post.data.categories.includes(tab));
  return /* @__PURE__ */ jsx("section", { className: "section pt-0", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row justify-center", children: /* @__PURE__ */ jsx("div", { className: "lg:col-10" }) }),
    /* @__PURE__ */ jsx("div", { className: "integration-tab-items row mt-10", children: filterPost.map((item, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "integration-tab-item mb-8 md:col-6 lg:col-4",
        children: /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-white px-10 pb-8 pt-11 shadow-lg", children: [
          /* @__PURE__ */ jsxs("div", { className: "integration-card-head flex items-center space-x-4", children: [
            /* @__PURE__ */ jsx("img", { src: item.data.image, alt: "" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "h4", children: humanize(item.data.name) }),
              item.data.categories.map((category, i2) => /* @__PURE__ */ jsx("span", { className: "font-medium", children: humanize(category) }, i2))
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "my-5 border-y border-border py-5", children: /* @__PURE__ */ jsx(
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
  const integraionsIndex = await getEntryBySlug(
    "patrocinadores",
    "-index"
  );
  const categories = await getTaxonomy("patrocinadores", "categories");
  const integrations = await getSinglePage("patrocinadores");
  const page_data = {
    ...integraionsIndex.data,
    content: integraionsIndex.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": integraionsIndex.data.title, "meta_title": integraionsIndex.data.meta_title, "description": integraionsIndex.data.description, "image": integraionsIndex.data.image }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container -mt-14"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> </section> ${renderComponent($$result2, "IntegrateMedia", IntegrateMedia, { "client:load": true, "integrations": integrations, "categories": categories, "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/IntegrateMedia", "client:component-export": "default" })} ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/patrocinadores/index.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/patrocinadores/index.astro";
const $$url = "/patrocinadores";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
