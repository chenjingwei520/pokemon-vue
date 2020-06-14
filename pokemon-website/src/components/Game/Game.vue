<template>
	<div id="game">
		<Layout>
			<Header>
				<Nav></Nav>
			</Header>
			<Content style="margin-bottom: 60px;">
				<div class="pokemon-carousel game">
					<CarouselPk></CarouselPk>
				</div>
				<div class="content-main">
					<BannerList></BannerList>
					<CardList :card_list="card_list"></CardList>
					<div class="button-block page-home__main--button">
						<router-link to="/" class="button">
							<span>浏览更多游戏相关最新信息</span>
						</router-link>
					</div>
					<div class="page-content">
						<h2 class="heading-l">游戏列表</h2>
						<div class="series-content">
							<ul class="series-list">
								<li class="serie-item" v-for="(item, index) in items" :key="index">
									<a href="/">
										<Card :type="item.type" :hidden_header="item.isHidden" :img_src="item.src" :title="item.title"></Card>
									</a>
								</li>
							</ul>
						</div>
					</div>
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
	import Card from '../CardList/Card.vue'
	export default {
		name: 'Game',
		components: {
			Nav,
			CarouselPk,
			BannerList,
			CardList,
			Card
		},
		data() {
			return {
				card_list: [{
						title: 'Dear players of the English Pokémon Trading Card Game and Pokémon Sword and Shield in Asia',
						src: require('../../assets/game_zx1.jpg'),
						type: 'game',
						isHidden: true
					},
					{
						title: '智慧型手機版更新公告（ver1.1.0）',
						src: require('../../assets/game_zx2.jpg'),
						type: 'game',
						isHidden: true
					},
					{
						title: '用Google智慧鏡頭來瞧瞧『寶可夢劍/盾』吧！',
						src: require('../../assets/game_zx3.jpg'),
						type: 'game',
						isHidden: true
					},
					{
						title: '「Pokémon GREAT STORY」公開！',
						src: require('../../assets/game_zx4.png'),
						type: 'game',
						isHidden: true
					},
				],
				items: [{
						title: 'Pokémon HOME',
						src: require('../../assets/game1.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: '『寶可夢 劍』『寶可夢 盾』',
						src: require('../../assets/game2.png'),
						isHidden: true,
						type: 'game'
					},
					{
						title: '寶可夢探險尋寶',
						src: require('../../assets/game3.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: "『精靈寶可夢 Let's Go！皮卡丘』、『精靈寶可夢 Let's Go！伊布』",
						src: require('../../assets/game4.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: '名探偵ピカチュウ',
						src: require('../../assets/game5.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: 'ポケットモンスター クリスタルバージョン',
						src: require('../../assets/game6.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: 'Pokémon Ultra Sun and Pokémon Ultra Moon',
						src: require('../../assets/game7.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: 'Pokémon Gold Version and Pokémon Silver Version',
						src: require('../../assets/game8.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: 'Pokémon Sun and Pokémon Moon',
						src: require('../../assets/game9.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: 'Pokémon Red Version and Pokémon Blue Version',
						src: require('../../assets/game10.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: 'Pokémon Yellow Special Pikachu Edition',
						src: require('../../assets/game11.jpg'),
						isHidden: true,
						type: 'game'
					},
					{
						title: 'Pokémon X and Pokémon Y',
						src: require('../../assets/game12.jpg'),
						isHidden: true,
						type: 'game'
					}
				]
			}
		}
	}
</script>

<style>
	.game {
		border-bottom-color: #f44336;
		border-bottom-width: 4px;
		border-bottom-style: solid;
		background: rgba(191, 191, 191, 0.1);
		text-align: center;
	}
</style>
