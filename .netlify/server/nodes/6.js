import * as server from '../entries/pages/admin0904/issues/_issueId_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin0904/issues/_issueId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin0904/issues/[issueId]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.c03b72c3.js","_app/immutable/chunks/scheduler.e9b79cf6.js","_app/immutable/chunks/index.d9c6d75c.js","_app/immutable/chunks/Footer.b42cabe7.js","_app/immutable/chunks/Navbar.a831c2e5.js","_app/immutable/chunks/utils.6015067d.js","_app/immutable/chunks/singletons.b22850ef.js"];
export const stylesheets = [];
export const fonts = [];
