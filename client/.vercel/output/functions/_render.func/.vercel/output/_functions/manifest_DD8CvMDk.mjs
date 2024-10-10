import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DRRsg_3f.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BkfUIB1O.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/moibaldenegro/Documents/hackatones/social_pic_IA/client/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.COYi7S8i.js"}],"styles":[{"type":"external","src":"/_astro/index.KMOazUVM.css"},{"type":"inline","content":".carousel-container[data-astro-cid-gr5hnjng]{width:100%;max-width:600px;margin:0 auto}.text-gradient[data-astro-cid-bbe6dxrz],.text-gradient[data-astro-cid-6o3zy6ym]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}#cdWidget[data-astro-cid-6o3zy6ym]{background-color:#00c65e;color:#fff;border:none;padding:10px 20px;border-radius:5px;font-size:16px;cursor:pointer;transition:.3s ease-in-out}#cdWidget[data-astro-cid-6o3zy6ym]:hover{background-color:#00b359}\n"}],"routeData":{"route":"/es","isIndex":true,"type":"page","pattern":"^\\/es\\/?$","segments":[[{"content":"es","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/es/index.astro","pathname":"/es","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DdH1D5Hz.js"}],"styles":[{"type":"external","src":"/_astro/index.KMOazUVM.css"},{"type":"inline","content":".profile-card[data-astro-cid-f2gcau6y]{position:relative;background-color:#fff;border-radius:8px;box-shadow:0 1px 2px #0000001a;width:100%;max-width:500px;margin:0 auto;overflow:hidden}.cover-photo[data-astro-cid-f2gcau6y]{background-color:#f0f2f5;background-size:cover;background-position:center;height:200px;position:relative}.edit-cover-photo[data-astro-cid-f2gcau6y]{position:absolute;right:15px;bottom:15px;background-color:#fff;border:none;border-radius:6px;color:#050505;cursor:pointer;font-weight:600;padding:6px 10px;font-size:13px;display:flex;align-items:center;gap:5px}.profile-picture[data-astro-cid-f2gcau6y]{position:absolute;left:50%;transform:translate(-50%);top:150px}.profile-picture[data-astro-cid-f2gcau6y] img[data-astro-cid-f2gcau6y]{border:4px solid white;border-radius:50%;width:120px;height:120px;-o-object-fit:cover;object-fit:cover}.edit-profile-picture[data-astro-cid-f2gcau6y]{position:absolute;right:0;bottom:0;background-color:#e4e6eb;border:none;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer}.profile-info[data-astro-cid-f2gcau6y]{padding:15px;margin-top:70px;text-align:center}.profile-info[data-astro-cid-f2gcau6y] h1[data-astro-cid-f2gcau6y]{margin:0;font-size:24px;font-weight:700;color:#050505}.friends[data-astro-cid-f2gcau6y]{margin:8px 0;color:#65676b;font-size:14px}.action-buttons[data-astro-cid-f2gcau6y]{display:flex;justify-content:center;gap:8px;margin-top:15px}.primary-button[data-astro-cid-f2gcau6y],.secondary-button[data-astro-cid-f2gcau6y]{border:none;border-radius:6px;cursor:pointer;font-weight:600;padding:8px 10px;font-size:14px;display:flex;align-items:center;gap:5px}.primary-button[data-astro-cid-f2gcau6y]{background-color:#1b74e4;color:#fff}.secondary-button[data-astro-cid-f2gcau6y]{background-color:#e4e6eb;color:#050505}.primary-button[data-astro-cid-f2gcau6y]:hover{background-color:#1877f2}.secondary-button[data-astro-cid-f2gcau6y]:hover{background-color:#d8dadf}\n"}],"routeData":{"route":"/previews","isIndex":false,"type":"page","pattern":"^\\/previews\\/?$","segments":[[{"content":"previews","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/previews.astro","pathname":"/previews","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.COYi7S8i.js"}],"styles":[{"type":"external","src":"/_astro/index.KMOazUVM.css"},{"type":"inline","content":".carousel-container[data-astro-cid-gr5hnjng]{width:100%;max-width:600px;margin:0 auto}.text-gradient[data-astro-cid-bbe6dxrz],.text-gradient[data-astro-cid-6o3zy6ym]{background-image:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-size:400%;background-position:0%}#cdWidget[data-astro-cid-6o3zy6ym]{background-color:#00c65e;color:#fff;border:none;padding:10px 20px;border-radius:5px;font-size:16px;cursor:pointer;transition:.3s ease-in-out}#cdWidget[data-astro-cid-6o3zy6ym]:hover{background-color:#00b359}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/pages/es/index.astro",{"propagation":"none","containsHead":true}],["/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/src/pages/previews.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/es/index@_@astro":"pages/es.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/previews@_@astro":"pages/previews.astro.mjs","/home/moibaldenegro/Documents/hackatones/social_pic_IA/client/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DD8CvMDk.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DdH1D5Hz.js","/astro/hoisted.js?q=1":"_astro/hoisted.COYi7S8i.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.KMOazUVM.css","/billie.webp","/billieAfter.jfif","/escudo.png","/favicon.svg","/_astro/Layout.astro_astro_type_script_index_0_lang.Cpq5mWaQ.js","/_astro/hoisted.COYi7S8i.js","/_astro/hoisted.DdH1D5Hz.js","/promts/promts.ts","/locales/en/translation.json","/locales/es/translation.json"],"i18n":{"fallbackType":"redirect","strategy":"pathname-prefix-other-locales","locales":["en","es"],"defaultLocale":"en","domainLookupTable":{}},"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"VJxclqn5wF5kILuy0dbIQsDz1EP9+z/6FPO1A9bM50w=","experimentalEnvGetSecretEnabled":false});

export { manifest };
