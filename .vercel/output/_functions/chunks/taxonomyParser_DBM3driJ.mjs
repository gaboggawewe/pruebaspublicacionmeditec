import { c as createComponent, r as renderTemplate } from './astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getSinglePage } from './contentParser_DSvihOp6.mjs';

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
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/lib/taxonomyParser.astro", void 0);

export { getTaxonomy as g };
