<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate, getFeed, deleteFeed, returnValidAccessToken } from '$lib/utils/utils.js';
	import { USER_ID, API_URL, FEEDS } from '$lib/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let _id = '';
	let channel = '';
	let title = '';
	let content = '';

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	let feed = {};
	onMount(async () => {
		feed = await getFeed($page.params.feedId);
		_id = feed._id;
		channel = feed.channel;
		title = feed.title;
		content = feed.content;

		if (feed.userId !== userId) {
			alert('접근 권한이 없습니다.');
			goto(`/agora/${_id}`);
		}
	});

	const handleSubmit = async () => {
		const feed = {
			_id,
			channel,
			title,
			content
		};

		try {
			const accessToken = await returnValidAccessToken();
			if (!accessToken) return;

			const url = `${API}/feeds/${feed._id}`;
			const options = {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`
				},
				body: JSON.stringify(feed)
			};

			const response = await fetch(url, options);
			if (response.ok) {
				goto(`/agora/${$page.params.channel}/${_id}`);
			} else {
				alert('피드 수정에 실패했어요. 개발자에게 문의해 주세요.');
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 개발자에게 문의해 주세요. error: ${error}`);
			goto('/agora');
		}
	};

	async function confirmDeleteFeed() {
		const result = confirm('피드를 정말 삭제하시겠어요?');
		if (result) {
			await deleteFeed(_id);
			FEEDS.set([]);
			goto(`/agora/${$page.params.channel}`);
		} else {
			return alert('취소되었습니다.');
		}
	}
</script>

<Navbar />
<main class="container mx-auto">
	<div class="w-full lg:w-1/2 mx-auto p-1">
		<form on:submit|preventDefault={handleSubmit}>
			<label class="label" for="title">
				<span id="title" class="label-text">채널 / 제목</span>
			</label>
			<div class="flex">
				<div class="form-control">
					<!-- <label class="label" for="channel">
						<span class="label-text">채널</span>
					</label> -->
					<select class="select select-bordered" id="channel" bind:value={channel}>
						<option>전체</option>
						<option>초등</option>
						<option>중등</option>
						<option>유치원</option>
						<option>특수</option>
					</select>
				</div>
				<!-- <label class="label" for="title">
					<span id="title" class="label-text">제목</span>
				</label> -->
				<input
					type="text"
					placeholder="제목을 입력해주세요."
					class="input input-bordered w-full"
					bind:value={title}
					required
				/>
			</div>
			<div class="form-control">
				<label class="label" for="content">
					<span class="label-text">내용</span>
				</label>
				<textarea
					id="content"
					bind:value={content}
					class="textarea textarea-bordered"
					placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요."
					required
					rows="3"
				/>
			</div>
			<button class="btn btn-success mt-5 w-full">수정</button>
			<div class="text-right">
				<a class="btn btn-ghost text-error mt-5"
					><span class="material-symbols-outlined" on:click={confirmDeleteFeed}> delete </span></a
				>
			</div>
		</form>
	</div>
</main>
<!-- <Footer /> -->
