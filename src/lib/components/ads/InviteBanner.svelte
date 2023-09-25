<script>
	import { isLoggedIn, USER_ID } from '$lib/store';
	import { goto } from '$app/navigation';

	let showHomeBanner;
	isLoggedIn.subscribe((value) => {
		showHomeBanner = value;
	});
</script>

{#if showHomeBanner}
	<a href="/mypage/invite">
		<div class="alert bg-yellow-300 flex justify-center font-bold">
			<span>📮 초대장이 지급되었어요!</span>
		</div>
	</a>
{:else}
	<a href="/notice/signup">
		<div class="alert bg-success flex justify-center font-bold">
			<span>🙋 T-아고라는 교사 익명 커뮤니티입니다</span>
		</div>
	</a>
{/if}
