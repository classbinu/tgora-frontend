<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate, getAllFeeds } from '$lib/utils/utils.js';
	import { USER_ID } from '$lib/store';
	import { onMount } from 'svelte';

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let feeds = [];

	onMount(async () => {
		feeds = await getAllFeeds();
	});

	function isDeveloping() {
		return alert('개발 중인 기능입니다.');
	}
</script>

<Navbar />
<main class="container mx-auto">
	<a
		href="/agora/create"
		class="btn btn-circle btn-success btn-lg fixed bottom-20 right-20 text-white shadow-lg text-2xl font-bold z-10"
	>
		<span class="material-symbols-outlined"> edit </span>
	</a>
	{#each feeds as feed (feed._id)}
		<div class="p-1 w-full lg:w-1/2 mx-auto">
			<div class="card bg-base-100 border">
				<a href="/agora/{feed._id}">
					<div class="card-body">
						<div>
							<span class="text-sm">{feed.nickname}</span>
							<span class="text-xs text-gray-300">{feed.createdAt}</span>
						</div>
						<h2 class="text-lg font-bold my-5">{feed.title}</h2>
						<p>{feed.content}</p>
					</div>
				</a>
				<div class="join my-3">
					<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
						><span class="material-symbols-outlined"> favorite </span><span>
							{feed.likes.length}
						</span></button
					>
					<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
						><span class="material-symbols-outlined"> chat_bubble </span><span>{feed.comments.length}</span
						></button
					>
					<button class="w-1/3 join-item text-gray-400" on:click={isDeveloping}
						><span class="material-symbols-outlined"> visibility </span><span
							>{feed.views.length}</span
						></button
					>
				</div>
			</div>
		</div>
	{/each}
</main>
<Footer />
