<script>
	import Carousel from '../lib/components/Carousel.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import IssueCard from '../lib/components/IssueCard.svelte';
	import Navbar from '../lib/components/Navbar.svelte';
	import { formatDate } from '$lib/utils/utils.js';
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
		bgColor: 'bg-yellow-400',
		textColor: ''
	};
	const agree = {
		bgColor: 'bg-green-400',
		textColor: ''
	};
	const disagree = {
		bgColor: 'bg-red-400',
		textColor: ''
	};
	const petition = {
		bgColor: 'bg-teal-400',
		textColor: ''
	};
	const survey = {
		bgColor: 'bg-purple-400',
		textColor: ''
	};
	const signature = {
		bgColor: 'bg-orange-400',
		textColor: ''
	};
	const press = {
		bgColor: 'bg-gray-400',
		textColor: ''
	};
	const other = {
		bgColor: 'bg-white',
		textColor: ''
	};
</script>

<Navbar />
<Carousel />
<main class="container mx-auto">
	<!-- <h1 class="text-3xl font-bold mt-20 mx-3">🔥 화력집중</h1>
	<div class="flex flex-wrap">
		{#each data.issues as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={fire.bgColor} textColor={fire.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
			</IssueCard>
		{/each}
	</div> -->

	<h1 class="text-3xl font-bold mt-20 mx-3">✅ 입법 찬성</h1>
	<div class="flex flex-wrap">
		{#each issuesAgree as issue (issue._id)}
			<IssueCard key={issue._id} bgColor={agree.bgColor} textColor={agree.textColor}>
				<span slot="title">{issue.title}</span>
				<span slot="summary">{issue.summary}</span>
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
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
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
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
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
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
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
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
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
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
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
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
				<a slot="button" href={issue.link} target="_blank" class="btn">참여하기</a>
				<span slot="dueDate" class="text-xs">{formatDate(issue.dueDate)}</span>
			</IssueCard>
		{/each}
	</div>
</main>
<Footer />
