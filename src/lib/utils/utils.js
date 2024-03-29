import { API_URL, FEEDS, IP, USER_ID, isLoggedIn } from '$lib/store';

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

// UTC+9로 변경
export function convertUTCtoUTC9(utcDateString) {
	if (!utcDateString) {
		return utcDateString;
	}
	const date = new Date(utcDateString);
	date.setHours(date.getHours() + 9);
	return date.toISOString();
}

// 토큰 유효성 검증 후 새로운 토큰 발급
export async function returnValidAccessToken() {
	const accessToken = localStorage.getItem('accessToken');
	const refreshToken = localStorage.getItem('refreshToken');

	if (accessToken && refreshToken) {
		// 서버 통신으로 토큰 유효성 검증 체크 필요? No, 그럼 속도 느려질 듯
		const tokenData = parseAccessToken(accessToken);
		const currentTime = Date.now() / 1000;

		if (tokenData.exp > currentTime) {
			USER_ID.set(getSubFromAccessToken(accessToken));
			return accessToken;
		} else {
			const tokens = await issueTokensWithRefreshToken();
			if (tokens) {
				localStorage.setItem('accessToken', tokens.accessToken);
				localStorage.setItem('refreshToken', tokens.refreshToken);
				isLoggedIn.set(true);
				return tokens.accessToken;
			}
		}
	}

	isLoggedIn.set(false);
	USER_ID.set(undefined);
	IP.set(undefined);
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	location.href = '/login';
	return false;
}

async function issueTokensWithRefreshToken() {
	const refreshToken = localStorage.getItem('refreshToken');
	if (refreshToken) {
		const requestUrl = `${API}/auth/refresh`;
		const requestOptions = {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${refreshToken}`
			}
		};

		try {
			const response = await fetch(requestUrl, requestOptions);
			if (response.ok) {
				return await response.json();
			}
		} catch (error) {
			console.error('오류 발생:', error);
		}
	}
	return false;
}

// 단순 로그인 여부만 체크
export async function isLoggedInByAccessToken() {
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

export function getSubFromAccessToken(accessToken) {
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

export async function logout() {
	const accessToken = await returnValidAccessToken();
	isLoggedIn.set(false);
	USER_ID.set(undefined);
	IP.set('000.000.000.000');
	localStorage.removeItem('accessToken');
	localStorage.removeItem('refreshToken');
	FEEDS.set([]);
	if (!accessToken) return;

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
			} else {
				console.log('로그아웃되었습니다.');
			}
		})
		.catch((error) => {
			console.error('로그아웃 중 오류 발생:', error);
		});
}

export async function getProfile() {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

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
		console.error('프로필 로드 중 오류 발생:', error);
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
		const accessToken = await returnValidAccessToken();
		if (!accessToken) return;

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
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('로그아웃 중 오류 발생:', error);
	}
}

export async function getOpenIssues() {
	const response = await fetch(`${API}/issues?state=open&isPublic=public`);
	const issues = await response.json();
	return issues;
}

export async function getAllFeeds(channel, page) {
	const accessToken = await await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds?channel=${channel}&page=${page}`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('로그아웃 중 오류 발생:', error);
	}
}

export async function getSearchFeeds(channel, q) {
	const accessToken = await await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds/search?channel=${channel}&q=${q}`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('로그아웃 중 오류 발생:', error);
	}
}

export async function getFeed(id) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds/${id}`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('오류 발생:', error);
	}
}

export async function getComments(feedId) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/comments/feed?feedId=${feedId}`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('오류 발생:', error);
	}
}

export async function getComment(commentId) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/comments/${commentId}`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('오류 발생:', error);
	}
}

export async function deleteFeed(id) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds/${id}`;
	const requestOptions = {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('피드삭제 중 오류 발생:', error);
	}
}

export async function deleteComment(id) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/comments/${id}`;
	const requestOptions = {
		method: 'DELETE',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('댓글 삭제 중 오류 발생:', error);
	}
}

// 마이페이지 - 내 피드
export async function getMyFeeds() {
	const accessToken = await await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds/my`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('로그아웃 중 오류 발생:', error);
	}
}

// 마이 페이지 - 내 댓글
export async function getMyComments() {
	const accessToken = await await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/comments/my`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('로그아웃 중 오류 발생:', error);
	}
}

// 좋아요
export async function clickFeedLike(feedId) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds/${feedId}/likes`;
	const requestOptions = {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('좋아요 오류 발생:', error);
	}
}

// 피드 조회수
export async function updateFeedViews(feedId) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds/${feedId}/views`;
	const requestOptions = {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('좋아요 오류 발생:', error);
	}
}

// 피드 신고
export async function updateFeedFlags(feedId) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/feeds/${feedId}/flags`;
	const requestOptions = {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('신고 오류 발생:', error);
	}
}

// 이슈 참여 여부 체크
export async function checkIssueDone(issueId) {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/issues/${issueId}/participants`;
	const requestOptions = {
		method: 'PATCH',
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('좋아요 오류 발생:', error);
	}
}

// 참여 이슈 개수 카운트
export async function getMyParticipatedIssuesCount() {
	const accessToken = await returnValidAccessToken();
	if (!accessToken) return;

	const requestUrl = `${API}/issues/participatedCount`;
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
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('이슈 확인 중 오류 발생:', error);
	}
}

export async function getAllIssues() {
	const requestUrl = `${API}/issues`;
	const requestOptions = {
		method: 'GET'
	};

	try {
		const response = await fetch(requestUrl, requestOptions);
		if (response.ok) {
			return await response.json();
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('이슈 로드 중 오류 발생:', error);
	}
}

// 피드 작성글 표시
export function formatRelativeTime(ISODate) {
	const now = new Date();
	const diffMilliseconds = now - new Date(ISODate);
	const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));
	const diffHours = Math.floor(diffMinutes / 60);

	if (diffHours >= 24) {
		// 24시간 이상이면 날짜 그대로 반환
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(ISODate).toLocaleDateString(undefined, options);
	} else if (diffHours >= 1) {
		// 1시간 이상이면 시간 단위로 표현
		return `${diffHours}시간 전`;
	} else if (diffMinutes >= 1) {
		// 1분 이상이면 분 단위로 표현
		return `${diffMinutes}분 전`;
	} else {
		// 1분 미만이면 "방금 전"으로 표현
		return '방금 전';
	}
}

// IP주소
export async function getIpAddress() {
	try {
		const response = await fetch('https://geolocation-db.com/json/');
		const data = await response.json();
		const ip = data.IPv4;
		if (response.ok) {
			return ip;
		} else {
			alert('뭔가 문제가 발생했어요. 새로고침 후 재로그인을 해 주세요.');
		}
	} catch (error) {
		console.error('IP주소 인식 중 오류 발생:', error);
	}
}

// 이미지를 base64로 변환
export const convertBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);

		fileReader.onload = () => {
			resolve(fileReader.result);
		};

		fileReader.onerror = (error) => {
			reject(error);
		};
	});
};
