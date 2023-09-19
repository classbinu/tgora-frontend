<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { getProfile } from '$lib/utils/utils';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { API_URL } from '$lib/store';
	let oldPassword = '';
	let newPassword = '';
	let newPassword2 = '';

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	const handleSubmit = async () => {
		if (!oldPassword || !newPassword || !newPassword2) {
			return alert('누락된 항목이 있어요.');
		}

		if (usernameValidator(username)) {
			return;
		}

		if (passwordValidator(oldPassword)) {
			return;
		}

		if (passwordValidator(newPassword)) {
			return;
		}

		if (oldPassword === newPassword) {
			oldPassword = '';
			newPassword = '';
			newPassword2 = '';
			return alert('새로운 비밀번호가 기존 비밀번호와 동일합니다.');
		}

		if (newPassword !== newPassword2) {
			oldPassword = '';
			newPassword = '';
			newPassword2 = '';
			return alert('새로운 비밀번호 확인이 일치하지 않습니다.');
		}

		const password = {
			oldPassword,
			newPassword
		};

		try {
			const accessToken = localStorage.getItem('accessToken');

			if (!accessToken) {
				console.log('토큰이 존재하지 않습니다.');
				goto('/login');
				return;
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
				alert('비밀번호가 변경되었어요.');
				goto('/mypage');
			} else {
				// 비밀번호 변경 불가 팝업 렌더링 구현 필요
				alert(data.message);
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 관리자에게 문의해 주세요. error: ${error}`);
			goto('/');
		}
	};
</script>

<Navbar />
<div class="relative flex flex-col justify-center h-screen overflow-hidden">
	<div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
		<h1 class="text-3xl font-semibold text-center text-purple-700">비밀번호 변경</h1>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="form-control w-full">
				<label class="label" for="oldPassword">
					<span class="text-base label-text">기존 비밀번호</span>
				</label>
				<input
					type="password"
					id="oldPassword"
					bind:value={oldPassword}
					placeholder=""
					class="w-full input input-bordered input-primary"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="newPassword">
					<span class="text-base label-text">새로운 비밀번호</span>
				</label>
				<input
					type="password"
					id="newPassword"
					bind:value={newPassword}
					placeholder=""
					class="w-full input input-bordered input-primary"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="newPassword2">
					<span class="text-base label-text">새로운 비밀번호 확인</span>
				</label>
				<input
					type="password"
					id="newPassword2"
					bind:value={newPassword2}
					placeholder=""
					class="w-full input input-bordered input-primary"
				/>
			</div>

			<div>
				<button class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</div>
<Footer />
