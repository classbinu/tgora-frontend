import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.75fa4032.js","_app/immutable/chunks/utils.1b892f9f.js","_app/immutable/chunks/singletons.36eeada4.js","_app/immutable/chunks/scheduler.e9b79cf6.js","_app/immutable/chunks/index.d9c6d75c.js","_app/immutable/chunks/each.c6e19728.js","_app/immutable/chunks/Carousel.33dbbf3c.js","_app/immutable/chunks/Footer.b42cabe7.js","_app/immutable/chunks/Navbar.bc30fdeb.js","_app/immutable/chunks/InviteBanner.e08d0aa6.js"];
export const stylesheets = [];
export const fonts = [];
