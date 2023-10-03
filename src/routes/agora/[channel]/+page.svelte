<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import {
		formatDate,
		getAllFeeds,
		getSearchFeeds,
		clickFeedLike,
		returnValidAccessToken,
		convertUTCtoUTC9,
		formatRelativeTime,
		getIpAddress
	} from '$lib/utils/utils.js';
	import { USER_ID, BEFORE_FEED_ID, IP, FEEDS } from '$lib/store';
	import { onMount, onDestroy, tick } from 'svelte';
	import { page } from '$app/stores';
	import WaterMark from '$lib/components/WaterMark.svelte';
	import FeedSecretWarning from '$lib/components/FeedSecretWarning.svelte';
	import { goto } from '$app/navigation';
	import InviteBanner from '$lib/components/ads/InviteBanner.svelte';
	import FeedsMainBanner from '$lib/components/ads/FeedsMainBanner.svelte';

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

	let feeds;
	FEEDS.subscribe((value) => {
		feeds = value;
	});

	let feedInfoMessage = '피드는 최신 200개만 노출됩니다 🤗';

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

	let topFeeds = [];
	onMount(async () => {
		if (feeds.length === 0) {
			await getPage($page.params.channel, pages);
		}

		if (!getQueryString('q')) {
			topFeeds = getTopFeeds(feeds, 3);
			feedInfoMessage = '피드는 최신 200개만 노출됩니다 🤗';
		} else {
			q = getQueryString('q');
			feedInfoMessage = '';
		}
	});

	function getQueryString(key) {
		const queryString = window.location.search;
		const queryParams = new URLSearchParams(queryString);
		return queryParams.get(key);
	}

	function getTopFeeds(feeds, count) {
		const sortedFeeds = [...feeds].sort((a, b) => b.likes.length - a.likes.length);
		const topFeeds = sortedFeeds.slice(0, count);
		return topFeeds;
	}

	let pages = 1;
	async function getPage(channel, pages) {
		goto(`/agora/${channel}`);
		q = '';
		const feeds = await getAllFeeds(channel, pages);
		FEEDS.set(feeds);
		topFeeds = getTopFeeds(feeds, 3);
		feedInfoMessage = '피드는 최신 200개만 노출됩니다 🤗';
	}

	async function clickLike(feedId) {
		await clickFeedLike(feedId);
		let fetchedFeeds = [];
		if (getQueryString('q')) {
			fetchedFeeds = await getSearchFeeds($page.params.channel, q);
		} else {
			fetchedFeeds = await getAllFeeds($page.params.channel, pages);
		}
		FEEDS.set(fetchedFeeds);

		const el = document.getElementById(feedId);
		const heartIcon = el.querySelector('.material-symbols-outlined');
		const hasTextErrorClass = heartIcon.classList.contains('text-error');
		const likeCount = el.querySelector('.like-count');

		if (hasTextErrorClass) {
			heartIcon.classList.remove('text-error');
			likeCount.textContent = parseInt(likeCount.textContent) - 1;
		} else {
			heartIcon.classList.add('text-error');
			likeCount.textContent = parseInt(likeCount.textContent) + 1;
		}
	}

	let q = '';
	async function searchFeeds() {
		if (q.length < 2) {
			return alert('검색어는 2글자 이상 입력해 주세요.');
		}
		goto(`/agora/${$page.params.channel}?q=${q}`);
		const feeds = await getSearchFeeds($page.params.channel, q);
		FEEDS.set(feeds);
		topFeeds = [];

		if (feeds.length === 0) {
			feedInfoMessage = '검색된 피드가 없어요 😢';
		} else {
			feedInfoMessage = '';
		}
	}

	function handleEnterKey(event) {
		if (event.key === 'Enter') {
			searchFeeds();
		}
	}

	function goToFeed(feedId) {
		location.href = `/agora/${feedId}`;
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
		<button on:click={() => getPage('every')} class="btn btn-sm btn-outline btn-neutral"
			>전체</button
		>
		<button on:click={() => getPage('elementary')} class="btn btn-sm btn-outline btn-primary"
			>초등</button
		>
		<button on:click={() => getPage('middle')} class="btn btn-sm btn-outline btn-secondary"
			>중등</button
		>
		<button on:click={() => getPage('child')} class="btn btn-sm btn-outline btn-accent"
			>유치원</button
		>
		<button on:click={() => getPage('special')} class="btn btn-sm btn-outline btn-success"
			>특수</button
		>
	</div>
	<FeedSecretWarning />

	<div class="flex p-1 w-full lg:w-1/2 mx-auto">
		<input
			type="text"
			placeholder="피드 검색"
			class="input input-bordered w-full input-sm"
			bind:value={q}
			on:keyup={handleEnterKey}
		/>
		<button class="btn join-item btn-sm" on:click={searchFeeds}
			><span class="material-symbols-outlined"> search </span></button
		>
	</div>
	<div class="p-1 w-full lg:w-1/2 mx-auto">
		<p class="text-primary font-bold text-sm">
			🤗 '속닥속닥'은 자유롭게 이야기를 나눌 수 있는 공간이에요
		</p>
	</div>
	<FeedsMainBanner />
	{#each topFeeds as feed (feed._id)}
		<div class="p-1 w-full lg:w-1/2 mx-auto" id={feed._id}>
			<div class="card bg-base-100 border-2 border-success">
				<a href="/agora/{$page.params.channel}/{feed._id}">
					<div class="card-body">
						<div>
							<span class="badge badge-success">🔥인기글</span>
							<span
								class="badge badge-outline {feed.channel === '초등'
									? elementary.badgeColor
									: feed.channel === '중등'
									? middle.badgeColor
									: feed.channel === '유치원'
									? child.badgeColor
									: feed.channel === '특수'
									? special.badgeColor
									: ''}"
							>
								{feed.channel ? feed.channel : '전체'}
							</span>
							<span class="text-xs text-gray-500">{formatRelativeTime(feed.createdAt)}</span>
							<p class="text-xs text-gray-400 m-1">
								{feed.grade ? feed.grade : '비공개'} · {feed.nickname}
							</p>
						</div>
						<div class="flex justify-between">
							<div class="overflow-hidden whitespace-no-wrap {feed.image ? 'w-3/4' : ''}">
								<h2 class="text-lg font-bold line-clamp-2">{feed.title}</h2>
								<p class="line-clamp-2">{feed.content}</p>
							</div>
							{#if feed.image}
								<div class="w-24 h-24">
									<img
										src={feed.image}
										alt={feed.title}
										loading="lazy"
										class="rounded-lg object-cover w-full h-full"
									/>
								</div>
							{/if}
						</div>
					</div>
				</a>
				<div class="join my-3">
					<button class="w-1/3 join-item text-gray-400" on:click={() => clickLike(feed._id)}>
						<span
							class="material-symbols-outlined {feed['likes'].includes(userId) ? 'text-error' : ''}"
							>favorite</span
						><span class="like-count">
							{feed.likes.length}
						</span>
					</button>
					<a
						href="/agora/{$page.params.channel}/{feed._id}"
						class="w-1/3 join-item text-gray-400 text-center"
						><span class="material-symbols-outlined {feed['comments'].includes(userId) ? 'text-success' : ''}"> chat_bubble </span><span
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
									: ''}"
							>
								{feed.channel ? feed.channel : '전체'}
							</span>
							<span class="text-xs text-gray-500">{formatRelativeTime(feed.createdAt)}</span>
							<p class="text-xs text-gray-400 m-1">
								{feed.grade ? feed.grade : '비공개'} · {feed.nickname}
							</p>
						</div>
						<div class="flex justify-between">
							<div class="overflow-hidden whitespace-no-wrap {feed.image ? 'w-3/4' : ''}">
								<h2 class="text-lg font-bold line-clamp-2">{feed.title}</h2>
								<p class="line-clamp-2">{feed.content}</p>
							</div>
							{#if feed.image}
								<div class="w-24 h-24">
									<img
										src={feed.image}
										alt={feed.title}
										loading="lazy"
										class="rounded-lg object-cover w-full h-full"
									/>
								</div>
							{/if}
						</div>
					</div>
				</a>
				<div class="join my-3">
					<button class="w-1/3 join-item text-gray-400" on:click={() => clickLike(feed._id)}>
						<span
							class="material-symbols-outlined {feed['likes'].includes(userId) ? 'text-error' : ''}"
							>favorite</span
						><span class="like-count">
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
	<p class="text-center my-10 text-success">{feedInfoMessage}</p>
	<div class="my-40" />
</main>
<!-- <footer /> -->
