import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Cm2zIv6d.mjs';
import { manifest } from './manifest_sQ6oFhHY.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/agenda.astro.mjs');
const _page3 = () => import('./pages/blog/page/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog/_single_.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/career/_single_.astro.mjs');
const _page7 = () => import('./pages/career.astro.mjs');
const _page8 = () => import('./pages/categories/_category_.astro.mjs');
const _page9 = () => import('./pages/categories.astro.mjs');
const _page10 = () => import('./pages/contacto.astro.mjs');
const _page11 = () => import('./pages/impacto.astro.mjs');
const _page12 = () => import('./pages/patrocinadores/_single_.astro.mjs');
const _page13 = () => import('./pages/patrocinadores.astro.mjs');
const _page14 = () => import('./pages/pricing.astro.mjs');
const _page15 = () => import('./pages/quienes-somos.astro.mjs');
const _page16 = () => import('./pages/signin.astro.mjs');
const _page17 = () => import('./pages/signup.astro.mjs');
const _page18 = () => import('./pages/_regular_.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/agenda.astro", _page2],
    ["src/pages/blog/page/[slug].astro", _page3],
    ["src/pages/blog/[single].astro", _page4],
    ["src/pages/blog/index.astro", _page5],
    ["src/pages/career/[single].astro", _page6],
    ["src/pages/career/index.astro", _page7],
    ["src/pages/categories/[category].astro", _page8],
    ["src/pages/categories/index.astro", _page9],
    ["src/pages/contacto.astro", _page10],
    ["src/pages/impacto.astro", _page11],
    ["src/pages/patrocinadores/[single].astro", _page12],
    ["src/pages/patrocinadores/index.astro", _page13],
    ["src/pages/pricing.astro", _page14],
    ["src/pages/quienes-somos.astro", _page15],
    ["src/pages/signin.astro", _page16],
    ["src/pages/signup.astro", _page17],
    ["src/pages/[regular].astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f1a70092-c0b6-4f80-b509-27434ac73ff7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
