<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate, getFeed, getComments } from '$lib/utils/utils.js';
	import { USER_ID, API_URL } from '$lib/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	let feed = {};
	let comments = [];
	let content = '';

	onMount(async () => {
		feed = await getFeed($page.params.feedId);
		comments = await getComments($page.params.feedId);
	});

	function isDeveloping() {
		return alert('개발 중인 기능입니다.');
	}

	const handleSubmit = async () => {
		const comment = {
			feedId: feed._id,
			content
		};
		try {
			const accessToken = localStorage.getItem('accessToken');

			if (!accessToken) {
				console.log('토큰이 존재하지 않습니다.');
				goto('/login');
				return;
			}
			const url = `${API}/comments`;
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`
				},
				body: JSON.stringify(comment)
			};

			const response = await fetch(url, options);
			if (response.ok) {
				content = '';
				comments = await getComments(feed._id);
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
	<div class="card-body w-full lg:w-1/2 mx-auto">
		{#if feed.userId === userId}
			<a href="/agora/{feed._id}/edit" class="text-success text-right"
				><span class="material-symbols-outlined"> edit </span></a
			>
		{:else}
			<button class="text-error text-right"
				><span class="material-symbols-outlined" on:click={isDeveloping}> flag </span></button
			>
		{/if}
		<div>
			<span class="text-sm">{feed.nickname}</span>
			<span class="text-xs text-gray-300">{feed.createdAt}</span>
		</div>
		<h2 class="text-lg font-bold my-5">{feed.title}</h2>
		<p>{feed.content}</p>
		<div class="join mt-20 mb-10">
			<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
				><span class="material-symbols-outlined"> favorite </span><span>
					{feed.likes}
				</span></button
			>
			<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
				><span class="material-symbols-outlined"> chat_bubble </span><span>{feed.comments}</span
				></button
			>
			<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
				><span class="material-symbols-outlined"> visibility </span><span>{feed.views}</span
				></button
			>
		</div>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="flex">
				<textarea
					type="text"
					bind:value={content}
					placeholder="착한 댓글을 달아 주세요."
					class="textarea textarea-bordered w-full"
					rows="1"
				/>
				<button class="btn btn-success">작성</button>
			</div>
		</form>

		{#each comments as comment (comment._id)}
			<div class="mt-3">
				<div>
					<span class="text-sm">{comment.nickname}</span>
					<span class="text-xs text-gray-300">{comment.createdAt}</span>
				</div>
				<div class="mt-1 flex">
					<p>{comment.content}</p>
					{#if comment.userId === userId}
						<a href="/agora/{comment.feedId}/{comment._id}/edit" class="text-success text-right"
							><span class="material-symbols-outlined"> edit </span></a
						>
					{:else}
						<button class="text-error text-right"
							><span class="material-symbols-outlined" on:click={isDeveloping}> flag </span></button
						>
					{/if}
				</div>
				<div class="divider" />
			</div>
		{/each}
	</div>
</main>
<Footer />
