

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3db5207c.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.f3d9ac57.js","_app/immutable/chunks/singletons.1fdabb01.js"];
export const stylesheets = [];
export const fonts = [];
