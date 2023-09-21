import * as universal from '../entries/pages/issues/closed/_page.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/issues/closed/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/issues/closed/+page.js";
export const imports = ["_app/immutable/nodes/11.cf540c91.js","_app/immutable/chunks/utils.3f58486a.js","_app/immutable/chunks/singletons.da59ed66.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/each.3ca1f94c.js","_app/immutable/chunks/IssueCard.a3be35dc.js","_app/immutable/chunks/Footer.fa5d7e91.js","_app/immutable/chunks/Navbar.de0a31db.js"];
export const stylesheets = [];
export const fonts = [];
