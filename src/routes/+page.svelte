<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import {
		formatDate,
		checkIssueDone,
		getMyParticipatedIssuesCount,
		isLoggedInByAccessToken
	} from '$lib/utils/utils.js';
	import { USER_ID, API_URL, isLoggedIn } from '$lib/store';
	import { onMount } from 'svelte';
	import InviteBanner from '$lib/components/ads/InviteBanner.svelte';
	import NoIssues from '$lib/components/NoIssues.svelte';

	const ADMIN_ID_LIST = [
		'650bde9f1dbfaf21e04ee69d', // admin
		'650eb76ac2d7e7d6bf4889a0', // admin2
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

	let participants = 0;
	const targetCount = data.participants;
	let animationInterval;

	const increaseCount = () => {
		participants += parseInt(targetCount / 40);
		if (participants >= targetCount) {
			participants = targetCount;
			clearInterval(animationInterval);
		}
	};

	let totalIssueCount = 0;
	let participatedIssuesCount = 0;
	let myRank = 0;
	onMount(async () => {
		animationInterval = setInterval(increaseCount, 20);
		getPage();
	});

	async function getPage() {
		if (await isLoggedInByAccessToken()) {
			const data = await getMyParticipatedIssuesCount();
			totalIssueCount = data.totalIssueCount;
			participatedIssuesCount = data.participatedIssuesCount;
			myRank = calculateRank(totalIssueCount, participatedIssuesCount);
		}
	}

	function calculateRank(total, count) {
		const ratio = count / total;

		if (count === 0) {
			myRank = 100;
		} else {
			const result = (100 - (count / total) * 100) * (1 - ratio);
			myRank = result.toFixed(2);
		}
		return myRank;
	}

	async function copyMyRank() {
		const message = `교육 이슈 쉽게 참여하기 tgora.kr 🔥

선생님께서 참여하신 이슈는 ${participatedIssuesCount}건으로
T-아고라 상위 ${myRank}%입니다.⭐️`;
		await navigator.clipboard.writeText(message);
		return alert(`활동이 클립보드에 복사되었어요.`);
	}

	const issues = data.issues;
	let isNotice = [];
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

	// 공지: 등록일 기준
	// const DAYS = 3;
	// const recentIssuesBaselineDate = new Date();
	// recentIssuesBaselineDate.setDate(recentIssuesBaselineDate.getDate() - DAYS);

	// for (const issue of issues) {
	// 	const createdAtDate = new Date(issue.createdAt);

	// 	if (createdAtDate >= recentIssuesBaselineDate) {
	// 		isNotice.push(issue);
	// 	}
	// }

	// 공지: 마감일 기준
	// const sortedIssues = data.issues.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	// isNotice = sortedIssues.slice(0, 4);

	// 공지: 공지 체크 기준
	for (const issue of issues) {
		if (issue.isNotice) {
			isNotice.push(issue);
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
			Swal.fire({
				title: '이슈에 참여하셨나요?',
				html: '이 기능은 참여 여부를 관리하기 위한 용도입니다.<br>이 버튼만으로 이슈에 참여되지 않습니다.<br>참여하기 버튼으로 참여 후 체크해 주세요.',
				confirmButtonText: '이슈 참여 상태를 변경할게요',
				showDenyButton: true,
				denyButtonText: `취소`
			}).then(async (result) => {
				if (result.isConfirmed) {
					await checkIssueDone(issueId);
					// 로컬에서는 빠른데 실서버에서는 2~3초 걸림. 최대 5초 딜레이 설정.
					Swal.fire({
						icon: 'success',
						title: '이슈 참여 상태를 변경하고 있어요',
						showConfirmButton: false,
						timer: 5000
					});
					location.reload();
				} else if (result.isDenied) {
					Swal.fire({
						icon: 'error',
						title: '이슈 참여 상태 변경이 취소되었어요',
						html: '아직 이슈에 참여하지 않았다면<br>카드 오른쪽 참여하기 버튼으로<br>이슈에 참여해 주세요.',
						showConfirmButton: true,
						// timer: 3000
					});
				}
			});
		} else {
			return alert('로그인을 하면 참여 여부를 관리할 수 있어요.');
		}
	}
</script>

<!-- <InviteBanner /> -->
<Navbar />
<Carousel />
<div class="text-center">
	<ShareButton />
</div>
<main class="container mx-auto">
	<h1 class="text-xl font-bold mx-1 my-5 text-center text-gray-500">
		T-아고라를 통해 참여 완료된 이슈
	</h1>
	<p class="text-center text-6xl text-primary font-bold">
		{participants.toLocaleString()}
	</p>
	<div class="text-center mt-5 text-secondary font-bold">
		{#if isLoggedInCheck}
			<p>
				선생님께서 참여하신 이슈는 {participatedIssuesCount}건으로
				<br />
				T-아고라 상위 {myRank}%입니다.
			</p>
			<button class="btn bg-yellow-300 mt-3" on:click={copyMyRank}>내 활동 공유하기 🔥</button>
		{:else}
			<p>
				로그인 후 참여한 이슈만 집계됩니다.
				<br />
				<br />
			</p>
			<button
				class="btn bg-yellow-300 mt-3"
				disabled="disabled"
				on:click={() => alert('로그인을 하면 내 활동을 공유할 수 있어요.')}
				>내 활동 공유하기 🔥</button
			>
		{/if}
	</div>
	<h1 class="text-center text-xl font-bold text-primary mt-20 mx-3">
		'미참여'를 눌러 참여 여부를 관리할 수 있어요
	</h1>
	<h1 class="text-3xl font-bold mx-3">🔥 화력집중(중요)</h1>
	<div class="flex flex-wrap">
		{#if issuesPress.length === 0}
			<isNotice />
		{/if}
		{#each isNotice as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {fire.bgColor} {fire.textColor} shadow-xl">
					<div class="card-body">
						<div
							class="badge {issue.category === '입법 반대'
								? 'bg-red-300'
								: issue.category === '입법 찬성'
								? 'bg-green-300'
								: issue.category === '국민동의청원'
								? 'bg-teal-300'
								: issue.category === '설문'
								? 'bg-purple-300'
								: issue.category === '서명'
								? 'bg-orange-300'
								: issue.category === '언론'
								? 'bg-gray-300'
								: issue.category === '기타'
								? 'bg-indigo-300'
								: ''}"
						>
							{issue.category}
						</div>
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

	<h1 class="text-3xl font-bold mt-20 mx-3">❌ 입법 반대</h1>
	<div class="flex flex-wrap">
		{#if issuesDisagree.length === 0}
			<NoIssues />
		{/if}
		{#each issuesDisagree as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {disagree.bgColor} {disagree.textColor} shadow-xl">
					<div class="card-body">
						<div class="badge bg-red-300">{issue.category}</div>
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
		{#if issuesAgree.length === 0}
			<NoIssues />
		{/if}
		{#each issuesAgree as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {agree.bgColor} {agree.textColor} shadow-xl">
					<div class="card-body">
						<div class="badge bg-green-300">{issue.category}</div>
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
		{#if issuesPetition.length === 0}
			<NoIssues />
		{/if}
		{#each issuesPetition as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {petition.bgColor} {petition.textColor} shadow-xl">
					<div class="card-body">
						<div class="badge bg-teal-300">{issue.category}</div>
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
		{#if issuesSurvey.length === 0}
			<NoIssues />
		{/if}
		{#each issuesSurvey as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {survey.bgColor} {survey.textColor} shadow-xl">
					<div class="card-body">
						<div class="badge bg-purple-300">{issue.category}</div>
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
		{#if issuesSignature.length === 0}
			<NoIssues />
		{/if}
		{#each issuesSignature as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {signature.bgColor} {signature.textColor} shadow-xl">
					<div class="card-body">
						<div class="badge bg-orange-300">{issue.category}</div>
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
		{#if issuesPress.length === 0}
			<NoIssues />
		{/if}
		{#each issuesPress as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {press.bgColor} {press.textColor} shadow-xl">
					<div class="card-body">
						<div class="badge bg-gray-300">{issue.category}</div>
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
		{#if issuesOther.length === 0}
			<NoIssues />
		{/if}
		{#each issuesOther as issue (issue._id)}
			<div class="p-2 w-full lg:w-96">
				<div class="card {other.bgColor} {other.textColor} shadow-xl">
					<div class="card-body">
						<div class="badge bg-indigo-300">{issue.category}</div>
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
		<a href="/issues/closed" class="link link-error">마감된 이슈 보기</a>
	</div>
	<p class="text-center text-gray-400 mt-10 text-sm">
		Managed by <span class="font-bold">검은점 초등교사</span>
	</p>
</main>
<Footer />
