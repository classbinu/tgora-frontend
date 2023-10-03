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
		returnValidAccessToken,
		convertUTCtoUTC9,
		formatRelativeTime,
		getIpAddress
	} from '$lib/utils/utils.js';
	import { USER_ID, API_URL, IP, BEFORE_FEED_ID } from '$lib/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import WaterMark from '$lib/components/WaterMark.svelte';
	import FeedSecretWarning from '$lib/components/FeedSecretWarning.svelte';
	import FeedContentBanner from '$lib/components/ads/FeedContentBanner.svelte';
	import FeedCommentsBanner from '$lib/components/ads/FeedCommentsBanner.svelte';

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	let ipAddress;
	IP.subscribe((value) => {
		ipAddress = value;
	});

	let feed = {
		createdAt: '',
		nickname: '',
		title: '',
		content: '',
		image: ''
	};
	let comments = [];
	let content = '';

	let likesCount = 0;
	let commentsCount = 0;
	let viewsCount = 0;

	let likesArray = [];
	let flagsArray = [];

	const elementary = {
		badgeColor: 'badge-primary',
		textColor: ''
	};
	const middle = {
		badgeColor: 'badge-secondary',
		textColor: ''
	};
	const child = {
		badgeColor: 'badge-error',
		textColor: ''
	};
	const special = {
		badgeColor: 'badge-accent',
		textColor: ''
	};

	onMount(async () => {
		updateFeedViews($page.params.feedId);
		getPage();
		if ($page.params.channel === 'my') {
			BEFORE_FEED_ID.set(undefined);
		} else {
			BEFORE_FEED_ID.set($page.params.feedId);
		}
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
				alert('댓글 등록에 실패했어요. 새로고침 후 재로그인을 해 주세요.');
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 관리자에게 문의해 주세요. error: ${error}`);
			goto('/agora');
		}
	};

	function replaceUrls(text) {
		// 정규 표현식을 사용하여 텍스트 내에서 URL을 감지하고 링크로 변환합니다.
		const urlPattern = /(https?:\/\/[^\s]+)/g;
		const textWithLinks = text.replace(
			urlPattern,
			'<a href="$1" target="_blank" class="link link-primary">$1</a>'
		);

		// 스크립트 태그 삭제
		const sanitizedText = textWithLinks.replace(
			/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
			''
		);

		// 감지된 링크를 HTML로 반환합니다.
		return sanitizedText;
	}
</script>

<Navbar />
<main class="container mx-auto">
	<WaterMark>
		<span slot="userId">{userId}<br />{ipAddress}</span>
	</WaterMark>
	<div class="px-5">
		<FeedSecretWarning />
	</div>
	<div class="card-body w-full lg:w-1/2 mx-auto p-5">
		{#if feed.userId === userId}
			<a href="/agora/{$page.params.channel}/{feed._id}/edit" class="text-success text-right"
				><span class="material-symbols-outlined"> edit </span></a
			>
		{:else}
			<button class="text-right {flagsArray.includes(userId) ? 'text-error' : ''}"
				><span class="material-symbols-outlined" on:click={clickFlag}> flag </span></button
			>
		{/if}
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
		<h2 class="text-lg font-bold my-5">{feed.title}</h2>
		<p class="whitespace-pre-line mb-5">{@html replaceUrls(feed.content)}</p>
		{#if feed.image}
			<img src={feed.image} alt={feed.title} />
		{/if}
		<FeedContentBanner />
		<div class="join mt-10 mb-10">
			<button class="w-1/3 join-item text-gray-400" on:click={clickLike}>
				<span class="material-symbols-outlined {likesArray.includes(userId) ? 'text-error' : ''}">
					favorite
				</span><span>
					{likesCount}
				</span>
			</button>
			<button class="w-1/3 join-item text-gray-400"
				><span class="material-symbols-outlined"> chat_bubble </span><span>{commentsCount}</span
				></button
			>
			<button class="w-1/3 join-item text-gray-400"
				><span class="material-symbols-outlined"> visibility </span><span /></button
			>
		</div>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="flex">
				<textarea
					type="text"
					bind:value={content}
					placeholder="공감과 지지의 댓글을 달아 주세요."
					class="textarea textarea-bordered w-full"
					rows="1"
					required
				/>
				<button class="btn btn-success">작성</button>
			</div>
		</form>
		{#each comments as comment (comment._id)}
			<div class="mt-5">
				<div>
					<span class="text-xs text-gray-500">{formatRelativeTime(comment.createdAt)}</span>
					{#if feed.userId === comment.userId}
						<div class="badge badge-xs badge-success">작성자</div>
					{/if}
					<p class="text-xs text-gray-400">
						{comment.grade ? comment.grade : '비공개'} · {feed.nickname}
					</p>
				</div>
				<div class="flex">
					<p>{@html replaceUrls(comment.content)}</p>
					{#if comment.userId === userId}
						<a
							href="/agora/{$page.params.channel}/{comment.feedId}/{comment._id}/edit"
							class="text-success text-right"
							><span class="material-symbols-outlined"> edit </span></a
						>
					{:else}
						<!-- <button class="text-error text-right"
							><span class="material-symbols-outlined" on:click={isDeveloping}> flag </span></button
						> -->
					{/if}
				</div>
				<div class="divider" />
			</div>
		{/each}
		<FeedCommentsBanner />
		<div class="my-60" />
	</div>
</main>
<!-- <Footer /> -->
