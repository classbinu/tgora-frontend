<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { getMyFeeds, convertUTCtoUTC9 } from '$lib/utils/utils.js';
	import { onMount } from 'svelte';

	let feeds = [];

	onMount(async () => {
		getPage();
	});

	async function getPage() {
		// feeds = await getMyFeeds();
	}
</script>

<Navbar />
<div class="overflow-x-auto m-3 w-full lg:w-1/2 mx-auto">
	<table class="table table-zebra text-center">
		<thead>
			<tr>
				<!-- <th>_id</th> -->
				<th>채널</th>
				<th>제목</th>
				<th>좋아요</th>
				<th>댓글</th>
				<th>작성일</th>
			</tr>
		</thead>
		<tbody>
			{#each feeds as feed (feed._id)}
				<tr>
					<!-- <td>{issue._id}</td> -->
					<td>{feed.channel}</td>
					<td>
						<a href="/agora/my/{feed._id}" class="link link-primary">{feed.title}</a>
					</td>
					<td>{feed.likes.length.toLocaleString()}</td>
					<td>{feed.comments.length.toLocaleString()}</td>
					<td>{convertUTCtoUTC9(feed.createdAt)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- <Footer /> -->
