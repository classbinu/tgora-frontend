<script>
	const bannerList = [
		{
			url: 'https://www.kftu.net/',
			alt: '교사노동조합연맹',
			img: '/kftu_banner.png'
		},
		{
			url: 'https://padlet.com/Rysery/1-iy536ucbyexos5r9',
			alt: '공교육 정상화 전략기획팀',
			img: '/save_teachers_banner.png'
		},
		{
			url: 'https://padlet.com/Rysery/1-iy536ucbyexos5r9',
			alt: '공교육 정상화 전략기획팀',
			img: '/save_teachers_banner.png'
		}
	];

	const randomIndex = Math.floor(Math.random() * bannerList.length);
	const selectedBanner = bannerList[randomIndex];
</script>

<div class="lg:w-1/2 mx-auto">
	<a href={selectedBanner.url} target="_blank">
		<img src={selectedBanner.img} alt={selectedBanner.alt} class="card" />
	</a>
</div>
