<div class="p-2 w-full lg:w-96">
	<div class="card shadow-xl">
		<div class="card-body">
			<h2 class="card-title"><slot name="title"><span>title</span></slot></h2>
			<p><slot name="summary"><span>content</span></slot></p>
			<div class="card-actions justify-end">
				<slot name="button"><a href="/" target="_blank" class="btn">댓글달기</a></slot>
			</div>
			<p>
				<span class="text-xs">작성일 </span><slot name="createdAt"
					><span class="text-xs">0000-00-00</span></slot
				>
			</p>
		</div>
	</div>
</div>
