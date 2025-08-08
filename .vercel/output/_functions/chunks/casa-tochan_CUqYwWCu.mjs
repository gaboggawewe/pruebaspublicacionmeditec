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
  "name": "Casa Tochán",
  "excerpt": "Albergue que ofrece apoyo integral a personas migrantes.",
  "image": "/images/patrocinios/casa_tochan.png",
  "categories": ["Albergue"],
  "url": "https://casatochan.org"
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

const url = "src/content/patrocinadores-nuevos/casa-tochan.mdx";
const file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/content/patrocinadores-nuevos/casa-tochan.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/content/patrocinadores-nuevos/casa-tochan.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
