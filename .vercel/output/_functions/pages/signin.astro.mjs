/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { S as SigninSlider } from '../chunks/SigninSlider_DUoohNCp.mjs';
export { renderers } from '../renderers.mjs';

const $$Signin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]"> <div class="mx-auto w-full max-w-[480px]"> <img class="mb-8 w-auto h-20" src="/images/logo_blanco.png" alt=""> <h1 class="mb-4">Registro</h1> <p>Ingrese los datos requeridos a continuación</p> <div class="signin-options mt-10"> <!-- <a class="btn btn-outline-white block w-full text-dark" href="#"
                >Sign In With Google</a
            >--> </div> <div class="relative my-8 text-center after:absolute after:left-0 after:top-1/2 after:z-[0] after:w-full after:border-b after:border-border after:content-['']"> <!-- <span class="relative z-[1] inline-block bg-white px-2"
                >Or Sign In With Email</span
          >--> </div> <form action="#"> <div class="form-group"> <label for="email" class="form-label">Correo electrónico</label> <input type="email" id="email" class="form-control" placeholder="Su correo electrónico"> </div> <div class="form-group mt-4"> <label for="phone" class="form-label mt-4">Número telefónico</label> <input type="tel" id="phone" class="form-control" placeholder="Su número telefónico"> </div> <div class="form-group mt-4"> <label for="nombre-completo" class="form-label">Nombre Completo</label> <input type="text" id="nombre-completo" class="form-control" placeholder="Su nombre completo"> </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Registrarse"> <!--
              <p class="mt-6 text-center">
                Can't <a class="text-dark">log in</a>?
                <a class="text-dark" href="/signup">Sign up</a> for create account
              </p>
            --> </form> </div> </div> ${renderComponent($$result2, "SigninSlider", SigninSlider, { "client:load": true, "title": " Brindamos asesor\xEDa m\xE9dica gratuita<br /> \xA1Con\xF3cenos!", "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/SigninSlider.jsx", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/signin.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
