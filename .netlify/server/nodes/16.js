

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mypage/comments/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.5b0c30e4.js","_app/immutable/chunks/scheduler.e9b79cf6.js","_app/immutable/chunks/index.d9c6d75c.js","_app/immutable/chunks/each.c6e19728.js","_app/immutable/chunks/Navbar.bc30fdeb.js","_app/immutable/chunks/utils.1b892f9f.js","_app/immutable/chunks/singletons.36eeada4.js"];
export const stylesheets = [];
export const fonts = [];
