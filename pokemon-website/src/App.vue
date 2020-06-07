<template>
	<div id="app">
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
	import Nav from './components/Nav.vue'
	import CarouselPk from './components/CarouselPk.vue'
	import BannerList from './components/BannerList.vue'
	import CardList from './components/CardList/CardList.vue'


	export default {
		name: 'App',
		components: {
			Nav,
			CarouselPk,
			BannerList,
			CardList
		}
	}
</script>

<style>
	#app {}

	body,
	div,
	ul,
	li {
		padding: 0;
		margin: 0;
	}

	*,
	::after,
	::before {
		box-sizing: border-box;
	}

	.pokemon-carousel {
		max-width: 1320px;
		min-width: 1090px;
		margin: 0 auto;
	}

	.content-main {
		max-width: 1320px;
		min-width: 1090px;
		margin: 0 auto;
		padding: 60px 0 0 0;
		/* margin-bottom: 60px; */
		width: 100%;
	}

	@media screen and (max-width: 767px) body {
		font-size: 1.4rem;
		min-width: 320px;
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.ivu-layout-footer {
		max-width: 1320px;
		min-width: 1090px;
		margin: 0 auto;
	}
</style>
