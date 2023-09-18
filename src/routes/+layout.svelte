<script>
	import { onMount } from 'svelte';
	import { isAccessTokenValid } from '$lib/utils/utils';
	import { isLoggedIn } from '$lib/store';

	onMount(() => {
		const result = isAccessTokenValid();
		isLoggedIn.set(result);
	});
</script>

<slot />
