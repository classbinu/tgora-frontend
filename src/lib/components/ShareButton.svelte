<script>
	const share = async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					title: 'T-아고라',
					text: '공교육 정상화를 위한 이슈 모음',
					url: 'https://tgora.kr'
				});
			} else {
				await navigator.clipboard.writeText('https://tgora.kr');
				alert('T-아고라 주소(tgora.kr)가 복사되었어요.');
			}
		} catch (error) {
			alert('뭔가 문제가 있어요. 브라우저 공유 기능을 활용해 주세요.');
		}
	};
</script>

<button id="shareButton" class="btn bg-yellow-300 hover:bg-yellow-400" on:click={share}
	><span class="material-symbols-outlined"> share </span></button
>
