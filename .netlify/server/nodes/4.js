import * as server from '../entries/pages/admin0904/issues/_issueId_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin0904/issues/_issueId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin0904/issues/[issueId]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.f13f07ac.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.f3d9ac57.js","_app/immutable/chunks/Navbar.a14321f2.js","_app/immutable/chunks/navigation.4bba29d0.js","_app/immutable/chunks/singletons.1fdabb01.js","_app/immutable/chunks/utils.b6e1d8cd.js"];
export const stylesheets = [];
export const fonts = [];
