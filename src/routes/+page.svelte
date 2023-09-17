<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import IssueCard from '$lib/components/IssueCard.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import ShareButton from '$lib/components/ShareButton.svelte';
	import { formatDate } from '$lib/utils/utils.js';
	import { onMount } from 'svelte';
	export let data;

	const issues = data.issues;
	const issuesRecently = [];
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

	const DAYS = 1;
	const recentIssuesBaselineDate = new Date();
	recentIssuesBaselineDate.setDate(recentIssuesBaselineDate.getDate() - DAYS);

	for (const issue of issues) {
		const createdAtDate = new Date(issue.createdAt);

		if (createdAtDate >= recentIssuesBaselineDate) {
			issuesRecently.push(issue);
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
</script>

<Navbar />
<Carousel />
<main class="container mx-auto">
	<h1 class="text-2xl font-bold my-5 text-center text-success m-3">
		공교육 정상화를 위해 T-아고라를 주변 선생님에게 공유해 주세요 🙏
	</h1>
	<div class="text-center">
		<ShareButton />
	</div>
	<h1 class="text-3xl font-bold mt-20 mx-3">🔥 화력집중 (최근 등록 이슈)</h1>
	<div class="flex flex-wrap">
		{#each issuesRecently as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={fire.bgColor} textColor={fire.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">❌ 입법 반대</h1>
	<div class="flex flex-wrap">
		{#each issuesDisagree as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={disagree.bgColor} textColor={disagree.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">✅ 입법 찬성</h1>
	<div class="flex flex-wrap">
		{#each issuesAgree as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={agree.bgColor} textColor={agree.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">🙆 국민동의청원</h1>
	<div class="flex flex-wrap">
		{#each issuesPetition as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={petition.bgColor} textColor={petition.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">🎤 설문</h1>
	<div class="flex flex-wrap">
		{#each issuesSurvey as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={survey.bgColor} textColor={survey.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">📑 서명</h1>
	<div class="flex flex-wrap">
		{#each issuesSignature as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={signature.bgColor} textColor={signature.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">📰 언론</h1>
	<div class="flex flex-wrap">
		{#each issuesPress as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={press.bgColor} textColor={press.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>

	<h1 class="text-3xl font-bold mt-20 mx-3">🎸 기타</h1>
	<div class="flex flex-wrap">
		{#each issuesOther as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={other.bgColor} textColor={other.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn bg-white">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>
	<div class="text-center mt-20">
		<a href="/issues/closed" class="link link-error">마감된 이슈 보기</a>
	</div>
</main>
<Footer />
