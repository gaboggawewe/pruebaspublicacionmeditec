import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import 'clsx';
import { c as config } from './Base_D_VI9eFi.mjs';

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  const {
    call_to_action: {
      title,
      description,
      button: { label, link }
    }
  } = config;
  return renderTemplate`${maybeRenderHead()}<section class="px-5 py-20 xl:py-[120px]"> <div class="container"> <div class="bg-gradient row justify-center rounded-b-[80px] rounded-t-[20px] px-[30px] pb-[75px] pt-16"> <div class="lg:col-11"> <div class="row"> <div class="lg:col-7"> <h2 class="h1 text-white">${title}</h2> <a class="btn btn-white mt-8"${addAttribute(link, "href")}>${label}</a> </div> <div class="mt-8 lg:col-5 lg:mt-0"> <p class="text-white"> ${description} </p> </div> </div> </div> </div> </div> </section>`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/layouts/partials/Cta.astro", void 0);

export { $$Cta as $ };
