<script>
	import { onMount } from 'svelte';
	import { USER_ID, isLoggedIn } from '$lib/store';
	import { isLoggedInByAccessToken } from '$lib/utils/utils';
	import { goto } from '$app/navigation';

	onMount(() => {
		let userId;
		USER_ID.subscribe((value) => {
			userId = value;
		});

		const result = isLoggedInByAccessToken();
		isLoggedIn.set(result);

		const ADMIN_ID_LIST = [
			'650bde9f1dbfaf21e04ee69d', // admin
			'650eb76ac2d7e7d6bf4889a0', // admin2
			'650be13ab1691d9dd4a42e31' // classbinu
		];

		if (!ADMIN_ID_LIST.includes(userId)) {
			console.log(userId);
			alert('승인되지 않은 접근입니다. 관리자에게 로그가 통보되었습니다.');
			goto('/');
		}
	});
</script>

<slot />
