<script>
	export let bgColor = '';
	export let textColor = '';
	let classes = `card ${bgColor} ${textColor} shadow-xl`;
</script>

<div class="p-2 w-full lg:w-96">
	<div class={classes}>
		<div class="card-body">
			<h2 class="card-title"><slot name="title"><span>title</span></slot></h2>
			<p><slot name="summary"><span>summary</span></slot></p>
			<div class="card-actions justify-end">
				<slot name="button"><a href="/" target="_blank" class="btn">참여하기</a></slot>
			</div>
			<p><span class="text-xs">마감일 </span><slot name="dueDate"><span class="text-xs">0000-00-00</span></slot></p>
		</div>
	</div>
</div>
