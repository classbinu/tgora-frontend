

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/agora/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.5c3343fd.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/each.3ca1f94c.js","_app/immutable/chunks/Navbar.de0a31db.js","_app/immutable/chunks/utils.3f58486a.js","_app/immutable/chunks/singletons.da59ed66.js"];
export const stylesheets = [];
export const fonts = [];
