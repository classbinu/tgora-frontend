import * as universal from '../entries/pages/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/3.aa787293.js","_app/immutable/chunks/utils.ebc906ca.js","_app/immutable/chunks/singletons.f20a3d92.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/each.6e5aa378.js","_app/immutable/chunks/Carousel.518fd5e1.js","_app/immutable/chunks/Footer.fa5d7e91.js","_app/immutable/chunks/Navbar.95c79967.js","_app/immutable/chunks/InviteBanner.e44c2ae6.js"];
export const stylesheets = [];
export const fonts = [];
