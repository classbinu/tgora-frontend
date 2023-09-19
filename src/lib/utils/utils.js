import { API_URL, USER_ID, isLoggedIn } from '$lib/store';

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
			USER_ID.set(getSubFromAccessToken(accessToken));
			return true;
		}
	}

	return false;
}

function getSubFromAccessToken(accessToken) {
	try {
		const decodedToken = JSON.parse(atob(accessToken.split('.')[1]));

		return decodedToken.sub;
	} catch (error) {
		console.error('토큰 디코딩 오류:', error);
		return null;
	}
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

export function usernameValidator(username) {
	const isValid = /^[a-z0-9]{3,15}$/.test(username);
	if (!isValid) {
		alert('아이디는 3-15자 이내, 영문소문자/숫자입니다.');
		return !isValid;
	}
}

export function passwordValidator(password) {
	const isValid = password.length >= 8;
	if (!isValid) {
		alert('비밀번호는 8자 이상 문자/숫자/기호입니다.');
		return !isValid;
	}
}

export async function userDelete(oldPassword) {
	const password = {
		oldPassword,
		newPassword: '99999999'
	};
	try {
		const accessToken = localStorage.getItem('accessToken');

		if (!accessToken) {
			alert('로그인된 상태가 아닙니다.');
			return false;
		}
		const url = `${API}/auth/password`;
		const options = {
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${accessToken}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(password)
		};

		const response = await fetch(url, options);
		const data = await response.json();
		if (response.ok) {
			localStorage.removeItem('accessToken');
			localStorage.removeItem('refreshToken');
			isLoggedIn.set(false);
			alert('탈퇴 처리가 완료되었습니다.');
			goto('/');
			return true;
		} else {
			// 탈퇴 불가 팝업 렌더링 구현 필요
			alert(data.message);
			return false;
		}
	} catch (error) {
		alert(`뭔가 문제가 생겼어요. 관리자에게 문의해 주세요. error: ${error}`);
		return false;
	}
}

export function generateRandomNickname(length) {
	const characters = 'Ii';
	let result = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		result += characters[randomIndex];
	}

	return result;
}

export async function getMentees() {
	const accessToken = localStorage.getItem('accessToken');

	if (!accessToken) {
		console.log('토큰이 존재하지 않습니다.');
		goto('/login');
		return;
	}

	const requestUrl = `${API}/users/mentees`;
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
			alert('뭔가 문제가 발생했어요. 관리자에게 문의해 주세요.');
		}
	} catch (error) {
		console.error('로그아웃 중 오류 발생:', error);
	}
}
