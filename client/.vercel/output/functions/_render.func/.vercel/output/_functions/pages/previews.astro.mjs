/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, g as createAstro, a as renderComponent } from '../chunks/astro/server_BkfUIB1O.mjs';
import 'kleur/colors';
import { a as astroPkg, $ as $$Layout } from '../chunks/package_CD7-zoIX.mjs';
import { constructCloudinaryUrl } from '@cloudinary-util/url-loader';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

// src/constants/analytics.ts

// package.json
var package_default = {
  name: "astro-cloudinary",
  version: "1.1.0",
  type: "module",
  license: "MIT",
  module: "./index.ts",
  keywords: [
    "cloudinary",
    "astro",
    "astro-loader"
  ],
  exports: {
    ".": {
      import: "./index.ts"
    },
    "./helpers": {
      types: "./dist/helpers/index.d.ts",
      import: "./dist/helpers/index.js"
    },
    "./loaders": {
      types: "./dist/loaders/index.d.ts",
      import: "./dist/loaders/index.js"
    },
    "./package.json": "./package.json"
  },
  files: [
    "dist",
    "helpers",
    "loaders",
    "src",
    "index.ts"
  ],
  scripts: {
    dev: "tsup --watch",
    build: "tsup",
    prepublishOnly: "cp ../README.md . && cp ../LICENSE . && pnpm build",
    postpublish: "rm ./README.md && rm ./LICENSE"
  },
  dependencies: {
    "@cloudinary-util/types": "1.5.7",
    "@cloudinary-util/url-loader": "5.10.2",
    "@cloudinary-util/util": "^3.3.2",
    "@cloudinary/url-gen": "^1.20.0",
    "@unpic/astro": "^0.0.46",
    "@unpic/core": "^0.0.49",
    tsup: "^8.2.4",
    unpic: "^3.18.0"
  },
  peerDependencies: {
    astro: "^3.2.0 || ^4.0.0"
  },
  devDependencies: {
    astro: "^4.15.6"
  }
};

// src/constants/analytics.ts
var ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID = "B";
var ASTRO_CLOUDINARY_ANALYTICS_ID = "G";
var ASTRO_VERSION = normalizeVersion(astroPkg.version);
var ASTRO_CLOUDINARY_VERSION = normalizeVersion(package_default.version);
function normalizeVersion(version) {
  let normalized = version;
  if (normalized.includes("-")) {
    normalized = normalized.split("-")[0];
  }
  return normalized;
}

function getCloudinaryConfig(config) {
  const cloudName = "dcf2oc3gk";
  const apiKey = undefined                                         ;
  const secureDistribution = undefined                                                     ;
  const privateCdn = undefined                                             ;
  return Object.assign({
    cloud: {
      ...config?.cloud,
      apiKey,
      cloudName
    },
    url: {
      ...config?.url,
      secureDistribution,
      privateCdn
    }
  }, config);
}
function getCloudinaryAnalytics(analytics) {
  return Object.assign({
    product: ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID,
    sdkCode: ASTRO_CLOUDINARY_ANALYTICS_ID,
    sdkSemver: ASTRO_CLOUDINARY_VERSION,
    techVersion: ASTRO_VERSION,
    feature: ""
  }, analytics);
}
function getCldImageUrl(options, config, analytics) {
  return constructCloudinaryUrl({
    options,
    config: getCloudinaryConfig(config),
    analytics: getCloudinaryAnalytics(analytics)
  });
}

const promts = {
  filterHalloween: "primer plano calabazas podridas talladas emanando un brillo espectral maligno bordeando un sendero antiguo cubierto de huesos al fondo castillo maldito con torres destruidas gargolas demoniacas  y ventanas rotas que destellan luz roja sangrienta cielo nocturno con luna de sangre gigante en medio arboles muertos retorcidos como manos esqueléticas cuervos posados en las ramas hojas muertas esparcidas verjas oxidadas rotas en el centro del camino una figura sombria alta y delgada con tunica negra rasgada sosteniendo una guadana antigua rodeada de almas en pena flotantes que emergen del suelo estilo dark fantasy pintura digital con tonos profundos de rojo sangre negro abismal y azul espectral efectos de niebla toxica iluminacion tenebrosa arquitectura gotica decadente ambiente macabro inspirado en arte de terror lovecraftiano siluetas de bestias voladoras demoniacas surcando el cielo bosque maldito en la distancia charcos que reflejan ojos brillantes desde su interior nubes tormentosas color purpura toxico"
};

const $$Astro$1 = createAstro();
const $$FacebookPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FacebookPreview;
  const {
    name,
    profilePicture,
    coverPhoto = "#f0f2f5",
    friendCount = 0
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="profile-card" data-astro-cid-f2gcau6y> <div class="cover-photo"${addAttribute(`background-image: url(${coverPhoto});`, "style")} data-astro-cid-f2gcau6y> <a class="edit-cover-photo" data-astro-cid-f2gcau6y> <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" data-astro-cid-f2gcau6y> <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" data-astro-cid-f2gcau6y></path> </svg>
Edit Cover Photo
</a> </div> <div class="profile-picture" data-astro-cid-f2gcau6y> <img${addAttribute(profilePicture, "src")}${addAttribute(`${name}'s profile picture`, "alt")} data-astro-cid-f2gcau6y> <a class="edit-profile-picture" data-astro-cid-f2gcau6y> <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor" data-astro-cid-f2gcau6y> <path d="M15.75 10.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" data-astro-cid-f2gcau6y></path> </svg> </a> </div> <div class="profile-info" data-astro-cid-f2gcau6y> <h1 data-astro-cid-f2gcau6y>${name}</h1> <p class="friends" data-astro-cid-f2gcau6y> ${friendCount} ${friendCount === 1 ? "friend" : "friends"} </p> <div class="action-buttons" data-astro-cid-f2gcau6y> <a class="primary-button" data-astro-cid-f2gcau6y> <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" data-astro-cid-f2gcau6y> <path d="M8 6.5a.5.5 0 01.5.5v1.5H10a.5.5 0 010 1H8.5V11a.5.5 0 01-1 0V9.5H6a.5.5 0 010-1h1.5V7a.5.5 0 01.5-.5z" data-astro-cid-f2gcau6y></path> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" data-astro-cid-f2gcau6y></path> </svg>
Add to story
</a> <a class="secondary-button" data-astro-cid-f2gcau6y> <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" data-astro-cid-f2gcau6y> <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" data-astro-cid-f2gcau6y></path> </svg>
Edit profile
</a> </div> </div> </div> `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/FacebookPreview.astro", void 0);

const $$Astro = createAstro();
const $$Previews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Previews;
  const { searchParams } = Astro2.url;
  const id = searchParams.get("id");
  if (id === null) {
    console.log("id es null");
  }
  const url = getCldImageUrl({ src: id });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SocialPicAI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"${addAttribute(id, "data-id")}> <button id="download-button">Download Image</button>
// agregaremos clases para ue el div de las imagenes sea un grid responsive
    auto ajustable
<div class="grid grid-cols-2 gap-4 md:grid-cols-3"> <div> ${renderComponent($$result2, "FacebookPreview", $$FacebookPreview, { "name": "John Doe", "profilePicture": "https://via.placeholder.com/120", "coverPhoto": "https://via.placeholder.com/500x200", "friendCount": 1e3 })} </div> <img hidden id="previewFacebook"${addAttribute(url, "src")}${addAttribute(800, "width")}${addAttribute(800, "height")} alt="facebook__image"> <img hidden id="instagram-preview"${addAttribute(url, "src")}${addAttribute(800, "width")}${addAttribute(800, "height")} alt="facebook__image"> <img hidden id="preview-twitter"${addAttribute(url, "src")}${addAttribute(800, "width")}${addAttribute(800, "height")} alt="facebook__image"> </div> ${renderComponent($$result2, "two-up", "two-up", { "id": "two-up", "hidden": true }, { "default": () => renderTemplate` <img id="original"${addAttribute(url, "src")} alt="facebook image" class="w-full h-full object-cover rounded"> <img id="preview"${addAttribute(url, "src")} alt="facebook image" class="w-full h-full object-cover rounded"> ` })} </main> <button${addAttribute(promts.filterHalloween, "id")}>Transform Image 1</button> <button>Transform Image 2</button> ` })} `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/pages/previews.astro", void 0);

const $$file = "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/pages/previews.astro";
const $$url = "/previews";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Previews,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
