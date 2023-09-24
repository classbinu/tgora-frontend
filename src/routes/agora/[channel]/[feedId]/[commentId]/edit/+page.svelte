<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import {
		formatDate,
		getComment,
		deleteComment,
		returnValidAccessToken
	} from '$lib/utils/utils.js';
	import { USER_ID, API_URL } from '$lib/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let content = '';

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	let comment = {};
	onMount(async () => {
		comment = await getComment($page.params.commentId);
		content = comment.content;

		if (comment.userId !== userId) {
			alert('접근 권한이 없습니다.');
			goto(`/agora/${$page.params.channel}/${$page.params.feedId}`);
		}
	});

	const handleSubmit = async () => {
		const comment = {
			content
		};
		try {
			const accessToken = await returnValidAccessToken();
			if (!accessToken) return;

			const url = `${API}/comments/${$page.params.commentId}`;
			const options = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`
				},
				body: JSON.stringify(comment)
			};

			const response = await fetch(url, options);
			if (response.ok) {
				goto(`/agora/${$page.params.channel}/${$page.params.feedId}`);
			} else {
				alert('댓글 등록에 실패했어요. 개발자에게 문의해 주세요.');
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 개발자에게 문의해 주세요. error: ${error}`);
			goto('/agora');
		}
	};

	async function confirmDeleteComment() {
		const result = confirm('댓글을 정말 삭제하시겠어요?');
		if (result) {
			await deleteComment($page.params.commentId);
			goto(`/agora/${$page.params.feedId}`);
		} else {
			return alert('취소되었습니다.');
		}
	}
</script>

<Navbar />
<main class="container mx-auto">
	<div class="w-full lg:w-1/2 mx-auto p-1">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="form-control">
				<label class="label" for="content">
					<span class="label-text">내용</span>
				</label>
				<textarea
					id="content"
					bind:value={content}
					class="textarea textarea-bordered"
					placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요."
					rows="3"
					required
				/>
			</div>
			<button class="btn btn-success mt-5 w-full">수정</button>
			<div class="text-right">
				<a class="btn btn-ghost text-error mt-5"
					><span class="material-symbols-outlined" on:click={confirmDeleteComment}>
						delete
					</span></a
				>
			</div>
		</form>
	</div>
</main>
<!-- <Footer /> -->
