<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { formatDate } from '$lib/utils/utils.js';
</script>

<Navbar />
<main class="container mx-auto">
  <h1 class="text-3xl font-bold mt-20 mx-3 mb-10">🕹 ADMIN DASHBOARD</h1>
  <div class="mx-3">
    <a href="/admin0904/issues" class="btn btn-lg btn-primary">이슈관리</a>
  </div>
</main>
<!-- <Footer /> -->
