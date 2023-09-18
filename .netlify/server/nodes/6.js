import * as universal from '../entries/pages/issues/closed/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/issues/closed/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/issues/closed/+page.js";
export const imports = ["_app/immutable/nodes/6.fdbf6540.js","_app/immutable/chunks/navigation.14628d3c.js","_app/immutable/chunks/singletons.084e799a.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/each.3ca1f94c.js","_app/immutable/chunks/IssueCard.a3be35dc.js","_app/immutable/chunks/Navbar.31d44136.js","_app/immutable/chunks/utils.c13a36cd.js"];
export const stylesheets = [];
export const fonts = [];
