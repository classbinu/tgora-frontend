import * as universal from '../entries/pages/issues/closed/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/issues/closed/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/issues/closed/+page.js";
export const imports = ["_app/immutable/nodes/6.9da15c9f.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.f3d9ac57.js","_app/immutable/chunks/each.2ff21b36.js","_app/immutable/chunks/IssueCard.47637e0b.js","_app/immutable/chunks/Navbar.a14321f2.js","_app/immutable/chunks/utils.b6e1d8cd.js"];
export const stylesheets = [];
export const fonts = [];
