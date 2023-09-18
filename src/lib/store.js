import { readable, writable } from 'svelte/store';

export const API_URL = readable('https://port-0-test-back-t-agora-iciy2almkcvdm5.sel5.cloudtype.app');
export const isLoggedIn = writable(false);

// 실 백엔드 서버
// https://port-0-tgora-backend-iciy2almkcvdm5.sel5.cloudtype.app

// 테스트 백엔드 서버
// https://port-0-test-back-t-agora-iciy2almkcvdm5.sel5.cloudtype.app