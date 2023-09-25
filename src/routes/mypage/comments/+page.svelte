<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { getMyComments, convertUTCtoUTC9, formatDate } from '$lib/utils/utils.js';
	import { onMount } from 'svelte';

	let comments = [];

	onMount(async () => {
		getPage();
	});

	async function getPage() {
		comments = await getMyComments();
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
				<th>작성일</th>
			</tr>
		</thead>
		<tbody>
			{#each comments as comment (comment._id)}
				<tr>
					<!-- <td>{issue._id}</td> -->
					<td>{feed.channel}</td>
					<td>
						<a href="/agora/my/{feed._id}" class="link link-primary">{feed.title}</a>
					</td>
					<td>{(convertUTCtoUTC9(feed.createdAt))}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- <Footer /> -->
