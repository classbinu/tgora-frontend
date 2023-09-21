<script>
	import { goto } from '$app/navigation';
	import { isLoggedIn, API_URL } from '$lib/store';
	import { usernameValidator, passwordValidator } from '$lib/utils/utils';

	let username = '';
	let password = '';
	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	function forgetPasswordAlert() {
		return alert('입력하신 개인정보가 없어 비밀번호를 찾을 수 없습니다.');
	}

	function loginLoadingAlert() {
		let timerInterval;
		Swal.fire({
			title: '🔐 로그인 정보를 암호화하고 있어요.. ',
			html: 'I will close in <b></b> milliseconds.',
			timer: 5000,
			timerProgressBar: true,
			didOpen: () => {
				Swal.showLoading();
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			}
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('Login Success!');
			}
		});
	}

	const handleSubmit = async () => {
		const user = {
			username,
			password
		};

		if (usernameValidator(username)) {
			return;
		}
		if (passwordValidator(password)) {
			return;
		}

		loginLoadingAlert();

		try {
			const url = `${API}/auth/signin`;
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
				// 로그인 불가 팝업 렌더링 구현 필요
				alert(data.message);
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 관리자에게 문의해 주세요. error: ${error}`);
			goto('/');
		}
	};
</script>

<div class="relative flex flex-col justify-center h-screen overflow-hidden">
	<div class="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
		<h6 class="text-center text-success font-bold mb-3">교사 전용 익명 커뮤니티</h6>
		<h1 class="text-3xl font-semibold text-center text-purple-700">T-Agora</h1>
		<div class="text-center">
			<a href="/notice/signup" class="text-xs text-gray-600 hover:underline hover:text-blue-600"
				>회원이 아니신가요?</a
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
					placeholder="아이디(3-15자 이내, 영문소문자/숫자)"
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
					placeholder="비밀번호(8자 이상, 문자/숫자/기호)"
					class="w-full input input-bordered input-primary"
				/>
			</div>
			<a
				href="#"
				on:click={forgetPasswordAlert}
				class="text-xs text-gray-600 hover:underline hover:text-blue-600">비밀번호를 잊으셨나요?</a
			>
			<div>
				<button class="btn btn-primary">로그인</button>
			</div>
		</form>
	</div>
</div>
