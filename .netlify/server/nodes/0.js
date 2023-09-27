

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.fbf36ce9.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/utils.ebc906ca.js","_app/immutable/chunks/singletons.f20a3d92.js"];
export const stylesheets = [];
export const fonts = [];
