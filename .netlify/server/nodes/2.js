import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.0ca3d1e1.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.f3d9ac57.js","_app/immutable/chunks/each.2ff21b36.js","_app/immutable/chunks/IssueCard.47637e0b.js","_app/immutable/chunks/Navbar.a14321f2.js","_app/immutable/chunks/utils.b6e1d8cd.js"];
export const stylesheets = [];
export const fonts = [];
