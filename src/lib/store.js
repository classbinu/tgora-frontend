import { readable, writable } from 'svelte/store';

export const API_URL = readable('http://localhost:3000');
export const isLoggedIn = writable(false);
export const USER_ID = writable(undefined);
export const IP = writable('000.000.000.000');
export const BEFORE_FEED_ID = writable(undefined);
export const FEEDS = writable([]);

// 실 백엔드 서버
// https://port-0-tgora-backend-iciy2almkcvdm5.sel5.cloudtype.app

// 테스트 백엔드 서버
// https://port-0-test-back-t-agora-iciy2almkcvdm5.sel5.cloudtype.app

// 로컬 테스트 백엔드 서버
// http://localhost:3000
