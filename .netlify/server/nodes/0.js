

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2df3218d.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js"];
export const stylesheets = [];
export const fonts = [];
