

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e1fb9e5c.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/stores.8c54df88.js","_app/immutable/chunks/singletons.f20a3d92.js"];
export const stylesheets = [];
export const fonts = [];
