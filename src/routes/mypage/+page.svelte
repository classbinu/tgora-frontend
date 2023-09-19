<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="flex justify-center h-screen">
	<div>
		<a href="/mypage/password" class="btn btn-info m-3">비밀번호 변경</a>
		<a href="/mypage/profile" class="btn btn-success m-3">회원정보 변경</a>
		<a href="/mypage/invite" class="btn btn-warning m-3">초대하기</a>
		<a href="/mypage/delete" class="btn btn-error m-3">회원탈퇴</a>
	</div>
</div>
<Footer />
