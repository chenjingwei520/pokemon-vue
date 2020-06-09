<template>
	<div id="banner-list">
		<div class="banner-list-left">
			<a href="">
				<img src="../assets/banner_rigel_PC.jpg" class="hidden-xs" alt="">
				<!-- <img src="../assets/banner_rigel_SP.jpg" class="visible-xs" alt=""> -->
			</a>
		</div>
		<div class="banner-list-right">
			<a href="">
				<img src="../assets/banner_orion.jpg" alt="">
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'BannerList',
	}
</script>

<style>
	#banner-list {
		max-width: 1320px;
		width: 100%;
		margin: 0 auto 20px;
		/* padding: 0 20px; */
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}

	.banner-list-left,
	.banner-list-right {
		width: 49.5%;
		background: #fff;
	}

	#banner-list img {
		width: 100%;
		border-radius: 3px;
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
	}

	@media screen and (max-width: 767px) {
		.banner-list {
			padding: 0 15px;
			margin-bottom: 0;
		}
	}
</style>
