<template>
	<div id="moive">
		<Layout>
			<Header>
				<Nav></Nav>
			</Header>
			<Content style="margin-bottom: 60px;">
				<div class="hero-movie hero">
					<router-link to="/movie">
						<img src="../../assets/movie-poster.jpg" alt="">
					</router-link>
				</div>

				<div class="content-main">
					<CardList :card_list="card_list"></CardList>
					<div class="button-block page-home__main--button">
						<router-link to="/" class="button">
							<span>浏览更多电影相关最新信息</span>
						</router-link>
					</div>
					<div class="page-content">
						<h2 class="heading-l">浏览更多电影系列</h2>
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
	import CardList from '../CardList/CardList.vue'
	import Card from '../CardList/Card.vue'
	export default {
		name: 'Movie',
		components: {
			Nav,
			CardList,
			Card
		},
		data() {
			return {
				card_list: [{
						title: '【精灵宝可梦圣诞企划 皮卡丘大量出没黄埔天地】',
						src: require('../../assets/zixun1.jpg'),
						type: 'movie',
						isHidden: true
					},
					{
						title: '【《剧场版 精灵宝可梦 我们的故事》优先场 现正预售】',
						src: require('../../assets/zixun2.jpg'),
						type: 'movie',
						isHidden: true
					},
					{
						title: '【独家限定！《剧场版 精灵宝可梦 我们的故事》邮票小版张+电影戏票 套装即日开卖！】',
						src: require('../../assets/zixun3.jpg'),
						type: 'movie',
						isHidden: true
					},
					{
						title: '【《剧场版 精灵宝可梦 我们的故事》填色比赛】',
						src: require('../../assets/zixun4.jpg'),
						type: 'movie',
						isHidden: true
					},
				],
				items: [{
						title: '剧场版宝可梦 我们的故事',
						src: require('../../assets/movie1.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '剧场版宝可梦 就决定是你了',
						src: require('../../assets/movie2.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '波尔凯尼恩与机巧的玛姬雅娜',
						src: require('../../assets/movie3.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '光环的超魔神 胡帕',
						src: require('../../assets/movie4.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '破坏之茧与蒂安希',
						src: require('../../assets/movie5.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '神速的盖诺塞克特 超梦觉醒',
						src: require('../../assets/movie6.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '酋雷姆VS圣剑士 凯路迪欧',
						src: require('../../assets/movie7.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '比克迪尼与黑英雄 捷克罗姆/比克迪尼与白英雄 赖希拉姆',
						src: require('../../assets/movie8.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '幻影的霸者 索罗亚克',
						src: require('../../assets/movie9.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '阿尔宙斯 超克的时空',
						src: require('../../assets/movie10.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '奇拉帝纳与冰空的花束 谢米',
						src: require('../../assets/movie11.jpg'),
						isHidden: true,
						type: 'movie'
					},
					{
						title: '决战时空之塔 帝牙卢卡VS帕路奇亚VS达克拉伊',
						src: require('../../assets/movie12.jpg'),
						isHidden: true,
						type: 'movie'
					}
				]
			}
		}

	}
</script>

<style>
	.heading-l {
		font-size: 2rem;
		font-weight: 400;
		text-align: center;
		margin: 0 0 35px;
		line-height: 1.4;
	}

	.hero-movie {
		border-bottom-color: #ff9600;
		border-bottom-width: 4px;
		border-bottom-style: solid;
		background: rgba(191, 191, 191, 0.1);
		text-align: center;
	}

	.series-content {
		margin-top: 30px;
	}

	.series-list {
		display: flex;
		flex-wrap: wrap;
	}

	@media screen and (max-width: 767px) {
		.serie-item {
			width: calc(50% - 10px);
			box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
			margin: 0 5px 20px;
		}
	}

	@media screen and (min-width: 768px) {
		.serie-item {
			width: calc(20% - 10px);
			box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
			margin: 0 5px 20px;
		}
	}



	.button-block {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin: 20px 0;
	}

	.button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: 0;
		padding: 0;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		text-decoration: none;
		text-align: center;
		text-decoration: none;
		color: #FFF;
		display: inline-block;
		padding: 5px 10px;
		min-width: 330px;
		min-height: 60px;
		transition: .2s cubic-bezier(0, 0, 1, 1);
		background: #4B4B4B;
		line-height: 2.5;
		border-radius: 60px;
		border: 1px solid #4B4B4B;
		position: relative;
		transition: .2s linear;
	}

	.button span {
		font-weight: 700;
		display: block;
		padding: 12px 35px;
	}

	.button::after {
		font-style: normal;
		font-weight: 400;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		content: ">";
		position: absolute;
		top: 50%;
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		right: 24px;
		font-size: 1.6rem;
	}
</style>
