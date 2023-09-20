<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate, getFeed, deleteFeed } from '$lib/utils/utils.js';
	import { USER_ID, API_URL } from '$lib/store';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	let _id = '';
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
			title,
			content
		};
		try {
			const accessToken = localStorage.getItem('accessToken');

			if (!accessToken) {
				console.log('토큰이 존재하지 않습니다.');
				goto('/login');
				return;
			}
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
				goto(`/agora/${_id}`);
			} else {
				alert('피드 등록에 실패했어요. 개발자에게 문의해 주세요.');
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
			goto('/agora');
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
				<span id="title" class="label-text">제목</span>
			</label>
			<input
				type="text"
				bind:value={title}
				placeholder="제목을 입력해주세요."
				class="input input-bordered w-full"
			/>
			<div class="form-control">
				<label class="label" for="content">
					<span class="label-text">내용</span>
				</label>
				<textarea
					id="content"
					bind:value={content}
					class="textarea textarea-bordered h-96"
					placeholder="다른 선생님을 존중해 주세요."
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
