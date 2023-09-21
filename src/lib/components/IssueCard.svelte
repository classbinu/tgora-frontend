<script>
	export let bgColor = '';
	export let textColor = '';
	let classes = `card ${bgColor} ${textColor} shadow-xl`;
</script>

<div class="p-2 w-full lg:w-96">
	<div class={classes}>
		<div class="card-body">
			<p><slot name="ckeckButton" /></p>
			<h2 class="card-title"><slot name="title" /></h2>
			<p><slot name="summary" /></p>
			<div class="card-actions justify-between">
				<slot name="state" />
				<slot name="button" />
			</div>
			<p>
				<span class="text-xs">마감일 </span><slot name="dueDate" />
			</p>
		</div>
	</div>
</div>
