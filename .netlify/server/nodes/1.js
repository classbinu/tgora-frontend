

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.924d6f05.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/stores.70d34f0b.js","_app/immutable/chunks/singletons.4c48aacb.js"];
export const stylesheets = [];
export const fonts = [];
