import { c as createComponent, a as renderTemplate } from './astro/server_CcPgtZJR.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getCollection } from './_astro_content_DzRQikgI.mjs';

const getSinglePage = async (collection) => {
  const allPage = await getCollection(collection);
  const removeIndex = allPage.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => !data.data.draft);
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
