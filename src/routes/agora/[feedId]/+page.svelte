<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import {
		formatDate,
		getFeed,
		getComments,
		clickFeedLike,
		updateFeedViews,
		updateFeedFlags,
		returnValidAccessToken
	} from '$lib/utils/utils.js';
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

	let likesCount = 0;
	let commentsCount = 0;
	let viewsCount = 0;

	let likesArray = [];
	let flagsArray = [];

	onMount(async () => {
		// updateFeedViews($page.params.feedId);
		getPage();
	});

	async function getPage() {
		feed = await getFeed($page.params.feedId);
		comments = await getComments($page.params.feedId);
		
		likesCount = feed.likes.length;
		commentsCount = feed.comments.length;
		viewsCount = feed.views.length;

		likesArray = feed.likes;
		flagsArray = feed.flags;
		return console.log('getPage');
	}

	async function clickLike() {
		await clickFeedLike($page.params.feedId);
		await getPage();
	}

	async function clickFlag() {
		if (flagsArray.includes(userId)) {
			return alert('이미 신고한 피드입니다.');
		}

		const result = confirm(
			'신고가 누적된 피드는 비공개 처리됩니다. 신고는 취소할 수 없어요. 정말 이 피드를 신고하시겠어요?'
		);

		if (result) {
			await updateFeedFlags($page.params.feedId);
			await getPage();
			return alert('신고가 완료되었습니다.');
		} else {
			return alert('취소되었습니다.');
		}
	}

	function isDeveloping() {
		return alert('개발 중인 기능입니다.');
	}

	const handleSubmit = async () => {
		const comment = {
			feedId: feed._id,
			content
		};
		try {
			const accessToken = await returnValidAccessToken();
			if (!accessToken) return;

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
				await getPage();
			} else {
				alert('댓글 등록에 실패했어요. 관리자에게 문의해 주세요.');
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 관리자에게 문의해 주세요. error: ${error}`);
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
			<button class="text-right {flagsArray.includes(userId) ? 'text-error' : ''}"
				><span class="material-symbols-outlined" on:click={clickFlag}> flag </span></button
			>
		{/if}
		<div>
			<span class="text-sm">{feed.nickname}</span>
			<span class="text-xs text-gray-300">{feed.createdAt}</span>
		</div>
		<h2 class="text-lg font-bold my-5">{feed.title}</h2>
		<p>{feed.content}</p>
		<div class="join mt-20 mb-10">
			<button class="w-1/3 join-item text-gray-400" on:click={clickLike}>
				<span class="material-symbols-outlined {likesArray.includes(userId) ? 'text-error' : ''}">
					favorite
				</span><span>
					{likesCount}
				</span>
			</button>
			<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
				><span class="material-symbols-outlined"> chat_bubble </span><span>{commentsCount}</span
				></button
			>
			<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
				><span class="material-symbols-outlined"> visibility </span><span>{viewsCount}</span
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
<!-- <Footer /> -->
