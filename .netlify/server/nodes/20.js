

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mypage/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.df5b8e55.js","_app/immutable/chunks/scheduler.e9b79cf6.js","_app/immutable/chunks/index.d9c6d75c.js","_app/immutable/chunks/Navbar.a831c2e5.js","_app/immutable/chunks/utils.6015067d.js","_app/immutable/chunks/singletons.b22850ef.js"];
export const stylesheets = [];
export const fonts = [];
