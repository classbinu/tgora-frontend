<script>
	import { onMount } from 'svelte';
	import { isLoggedInByAccessToken, getIpAddress } from '$lib/utils/utils';
	import { isLoggedIn, IP } from '$lib/store';

	onMount(async () => {
		const result = await isLoggedInByAccessToken();
		isLoggedIn.set(result);
		const ip = await getIpAddress();
		IP.set(ip);
	});
</script>

<slot />
