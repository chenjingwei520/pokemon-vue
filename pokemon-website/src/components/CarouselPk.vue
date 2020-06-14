<template>
	<Carousel v-model="value" loop :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed">
		<CarouselItem v-for="img in imgArray" :key="img">
			<div class="demo-carousel"><img :src="img" alt=""></div>
		</CarouselItem>
	</Carousel>
</template>
<script>
	export default {
		props: {
			imgArray: Array
		},
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
