

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mypage/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.32303740.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/Navbar.31d44136.js","_app/immutable/chunks/navigation.14628d3c.js","_app/immutable/chunks/singletons.084e799a.js","_app/immutable/chunks/utils.c13a36cd.js"];
export const stylesheets = [];
export const fonts = [];
