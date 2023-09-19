import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.563a7877.js","_app/immutable/chunks/utils.1be6d2bf.js","_app/immutable/chunks/singletons.feb888e3.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/each.3ca1f94c.js","_app/immutable/chunks/IssueCard.a3be35dc.js","_app/immutable/chunks/Navbar.13d5e873.js"];
export const stylesheets = [];
export const fonts = [];
