<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { userDelete } from '$lib/utils/utils.js';

	async function confirmDelete() {
		const password = prompt(
			'회원탈퇴 후 작성글에 접근할 수 없으며 재가입이 불가능합니다. 탈퇴를 희망하시면 비밀번호를 입력해주세요.'
		);
		if (password.length >= 8) {
			return await userDelete(password);
		} else {
			return alert('취소되었습니다.');
		}
	}
</script>

<Navbar />
<div class="mt-20 w-full lg:w-1/2 mx-auto">
	<div class="px-1">
		<a href="/mypage/feeds" class="btn btn-success my-1 w-full">내가 쓴 피드</a>
		<!-- <a href="/mypage/comments" class="btn btn-warning my-1 w-full">내가 쓴 댓글</a> -->
		<div class="divider"></div>
		<a href="/mypage/invite" class="btn btn-primary btn-outline my-1 w-full">초대하기</a>
		<a href="/mypage/profile" class="btn btn-primary btn-outline my-1 w-full">회원정보 변경</a>
		<a href="/mypage/password" class="btn btn-primary btn-outline my-1 w-full">비밀번호 변경</a>
		<div class="divider"></div>
		<button on:click={confirmDelete} class="btn btn-outline btn-error my-1 w-full">회원탈퇴</button>
	</div>
</div>

<!-- <Footer /> -->
