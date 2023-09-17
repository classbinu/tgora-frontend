import * as server from '../entries/pages/admin0904/issues/_issueId_/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin0904/issues/_issueId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin0904/issues/[issueId]/+page.server.js";
export const imports = ["_app/immutable/nodes/4.108821df.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/Navbar.d79e512f.js","_app/immutable/chunks/navigation.3461a3d1.js","_app/immutable/chunks/singletons.62d71597.js","_app/immutable/chunks/utils.b6e1d8cd.js"];
export const stylesheets = [];
export const fonts = [];
