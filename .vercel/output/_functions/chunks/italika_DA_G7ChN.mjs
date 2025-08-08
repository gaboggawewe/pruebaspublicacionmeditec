import { B as createVNode, F as Fragment, ax as __astro_tag_component__ } from './astro/server_CcPgtZJR.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "name": "Italika",
  "excerpt": "Comercialización de motocicletas, accesorios y refacciones.",
  "image": "/images/patrocinadores/italika.svg",
  "categories": ["Movilidad"],
  "url": "https://italika.com"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/patrocinadores-nuevos/italika.mdx";
const file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/content/patrocinadores-nuevos/italika.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/content/patrocinadores-nuevos/italika.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
