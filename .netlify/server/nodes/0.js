

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.7e7bf0a3.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/utils.c13a36cd.js","_app/immutable/chunks/navigation.14628d3c.js","_app/immutable/chunks/singletons.084e799a.js"];
export const stylesheets = [];
export const fonts = [];
