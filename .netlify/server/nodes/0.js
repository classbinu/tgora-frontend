

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.8b3d8c88.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/utils.cd4448c2.js","_app/immutable/chunks/singletons.4c48aacb.js"];
export const stylesheets = [];
export const fonts = [];
