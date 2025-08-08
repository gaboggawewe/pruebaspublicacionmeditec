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
  "name": "Eucerin",
  "excerpt": "Enfoque dermocosmético para proteger tu piel, mantenerla sana y radiante.",
  "image": "/images/patrocinadores/eucerin.svg",
  "categories": ["Salud"],
  "url": "https://www.eucerin.com.mx/"
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

const url = "src/content/patrocinadores/eucerin.mdx";
const file = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/content/patrocinadores/eucerin.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/gabogg_awewe/Code/PROYECTOS-ALIOSHA/pruebaspublicacionmeditec/src/content/patrocinadores/eucerin.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
