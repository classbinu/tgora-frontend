

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mypage/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.138ceb47.js","_app/immutable/chunks/scheduler.b95eede2.js","_app/immutable/chunks/index.a03fbbfc.js","_app/immutable/chunks/Navbar.95c79967.js","_app/immutable/chunks/utils.ebc906ca.js","_app/immutable/chunks/singletons.f20a3d92.js"];
export const stylesheets = [];
export const fonts = [];