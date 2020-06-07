<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<Nav />
		<div class="pokemon-carousel">
			<CarouselPk></CarouselPk>
		</div>
	</div>
</template>

<script>
	import Nav from './components/Nav.vue'
	import CarouselPk from './components/CarouselPk.vue'

	export default {
		name: 'App',
		components: {
			Nav,
			CarouselPk
		}
	}
</script>

<style>
	#app {
		/* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
	}

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
</style>
