

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mypage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.945866df.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/Navbar.13d5e873.js","_app/immutable/chunks/utils.1be6d2bf.js","_app/immutable/chunks/singletons.feb888e3.js"];
export const stylesheets = [];
export const fonts = [];
