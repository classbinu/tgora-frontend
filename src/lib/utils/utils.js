import { API_URL } from '$lib/store';
import { goto } from '$app/navigation';

let API;
API_URL.subscribe((value) => {
	API = value;
});

// 날짜 포맷 바꾸기
export function formatDate(isoDate) {
	const date = new Date(isoDate);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
}

// Access Token이 있는지 확인하는 함수
export function isAccessTokenValid() {
	const accessToken = localStorage.getItem('accessToken');

	if (accessToken) {
		// 서버 통신 코드 삽입 가능
		const tokenData = parseAccessToken(accessToken);
		const currentTime = Date.now() / 1000;

		if (tokenData.exp > currentTime) {
			return true;
		}
	}

	return false;
}

function parseAccessToken(accessToken) {
	try {
		const tokenParts = accessToken.split('.');
		const payload = JSON.parse(atob(tokenParts[1]));
		return payload;
	} catch (error) {
		return null;
	}
}

export function logout() {
	const accessToken = localStorage.getItem('accessToken');

	if (!accessToken) {
		console.log('이미 로그아웃 되었습니다.');
		return;
	}

	const requestUrl = `${API}/auth/logout`;
	const requestOptions = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	fetch(requestUrl, requestOptions)
		.then((response) => {
			if (response.ok) {
				console.log('로그아웃되었습니다.');
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
			} else {
				localStorage.removeItem('accessToken');
				localStorage.removeItem('refreshToken');
			}
		})
		.catch((error) => {
			console.error('로그아웃 중 오류 발생:', error);
		});
}

export async function getProfile() {
	const accessToken = localStorage.getItem('accessToken');

	if (!accessToken) {
		console.log('토큰이 존재하지 않습니다.');
		goto('/login');
		return;
	}

	const requestUrl = `${API}/users/profile`;
	const requestOptions = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요.');
			goto('/');
		}
	} catch (error) {
		console.error('로그아웃 중 오류 발생:', error);
	}
}
