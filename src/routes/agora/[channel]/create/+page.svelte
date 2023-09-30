<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { API_URL, FEEDS } from '$lib/store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { returnValidAccessToken } from '$lib/utils/utils';
	import { onMount } from 'svelte';
	import imageCompression from 'browser-image-compression';

	const channels = {
		my: '전체',
		every: '전체',
		elementary: '초등',
		middle: '중등',
		child: '유치원',
		special: '특수'
	};

	let channel = channels[$page.params.channel];
	let title = '';
	let content = '';
	let image = '';

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	// 이미지를 base64로 변환
	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};

	const handleFileSelect = async (event) => {
		const selectedFile = event.target.files[0];
		if (selectedFile) {
			try {
				const options = {
					maxSizeMB: 1, // 최대 용량 1MB로 제한
					maxWidthOrHeight: 1024 // 이미지의 최대 가로 또는 세로 크기
				};
				const compressedImage = await imageCompression(selectedFile, options);
				const base64String = await convertBase64(compressedImage);

				image = base64String;
				console.log(image);
			} catch (error) {
				console.error('이미지 처리 중 오류 발생:', error);
			}
		}
	};

	const handleSubmit = async () => {
		FEEDS.set([]);

		const feed = {
			channel,
			title,
			content,
			image
		};
		try {
			const accessToken = await returnValidAccessToken();
			if (!accessToken) return;

			const url = `${API}/feeds`;
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${accessToken}`
				},
				body: JSON.stringify(feed)
			};

			const response = await fetch(url, options);
			if (response.ok) {
				goto(`/agora/${$page.params.channel}`);
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
					class="textarea textarea-bordered"
					bind:value={content}
					placeholder="보이지 않아도 모두 같은 동료 교사입니다. 상대방을 존중해 주세요."
					required
					rows="3"
				/>
			</div>
			<div class="form-control">
				<label class="label" for="image">
					<span class="label-text">이미지 첨부</span>
				</label>
				<input
					type="file"
					class="file-input file-input-bordered file-input-success w-full max-w-xs"
					accept="image/jpeg, image/png, image/gif"
					on:change={handleFileSelect}
				/>
				<label class="label">
					<span class="label-text-alt">이미지는 1장만 첨부 가능합니다.</span>
				</label>
			</div>
			<button class="btn btn-success mt-5 w-full">저장</button>
		</form>
	</div>
</main>
<!-- <Footer /> -->
