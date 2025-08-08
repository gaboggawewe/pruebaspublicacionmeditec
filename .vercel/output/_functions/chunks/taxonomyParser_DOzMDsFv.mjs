import { c as createComponent, a as renderTemplate } from './astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getSinglePage } from './contentParser_OfUWdbO7.mjs';

const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(categoryArray[j]);
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/lib/taxonomyParser.astro", void 0);

export { getTaxonomy as g };
