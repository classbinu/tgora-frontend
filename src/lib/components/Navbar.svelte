<script>
	import { isLoggedIn } from '$lib/store';
	import { logout } from '$lib/utils/utils';
	import { goto } from '$app/navigation';

	function alertLogin() {
		return alert('지금은 로그인을 지원하지 않습니다.');
	}

	function alertSignup() {
		return alert('지금은 회원가입 기간이 아닙니다.');
	}

	function logoutAndGotoHome() {
		logout();
		isLoggedIn.set(false);
		goto('/');
	}
</script>

<nav class="container mx-auto">
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">T-아고라</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				{#if $isLoggedIn}
					<li><a href="/mypage">마이페이지</a></li>
					<li><a on:click={logoutAndGotoHome}>로그아웃</a></li>
				{:else}
					<li><a on:click={alertSignup}>회원가입</a></li>
					<li><a on:click={alertLogin}>로그인</a></li>
				{/if}
				<!-- <li>
					<details>
						<summary> Parent </summary>
						<ul class="p-2 bg-base-100">
							<li><a>Link 1</a></li>
							<li><a>Link 2</a></li>
						</ul>
					</details>
				</li> -->
			</ul>
		</div>
	</div>
</nav>
