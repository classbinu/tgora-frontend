<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { getMyComments, convertUTCtoUTC9, formatDate, formatRelativeTime } from '$lib/utils/utils.js';
	import { onMount } from 'svelte';

	let comments = [];

	onMount(async () => {
		getPage();
	});

	async function getPage() {
		comments = await getMyComments();
	}

	const maxLength = 20;
	function limitContentLength(text, maxLength) {
		if (text.length > maxLength) {
			return text.slice(0, maxLength) + '...';
		}
		return text;
	}

</script>

<Navbar />
<div class="overflow-x-auto m-3 w-full lg:w-1/2 mx-auto">
	<table class="table table-zebra text-center">
		<thead>
			<tr>
				<th>채널</th>
				<th>내용</th>
				<th>작성일</th>
			</tr>
		</thead>
		<tbody>
			{#each comments as comment (comment._id)}
				<tr>
					<td>{comment.feedId.channel}</td>
					<td>
						<a href="/agora/my/{comment.feedId._id}" class="link link-primary">{limitContentLength(comment.content, maxLength)}</a>
					</td>
					<td>{formatRelativeTime(comment.createdAt)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- <Footer /> -->
