import { F as Fragment, _ as __astro_tag_component__, e as createVNode } from './astro/server_RuF1lmQT.mjs';
import { $ as $$Image } from './_astro_assets_BlX11tkN.mjs';
import 'react/jsx-runtime';
import 'react';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'github-slugger';
import 'marked';
import './Tabs_DkanSRUO.mjs';
import 'clsx';

const frontmatter = {
  "title": "Career",
  "page_title": "Career In Pinwheel",
  "image": "/images/career/career-hero-image.png",
  "benifits": {
    "title": "Competitive salary",
    "description": "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque",
    "benifit_list": [{
      "title": "Competitive salary",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#24A1FF",
      "icon": "briefcase"
    }, {
      "title": "100% remote",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#7B5AFF",
      "icon": "aperture"
    }, {
      "title": "Unlimited PTO",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#FDC528",
      "icon": "umbrella"
    }, {
      "title": "Flexible HOURS",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#FF5874",
      "icon": "clock"
    }, {
      "title": "Medical insurance",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#12E189",
      "icon": "plusSquare"
    }, {
      "title": "Career growth",
      "content": "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel",
      "color": "#E545FF",
      "icon": "barChart"
    }]
  },
  "sidebar_content": {
    "title": "Apply today",
    "content": "Management, investments. You’ll be on arguably the most important position at the company the front lines helping",
    "button": {
      "label": "Apply Now",
      "link": "#",
      "enable": true
    },
    "enable": true
  },
  "career": {
    "title": "Open positions",
    "subtitle": "Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor amet, consectetur <br/> adipiscing elit. Praesent sapien massa, convallis"
  }
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(_components.p, {
    children: ["Donec sollicitudin molestie malesda. Donec sollitudin molestie malesuada Mauris ", createVNode("br", {}), " pellentesque nec egestas non nisi Cras"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "src/content/careers/-index.mdx";
const file = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/content/careers/-index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/gabog/OneDrive/TEC/TEC/carrera/tercer semestre/PAGINA MEDITEC/Meditec/src/content/careers/-index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
