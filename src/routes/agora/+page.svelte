<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import {
		formatDate,
		getAllFeeds,
		clickFeedLike,
		returnValidAccessToken,
		convertUTCtoUTC9
	} from '$lib/utils/utils.js';
	import { USER_ID, BEFORE_FEED_ID } from '$lib/store';
	import { onMount, tick } from 'svelte';

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let feedId;
	BEFORE_FEED_ID.subscribe((value) => {
		feedId = value;
	});

	let feeds = [];

	onMount(async () => {
		getPage();
		setTimeout(() => scrollToElement(feedId), 500);
	});

	async function getPage() {
		feeds = await getAllFeeds();
	}

	async function clickLike(feedId) {
		await clickFeedLike(feedId);
		getPage();
	}

	function goToFeed(feedId) {
		location.href = `/agora/${feedId}`;
	}

	function scrollToElement(feedId) {
		const element = document.getElementById(feedId);
		if (element) {
			element.scrollIntoView({ behavior: 'auto' });
		}
	}
</script>

<Navbar />
<main class="container mx-auto">
	<a
		href="/agora/create"
		class="btn btn-circle btn-success btn-lg fixed bottom-10 right-10 text-white shadow-lg text-2xl font-bold z-10"
	>
		<span class="material-symbols-outlined"> edit </span>
	</a>
	{#each feeds as feed (feed._id)}
		<div class="p-1 w-full lg:w-1/2 mx-auto" id={feed._id}>
			<div class="card bg-base-100 border">
				<a href="/agora/{feed._id}">
					<div class="card-body">
						<div>
							<span class="text-sm">{feed.nickname}</span>
							<span class="text-xs text-gray-300">{convertUTCtoUTC9(feed.createdAt)}</span>
						</div>
						<h2 class="text-lg font-bold my-5">{feed.title}</h2>
						<p>{feed.content}</p>
					</div>
				</a>
				<div class="join my-3">
					<button class="w-1/3 join-item text-gray-400" on:click={() => clickLike(feed._id)}>
						<span
							class="material-symbols-outlined {feed['likes'].includes(userId) ? 'text-error' : ''}"
							>favorite</span
						><span>
							{feed.likes.length}
						</span>
					</button>
					<button class="w-1/3 join-item text-gray-400" on:click={() => goToFeed(feed._id)}
						><span class="material-symbols-outlined"> chat_bubble </span><span
							>{feed.comments.length}</span
						></button
					>
					<button class="w-1/3 join-item text-gray-400" on:click={() => goToFeed(feed._id)}
						><span class="material-symbols-outlined"> visibility </span><span
							>{feed.views.length}</span
						>
					</button>
				</div>
			</div>
		</div>
	{/each}
	<div class="my-20"></div>
</main>
<!-- <footer /> -->
