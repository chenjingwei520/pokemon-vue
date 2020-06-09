<template>
	<div id="home">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<Nav />
		<div class="pokemon-carousel">
			<CarouselPk></CarouselPk>
		</div>
		<div class="content-main">
			<BannerList></BannerList>
			<CardList></CardList>
		</div>
	
		<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
	</div>
</template>

<script>
	import Nav from '../Nav.vue'
	import CarouselPk from '../CarouselPk.vue'
	import BannerList from '../BannerList.vue'
	import CardList from '../CardList/CardList.vue'
	
	export default {
		name: 'Home',
		components: {
			Nav,
			CarouselPk,
			BannerList,
			CardList
		}
	}
</script>

<style>
	.pokemon-carousel {
		max-width: 1320px;
		min-width: 1090px;
		margin: 0 auto;
	}
	
	
	
	.ivu-layout-footer {
		max-width: 1320px;
		min-width: 1090px;
		margin: 0 auto;
	}
</style>
