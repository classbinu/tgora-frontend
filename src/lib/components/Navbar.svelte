<script>
	import { isLoggedIn, USER_ID } from '$lib/store';
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
		USER_ID.set(undefined);
		goto('/');
	}
</script>

<nav class="container mx-auto">
	<div class="navbar bg-base-100">
		<div class="dropdown block md:hidden">
			<label tabindex="0" class="btn btn-ghost btn-circle">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
			>
				{#if $isLoggedIn}
					<li><a class="py-5" href="/agora/every">속닥속닥</a></li>
					<li><a class="py-5" href="/mypage">마이페이지</a></li>
					<li><a class="py-5" on:click={logoutAndGotoHome}>로그아웃</a></li>
				{:else}
					<li><a class="py-5" href="/login">속닥속닥</a></li>
					<li><a class="py-5" href="/notice/signup">회원가입</a></li>
					<li><a class="py-5" href="/login">로그인</a></li>
				{/if}
			</ul>
		</div>
		<div class="flex-1">
			<a href="/" class="btn btn-ghost normal-case text-xl">T-아고라</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				{#if $isLoggedIn}
					<li class=""><a href="/agora/every">속닥속닥</a></li>
					<li class="hidden md:block"><a href="/mypage">마이페이지</a></li>
					<li class="hidden md:block"><a on:click={logoutAndGotoHome}>로그아웃</a></li>
				{:else}
					<li class="hidden md:block"><a href="/login">속닥속닥</a></li>
				{/if}

				{#if $isLoggedIn === false}
					<li><a href="/notice/signup">회원가입</a></li>
					<li><a href="/login">로그인</a></li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
