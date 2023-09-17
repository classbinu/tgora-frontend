import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.415bcb13.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/each.3ca1f94c.js","_app/immutable/chunks/IssueCard.61f60634.js","_app/immutable/chunks/Navbar.d79e512f.js","_app/immutable/chunks/utils.b6e1d8cd.js"];
export const stylesheets = [];
export const fonts = [];
