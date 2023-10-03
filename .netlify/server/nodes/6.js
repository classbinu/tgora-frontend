import * as server from '../entries/pages/admin0904/issues/_issueId_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin0904/issues/_issueId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin0904/issues/[issueId]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.31920c5b.js","_app/immutable/chunks/scheduler.e9b79cf6.js","_app/immutable/chunks/index.d9c6d75c.js","_app/immutable/chunks/Footer.b42cabe7.js","_app/immutable/chunks/Navbar.bc30fdeb.js","_app/immutable/chunks/utils.1b892f9f.js","_app/immutable/chunks/singletons.36eeada4.js"];
export const stylesheets = [];
export const fonts = [];
