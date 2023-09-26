<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<main class="container mx-auto">
	<h1 class="text-3xl font-bold text-center my-20">공지사항</h1>
	<div class="collapse collapse-arrow bg-base-200">
		<input type="radio" name="my-accordion-2" checked="checked" />
		<div class="collapse-title text-xl font-medium">초대 링크를 통해서만 가입할 수 있습니다.</div>
		<div class="collapse-content">
			<p>T-아고라는 교사 익명 커뮤니티입니다.</p>
			<p class="mt-2">
				현직 교사만 가입할 수 있으며,
				<br />
				유치원, 초등, 중등, 특수 등 교과 교사에 한하여 가입을 받고 있습니다.
				<br />
				(비교과 교사, 교감, 교장, 교육전문직 가입 가능 여부 검토 중)
			</p>
			<p class="mt-3">
				개인정보 수집 없이 자격 요건을 확인하기 위해 회원가입은 초대장을 받은 경우에만 가능합니다.
			</p>
			<p class="mt-3">
				회원가입 시 5장이 초대장이 지급됩니다.
				<br />
				초대장을 받았으나 해당 초대장으로 5명의 가입자가 생기면 해당 초대장은 만료됩니다.
				<br />
				이 경우 다른 회원에게 새로운 초대장을 받아야 합니다.
			</p>
			<p />
		</div>
	</div>
	<!-- <div class="collapse collapse-arrow bg-base-200">
		<input type="radio" name="my-accordion-2" />
		<div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
		<div class="collapse-content">
			<p>hello</p>
		</div>
	</div> -->
	<div class="h-screen" />
</main>
<Footer />
