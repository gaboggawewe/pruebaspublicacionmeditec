/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import { $ as $$PageHeader } from '../chunks/PageHeader_B1uRuW9C.mjs';
import { $ as $$Shape } from '../chunks/Shape_BsNlbRA4.mjs';
import { $ as $$Base } from '../chunks/Base_BO0XG6xc.mjs';
import { g as getEntryBySlug } from '../chunks/_astro_content_iYN5TcHd.mjs';
export { renderers } from '../renderers.mjs';

const $$Agenda = createComponent(async ($$result, $$props, $$slots) => {
  const agenda = await getEntryBySlug("agenda", "index");
  const { perfomance, our_works } = agenda.data;
  const page_data = {
    ...agenda.data,
    content: agenda.body
  };
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": agenda.data.title, "meta_title": agenda.data.meta_title, "description": agenda.data.description, "image": agenda.data.image }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Shape", $$Shape, {})} ${maybeRenderHead()}<section class="page-hero pb-14 pt-16"> <div class="container -mt-14"> <div class="page-hero-content mx-auto max-w-[883px] text-center"> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "page_data": page_data })} </div> <!--
      <div class="row mt-14">
        {
          perfomance.map((item: any, i: number) => (
            <div class="mt-10 text-center sm:col-6 md:col-4 md:mb-0">
              <div
                class={\`relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl bg-white p-4 shadow-lg \${
                  perfomance.length - 1 !== i
                    ? "after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full after:translate-x-full after:border-b-2 after:border-dashed after:border-primary/50 after:content-[''] md:after:block"
                    : undefined
                }\`}
              >
                <Image height={122} width={144} src={item.image} alt="" />
              </div>
              <h2 class="h5">{item.title}</h2>
              <p class="mt-4">{item.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      {
        our_works.map((item: any, index: number) => (
          <div class="gx-5 row mt-16 items-center first:mt-12">
            <div
              class={\`lg:col-7 \${
                index % 2 === 0 ? "lg:order-1" : "lg:order-0"
              }\`}
            >
              <div class="relative">
                <Image
                  class="w-full object-contain"
                  alt="service"
                  width={473}
                  height={286}
                  src={item.image}
                />
              </div>
            </div>
            <div
              class={\`mt-6 lg:col-5 lg:mt-0 \${
                index % 2 === 0 ? "lg:order-0" : "lg:order-1"
              }\`}
            >
              <div class="text-container">
                <h2 class="lg:text-4xl">{item.title}</h2>

                <ul class="mt-6 text-dark lg:-ml-4">
                  {item.list.map((list: any) => (
                    <li class="mb-2 flex items-center rounded px-4">
                      <AiFillCheckCircle className="mr-3 fill-primary text-white" />
                      {list}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </section>

  <Cta />
--> </div></section>` })}`;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/agenda.astro", void 0);

const $$file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/pages/agenda.astro";
const $$url = "/agenda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agenda,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
