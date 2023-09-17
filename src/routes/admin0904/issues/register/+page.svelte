<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { goto } from '$app/navigation';

	let category = '카테고리를 선택하세요';
	let title = '';
	let link = '';
	let dueDate = '';
	let summary = '';
	let isPublic = '공개';
	let adminMemo = '';

	const handleCategoryChange = (event) => {
		category = event.target.value;
		console.log(category);
	};

	const handleIsPublicChange = (event) => {
		isPublic = event.target.value;
		console.log(isPublic);
	};

	const handleSubmit = async () => {
		const issue = {
			category,
			title,
			link,
			dueDate,
			summary,
			isPublic,
			adminMemo
		};
		console.log(issue);
		try {
			const url = `https://port-0-tgora-backend-iciy2almkcvdm5.sel5.cloudtype.app/issues`;

			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(issue)
			};

			const response = await fetch(url, options);
			if (response.ok) {
				alert('이슈를 등록했어요.');
				goto('/admin0904/issues');
			} else {
				alert('이슈 등록에 실패했어요. 개발자에게 문의해 주세요.');
			}
		} catch (error) {
			alert(`뭔가 문제가 생겼어요. 개발자에게 문의해 주세요. error: ${error}`);
			goto('/admin0904/issues');
		}
	};
</script>

<Navbar />
<main class="container mx-auto">
	<h1 class="text-3xl font-bold mt-20 mx-3">🕹 이슈 등록</h1>
	<div class="m-3 flex justify-center mt-20">
		<form on:submit|preventDefault={handleSubmit} class="w-full md:w-96 card">
			<div class="form-control w-full">
				<label class="label" for="category">
					<span class="label-text">카테고리</span>
				</label>
				<select
					id="category"
					name="category"
					bind:value={category}
					on:change={handleCategoryChange}
					class="select select-bordered w-full"
				>
					<option disabled selected>카테고리를 선택하세요</option>
					<option value="입법 반대">❌ 입법 반대</option>
					<option value="입법 찬성">✅ 입법 찬성</option>
					<option value="국민동의청원">🙆 국민동의청원</option>
					<option value="설문">🎤 설문</option>
					<option value="서명">📑 서명</option>
					<option value="언론">📰 언론</option>
					<option value="기타">🎸 기타</option>
				</select>
			</div>
			<div class="form-control w-full">
				<label class="label" for="title">
					<span class="label-text">제목</span>
				</label>
				<input
					type="text"
					id="title"
					name="title"
					bind:value={title}
					placeholder=""
					class="input input-bordered w-full"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="link">
					<span class="label-text">링크</span>
				</label>
				<input
					type="text"
					id="link"
					name="link"
					bind:value={link}
					placeholder=""
					class="input input-bordered w-full"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="dueDate">
					<span class="label-text">마감일</span>
				</label>
				<input
					type="date"
					id="dueDate"
					name="dueDate"
					bind:value={dueDate}
					placeholder=""
					class="input input-bordered w-full"
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="summary">
					<span class="label-text">설명</span>
				</label>
				<textarea
					id="summary"
					name="summary"
					bind:value={summary}
					class="textarea textarea-bordered h-24"
					placeholder=""
				/>
			</div>
			<div class="form-control w-full">
				<label class="label" for="isPublic">
					<span class="label-text">공개상태</span>
				</label>
				<select
					id="isPublic"
					name="isPublic"
					bind:value={isPublic}
					on:change={handleIsPublicChange}
					class="select select-bordered w-full"
				>
					<option>공개</option>
					<option>비공개</option>
				</select>
			</div>
			<div class="form-control w-full">
				<label class="label" for="adminMemo">
					<span class="label-text">관리자 메모</span>
				</label>
				<textarea
					id="adminMemo"
					name="adminMemo"
					bind:value={adminMemo}
					class="textarea textarea-bordered h-24"
					placeholder=""
				/>
			</div>
			<button class="btn btn-neutral mt-5">저장</button>
		</form>
	</div>
</main>
<Footer />
