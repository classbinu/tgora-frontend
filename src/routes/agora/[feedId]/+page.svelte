<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate, getFeed } from '$lib/utils/utils.js';
	import { USER_ID } from '$lib/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let feed = {};

	onMount(async () => {
		feed = await getFeed($page.params.feedId);
	});

	function isDeveloping() {
		return alert('개발 중인 기능입니다.');
	}
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
		<form>
			<div class="flex">
				<textarea
					type="text"
					placeholder="착한 댓글을 달아 주세요."
					class="textarea textarea-bordered w-full"
					rows="1"
				/>
				<button class="btn btn-success">작성</button>
			</div>
		</form>
		<div class="mt-3">
			<div>
				<span class="text-sm">{feed.author}</span>
				<span class="text-xs text-gray-300">{feed.createdAt}</span>
			</div>
			<div class="mt-1 flex">
				<p>
					휴지 없을 수도 있어요. 조심하세요 ㅠ 휴지 없을 수도 있어요. 조심하세요 ㅠ 휴지 없을 수도
					있어요. 조심하세요 ㅠ 휴지 없을 수도 있어요. 조심하세요 ㅠ 휴지 없을 수도 있어요.
					조심하세요 ㅠ 댓글 기능 구현해야 함
				</p>
				<button class="text-error"><span class="material-symbols-outlined"> flag </span></button>
			</div>
			<div class="divider" />
			<div>
				<span class="text-sm">{feed.author}</span>
				<span class="text-xs text-gray-300">{feed.createdAt}</span>
			</div>
			<div class="mt-1">
				<p>휴지 없을 수도 있어요. 조심하세요 ㅠ 댓글 기능 구현해야 함</p>
			</div>
			<div class="divider" />
		</div>
	</div>
</main>
<Footer />
