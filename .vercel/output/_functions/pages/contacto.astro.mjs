/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_BqhgKW_4.mjs';
import { $ as $$Base, c as config } from '../chunks/Base_D_VI9eFi.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BlX11tkN.mjs';
import { a as getEntryBySlug } from '../chunks/_astro_content_DIOOpCCQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntryBySlug("contacto", "index");
  const { contact_form_action } = config.params;
  const contact = entry.data;
  const page_data = {
    ...contact,
    content: contact.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": contact.title, "meta_title": contact.meta_title, "description": contact.description, "image": contact.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page-hero pb-6 pt-16"> <div class="container -mt-14">${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })}</div> </section> <section class="section pt-0"> <div class="container"> <div class="row"> <div class="mb-10 text-center md:col-6 md:order-2 md:mb-0 md:pt-9"> <div class="contact-img relative inline-flex pb-5 pl-5"> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/logo_blanco.png", "height": 644, "width": 500, "alt": "" })} ${renderComponent($$result2, "Image", $$Image, { "class": "absolute bottom-0 left-0 -z-[1] h-14 w-14", "src": "/images/shape-2.png", "alt": "", "height": 56, "width": 56 })} </div> </div> <div class="md:col-6 md:order-1"> <form class="lg:max-w-[484px]"${addAttribute(contact_form_action, "action")} method="POST"> <div class="form-group mb-5"> <label class="form-label" for="name">Nombre Completo</label> <input class="form-control" type="text" id="name" placeholder="Tu Nombre Completo"> </div> <div class="form-group mb-5"> <label class="form-label" for="eamil">Correo Electrónico</label> <input class="form-control" type="text" id="email" placeholder="Tú Correo Electrónico"> </div> <!-- <div class="form-group mb-5">
              <label class="form-label" for="reason">Reason/Purpose</label>
              <select name="reason" id="reason" class="form-select" required>
                <option value="">Select reason/purpose</option>
                <option value="investment plane">Investment Plan</option>
                <option value="investment plane-2">Investment Plan 2</option>
                <option value="investment plane-3">Investment Plan 3</option>
              </select>
            </div> --> <div class="form-group mb-5"> <label class="form-label" for="message">Mensaje</label> <textarea class="form-control h-[150px]" id="message" cols="30" rows="10"></textarea> </div> <input class="btn btn-primary block w-full" type="submit" value="Enviar Mensaje"> </form> </div> </div> </div> </section> ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
