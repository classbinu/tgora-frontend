

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0be7f170.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.f3d9ac57.js","_app/immutable/chunks/singletons.4071907a.js"];
export const stylesheets = [];
export const fonts = [];
