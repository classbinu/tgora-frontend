<script>
	import { onMount } from 'svelte';
	import { isLoggedInByAccessToken, getIpAddress } from '$lib/utils/utils';
	import { isLoggedIn, IP } from '$lib/store';

	onMount(async () => {
		const result = isLoggedInByAccessToken();
		isLoggedIn.set(result);
		IP.set(await getIpAddress());
	});
</script>

<slot />
