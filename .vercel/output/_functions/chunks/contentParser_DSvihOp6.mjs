import { c as createComponent, r as renderTemplate } from './astro/server_RuF1lmQT.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection } from './_astro_content_DIOOpCCQ.mjs';

const getSinglePage = async (collection) => {
  const allPage = await getCollection(collection);
  const removeIndex = allPage.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
