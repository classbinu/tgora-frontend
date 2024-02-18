<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import IssueCard from '$lib/components/IssueCard.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate, checkIssueDone } from '$lib/utils/utils.js';
	import { USER_ID, API_URL, isLoggedIn } from '$lib/store';

	const ADMIN_ID_LIST = [
		'650bde9f1dbfaf21e04ee69d', // admin
		'650eb76ac2d7e7d6bf4889a0', // admin2
		'65d0c0297390cc7556a4f252', // admin3
		'650be13ab1691d9dd4a42e31' // classbinu
	];

	let userId;
	USER_ID.subscribe((value) => {
		userId = value;
	});

	let API;
	API_URL.subscribe((value) => {
		API = value;
	});

	let isLoggedInCheck;
	isLoggedIn.subscribe((value) => {
		isLoggedInCheck = value;
	});

	export let data;

	const issues = data.issues;
	const issuesAgree = [];
	const issuesDisagree = [];
	const issuesPetition = [];
	const issuesSurvey = [];
	const issuesSignature = [];
	const issuesPress = [];
	const issuesOther = [];

	for (const issue of issues) {
		if (issue.category === '입법 찬성') {
			issuesAgree.push(issue);
		} else if (issue.category === '입법 반대') {
			issuesDisagree.push(issue);
		} else if (issue.category === '국민동의청원') {
			issuesPetition.push(issue);
		} else if (issue.category === '설문') {
			issuesSurvey.push(issue);
		} else if (issue.category === '서명') {
			issuesSignature.push(issue);
		} else if (issue.category === '언론') {
			issuesPress.push(issue);
		} else if (issue.category === '기타') {
			issuesOther.push(issue);
		}
	}

	const fire = {
		bgColor: 'bg-yellow-100',
		textColor: ''
	};
	const agree = {
		bgColor: 'bg-green-100',
		textColor: ''
	};
	const disagree = {
		bgColor: 'bg-red-100',
		textColor: ''
	};
	const petition = {
		bgColor: 'bg-teal-100',
		textColor: ''
	};
	const survey = {
		bgColor: 'bg-purple-100',
		textColor: ''
	};
	const signature = {
		bgColor: 'bg-orange-100',
		textColor: ''
	};
	const press = {
		bgColor: 'bg-gray-100',
		textColor: ''
	};
	const other = {
		bgColor: 'bg-indigo-100',
		textColor: ''
	};

	async function clickDoneButton(issueId) {
		if (isLoggedInCheck) {
			await checkIssueDone(issueId);
			location.reload();
		} else {
			return alert('로그인을 하면 참여 여부를 관리할 수 있어요.');
		}
	}
</script>

<Navbar />
<Carousel />
<main class="container mx-auto">
	<h1 class="text-3xl font-bold my-10 text-center text-error">마감된 이슈입니다 🙇</h1>
	<div class="text-center">
		<a href="/" class="link link-success">진행 중인 이슈 보기</a>
	</div>
	<h1 class="text-3xl font-bold mt-20 mx-3">❌ 입법 반대</h1>
	<div class="flex flex-wrap">
		{#each issuesDisagree as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {disagree.bgColor} {disagree.textColor} shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{issue.title}</h2>
						<p>{issue.summary}</p>
						<div class="flex justify-between my-5">
							<button
								on:click={() => clickDoneButton(issue._id)}
								class="btn btn-circle {issue['participants']?.includes(userId)
									? 'btn-success'
									: 'btn-error'}"
								>{#if issue['participants']?.includes(userId)}
									완료
								{:else}
									미참여
								{/if}</button
							>
							<a href={issue.link} target="_blank" class="btn">마감</a>
						</div>
						<div>
							<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
							{#if ADMIN_ID_LIST.includes(userId)}
								<a
									href="/admin0904/issues/{issue._id}"
									target="_blank"
									class="text-xs link link-primary">이슈 관리</a
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">✅ 입법 찬성</h1>
	<div class="flex flex-wrap">
		{#each issuesAgree as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {agree.bgColor} {agree.textColor} shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{issue.title}</h2>
						<p>{issue.summary}</p>
						<div class="flex justify-between my-5">
							<button
								on:click={() => clickDoneButton(issue._id)}
								class="btn btn-circle {issue['participants']?.includes(userId)
									? 'btn-success'
									: 'btn-error'}"
								>{#if issue['participants']?.includes(userId)}
									완료
								{:else}
									미참여
								{/if}</button
							>
							<a href={issue.link} target="_blank" class="btn">마감</a>
						</div>
						<div>
							<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
							{#if ADMIN_ID_LIST.includes(userId)}
								<a
									href="/admin0904/issues/{issue._id}"
									target="_blank"
									class="text-xs link link-primary">이슈 관리</a
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">🙆 국민동의청원</h1>
	<div class="flex flex-wrap">
		{#each issuesPetition as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {petition.bgColor} {petition.textColor} shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{issue.title}</h2>
						<p>{issue.summary}</p>
						<div class="flex justify-between my-5">
							<button
								on:click={() => clickDoneButton(issue._id)}
								class="btn btn-circle {issue['participants']?.includes(userId)
									? 'btn-success'
									: 'btn-error'}"
								>{#if issue['participants']?.includes(userId)}
									완료
								{:else}
									미참여
								{/if}</button
							>
							<a href={issue.link} target="_blank" class="btn">마감</a>
						</div>
						<div>
							<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
							{#if ADMIN_ID_LIST.includes(userId)}
								<a
									href="/admin0904/issues/{issue._id}"
									target="_blank"
									class="text-xs link link-primary">이슈 관리</a
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">🎤 설문</h1>
	<div class="flex flex-wrap">
		{#each issuesSurvey as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {survey.bgColor} {survey.textColor} shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{issue.title}</h2>
						<p>{issue.summary}</p>
						<div class="flex justify-between my-5">
							<button
								on:click={() => clickDoneButton(issue._id)}
								class="btn btn-circle {issue['participants']?.includes(userId)
									? 'btn-success'
									: 'btn-error'}"
								>{#if issue['participants']?.includes(userId)}
									완료
								{:else}
									미참여
								{/if}</button
							>
							<a href={issue.link} target="_blank" class="btn">마감</a>
						</div>
						<div>
							<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
							{#if ADMIN_ID_LIST.includes(userId)}
								<a
									href="/admin0904/issues/{issue._id}"
									target="_blank"
									class="text-xs link link-primary">이슈 관리</a
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">📑 서명</h1>
	<div class="flex flex-wrap">
		{#each issuesSignature as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {signature.bgColor} {signature.textColor} shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{issue.title}</h2>
						<p>{issue.summary}</p>
						<div class="flex justify-between my-5">
							<button
								on:click={() => clickDoneButton(issue._id)}
								class="btn btn-circle {issue['participants']?.includes(userId)
									? 'btn-success'
									: 'btn-error'}"
								>{#if issue['participants']?.includes(userId)}
									완료
								{:else}
									미참여
								{/if}</button
							>
							<a href={issue.link} target="_blank" class="btn">마감</a>
						</div>
						<div>
							<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
							{#if ADMIN_ID_LIST.includes(userId)}
								<a
									href="/admin0904/issues/{issue._id}"
									target="_blank"
									class="text-xs link link-primary">이슈 관리</a
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">📰 언론</h1>
	<div class="flex flex-wrap">
		{#each issuesPress as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {press.bgColor} {press.textColor} shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{issue.title}</h2>
						<p>{issue.summary}</p>
						<div class="flex justify-between my-5">
							<button
								on:click={() => clickDoneButton(issue._id)}
								class="btn btn-circle {issue['participants']?.includes(userId)
									? 'btn-success'
									: 'btn-error'}"
								>{#if issue['participants']?.includes(userId)}
									완료
								{:else}
									미참여
								{/if}</button
							>
							<a href={issue.link} target="_blank" class="btn">마감</a>
						</div>
						<div>
							<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
							{#if ADMIN_ID_LIST.includes(userId)}
								<a
									href="/admin0904/issues/{issue._id}"
									target="_blank"
									class="text-xs link link-primary">이슈 관리</a
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">🎸 기타</h1>
	<div class="flex flex-wrap">
		{#each issuesOther as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {other.bgColor} {other.textColor} shadow-xl">
					<div class="card-body">
						<h2 class="card-title">{issue.title}</h2>
						<p>{issue.summary}</p>
						<div class="flex justify-between my-5">
							<button
								on:click={() => clickDoneButton(issue._id)}
								class="btn btn-circle {issue['participants']?.includes(userId)
									? 'btn-success'
									: 'btn-error'}"
								>{#if issue['participants']?.includes(userId)}
									완료
								{:else}
									미참여
								{/if}</button
							>
							<a href={issue.link} target="_blank" class="btn">마감</a>
						</div>
						<div>
							<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
							{#if ADMIN_ID_LIST.includes(userId)}
								<a
									href="/admin0904/issues/{issue._id}"
									target="_blank"
									class="text-xs link link-primary">이슈 관리</a
								>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="text-center mt-20">
		<a href="/" class="link link-success">진행 중인 이슈 보기</a>
	</div>
	<p class="text-center text-gray-400 mt-10 text-sm">
		Managed by <span class="font-bold">공교육정상화 전략기획팀</span>
	</p>
</main>
<Footer />
