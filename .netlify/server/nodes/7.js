import * as universal from '../entries/pages/issues/closed/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/issues/closed/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/issues/closed/+page.js";
export const imports = ["_app/immutable/nodes/7.df54791f.js","_app/immutable/chunks/utils.cd4448c2.js","_app/immutable/chunks/singletons.4c48aacb.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/each.3ca1f94c.js","_app/immutable/chunks/IssueCard.a3be35dc.js","_app/immutable/chunks/Navbar.ed862ed3.js"];
export const stylesheets = [];
export const fonts = [];
