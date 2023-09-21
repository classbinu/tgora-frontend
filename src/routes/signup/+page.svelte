<script>
	import { goto } from '$app/navigation';
	import { isLoggedIn, API_URL } from '$lib/store';
	import { page } from '$app/stores';
	import { usernameValidator, passwordValidator } from '$lib/utils/utils';

	let username = '';
	let password = '';
	let password2 = '';
	let mentor = '';
	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	const inviteCode = $page.url.searchParams.get('invite');
	mentor = inviteCode;

	const handleSubmit = async () => {
		if (!username || !password || !password2) {
			return alert('누락된 항목이 있어요.');
		}

		if (!mentor) {
			return alert('회원가입은 초대장이 필요합니다.');
		}

		if (usernameValidator(username)) {
			return;
		}

		if (passwordValidator(password)) {
			return;
		}

		const user = {
			username,
			password,
			mentor
		};

		try {
			const url = `${API}/auth/signup`;
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			};

			const response = await fetch(url, options);
			const data = await response.json();
			if (response.ok) {
				localStorage.setItem('accessToken', data.accessToken);
				localStorage.setItem('refreshToken', data.refreshToken);
				isLoggedIn.set(true);
				goto('/');
			} else {
				// 회원가입 불가 팝업 렌더링 구현 필요
				alert(data.message);
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 관리자에게 문의해 주세요. error: ${error}`);
			goto('/');
		}
	};
</script>

<div class="relative flex flex-col justify-center h-screen overflow-hidden m-3">
	<div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
		<h6 class="text-center text-success font-bold mb-3">교사 전용 익명 커뮤니티</h6>
		<h1 class="text-3xl font-semibold text-center text-purple-700">T-Agora</h1>
		<div class="text-center">
			<a href="/login" class="text-xs text-gray-600 hover:underline hover:text-blue-600"
				>이미 회원이신가요?</a
			>
		</div>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="form-control w-full">
				<label class="label" for="username">
					<span class="text-base label-text">아이디</span>
				</label>
				<input
					type="text"
					id="username"
					name="username"
					bind:value={username}
					placeholder="아이디(3-15자 이내, 영문소문자/숫자 사용 가능)"
					class="w-full input input-bordered input-primary"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="password">
					<span class="text-base label-text">비밀번호</span>
				</label>
				<input
					type="password"
					id="password"
					name="password"
					bind:value={password}
					placeholder="비밀번호(8자 이상, 문자/숫자/기호 사용 가능)"
					class="w-full input input-bordered input-primary"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="password2">
					<span class="text-base label-text">비밀번호 확인</span>
				</label>
				<input
					type="password"
					id="password2"
					bind:value={password2}
					placeholder="비밀번호를 다시 입력해 주세요"
					class="w-full input input-bordered input-primary"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="mentor">
					<span class="text-base label-text">추천인</span>
				</label>
				<input
					type="password"
					id="mentor"
					name="mentor"
					bind:value={mentor}
					class="w-full input input-bordered input-primary"
					readonly
				/>
			</div>
			<div>
				<button class="btn btn-primary">회원가입</button>
			</div>
			<div class="text-right">
				<a href="/notice/signup" class="text-xs text-error hover:underline hover:text-blue-600"
					>초대장이 만료되었나요?</a
				>
			</div>
		</form>
	</div>
</div>
