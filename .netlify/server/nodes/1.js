

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6d95122b.js","_app/immutable/chunks/scheduler.e9b79cf6.js","_app/immutable/chunks/index.d9c6d75c.js","_app/immutable/chunks/stores.eeb5958f.js","_app/immutable/chunks/singletons.36eeada4.js"];
export const stylesheets = [];
export const fonts = [];
