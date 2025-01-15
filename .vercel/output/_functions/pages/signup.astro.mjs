/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_D_VI9eFi.mjs';
import { S as SigninSlider } from '../chunks/SigninSlider_DUoohNCp.mjs';
export { renderers } from '../renderers.mjs';

const $$Signup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <div class="container max-w-full"> <div class="row"> <div class="min-h-[980px] bg-white py-10 lg:col-6 lg:py-[114px]"> <div class="mx-auto w-full max-w-[480px]"> <img class="mb-8" src="/images/flower.png" alt=""> <h1 class="mb-4">Sing Up</h1> <p>Donec sollicitudin molestie malesda sollitudin</p> <div class="signin-options mt-10"> <!--   <a class="btn btn-outline-white block w-full text-dark" href="#"
                >Sign Up With Google</a
            > --> </div> <div class="relative my-8 text-center after:absolute after:left-0 after:top-1/2 after:z-[0] after:w-full after:border-b after:border-border after:content-['']"> <span class="relative z-[1] inline-block bg-white px-2">Or Sign Up With Email</span> </div> <form action="#"> <div class="form-group"> <label for="name" class="form-label">Full Name</label> <input type="text" id="name" class="form-control" placeholder="Your Full Name"> </div> <div class="form-group mt-4"> <label for="email" class="form-label">Email Adrdess</label> <input type="email" id="email" class="form-control" placeholder="Your Email Address"> </div> <div class="form-group mt-4"> <label for="password" class="form-label">Password</label> <input type="password" id="password" class="form-control" placeholder="Your Password"> </div> <input class="btn btn-primary mt-10 block w-full" type="submit" value="Sign Up"> </form> </div> </div> ${renderComponent($$result2, "SigninSlider", SigninSlider, { "client:load": true, "title": "A suite product accelerate <br /> your career design", "client:component-hydration": "load", "client:component-path": "@/layouts/function-components/SigninSlider.jsx", "client:component-export": "default" })} </div> </div> </section> ` })}`;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/signup.astro", void 0);

const $$file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/pages/signup.astro";
const $$url = "/signup";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signup,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
