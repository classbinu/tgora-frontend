

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mypage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.9b43a4ff.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/Navbar.ed862ed3.js","_app/immutable/chunks/utils.cd4448c2.js","_app/immutable/chunks/singletons.4c48aacb.js"];
export const stylesheets = [];
export const fonts = [];
