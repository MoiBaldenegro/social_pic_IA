import { c as createComponent, r as renderTemplate, b as addAttribute, e as renderHead, f as renderSlot, g as createAstro } from './astro/server_BkfUIB1O.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const site$1 = {
	title: "Generador de Imágenes Sociales",
	description: "Crea imágenes profesionales para tus redes sociales en segundos"
};
const home$1 = {
	title: "Genera <0>Imágenes Profesionales</0> para Redes Sociales",
	subtitle: "Sube tu foto y obtén versiones optimizadas para cada plataforma"
};
const form$1 = {
	uploadImage: "Sube tu imagen",
	generate: "Generar Imágenes"
};
const features$1 = {
	title: "Características",
	quick: {
		title: "Rápido y Fácil",
		description: "Genera imágenes para todas las redes sociales en segundos"
	},
	professional: {
		title: "Aspecto Profesional",
		description: "Obtén imágenes de alta calidad para mejorar tu presencia en línea"
	},
	customizable: {
		title: "Personalizable",
		description: "Ajusta las imágenes según tus preferencias y marca personal"
	}
};
const testimonials$1 = {
	title: "Lo que dicen nuestros usuarios",
	user1: {
		name: "María García",
		role: "Influencer",
		content: "Esta herramienta me ha ahorrado horas de trabajo. ¡Ahora puedo mantener una imagen coherente en todas mis redes sociales!"
	},
	user2: {
		name: "Carlos Rodríguez",
		role: "Emprendedor",
		content: "Impresionante servicio. Ha mejorado significativamente mi presencia en línea con imágenes profesionales."
	}
};
const userResults$1 = {
	title: "Resultados de Nuestros Usuarios"
};
const footer$1 = {
	rights: "Todos los derechos reservados."
};
const hero$1 = {
	title: "Genera <0>Imágenes Profesionales</0> para Redes Sociales",
	subtitle: "Sube tu foto y obtén versiones optimizadas para cada plataforma"
};
const spanish = {
	site: site$1,
	home: home$1,
	form: form$1,
	features: features$1,
	testimonials: testimonials$1,
	userResults: userResults$1,
	footer: footer$1,
	hero: hero$1
};

const site = {
	title: "Social Image Generator",
	description: "Create professional images for your social networks in seconds"
};
const home = {
	title: "Generate <0>Professional Images</0> for Social Networks",
	subtitle: "Upload your photo and get optimized versions for each platform"
};
const form = {
	uploadImage: "Upload your image",
	generate: "Generate Images"
};
const features = {
	title: "Features",
	quick: {
		title: "Quick and Easy",
		description: "Generate images for all social networks in seconds"
	},
	professional: {
		title: "Professional Look",
		description: "Get high-quality images to enhance your online presence"
	},
	customizable: {
		title: "Customizable",
		description: "Adjust images according to your preferences and personal brand"
	}
};
const testimonials = {
	title: "What our users say",
	user1: {
		name: "John Smith",
		role: "Influencer",
		content: "This tool has saved me hours of work. Now I can maintain a consistent image across all my social networks!"
	},
	user2: {
		name: "Emily Johnson",
		role: "Entrepreneur",
		content: "Impressive service. It has significantly improved my online presence with professional images."
	}
};
const userResults = {
	title: "Our Users' Results"
};
const footer = {
	rights: "All rights reserved."
};
const hero = {
	title: "Generate <0>Professional Images</0> for Social Networks",
	subtitle: "Upload your photo and get optimized versions for each platform"
};
const english = {
	site: site,
	home: home,
	form: form,
	features: features,
	testimonials: testimonials,
	userResults: userResults,
	footer: footer,
	hero: hero
};

const getI18n = ({ currentLocale }) => {
  if (currentLocale === "en") {
    return english;
  }
  if (currentLocale === "es") {
    return spanish;
  }
  return english;
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { currentLocale = "en" } = Astro2;
  const i18n = getI18n({ currentLocale });
  const { title } = Astro2.props;
  return renderTemplate`<html> <head><meta charset="UTF-8"><meta name="description"${addAttribute(i18n.site.description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="stylesheet" href="/src/styles/global.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> <header class="flex flex-col md:flex-row justify-between items-center"> <div class="flex flex-col md:flex-row gap-4 md:items-center px-8"> <a class="text-2xl text-center font-bold py-8">${i18n.site.title}</a> <img src="./escudo.png" alt="logo" class="w-[200px] h-[200px] logo"> </div> <nav class="hidden md:block md:p-8">
showFlag=${true}
class="bg-white dark:bg-gray-800 p-2 rounded"
        />
</nav> </header> ${renderSlot($$result, $$slots["default"])} <footer class="p-4 text-center"> <p> ${i18n.site.title}. ${i18n.footer.rights}</p> </footer>  </body></html>`;
}, "/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/layouts/Layout.astro", void 0);

const name = "astro";
const version = "4.15.12";
const description = "Astro is a modern site builder with web best practices, performance, and DX front-of-mind.";
const type = "module";
const author = "withastro";
const license = "MIT";
const repository = {
	type: "git",
	url: "https://github.com/withastro/astro.git",
	directory: "packages/astro"
};
const bugs = "https://github.com/withastro/astro/issues";
const homepage = "https://astro.build";
const types = "./index.d.ts";
const typesVersions = {
	"*": {
		app: [
			"./dist/core/app/index"
		],
		"app/*": [
			"./dist/core/app/*"
		],
		middleware: [
			"./dist/virtual-modules/middleware.d.ts"
		]
	}
};
const exports = {
	".": {
		types: "./index.d.ts",
		"default": "./dist/core/index.js"
	},
	"./env": "./env.d.ts",
	"./env/runtime": "./dist/env/runtime.js",
	"./env/setup": "./dist/env/setup.js",
	"./types": "./types.d.ts",
	"./client": "./client.d.ts",
	"./astro-jsx": "./astro-jsx.d.ts",
	"./tsconfigs/*.json": "./tsconfigs/*",
	"./tsconfigs/*": "./tsconfigs/*.json",
	"./jsx/*": "./dist/jsx/*",
	"./jsx-runtime": {
		types: "./jsx-runtime.d.ts",
		"default": "./dist/jsx-runtime/index.js"
	},
	"./compiler-runtime": "./dist/runtime/compiler/index.js",
	"./runtime/*": "./dist/runtime/*",
	"./config": {
		types: "./config.d.ts",
		"default": "./config.mjs"
	},
	"./container": {
		types: "./dist/container/index.d.ts",
		"default": "./dist/container/index.js"
	},
	"./app": "./dist/core/app/index.js",
	"./app/node": "./dist/core/app/node.js",
	"./client/*": "./dist/runtime/client/*",
	"./components": "./components/index.ts",
	"./components/*": "./components/*",
	"./toolbar": "./dist/toolbar/index.js",
	"./actions/runtime/*": "./dist/actions/runtime/*",
	"./assets": "./dist/assets/index.js",
	"./assets/utils": "./dist/assets/utils/index.js",
	"./assets/utils/inferRemoteSize.js": "./dist/assets/utils/remoteProbe.js",
	"./assets/endpoint/*": "./dist/assets/endpoint/*.js",
	"./assets/services/sharp": "./dist/assets/services/sharp.js",
	"./assets/services/squoosh": "./dist/assets/services/squoosh.js",
	"./assets/services/noop": "./dist/assets/services/noop.js",
	"./loaders": "./dist/content/loaders/index.js",
	"./content/runtime": "./dist/content/runtime.js",
	"./content/runtime-assets": "./dist/content/runtime-assets.js",
	"./debug": "./components/Debug.astro",
	"./package.json": "./package.json",
	"./zod": {
		types: "./zod.d.ts",
		"default": "./zod.mjs"
	},
	"./errors": "./dist/core/errors/userError.js",
	"./middleware": {
		types: "./dist/core/middleware/index.d.ts",
		"default": "./dist/core/middleware/index.js"
	},
	"./virtual-modules/*": "./dist/virtual-modules/*"
};
const bin = {
	astro: "astro.js"
};
const files = [
	"components",
	"tsconfigs",
	"dist",
	"types",
	"astro.js",
	"index.d.ts",
	"config.d.ts",
	"config.mjs",
	"zod.d.ts",
	"zod.mjs",
	"env.d.ts",
	"client.d.ts",
	"jsx-runtime.d.ts",
	"templates",
	"astro-jsx.d.ts",
	"types.d.ts",
	"README.md",
	"vendor"
];
const dependencies = {
	"@astrojs/compiler": "^2.10.3",
	"@babel/core": "^7.25.7",
	"@babel/plugin-transform-react-jsx": "^7.25.7",
	"@babel/types": "^7.25.7",
	"@oslojs/encoding": "^1.1.0",
	"@rollup/pluginutils": "^5.1.2",
	"@types/babel__core": "^7.20.5",
	"@types/cookie": "^0.6.0",
	acorn: "^8.12.1",
	"aria-query": "^5.3.2",
	"axobject-query": "^4.1.0",
	boxen: "8.0.1",
	"ci-info": "^4.0.0",
	clsx: "^2.1.1",
	"common-ancestor-path": "^1.0.1",
	cookie: "^0.7.2",
	cssesc: "^3.0.0",
	debug: "^4.3.7",
	"deterministic-object-hash": "^2.0.2",
	devalue: "^5.1.1",
	diff: "^5.2.0",
	dlv: "^1.1.3",
	dset: "^3.1.4",
	"es-module-lexer": "^1.5.4",
	esbuild: "^0.21.5",
	"estree-walker": "^3.0.3",
	"fast-glob": "^3.3.2",
	fastq: "^1.17.1",
	flattie: "^1.1.1",
	"github-slugger": "^2.0.0",
	"gray-matter": "^4.0.3",
	"html-escaper": "^3.0.3",
	"http-cache-semantics": "^4.1.1",
	"js-yaml": "^4.1.0",
	kleur: "^4.1.5",
	"magic-string": "^0.30.11",
	magicast: "^0.3.5",
	micromatch: "^4.0.8",
	mrmime: "^2.0.0",
	neotraverse: "^0.6.18",
	ora: "^8.1.0",
	"p-limit": "^6.1.0",
	"p-queue": "^8.0.1",
	"preferred-pm": "^4.0.0",
	prompts: "^2.4.2",
	rehype: "^13.0.2",
	semver: "^7.6.3",
	shiki: "^1.22.0",
	"string-width": "^7.2.0",
	tinyexec: "^0.3.0",
	tsconfck: "^3.1.3",
	"unist-util-visit": "^5.0.0",
	vfile: "^6.0.3",
	vite: "^5.4.8",
	vitefu: "^1.0.2",
	"which-pm": "^3.0.0",
	"xxhash-wasm": "^1.0.2",
	"yargs-parser": "^21.1.1",
	zod: "^3.23.8",
	"zod-to-json-schema": "^3.23.3",
	"zod-to-ts": "^1.2.0",
	"@astrojs/internal-helpers": "0.4.1",
	"@astrojs/markdown-remark": "5.2.0",
	"@astrojs/telemetry": "3.1.0"
};
const optionalDependencies = {
	sharp: "^0.33.3"
};
const devDependencies = {
	"@astrojs/check": "^0.9.4",
	"@playwright/test": "^1.47.2",
	"@types/aria-query": "^5.0.4",
	"@types/common-ancestor-path": "^1.0.2",
	"@types/cssesc": "^3.0.2",
	"@types/debug": "^4.1.12",
	"@types/diff": "^5.2.2",
	"@types/dlv": "^1.1.4",
	"@types/hast": "^3.0.4",
	"@types/html-escaper": "^3.0.2",
	"@types/http-cache-semantics": "^4.0.4",
	"@types/js-yaml": "^4.0.9",
	"@types/micromatch": "^4.0.9",
	"@types/prompts": "^2.4.9",
	"@types/semver": "^7.5.8",
	"@types/yargs-parser": "^21.0.3",
	cheerio: "1.0.0",
	eol: "^0.10.0",
	execa: "^8.0.1",
	"expect-type": "^1.0.0",
	"mdast-util-mdx": "^3.0.0",
	"mdast-util-mdx-jsx": "^3.1.3",
	memfs: "^4.12.0",
	"node-mocks-http": "^1.16.1",
	"parse-srcset": "^1.0.2",
	"rehype-autolink-headings": "^7.1.0",
	"rehype-slug": "^6.0.0",
	"rehype-toc": "^3.0.2",
	"remark-code-titles": "^0.1.2",
	rollup: "^4.24.0",
	sass: "^1.79.4",
	undici: "^6.19.8",
	unified: "^11.0.5",
	"astro-scripts": "0.0.14"
};
const engines = {
	node: "^18.17.1 || ^20.3.0 || >=21.0.0",
	npm: ">=9.6.5",
	pnpm: ">=7.1.0"
};
const publishConfig = {
	provenance: true
};
const scripts = {
	prebuild: "astro-scripts prebuild --to-string \"src/runtime/server/astro-island.ts\" \"src/runtime/client/{idle,load,media,only,visible}.ts\"",
	build: "pnpm run prebuild && astro-scripts build \"src/**/*.{ts,js}\" --copy-wasm && tsc",
	"build:ci": "pnpm run prebuild && astro-scripts build \"src/**/*.{ts,js}\" --copy-wasm",
	dev: "astro-scripts dev --copy-wasm --prebuild \"src/runtime/server/astro-island.ts\" --prebuild \"src/runtime/client/{idle,load,media,only,visible}.ts\" \"src/**/*.{ts,js}\"",
	test: "pnpm run test:node && pnpm run test:types",
	"test:match": "pnpm run test:node --match",
	"test:e2e": "pnpm test:e2e:chrome && pnpm test:e2e:firefox",
	"test:e2e:match": "playwright test -g",
	"test:e2e:chrome": "playwright test",
	"test:e2e:firefox": "playwright test --config playwright.firefox.config.js",
	"test:types": "tsc --project tsconfig.tests.json",
	"test:node": "astro-scripts test \"test/**/*.test.js\""
};
const astroPkg = {
	name: name,
	version: version,
	description: description,
	type: type,
	author: author,
	license: license,
	repository: repository,
	bugs: bugs,
	homepage: homepage,
	types: types,
	typesVersions: typesVersions,
	exports: exports,
	bin: bin,
	files: files,
	dependencies: dependencies,
	optionalDependencies: optionalDependencies,
	devDependencies: devDependencies,
	engines: engines,
	publishConfig: publishConfig,
	scripts: scripts
};

export { $$Layout as $, astroPkg as a, getI18n as g };
