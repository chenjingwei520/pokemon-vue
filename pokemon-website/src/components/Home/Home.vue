<template>
	<div id="home">
		<Layout style="background-color: #FFFFFF;">
			<Header style="background-color: #FFFFFF;line-height: 0px; padding: 0px;">
				<Nav />
			</Header>
			<Content>
				<div class="pokemon-carousel">
					<CarouselPk :imgArray="imgArray"></CarouselPk>
				</div>
				<div class="content-main">
					<BannerList></BannerList>
					<CardList :card_list="card_list"></CardList>
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
		},
		data() {
			return {
				imgArray: [
					require('../../assets/carousel1.jpg'),
					require('../../assets/carousel2.jpg'),
					require('../../assets/carousel3.jpg'),
					require('../../assets/carousel4.jpg'),
					require('../../assets/carousel5.jpg')
				],
				card_list: [{
						title: 'Dear players of the English Pokémon Trading Card Game and Pokémon Sword and Shield in Asia',
						src: require('../../assets/game_zx1.jpg'),
						type: 'game',
						isHidden: false
					},
					{
						title: '智慧型手機版更新公告（ver1.1.0）',
						src: require('../../assets/game_zx2.jpg'),
						type: 'game',
						isHidden: false
					},
					{
						title: '【精灵宝可梦圣诞企划 皮卡丘大量出没黄埔天地】',
						src: require('../../assets/zixun1.jpg'),
						type: 'movie',
						isHidden: false
					},
					{
						title: '【《剧场版 精灵宝可梦 我们的故事》优先场 现正预售】',
						src: require('../../assets/zixun2.jpg'),
						type: 'movie',
						isHidden: false
					},
					{
						title: '【独家限定！《剧场版 精灵宝可梦 我们的故事》邮票小版张+电影戏票 套装即日开卖！】',
						src: require('../../assets/zixun3.jpg'),
						type: 'movie',
						isHidden: false
					},
					{
						title: '【《剧场版 精灵宝可梦 我们的故事》填色比赛】',
						src: require('../../assets/zixun4.jpg'),
						type: 'movie',
						isHidden: false
					},
					{
						title: 'Pokémon x LeSportsac聊乘系列 展开历险之旅',
						src: require('../../assets/goods1.jpg'),
						type: 'goods',
						isHidden: false
					},
					{
						title: '"電屬性"寶可夢 閃電造型項鍊登場！',
						src: require('../../assets/goods2.jpg'),
						type: 'goods',
						isHidden: false
					},
				],
			}
		}
	}
</script>

<style>
	@media screen and (min-width: 768px){
		.pokemon-carousel {
			max-width: 1320px;
			min-width: 1090px;
			margin: 0 auto;
		}
	}
	
</style>
