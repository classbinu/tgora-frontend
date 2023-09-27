<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import {
		formatDate,
		getAllFeeds,
		clickFeedLike,
		returnValidAccessToken,
		convertUTCtoUTC9,
		formatRelativeTime,
		getIpAddress
	} from '$lib/utils/utils.js';
	import { USER_ID, BEFORE_FEED_ID, IP } from '$lib/store';
	import { onMount, onDestroy, tick } from 'svelte';
	import { page } from '$app/stores';
	import WaterMark from '$lib/components/WaterMark.svelte';
	import FeedSecretWarning from '$lib/components/FeedSecretWarning.svelte';
	import { goto } from '$app/navigation';
	import InviteBanner from '$lib/components/ads/InviteBanner.svelte';

	// $page.params.channel

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let feedId;
	BEFORE_FEED_ID.subscribe((value) => {
		feedId = value;
	});

	let ipAddress;
	IP.subscribe((value) => {
		ipAddress = value;
	});

	const elementary = {
		badgeColor: 'badge-primary',
		textColor: ''
	};
	const middle = {
		badgeColor: 'badge-secondary',
		textColor: ''
	};
	const child = {
		badgeColor: 'badge-accent',
		textColor: ''
	};
	const special = {
		badgeColor: 'badge-success',
		textColor: ''
	};

	let nowFeedType = 'all';

	let feeds = [];
	onMount(async () => {
		await getPage($page.params.channel);
		scrollToElement(feedId);
	});

	async function getPage(channel) {
		goto(`/agora/${channel}`);
		feeds = await getAllFeeds(channel);
	}

	async function clickLike(feedId) {
		await clickFeedLike(feedId);
		feeds = await getAllFeeds($page.params.channel);
	}

	function goToFeed(feedId) {
		location.href = `/agora/${feedId}`;
	}

	function scrollToElement(feedId) {
		const el = document.getElementById(feedId);
		if (el) {
			el.scrollIntoView({ behavior: 'auto' });
			el.querySelector('div').classList.add('border-2', 'border-purple-400');
		}
		BEFORE_FEED_ID.set(undefined);
	}
</script>

<InviteBanner />
<Navbar />
<main class="container mx-auto">
	<WaterMark>
		<span slot="userId">{userId}<br />{ipAddress}</span>
	</WaterMark>

	<a
		href="/agora/{$page.params.channel}/create"
		class="btn btn-circle btn-success btn-lg fixed bottom-10 right-10 text-white shadow-lg text-2xl font-bold z-10"
	>
		<span class="material-symbols-outlined"> edit </span>
	</a>
	<div class="p-1 w-full lg:w-1/2 mx-auto text-right">
		<button on:click={() => getPage('every')} class="btn btn btn-outline btn-neutral">전체</button>
		<button on:click={() => getPage('elementary')} class="btn btn-outline btn-primary">초등</button>
		<button on:click={() => getPage('middle')} class="btn btn-outline btn-secondary">중등</button>
		<button on:click={() => getPage('child')} class="btn btn-outline btn-accent">유치원</button>
		<button on:click={() => getPage('special')} class="btn btn-outline btn-success">특수</button>
	</div>
	<FeedSecretWarning />
	{#each feeds as feed (feed._id)}
		<div class="p-1 w-full lg:w-1/2 mx-auto" id={feed._id}>
			<div class="card bg-base-100 border">
				<a href="/agora/{$page.params.channel}/{feed._id}">
					<div class="card-body">
						<div>
							<span
								class="badge badge-outline {feed.channel === '초등'
									? elementary.badgeColor
									: feed.channel === '중등'
									? middle.badgeColor
									: feed.channel === '유치원'
									? child.badgeColor
									: feed.channel === '특수'
									? special.badgeColor
									: ''}">{feed.channel ? feed.channel : '전체'}</span
							>
							<span class="text-sm text-gray-400">{feed.nickname}</span>
							<span class="text-xs text-gray-500">{formatRelativeTime(feed.createdAt)}</span>
						</div>
						<h2 class="text-lg font-bold mt-5">{feed.title}</h2>
						<p class="truncate">{feed.content}</p>
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
					<a
						href="/agora/{$page.params.channel}/{feed._id}"
						class="w-1/3 join-item text-gray-400 text-center"
						><span class="material-symbols-outlined"> chat_bubble </span><span
							>{feed.comments.length}</span
						></a
					>
					<a
						href="/agora/{$page.params.channel}/{feed._id}"
						class="w-1/3 join-item text-gray-400 text-center"
						><span class="material-symbols-outlined"> visibility </span><span />
					</a>
				</div>
			</div>
		</div>
	{/each}
	<div class="my-40" />
</main>
<!-- <footer /> -->
