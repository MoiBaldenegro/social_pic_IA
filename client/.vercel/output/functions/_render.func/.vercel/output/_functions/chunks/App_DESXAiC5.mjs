import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, g as createAstro, s as spreadAttributes, a as renderComponent, f as renderSlot } from './astro/server_BkfUIB1O.mjs';
import 'kleur/colors';
import { g as getI18n, a as astroPkg, $ as $$Layout } from './package_CD7-zoIX.mjs';
import 'clsx';
/* empty css                         */
import { inferImageDimensions, transformProps, transformSourceProps } from '@unpic/core';
import { getCanonicalCdnForUrl, transformUrl } from 'unpic';
import { getPixels } from '@unpic/pixels';
import { i as imageConfig } from './_astro_assets_Crf_8Dc6.mjs';
import { env } from 'node:process';
import { constructCloudinaryUrl, transformationPlugins, getVideoPlayerOptions, getUploadWidgetOptions } from '@cloudinary-util/url-loader';
import { createHash } from 'node:crypto';

const userResults = [
  {
    name: "Billie Eilish",
    before: "/images/before1.jpg",
    after: "/images/after1.jpg"
  },
  {
    name: "Dany Villareal",
    before: "/images/before2.jpg",
    after: "/images/after2.jpg"
  },
  {
    name: "Ale Villareal",
    before: "/images/before3.jpg",
    after: "/images/after3.jpg"
  }
];

const $$Astro$c = createAstro();
const $$UserResultsCarousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$UserResultsCarousel;
  const { currentLocale = "en" } = Astro2;
  const i18n = getI18n({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="my-12" data-astro-cid-gr5hnjng> <h2 class="text-3xl font-bold mb-6 text-center" data-astro-cid-gr5hnjng> ${i18n.userResults.title} <div class="user-results-carousel relative" data-astro-cid-gr5hnjng> <div class="carousel-container overflow-hidden" data-astro-cid-gr5hnjng> <div class="carousel-track flex transition-transform duration-300 ease-in-out" data-astro-cid-gr5hnjng> ${userResults.map((result, index) => renderTemplate`<div class="carousel-item flex-none w-full px-4" data-astro-cid-gr5hnjng> <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6" data-astro-cid-gr5hnjng> <h3 class="text-xl font-semibold mb-4" data-astro-cid-gr5hnjng>${result.name}</h3> <div class="grid grid-cols-2 gap-4" data-astro-cid-gr5hnjng> <div data-astro-cid-gr5hnjng> <p class="text-sm mb-2" data-astro-cid-gr5hnjng>Antes</p> <img src="billie.webp"${addAttribute(`${result.name} antes`, "alt")} class="w-full h-48 object-cover rounded" data-astro-cid-gr5hnjng> </div> <div data-astro-cid-gr5hnjng> <p class="text-sm mb-2" data-astro-cid-gr5hnjng>Después</p> <img src="billieAfter.jfif"${addAttribute(`${result.name} despu\xE9s`, "alt")} class="w-full h-48 object-cover rounded" data-astro-cid-gr5hnjng> </div> </div> </div> </div>`)} </div> </div> <button class="carousel-prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-white dark:bg-transparent rounded-full p-2 shadow-md size[200px]" data-astro-cid-gr5hnjng>
&#10094;
</button> <button class="carousel-next absolute top-1/2 right-2 transform -translate-y-1/2 bg-white dark:bg-transparent rounded-full p-2 shadow-md" data-astro-cid-gr5hnjng>
&#10095;
</button> </div> </h2> </section>  `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/UserResultsCarousel.astro", void 0);

const $$Astro$b = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Hero;
  const { currentLocale = "en" } = Astro2;
  const i18n = getI18n({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<main class="container md:mx-auto px-4 py-2 md:py-8" data-astro-cid-bbe6dxrz></main> <h1 class="text-4xl font-bold mb-8 text-center" data-astro-cid-bbe6dxrz> ${i18n.hero.title} </h1> `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/Hero.astro", void 0);

const specialBackgrounds = ["blurhash", "dominantColor", "lqip"];
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
async function getBackground(props) {
  if (props.background === "none") {
    return;
  }
  if (!specialBackgrounds.includes(props.background ?? "")) {
    return props.background;
  }
  let aspectRatio = props.aspectRatio;
  if (!aspectRatio) {
    if (props.width && props.height) {
      aspectRatio = props.height / props.width;
    } else {
      aspectRatio = 1;
    }
  }
  const cdn = getCanonicalCdnForUrl(props.src, props.cdn);
  if (!cdn) {
    return;
  }
  const bgImgProps = {
    ...props,
    url: props.src,
    width: 12,
    height: 12 * aspectRatio,
    cdn: cdn.cdn
  };
  if (!cdn) {
    return;
  }
  if (props.background === "lqip") {
    const lowUrl2 = transformUrl(bgImgProps)?.toString();
    if (!lowUrl2) {
      return;
    }
    if (!isValidUrl(lowUrl2)) {
      return;
    }
    const response = await fetch(lowUrl2, {
      headers: {
        Accept: "image/webp,*/*"
      }
    });
    const contentType = response.headers.get("Content-Type");
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    return "data:" + contentType + ";base64," + buffer.toString("base64");
  }
  const lowUrl = transformUrl({
    ...bgImgProps,
    width: 100,
    height: 100 * aspectRatio
  })?.toString();
  if (!lowUrl) {
    return;
  }
  if (!isValidUrl(lowUrl)) {
    return;
  }
  const pixels = await getPixels(lowUrl);
  if (!pixels) {
    return;
  }
  const data = Uint8ClampedArray.from(pixels.data);
  const { blurhashToDataUri, rgbColorToCssString, getDominantColor } = await import('@unpic/placeholder');
  if (props.background === "blurhash") {
    const { encode } = await import('blurhash');
    const blurhash = encode(data, pixels.width, pixels.height, 4, 3);
    return blurhashToDataUri(blurhash);
  }
  if (props.background === "dominantColor") {
    return rgbColorToCssString(getDominantColor(data));
  }
}

function getDefaultService() {
  if (env.NETLIFY || env.NETLIFY_LOCAL) {
    return "netlify";
  }
  if (env.VERCEL || env.NOW_BUILDER) {
    return "vercel";
  }
  return "astro";
}

function getDefaultImageCdn(config) {
  if (config?.fallbackService === "squoosh" || config?.fallbackService === "sharp") {
    return "astro";
  }
  return config.fallbackService ?? getDefaultService();
}

const $$Astro$a = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Image;
  const { placeholder, ...props } = Astro2.props;
  let imgProps;
  if (typeof props.src === "object") {
    imgProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    imgProps = {
      ...props
    };
  }
  const config = imageConfig.service?.config;
  imgProps.layout ||= config?.layout;
  imgProps.background ||= placeholder ?? config?.placeholder;
  if (!imgProps.cdn) {
    imgProps.cdn = getDefaultImageCdn(config);
  }
  imgProps.background = await getBackground(imgProps);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(transformProps(imgProps))}>`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/node_modules/@unpic/astro/src/Image.astro", void 0);

const $$Astro$9 = createAstro();
const $$Source = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Source;
  const props = Astro2.props;
  let sourceProps;
  if (typeof props.src === "object") {
    sourceProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    sourceProps = props;
  }
  const config = imageConfig.service?.config;
  sourceProps.layout ||= config?.layout;
  if (!sourceProps.cdn) {
    sourceProps.cdn = getDefaultImageCdn(config);
  }
  return renderTemplate`${maybeRenderHead()}<source${spreadAttributes(transformSourceProps(sourceProps))}>`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/node_modules/@unpic/astro/src/Source.astro", void 0);

const name = "astro-cloudinary";
const version = "1.1.0";
const type = "module";
const license = "MIT";
const module = "./index.ts";
const keywords = [
	"cloudinary",
	"astro",
	"astro-loader"
];
const exports = {
	".": {
		"import": "./index.ts"
	},
	"./helpers": {
		types: "./dist/helpers/index.d.ts",
		"import": "./dist/helpers/index.js"
	},
	"./loaders": {
		types: "./dist/loaders/index.d.ts",
		"import": "./dist/loaders/index.js"
	},
	"./package.json": "./package.json"
};
const files = [
	"dist",
	"helpers",
	"loaders",
	"src",
	"index.ts"
];
const dependencies = {
	"@cloudinary-util/types": "1.5.7",
	"@cloudinary-util/url-loader": "5.10.2",
	"@cloudinary-util/util": "^3.3.2",
	"@cloudinary/url-gen": "^1.20.0",
	"@unpic/astro": "^0.0.46",
	"@unpic/core": "^0.0.49",
	tsup: "^8.2.4",
	unpic: "^3.18.0"
};
const peerDependencies = {
	astro: "^3.2.0 || ^4.0.0"
};
const devDependencies = {
	astro: "^4.15.6"
};
const scripts = {
	dev: "tsup --watch",
	build: "tsup"
};
const pkg = {
	name: name,
	version: version,
	type: type,
	license: license,
	module: module,
	keywords: keywords,
	exports: exports,
	files: files,
	dependencies: dependencies,
	peerDependencies: peerDependencies,
	devDependencies: devDependencies,
	scripts: scripts
};

const ASTRO_CLOUDINARY_ANALYTICS_PRODUCT_ID = "B";
const ASTRO_CLOUDINARY_ANALYTICS_ID = "G";
const ASTRO_VERSION = normalizeVersion(astroPkg.version);
const ASTRO_CLOUDINARY_VERSION = normalizeVersion(pkg.version);
function normalizeVersion(version) {
  let normalized = version;
  if (normalized.includes("-")) {
    normalized = normalized.split("-")[0];
  }
  return normalized;
}

function getCloudinaryConfig(config) {
  const cloudName = config?.cloud?.cloudName ?? "dcf2oc3gk";
  if (!cloudName) {
    throw new Error("A Cloudinary Cloud name is required, please make sure PUBLIC_CLOUDINARY_CLOUD_NAME is set and configured in your environment.");
  }
  const apiKey = config?.cloud?.apiKey ?? undefined                                         ;
  const secureDistribution = config?.url?.secureDistribution ?? undefined                                                     ;
  const privateCdn = config?.url?.privateCdn ?? undefined                                             ;
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

function generateImageLoader(props, config) {
  const imageProps = { ...props };
  imageProps.width = typeof imageProps.width === "string" ? Number.parseInt(imageProps.width) : imageProps.width;
  imageProps.height = typeof imageProps.height === "string" ? Number.parseInt(imageProps.height) : imageProps.height;
  return function loader(loaderOptions) {
    const options = {
      ...imageProps,
      src: loaderOptions.url,
      width: loaderOptions.width,
      height: loaderOptions.height
    };
    if (typeof loaderOptions?.width === "number" && typeof options.width === "number" && loaderOptions.width !== options.width) {
      const multiplier = loaderOptions.width / options.width;
      options.width = loaderOptions.width;
      if (typeof options.height === "number") {
        options.height = Math.floor(options.height * multiplier);
      }
    } else if (typeof loaderOptions?.width === "number" && typeof options?.width !== "number") {
      options.width = loaderOptions?.width;
    }
    return getCldImageUrl(options, config);
  };
}

const $$Astro$8 = createAstro();
const $$CldImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$CldImage;
  const { config, class: className, ...props } = Astro2.props;
  const CLOUDINARY_PROPS = [
    "assetType",
    "deliveryType",
    "dpr",
    "format",
    "quality",
    "strictTransformations"
    // Excluded props that are managed by the component
    // 'height',
    // 'src',
    // 'width'
  ];
  transformationPlugins.forEach(({ props: props2 }) => {
    Object.keys(props2).forEach((prop) => {
      if (CLOUDINARY_PROPS.includes(prop)) {
        throw new Error(`Option ${prop} already exists!`);
      }
      CLOUDINARY_PROPS.push(prop);
    });
  });
  const cldOptions = {
    height: props.height,
    src: props.src,
    width: props.width
  };
  CLOUDINARY_PROPS.forEach((key) => {
    const prop = props[key];
    if (prop) {
      cldOptions[key] = prop;
    }
  });
  const transformer = generateImageLoader(cldOptions, config);
  const src = transformer({
    url: props.src,
    width: props.width,
    height: props.height
  });
  const imageProps = {
    cdn: "cloudinary",
    height: props.height,
    src,
    width: props.width,
    transformer
  };
  Object.entries(props).filter(([key]) => typeof key === "string" && !CLOUDINARY_PROPS.includes(key)).forEach(([key, value]) => imageProps[key] = value);
  let imageClassName = "astro-cloudinary-cldimage";
  if (className) {
    imageClassName = `${imageClassName} ${className}`;
  }
  return renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": imageClassName, ...imageProps })} `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/node_modules/astro-cloudinary/src/components/CldImage.astro", void 0);

const $$Astro$7 = createAstro();
const $$CldVideoPlayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CldVideoPlayer;
  const PLAYER_VERSION = "2.1.0";
  const props = Astro2.props;
  const { class: className, config, height, id, width } = props;
  const cloudinaryConfig = getCloudinaryConfig(config);
  const playerOptions = getVideoPlayerOptions(props, cloudinaryConfig);
  const { publicId } = playerOptions;
  if (typeof publicId === "undefined") {
    throw new Error("[CldVideoPlayer] Public ID or Cloudinary URL required - please specify a src prop.");
  }
  let playerId = id || `player-${publicId.replace("/", "-")}`;
  const playerHash = createHash("shake256", { outputLength: 4 }).update(JSON.stringify(playerOptions)).digest("hex");
  let playerClassName = "astro-cloudinary-cldvideoplayer cld-video-player cld-fluid";
  if (className) {
    playerClassName = `${playerClassName} ${className}`;
  }
  return renderTemplate`<link${addAttribute(`https://unpkg.com/cloudinary-video-player@${PLAYER_VERSION}/dist/cld-video-player.min.css`, "href")} rel="stylesheet">${maybeRenderHead()}<div${addAttribute(playerId, "id")}${addAttribute({ width: "100%", aspectRatio: `${width} / ${height}` }, "style")}> <video${addAttribute(`${playerId}-${playerHash}`, "id")}${addAttribute(playerClassName, "class")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(JSON.stringify(playerOptions), "data-cldvideoplayer-options")}${addAttribute(playerId, "data-cldvideoplayer-id")}></video> </div> `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/node_modules/astro-cloudinary/src/components/CldVideoPlayer.astro", void 0);

const $$Astro$6 = createAstro();
const $$CldUploadWidget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CldUploadWidget;
  const { class: className, config, id, options, signatureEndpoint, uploadPreset } = Astro2.props;
  const cloudinaryConfig = getCloudinaryConfig(config);
  const uploadOptions = getUploadWidgetOptions({
    uploadPreset: uploadPreset || undefined                                               ,
    ...options
  }, cloudinaryConfig);
  let playerClassName = "astro-cloudinary-clduploadwidget";
  if (typeof className === "string") {
    playerClassName = `${playerClassName} ${className}`;
  }
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(playerClassName, "class")}${addAttribute(JSON.stringify(uploadOptions), "data-clduploadwidgetupload-options")}${addAttribute(signatureEndpoint, "data-clduploadwidgetupload-signatureendpoint")}> ${renderSlot($$result, $$slots["default"])} </span> `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/node_modules/astro-cloudinary/src/components/CldUploadWidget.astro", void 0);

const $$Astro$5 = createAstro();
const $$UploadWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$UploadWidget;
  const { currentLocale = "en" } = Astro2;
  const i18n = getI18n({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12" data-astro-cid-6o3zy6ym> <form id="imageForm" class="space-y-4" data-astro-cid-6o3zy6ym> <div data-astro-cid-6o3zy6ym> <label for="userImage" class="block text-sm font-medium text-gray-700 dark:text-gray-300" data-astro-cid-6o3zy6ym> ${i18n.form.uploadImage} </label> <input type="file" id="userImage" name="userImage" accept="image/*" required class="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" data-astro-cid-6o3zy6ym> </div> <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" data-astro-cid-6o3zy6ym> ${i18n.form.generate} </button> </form> ${renderComponent($$result, "CldUploadWidget", $$CldUploadWidget, { "options": {
    sources: ["facebook"],
    multiple: false,
    maxFiles: 1,
    language: "es",
    text: {
      es: {
        dropbox: {
          dd_title_single: "Sube tu foto"
        }
      }
    },
    styles: {}
  }, "uploadPreset": "mxvi-upload", "data-astro-cid-6o3zy6ym": true }, { "default": ($$result2) => renderTemplate` <button id="cdWidget" data-astro-cid-6o3zy6ym>Facebook</button> ` })} ${renderComponent($$result, "CldUploadWidget", $$CldUploadWidget, { "options": {
    sources: ["instagram"],
    multiple: false,
    maxFiles: 1,
    language: "es",
    text: {
      es: {
        dropbox: {
          dd_title_single: "Sube tu foto"
        }
      }
    },
    styles: {}
  }, "uploadPreset": "mxvi-upload", "data-astro-cid-6o3zy6ym": true }, { "default": ($$result2) => renderTemplate` <button id="cdWidget" data-astro-cid-6o3zy6ym>Instagram</button> ` })} ${renderComponent($$result, "CldUploadWidget", $$CldUploadWidget, { "id": "local-widget", "options": {
    sources: ["local"],
    multiple: false,
    maxFiles: 1,
    language: "es",
    text: {
      es: {
        dropbox: {
          dd_title_single: "Sube tu foto"
        }
      }
    },
    styles: {}
  }, "uploadPreset": "mxvi-upload", "data-astro-cid-6o3zy6ym": true }, { "default": ($$result2) => renderTemplate` <button id="cdWidget" data-astro-cid-6o3zy6ym>Local</button> ` })} </div> `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/UploadWidget.astro", void 0);

const $$Astro$4 = createAstro();
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { title, description, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"> <div class="text-3xl mb-4">${icon}</div> <h3 class="text-xl font-semibold mb-2">${title}</h3> <p class="text-gray-600 dark:text-gray-400">${description}</p> </div>`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/FeatureCard.astro", void 0);

const features = [
  {
    title: "features.quick.title",
    description: "features.quick.description",
    icon: "⚡"
  },
  {
    title: "features.professional.title",
    description: "features.professional.description",
    icon: "🎨"
  },
  {
    title: "features.customizable.title",
    description: "features.customizable.description",
    icon: "🔧"
  }
];

const $$Astro$3 = createAstro();
const $$Features = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Features;
  const { currentLocale = "en" } = Astro2;
  const i18n = getI18n({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="my-12"> <h2 class="text-3xl font-bold mb-6 text-center">${i18n.features.title}</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${features.map((feature) => renderTemplate`${renderComponent($$result, "FeatureCard", $$FeatureCard, { ...feature })}`)} </div> </section>`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/Features.astro", void 0);

const $$Astro$2 = createAstro();
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { name, role, content, avatar } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"> <p class="text-gray-600 dark:text-gray-400 mb-4">"${content}"</p> <div class="flex items-center"> <img${addAttribute(avatar, "src")}${addAttribute(name, "alt")} class="w-12 h-12 rounded-full mr-4"> <div> <h4 class="font-semibold">${name}</h4> <p class="text-sm text-gray-500 dark:text-gray-400">${role}</p> </div> </div> </div>`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/Testimonial.astro", void 0);

const testimonials = [
  {
    name: "testimonials.user1.name",
    role: "testimonials.user1.role",
    content: "testimonials.user1.content",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "testimonials.user2.name",
    role: "testimonials.user2.role",
    content: "testimonials.user2.content",
    avatar: "https://i.pravatar.cc/150?img=2"
  }
];

const $$Astro$1 = createAstro();
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { currentLocale = "en" } = Astro2;
  const i18n = getI18n({ currentLocale });
  return renderTemplate`${maybeRenderHead()}<section class="my-12"> <h2 class="text-3xl font-bold mb-6 text-center"> ${i18n.testimonials.title} </h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "Testimonial", $$Testimonial, { ...testimonial })}`)} </div> </section>`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/Testimonials.astro", void 0);

const $$Astro = createAstro();
const $$App = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$App;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SocialPicAI" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto md:px-4 md:py-8"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "UploadWidget", $$UploadWidget, {})}
// crearemos un preview de la imagen subida antes de Transformar
<div id="preview-image-container">
// Ava previsualizamos la imagen antes de enviarla
</div> <div id="results" class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> <!-- Los resultados se mostrarán aquí --> </div> <button id="download-button-index">Download SuperSet</button> <h2 id="select-prompt">Select Prompt</h2> <div id="select-prompt-container" class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> <!-- Los estilos de los prompts se mostrarán aquí --> </div> ${renderComponent($$result2, "UserResultsCarousel", $$UserResultsCarousel, {})} ${renderComponent($$result2, "Features", $$Features, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} </main> ` })} `;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/components/App.astro", void 0);

export { $$App as $ };
