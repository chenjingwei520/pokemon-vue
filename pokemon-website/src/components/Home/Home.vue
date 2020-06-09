<template>
	<div id="home">
		<Layout style="background-color: #FFFFFF;">
			<Header style="background-color: #FFFFFF;line-height: 0px; padding: 0px;">
				<Nav />
			</Header>
			<Content>
				<div class="pokemon-carousel">
					<CarouselPk></CarouselPk>
				</div>
				<div class="content-main">
					<BannerList></BannerList>
					<CardList></CardList>
				</div>
			</Content>
			<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
		</Layout>


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

</style>
