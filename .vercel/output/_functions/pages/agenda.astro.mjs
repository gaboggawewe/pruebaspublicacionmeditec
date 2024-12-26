/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Agenda = createComponent(async ($$result, $$props, $$slots) => {
  const agenda = await getEntryBySlug("agenda", "index");
  agenda.data;
  ({
    ...agenda.data,
    content: agenda.body
  });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": agenda.data.title, "meta_title": agenda.data.meta_title, "description": agenda.data.description, "image": agenda.data.image }, { "default": ($$result2) => renderTemplate`  ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/agenda.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/agenda.astro";
const $$url = "/agenda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agenda,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
