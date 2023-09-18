

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.d784aefa.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/navigation.14628d3c.js","_app/immutable/chunks/singletons.084e799a.js"];
export const stylesheets = [];
export const fonts = [];
