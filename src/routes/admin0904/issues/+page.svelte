<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate } from '$lib/utils/utils.js';
	export let data;
</script>

<Navbar />
<main class="container mx-auto">
	<h1 class="text-3xl font-bold mt-20 mx-3">🕹 이슈 관리</h1>
	<div class="text-right m-3">
		<a href="issues/register" class="btn btn-primary">이슈 등록</a>
	</div>
	<div class="overflow-x-auto m-3">
		<table class="table table-zebra text-center">
			<thead>
				<tr>
					<!-- <th>_id</th> -->
					<th>분류</th>
					<th>제목</th>
					<th>마감일</th>
					<th>참여인원</th>
					<th>생성일</th>
					<th>상태</th>
					<th>공지</th>
					<th>수정</th>
				</tr>
			</thead>
			<tbody>
				{#each data.issues as issue (issue._id)}
					<tr>
						<!-- <td>{issue._id}</td> -->
						<td>{issue.category}</td>
						<td>
							<a href={issue.link} target="_blank" class="link link-primary">{issue.title}</a>
						</td>
						<td>{formatDate(issue.dueDate)}</td>
						<td>{issue.participants.length.toLocaleString()}</td>
						<td>{formatDate(issue.createdAt)}</td>
						<td>{issue.isPublic}</td>
						<td>{issue.isNotice ? '🔥' : ''}</td>
						<td><a href="issues/{issue._id}" class="btn btn-primary btn-xs">수정</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>
<Footer />
