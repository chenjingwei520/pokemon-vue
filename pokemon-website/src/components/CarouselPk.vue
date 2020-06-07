<template>
	<Carousel v-model="value" loop :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed">
		<CarouselItem>
			<div class="demo-carousel"><img src="../assets/carousel1.jpg" alt=""></div>
		</CarouselItem>
		<CarouselItem>
			<div class="demo-carousel"><img src="../assets/carousel2.jpg" alt=""></div>
		</CarouselItem>
		<CarouselItem>
			<div class="demo-carousel"><img src="../assets/carousel3.jpg" alt=""></div>
		</CarouselItem>
		<CarouselItem>
			<div class="demo-carousel"><img src="../assets/carousel4.jpg" alt=""></div>
		</CarouselItem>
		<CarouselItem>
			<div class="demo-carousel"><img src="../assets/carousel5.jpg" alt=""></div>
		</CarouselItem>
	</Carousel>
</template>
<script>
	export default {
		name: 'CarouselPk',
		data() {
			return {
				value: 0,
				setting: {
					autoplay: true,
					autoplaySpeed: 4000,
				}
			}
		}
	}
</script>
<style>
	.demo-carousel img {
		width: 100%;
	}
</style>
