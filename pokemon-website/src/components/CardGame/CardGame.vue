<template>
	<div id="cardgame">
		<Layout>
			<Header>
				<Nav></Nav>
			</Header>
			<Content style="margin-bottom: 60px;">
				<div class="pokemon-carousel cardgame">
					<CarouselPk :imgArray="imgArray"></CarouselPk>
				</div>
				<div class="content-main">
					<div class="page-content">
						<h2 class="heading-l">剑&盾</h2>
						<div class="series-content">
							<ul class="series-list">
								<li class="serie-item" v-for="(item, index) in items1" :key="index">
									<a href="/">
										<Card :type="item.type" :hidden_header="item.isHidden" :img_src="item.src" :title="item.title"></Card>
									</a>
								</li>
							</ul>
						</div>
						<h2 class="heading-l">传说交锋</h2>
						<div class="series-content">
							<ul class="series-list">
								<li class="serie-item" v-for="(item, index) in items2" :key="index">
									<a href="/">
										<Card :type="item.type" :hidden_header="item.isHidden" :img_src="item.src" :title="item.title"></Card>
									</a>
								</li>
							</ul>
						</div>
						<h2 class="heading-l">双倍暴击</h2>
						<div class="series-content">
							<ul class="series-list">
								<li class="serie-item" v-for="(item, index) in items3" :key="index">
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
	import Card from '../CardList/Card.vue'
	export default {
		name: 'CardGame',
		components: {
			Nav,
			CarouselPk,
			Card
		},
		data() {
			return {
				imgArray: [
					require('../../assets/carousel6.jpg'),
					require('../../assets/carousel7.png'),
					require('../../assets/carousel8.jpg'),
					require('../../assets/carousel9.jpg'),
					require('../../assets/carousel10.jpg')
				],
				items1: [{
						title: 'V起始牌組「劍&盾」',
						src: require('../../assets/cardGame1.png'),
						isHidden: true,
						type: 'cardGame'
					},
					{
						title: '擴充包「劍&盾」SET A',
						src: require('../../assets/cardGame2.png'),
						isHidden: true,
						type: 'cardGame'
					},
					{
						title: '擴充包「劍&盾」SET B',
						src: require('../../assets/cardGame3.png'),
						isHidden: true,
						type: 'cardGame'
					}
				],
				items2: [{
						title: 'V起始牌組「劍&盾」',
						src: require('../../assets/cardGame4.png'),
						isHidden: true,
						type: 'cardGame'
					},
					{
						title: '擴充包「劍&盾」SET A',
						src: require('../../assets/cardGame5.png'),
						isHidden: true,
						type: 'cardGame'
					},
					{
						title: '擴充包「劍&盾」SET B',
						src: require('../../assets/cardGame6.png'),
						isHidden: true,
						type: 'cardGame'
					}
				],
				items3: [{
						title: 'V起始牌組「劍&盾」',
						src: require('../../assets/cardGame7.png'),
						isHidden: true,
						type: 'cardGame'
					},
					{
						title: '擴充包「劍&盾」SET A',
						src: require('../../assets/cardGame8.png'),
						isHidden: true,
						type: 'cardGame'
					},
					{
						title: '擴充包「劍&盾」SET B',
						src: require('../../assets/cardGame9.png'),
						isHidden: true,
						type: 'cardGame'
					}
				]
			}
		}
	}
</script>

<style>
	.cardgame {
		border-bottom-color: #3f51b5;
		border-bottom-width: 4px;
		border-bottom-style: solid;
		background: rgba(191, 191, 191, 0.1);
		text-align: center;
	}

	#cardgame .serie-item {
		width: calc(33.333333% - 10px);
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
		margin: 0 5px 20px;
	}
</style>
