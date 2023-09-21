<script>
	import { onMount } from 'svelte';
	import { isLoggedInByAccessToken } from '$lib/utils/utils';
	import { isLoggedIn } from '$lib/store';

	onMount(() => {
		const result = isLoggedInByAccessToken();
		isLoggedIn.set(result);
	});
</script>

<slot />
