<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import { formatDate, checkIssueDone } from '$lib/utils/utils.js';
	import { USER_ID, API_URL, isLoggedIn } from '$lib/store';

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
	let issuesRecently = [];
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

	// const DAYS = 3;
	// const recentIssuesBaselineDate = new Date();
	// recentIssuesBaselineDate.setDate(recentIssuesBaselineDate.getDate() - DAYS);

	// for (const issue of issues) {
	// 	const createdAtDate = new Date(issue.createdAt);

	// 	if (createdAtDate >= recentIssuesBaselineDate) {
	// 		issuesRecently.push(issue);
	// 	}
	// }

	const sortedIssues = data.issues.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	issuesRecently = sortedIssues.slice(0, 4);

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
	<h1 class="text-xl font-bold my-5 text-center text-success m-3">
		권리 위에 잠자는 자는 보호받지 못합니다<br />T-아고라를 주변 선생님에게 공유해 주세요 🙇
	</h1>
	<div class="text-center">
		<ShareButton />
	</div>
	<h1 class="text-xl font-bold text-primary mt-20 mx-3">'미참여'를 눌러 참여 여부를 관리할 수 있어요 🎉</h1>
	<h1 class="text-3xl font-bold mx-3">🔥 화력집중 (최근 등록 이슈)</h1>
	<div class="flex flex-wrap">
		{#each issuesRecently as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {fire.bgColor} {fire.textColor} shadow-xl">
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
					</div>
				</div>
			</div>
		{/each}
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
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
							<a href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
						</div>
						<span class="text-xs">마감일 {formatDate(issue.dueDate)}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="text-center mt-20">
		<a href="/issues/closed" class="link link-error">마감된 이슈 보기</a>
	</div>
</main>
<Footer />
