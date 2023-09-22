<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { API_URL } from '$lib/store';
	import { goto } from '$app/navigation';
	import { returnValidAccessToken } from '$lib/utils/utils';

	let title = '';
	let content = '';

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	const handleSubmit = async () => {
		const feed = {
			title,
			content
		};
		try {
			const accessToken = await returnValidAccessToken();
			if (!accessToken) return;

			const url = `${API}/feeds`;
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`
				},
				body: JSON.stringify(feed)
			};

			const response = await fetch(url, options);
			if (response.ok) {
				goto('/agora');
			} else {
				alert('피드 등록에 실패했어요. 개발자에게 문의해 주세요.');
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 개발자에게 문의해 주세요. error: ${error}`);
			goto('/agora');
		}
	};
</script>

<Navbar />
<main class="container mx-auto">
	<div class="w-full lg:w-1/2 mx-auto p-1">
		<form on:submit|preventDefault={handleSubmit}>
			<label class="label" for="title">
				<span id="title" class="label-text">제목</span>
			</label>
			<input
				type="text"
				placeholder="제목을 입력해주세요."
				class="input input-bordered w-full"
				bind:value={title}
				required
			/>
			<div class="form-control">
				<label class="label" for="content">
					<span class="label-text">내용</span>
				</label>
				<textarea
					id="content"
					class="textarea textarea-bordered"
					bind:value={content}
					placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요."
					required
					rows="5"
				/>
			</div>
			<button class="btn btn-success mt-5 w-full">저장</button>
		</form>
	</div>
</main>
<!-- <Footer /> -->
