<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { getProfile, generateRandomNickname } from '$lib/utils/utils';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { API_URL } from '$lib/store';
	let userId = '';
	let nickname = '';
	let email = '';
	let phone = '';
	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	onMount(async () => {
		const profile = await getProfile();
		userId = profile._id;
		nickname = profile.nickname;
		email = profile.email;
		phone = profile.phone;
	});

	function randomNickname() {
		const randomIiString = generateRandomNickname(32);
		nickname = randomIiString;
	}

	const handleSubmit = async () => {
		const profile = {
			nickname,
			email,
			phone
		};

		try {
			const accessToken = localStorage.getItem('accessToken');

			if (!accessToken) {
				console.log('토큰이 존재하지 않습니다.');
				goto('/login');
				return;
			}
			const url = `${API}/users/${userId}`;
			const options = {
				method: 'PATCH',
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(profile)
			};

			const response = await fetch(url, options);
			const data = response;
			console.log(data);
			if (response.ok) {
				alert('프로필 정보가 수정되었어요.');
				goto('/mypage');
			} else {
				// 프로필 수정 불가 팝업 렌더링 구현 필요
				alert(data.message);
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 관리자에게 문의해 주세요. error: ${error}`);
			goto('/');
		}
	};
</script>

<Navbar />
<div class="relative flex flex-col justify-center overflow-hidden mt-10">
	<div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
		<h1 class="text-3xl font-semibold text-center text-purple-700">회원정보 변경</h1>
		<form on:submit|preventDefault={handleSubmit} class="space-y-4">
			<div class="form-control w-full">
				<label class="label" for="nickname">
					<span class="text-base label-text">닉네임</span>
				</label>
				<div class="flex">
					<input
						type="text"
						id="nickname"
						bind:value={nickname}
						class="w-full input input-bordered input-primary"
						required
						maxlength="24"
					/>
					<a class="btn btn-success" on:click={randomNickname}>랜덤 닉네임 생성🚀</a>
				</div>
				<p class="text-xs text-gray-600 mt-1">익명화를 위해 랜덤 닉네임 사용을 권장합니다.</p>
			</div>
			<div class="form-control w-full hidden">
				<label class="label" for="email">
					<span class="text-base label-text">이메일</span>
				</label>
				<input
					type="email"
					id="email"
					bind:value={email}
					placeholder=""
					maxlength="100"
					class="w-full input input-bordered input-primary"
					readonly
				/>
			</div>
			<div class="form-control w-full hidden">
				<label class="label" for="phone">
					<span class="text-base label-text">연락처</span>
				</label>
				<input
					type="phone"
					id="phone"
					bind:value={phone}
					placeholder=""
					maxlength="100"
					class="w-full input input-bordered input-primary"
				/>
			</div>

			<div>
				<button class="btn btn-primary">저장</button>
			</div>
		</form>
	</div>
</div>
<!-- <Footer /> -->
