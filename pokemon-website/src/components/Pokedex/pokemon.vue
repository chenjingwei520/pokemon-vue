<template>
	<div id="pokemon">
		<Layout>
			<Header>
				<Nav></Nav>
			</Header>
			<Content class="contents pokemon-detail-contents">
				<div class="pokemon-detail">
					<div class="pokemon-detail__header">
						<div class="pokemon-detail__header__inner">
							<span class="size-20">
								<router-link class="pokemon-detail__header__back-to-top" to="/pokedex">
									宝可梦图鉴
								</router-link>
							</span>
						</div>
					</div>
					<div class="pokemon-detail__slider">
						<div class="pokemon-slider">
							<div class="pokemon-slider__main">
								<p class="pokemon-slider__main-no size-28">{{pokemon.no}}</p>
								<p class="pokemon-slider__main-name size-35">{{pokemon.name}}</p>
								<p class="pokemon-slider__main-subname size-20"></p>
							</div>
							<div class="pokemon-slider__wrapper pokemon-slider__wrapper--right non-visible">
							</div>
						</div>
					</div>

					<div class="pokemon-detail__profile">
						<div class="pokemon-main">
							<div class="pokemon-main__center">
								<div class="pokemon-img">
									<img class="pokemon-img__back" src="../../assets/pokemon_bg.png">
									<img class="pokemon-img__blur" src="../../assets/pokemon_circle_bg.png">
									<img class="pokemon-img__front" :src="pokemon.imgSrc">
								</div>
							</div>
							<div class="pokemon-main__upper-left">
								<div class="pokemon-type__title size-20">属性</div>
								<div class="pokemon-type">
									<div class="pokemon-type__type size-14" v-for="(type, index) in pokemon.types" :key="type" :class="classType(type, index)">
										<a>
											<span style="font-size: 100%; visibility: visible;">{{typesName[type]}}</span>
										</a>
									</div>
								</div>
							</div>
							<div class="pokemon-main__bottom-left">
								<div class="pokemon-weakness__title size-20">弱点</div>
								<div class="pokemon-weakness">
									<div class="pokemon-weakness__items">
										<div v-for="weakness in pokemon.weaknesses" :key="weakness" class="pokemon-weakness__btn size-14" :class="classWeakness(weakness)">
											<a>
												<span style="font-size: 100%; visibility: visible;">{{typesName[weakness]}}</span>
											</a>
										</div>
									</div>
								</div>
							</div>
							<div class="pokemon-main__right">
								<div class="pokemon-info">
									<div class="pokemon-info--inner">
										<div class="pokemon-info__height">
											<span class="pokemon-info__title size-14">
												身高
											</span>

											<span class="pokemon-info__value size-14">{{pokemon.height}}</span>
										</div>
										<div class="pokemon-info__category">
											<span class="pokemon-info__title size-14">分类</span>
											<span class="pokemon-info__value size-14"><span>{{pokemon.category}}</span></span>
										</div>
										<div class="pokemon-info__weight">
											<span class="pokemon-info__title size-14">体重</span>
											<span class="pokemon-info__value size-14">{{pokemon.weight}}</span>
										</div>
										<div class="pokemon-info__gender">
											<span class="pokemon-info__title size-14">性別</span>
											<span class="pokemon-info__value size-14">♂/♀</span>
										</div>
										<div class="pokemon-info__abilities">
											<span class="pokemon-info__title size-14">特性</span>
											<span class="pokemon-info__value size-14">
												{{pokemon.features}}
												<img src="../../assets/icon_question.png" class="pokemon-info__question-icon">
											</span>
										</div>
									</div>
								</div>
							</div>
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
	export default {
		name: 'pokemon',
		components: {
			Nav
		},
		data() {
			return {
				isOnly: true,
				pokemon: {},
				typesName: {
					'fire': '火',
					'dragon': '龙',
					'flying': '飞行',
					'electric': '电',
					'steel': '钢',
					'ghost': '幽灵',
					'rock': '岩石',
					'posion': '毒',
					'fighting': '格斗',
					'fairy': '妖精',
					'psychic': '超能力',
					'grass': '草',
					'water': '水',
					'ground': '地面',
					'normal': '一般',
					'ice': '冰',
					'dark': '恶',
					'bug': '虫'
				},
			}
		},
		methods: {
			classType(type, index) {
				var objectClass = {}
				objectClass['pokemon-type__type--' + type] = true;
				objectClass['pokemon-type__type--only'] = this.isOnly;
				objectClass['pokemon-type__type--second'] = index === 1 ? true : false;
				return objectClass;
			},
			classWeakness(weakness) {
				const objectClass = {};
				objectClass['pokemon-weakness__btn--' + weakness] = true;
				return objectClass;
			}
		},
		created() {
			(async () => {
				const res = await this.$http.get('http://localhost:8000/pokemons/' + this.$route.params.id);
				const json = await res.json();
				console.log(json);
				json.types = eval(json.types);
				json.weaknesses = eval(json.weaknesses);
				json.features = eval(json.features).join('/');
				// if (json.types.length === 1) this.isOnly = true;
				// else this.isOnly = false;
				this.pokemon = json;
			})()
		}

	}
</script>

<style>
	@media screen and (min-width: 768px) {

		.pokemon-detail__profile .pokemon-weakness__items {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
		}

		.pokemon-detail__profile .pokemon-main__bottom-left {
			width: 30%;
			position: absolute;
			top: 40%;
			bottom: 0;
			left: 8%;
			margin: 0 auto;
			z-index: 110;
		}

		.pokemon-detail__profile .pokemon-weakness__title {
			left: -15%;
		}

		.pokemon-detail__profile .pokemon-type__type--second {
			position: relative;
			left: 10%;
		}

		.pokemon-detail__profile {
			position: absolute;
		}

		.pokemon-detail__header {
			width: 100%;
		}

		.pokemon-detail__header:after {
			content: "";
			height: 0;
			display: block;
			padding-top: 9.28571429%;
		}

		.pokemon-detail__slider .pokemon-slider {
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.pokemon-detail__slider .pokemon-slider__wrapper--right {
			background-image: url(/play/resources/pokedex/img/arrow_pc_right.png);
			background-size: contain;
			background-repeat: no-repeat;
		}

		.pokemon-detail__slider .pokemon-slider__wrapper {
			width: 30.28571429%;
		}

		.pokemon-detail__slider .pokemon-slider__wrapper:after {
			padding-top: 23.82075472%;
		}

		.pokemon-detail__profile:before {
			padding-top: 12.78571429%;
		}

		.pokemon-detail__profile .pokemon-main__center {
			width: 42.85%;
			margin: 0 auto;
			z-index: 100;
		}

		.pokemon-detail__profile .pokemon-main__upper-left {
			width: 25%;
			position: absolute;
			top: 10%;
			bottom: 0;
			left: 10%;
			margin: 0 auto;
			z-index: 110;
		}

		.pokemon-detail__profile .pokemon-type__title {
			width: 68%;
			color: #fff;
			text-align: center;
		}

		.pokemon-detail__profile .pokemon-type__type--only {
			width: 69.5%;
			position: absolute;
			margin-top: 10px;
		}

		.pokemon-detail__profile .pokemon-type__type {
			width: 69.5%;
		}

		.pokemon-detail__profile .pokemon-img__back {
			animation: rotate-anime 3s linear infinite;
		}

		.pokemon-detail__profile .pokemon-img__blur,
		.pokemon-detail__profile .pokemon-img__front {
			width: 66.7%;
			top: 16.8%;
		}

		.pokemon-detail__profile .pokemon-main__right {
			position: absolute;
			top: 0;
			right: 0;
			width: 28%;
			height: 100%;
			margin: 0 auto;
		}

		.pokemon-detail__profile .pokemon-info {
			margin-top: 41%;
			height: 46.5%;
			width: 80%;
		}

		.pokemon-detail__profile .pokemon-info__height {
			position: absolute;
			top: 5%;
			left: 0;
		}

		.pokemon-detail__profile .pokemon-info__category {
			position: absolute;
			top: 5%;
			left: 40%;
			width: 60%;
		}

		.pokemon-detail__profile .pokemon-info__weight {
			position: absolute;
			top: 34%;
			left: 0;
		}

		.pokemon-detail__profile .pokemon-info__gender {
			position: absolute;
			top: 34%;
			left: 40%;
		}

		.pokemon-detail__profile .pokemon-info__abilities {
			position: absolute;
			top: 62%;
			left: 0;
			width: 92%;
		}

		.pokemon-detail__profile .pokemon-info__category .pokemon-info__value {
			line-height: 130%;
		}

	}

	.pokemon-detail__profile .pokemon-info__question-icon {
		position: relative;
		top: .3em;
		width: 1.3em;
		height: 1.3em;
		cursor: pointer;
		margin-left: .2em;
	}

	.pokemon-detail__profile .pokemon-info__value {
		display: block;
		color: #fff;
		position: relative;
	}

	.pokemon-detail__profile .pokemon-info {
		color: #b3eafe;
		text-align: left;
		position: relative;
	}

	@keyframes rotate-anime {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(1turn);
		}
	}

	@media screen and (min-width: 1401px) {
		.pokemon-detail .size-28 {
			font-size: 2.8rem !important;
		}

		.pokemon-detail .size-20 {
			font-size: 2rem !important;
		}

		.pokemon-detail .size-35 {
			font-size: 3.5rem !important;
		}
	}

	@media screen and (max-width: 1400px) and (min-width: 950px) {
		.pokemon-detail .size-20 {
			font-size: 2vw !important;
		}

		.pokemon-detail .size-14 {
			font-size: 1.4vw !important;
		}
	}

	.pokemon-detail__profile .pokemon-weakness__btn a {
		display: block;
		text-align: center;
		position: relative;
	}

	.pokemon-detail__profile .pokemon-weakness__btn a:after {
		content: " ";
		display: block;
		height: 1.5em;
	}

	.pokemon-detail__profile .pokemon-weakness__btn a span {
		position: absolute;
		color: #fff;
		display: inline-block;
		text-shadow: 0 0 5px rgba(0, 0, 0, .75);
		white-space: nowrap;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		visibility: hidden;
	}

	.pokemon-detail__profile .pokemon-weakness__btn--normal {
		border-color: #dcdcdc;
		background-color: #a0a0a0;
		-webkit-box-shadow: 0 0 .25em .03em #a0a0a0;
		box-shadow: 0 0 .25em .03em #a0a0a0
	}

	.pokemon-detail__profile .pokemon-weakness__btn--normal:before {
		-webkit-box-shadow: 0 0 .01px .1em #dcdcdc;
		box-shadow: 0 0 .01px .1em #dcdcdc
	}

	.pokemon-detail__profile .pokemon-weakness__btn--normal:after {
		background: radial-gradient(at 30% 30%, #dcdcdc, #a0a0a0)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fire {
		border-color: #ff6900;
		background-color: #ff3700;
		-webkit-box-shadow: 0 0 .25em .03em #ff3700;
		box-shadow: 0 0 .25em .03em #ff3700
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fire:before {
		-webkit-box-shadow: 0 0 .01px .1em #ff6900;
		box-shadow: 0 0 .01px .1em #ff6900
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fire:after {
		background: radial-gradient(at 30% 30%, #ff6900, #ff3700)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--water {
		border-color: #14b9ff;
		background-color: #0094e5;
		-webkit-box-shadow: 0 0 .25em .03em #0094e5;
		box-shadow: 0 0 .25em .03em #0094e5
	}

	.pokemon-detail__profile .pokemon-weakness__btn--water:before {
		-webkit-box-shadow: 0 0 .01px .1em #14b9ff;
		box-shadow: 0 0 .01px .1em #14b9ff
	}

	.pokemon-detail__profile .pokemon-weakness__btn--water:after {
		background: radial-gradient(at 30% 30%, #14b9ff, #0094e5)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--grass {
		border-color: #b4f000;
		background-color: #92bf19;
		-webkit-box-shadow: 0 0 .25em .03em #92bf19;
		box-shadow: 0 0 .25em .03em #92bf19
	}

	.pokemon-detail__profile .pokemon-weakness__btn--grass:before {
		-webkit-box-shadow: 0 0 .01px .1em #b4f000;
		box-shadow: 0 0 .01px .1em #b4f000
	}

	.pokemon-detail__profile .pokemon-weakness__btn--grass:after {
		background: radial-gradient(at 30% 30%, #b4f000, #92bf19)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--electric {
		border-color: #ffe100;
		background-color: #e4b700;
		-webkit-box-shadow: 0 0 .25em .03em #e4b700;
		box-shadow: 0 0 .25em .03em #e4b700
	}

	.pokemon-detail__profile .pokemon-weakness__btn--electric:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffe100;
		box-shadow: 0 0 .01px .1em #ffe100
	}

	.pokemon-detail__profile .pokemon-weakness__btn--electric:after {
		background: radial-gradient(at 30% 30%, #ffe100, #e4b700)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ice {
		border-color: #14f5ff;
		background-color: #00b7ee;
		-webkit-box-shadow: 0 0 .25em .03em #00b7ee;
		box-shadow: 0 0 .25em .03em #00b7ee
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ice:before {
		-webkit-box-shadow: 0 0 .01px .1em #14f5ff;
		box-shadow: 0 0 .01px .1em #14f5ff
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ice:after {
		background: radial-gradient(at 30% 30%, #14f5ff, #00b7ee)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fighting {
		border-color: #dc6900;
		background-color: #c85500;
		-webkit-box-shadow: 0 0 .25em .03em #c85500;
		box-shadow: 0 0 .25em .03em #c85500
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fighting:before {
		-webkit-box-shadow: 0 0 .01px .1em #dc6900;
		box-shadow: 0 0 .01px .1em #dc6900
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fighting:after {
		background: radial-gradient(at 30% 30%, #dc6900, #c85500)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--poison {
		border-color: #d28cd2;
		background-color: #be78be;
		-webkit-box-shadow: 0 0 .25em .03em #be78be;
		box-shadow: 0 0 .25em .03em #be78be
	}

	.pokemon-detail__profile .pokemon-weakness__btn--poison:before {
		-webkit-box-shadow: 0 0 .01px .1em #d28cd2;
		box-shadow: 0 0 .01px .1em #d28cd2
	}

	.pokemon-detail__profile .pokemon-weakness__btn--poison:after {
		background: radial-gradient(at 30% 30%, #d28cd2, #be78be)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ground {
		border-color: #fac85a;
		background-color: #cca142;
		-webkit-box-shadow: 0 0 .25em .03em #cca142;
		box-shadow: 0 0 .25em .03em #cca142
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ground:before {
		-webkit-box-shadow: 0 0 .01px .1em #fac85a;
		box-shadow: 0 0 .01px .1em #fac85a
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ground:after {
		background: radial-gradient(at 30% 30%, #fac85a, #cca142)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--flying {
		border-color: #78dcff;
		background-color: #79bcd7;
		-webkit-box-shadow: 0 0 .25em .03em #79bcd7;
		box-shadow: 0 0 .25em .03em #79bcd7
	}

	.pokemon-detail__profile .pokemon-weakness__btn--flying:before {
		-webkit-box-shadow: 0 0 .01px .1em #78dcff;
		box-shadow: 0 0 .01px .1em #78dcff
	}

	.pokemon-detail__profile .pokemon-weakness__btn--flying:after {
		background: radial-gradient(at 30% 30%, #78dcff, #79bcd7)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--psychic {
		border-color: #f08cdc;
		background-color: #dc78c8;
		-webkit-box-shadow: 0 0 .25em .03em #dc78c8;
		box-shadow: 0 0 .25em .03em #dc78c8
	}

	.pokemon-detail__profile .pokemon-weakness__btn--psychic:before {
		-webkit-box-shadow: 0 0 .01px .1em #f08cdc;
		box-shadow: 0 0 .01px .1em #f08cdc
	}

	.pokemon-detail__profile .pokemon-weakness__btn--psychic:after {
		background: radial-gradient(at 30% 30%, #f08cdc, #dc78c8)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--bug {
		border-color: #46c846;
		background-color: #32b432;
		-webkit-box-shadow: 0 0 .25em .03em #32b432;
		box-shadow: 0 0 .25em .03em #32b432
	}

	.pokemon-detail__profile .pokemon-weakness__btn--bug:before {
		-webkit-box-shadow: 0 0 .01px .1em #46c846;
		box-shadow: 0 0 .01px .1em #46c846
	}

	.pokemon-detail__profile .pokemon-weakness__btn--bug:after {
		background: radial-gradient(at 30% 30%, #46c846, #32b432)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--rock {
		border-color: #b48c64;
		background-color: #a07850;
		-webkit-box-shadow: 0 0 .25em .03em #a07850;
		box-shadow: 0 0 .25em .03em #a07850
	}

	.pokemon-detail__profile .pokemon-weakness__btn--rock:before {
		-webkit-box-shadow: 0 0 .01px .1em #b48c64;
		box-shadow: 0 0 .01px .1em #b48c64
	}

	.pokemon-detail__profile .pokemon-weakness__btn--rock:after {
		background: radial-gradient(at 30% 30%, #b48c64, #a07850)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ghost {
		border-color: #a08cff;
		background-color: #8c78f0;
		-webkit-box-shadow: 0 0 .25em .03em #8c78f0;
		box-shadow: 0 0 .25em .03em #8c78f0
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ghost:before {
		-webkit-box-shadow: 0 0 .01px .1em #a08cff;
		box-shadow: 0 0 .01px .1em #a08cff
	}

	.pokemon-detail__profile .pokemon-weakness__btn--ghost:after {
		background: radial-gradient(at 30% 30%, #a08cff, #8c78f0)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--dragon {
		border-color: #5078dc;
		background-color: #3c64c8;
		-webkit-box-shadow: 0 0 .25em .03em #3c64c8;
		box-shadow: 0 0 .25em .03em #3c64c8
	}

	.pokemon-detail__profile .pokemon-weakness__btn--dragon:before {
		-webkit-box-shadow: 0 0 .01px .1em #5078dc;
		box-shadow: 0 0 .01px .1em #5078dc
	}

	.pokemon-detail__profile .pokemon-weakness__btn--dragon:after {
		background: radial-gradient(at 30% 30%, #5078dc, #3c64c8)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--dark {
		border-color: #787878;
		background-color: #646464;
		-webkit-box-shadow: 0 0 .25em .03em #646464;
		box-shadow: 0 0 .25em .03em #646464
	}

	.pokemon-detail__profile .pokemon-weakness__btn--dark:before {
		-webkit-box-shadow: 0 0 .01px .1em #787878;
		box-shadow: 0 0 .01px .1em #787878
	}

	.pokemon-detail__profile .pokemon-weakness__btn--dark:after {
		background: radial-gradient(at 30% 30%, #787878, #646464)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--steel {
		border-color: #aac8f0;
		background-color: #96b4dc;
		-webkit-box-shadow: 0 0 .25em .03em #96b4dc;
		box-shadow: 0 0 .25em .03em #96b4dc
	}

	.pokemon-detail__profile .pokemon-weakness__btn--steel:before {
		-webkit-box-shadow: 0 0 .01px .1em #aac8f0;
		box-shadow: 0 0 .01px .1em #aac8f0
	}

	.pokemon-detail__profile .pokemon-weakness__btn--steel:after {
		background: radial-gradient(at 30% 30%, #aac8f0, #96b4dc)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fairy {
		border-color: #ffafdc;
		background-color: #ff7eb8;
		-webkit-box-shadow: 0 0 .25em .03em #ff7eb8;
		box-shadow: 0 0 .25em .03em #ff7eb8
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fairy:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffafdc;
		box-shadow: 0 0 .01px .1em #ffafdc
	}

	.pokemon-detail__profile .pokemon-weakness__btn--fairy:after {
		background: radial-gradient(at 30% 30%, #ffafdc, #ff7eb8)
	}

	.pokemon-detail__profile .pokemon-weakness__btn--area {
		border-color: #fff;
		background-color: #fff;
		-webkit-box-shadow: 0 0 .25em .03em #fff;
		box-shadow: 0 0 .25em .03em #fff
	}

	.pokemon-detail__profile .pokemon-weakness__btn--area:before {
		-webkit-box-shadow: 0 0 .01px .1em #fff;
		box-shadow: 0 0 .01px .1em #fff
	}

	.pokemon-detail__profile .pokemon-weakness__btn--area:after {
		background: radial-gradient(at 30% 30%, #fff, #fff)
	}

	.pokemon-detail__profile .pokemon-weakness__items {
		font-size: 1.3rem;
		flex-wrap: wrap;
	}

	.pokemon-detail__profile .pokemon-weakness__title {
		color: #fff;
		position: relative;
		text-align: center;
		font-size: 2vw;
	}

	.pokemon-detail__profile .pokemon-weakness__btn {
		width: 33.6%;
		position: relative;
		border-radius: 1em;
		margin: .5em .25em;
	}

	.pokemon-detail__profile .pokemon-weakness {
		color: #fff;
		position: relative;
		text-align: center;
	}

	.pokemon-detail__profile .pokemon-type__type:after {
		content: "";
		position: absolute;
		height: 35%;
		width: 4.1%;
		left: 3.5%;
		top: 50%;
		border-radius: 1em;
		transform: translateY(-50%);
	}

	.pokemon-detail__profile .pokemon-type__type--normal {
		border-color: #dcdcdc;
		background-color: #a0a0a0;
		-webkit-box-shadow: 0 0 .25em .03em #a0a0a0;
		box-shadow: 0 0 .25em .03em #a0a0a0
	}

	.pokemon-detail__profile .pokemon-type__type--normal:before {
		-webkit-box-shadow: 0 0 .01px .1em #dcdcdc;
		box-shadow: 0 0 .01px .1em #dcdcdc
	}

	.pokemon-detail__profile .pokemon-type__type--normal:after {
		background: radial-gradient(at 30% 30%, #dcdcdc, #a0a0a0)
	}

	.pokemon-detail__profile .pokemon-type__type--fire {
		border-color: #ff6900;
		background-color: #ff3700;
		-webkit-box-shadow: 0 0 .25em .03em #ff3700;
		box-shadow: 0 0 .25em .03em #ff3700
	}

	.pokemon-detail__profile .pokemon-type__type--fire:before {
		-webkit-box-shadow: 0 0 .01px .1em #ff6900;
		box-shadow: 0 0 .01px .1em #ff6900
	}

	.pokemon-detail__profile .pokemon-type__type--fire:after {
		background: radial-gradient(at 30% 30%, #ff6900, #ff3700)
	}

	.pokemon-detail__profile .pokemon-type__type--water {
		border-color: #14b9ff;
		background-color: #0094e5;
		-webkit-box-shadow: 0 0 .25em .03em #0094e5;
		box-shadow: 0 0 .25em .03em #0094e5
	}

	.pokemon-detail__profile .pokemon-type__type--water:before {
		-webkit-box-shadow: 0 0 .01px .1em #14b9ff;
		box-shadow: 0 0 .01px .1em #14b9ff
	}

	.pokemon-detail__profile .pokemon-type__type--water:after {
		background: radial-gradient(at 30% 30%, #14b9ff, #0094e5)
	}

	.pokemon-detail__profile .pokemon-type__type--grass {
		border-color: #b4f000;
		background-color: #92bf19;
		-webkit-box-shadow: 0 0 .25em .03em #92bf19;
		box-shadow: 0 0 .25em .03em #92bf19
	}

	.pokemon-detail__profile .pokemon-type__type--grass:before {
		-webkit-box-shadow: 0 0 .01px .1em #b4f000;
		box-shadow: 0 0 .01px .1em #b4f000
	}

	.pokemon-detail__profile .pokemon-type__type--grass:after {
		background: radial-gradient(at 30% 30%, #b4f000, #92bf19)
	}

	.pokemon-detail__profile .pokemon-type__type--electric {
		border-color: #ffe100;
		background-color: #e4b700;
		-webkit-box-shadow: 0 0 .25em .03em #e4b700;
		box-shadow: 0 0 .25em .03em #e4b700
	}

	.pokemon-detail__profile .pokemon-type__type--electric:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffe100;
		box-shadow: 0 0 .01px .1em #ffe100
	}

	.pokemon-detail__profile .pokemon-type__type--electric:after {
		background: radial-gradient(at 30% 30%, #ffe100, #e4b700)
	}

	.pokemon-detail__profile .pokemon-type__type--ice {
		border-color: #14f5ff;
		background-color: #00b7ee;
		-webkit-box-shadow: 0 0 .25em .03em #00b7ee;
		box-shadow: 0 0 .25em .03em #00b7ee
	}

	.pokemon-detail__profile .pokemon-type__type--ice:before {
		-webkit-box-shadow: 0 0 .01px .1em #14f5ff;
		box-shadow: 0 0 .01px .1em #14f5ff
	}

	.pokemon-detail__profile .pokemon-type__type--ice:after {
		background: radial-gradient(at 30% 30%, #14f5ff, #00b7ee)
	}

	.pokemon-detail__profile .pokemon-type__type--fighting {
		border-color: #dc6900;
		background-color: #c85500;
		-webkit-box-shadow: 0 0 .25em .03em #c85500;
		box-shadow: 0 0 .25em .03em #c85500
	}

	.pokemon-detail__profile .pokemon-type__type--fighting:before {
		-webkit-box-shadow: 0 0 .01px .1em #dc6900;
		box-shadow: 0 0 .01px .1em #dc6900
	}

	.pokemon-detail__profile .pokemon-type__type--fighting:after {
		background: radial-gradient(at 30% 30%, #dc6900, #c85500)
	}

	.pokemon-detail__profile .pokemon-type__type--poison {
		border-color: #d28cd2;
		background-color: #be78be;
		-webkit-box-shadow: 0 0 .25em .03em #be78be;
		box-shadow: 0 0 .25em .03em #be78be
	}

	.pokemon-detail__profile .pokemon-type__type--poison:before {
		-webkit-box-shadow: 0 0 .01px .1em #d28cd2;
		box-shadow: 0 0 .01px .1em #d28cd2
	}

	.pokemon-detail__profile .pokemon-type__type--poison:after {
		background: radial-gradient(at 30% 30%, #d28cd2, #be78be)
	}

	.pokemon-detail__profile .pokemon-type__type--ground {
		border-color: #fac85a;
		background-color: #cca142;
		-webkit-box-shadow: 0 0 .25em .03em #cca142;
		box-shadow: 0 0 .25em .03em #cca142
	}

	.pokemon-detail__profile .pokemon-type__type--ground:before {
		-webkit-box-shadow: 0 0 .01px .1em #fac85a;
		box-shadow: 0 0 .01px .1em #fac85a
	}

	.pokemon-detail__profile .pokemon-type__type--ground:after {
		background: radial-gradient(at 30% 30%, #fac85a, #cca142)
	}

	.pokemon-detail__profile .pokemon-type__type--flying {
		border-color: #78dcff;
		background-color: #79bcd7;
		-webkit-box-shadow: 0 0 .25em .03em #79bcd7;
		box-shadow: 0 0 .25em .03em #79bcd7
	}

	.pokemon-detail__profile .pokemon-type__type--flying:before {
		-webkit-box-shadow: 0 0 .01px .1em #78dcff;
		box-shadow: 0 0 .01px .1em #78dcff
	}

	.pokemon-detail__profile .pokemon-type__type--flying:after {
		background: radial-gradient(at 30% 30%, #78dcff, #79bcd7)
	}

	.pokemon-detail__profile .pokemon-type__type--psychic {
		border-color: #f08cdc;
		background-color: #dc78c8;
		-webkit-box-shadow: 0 0 .25em .03em #dc78c8;
		box-shadow: 0 0 .25em .03em #dc78c8
	}

	.pokemon-detail__profile .pokemon-type__type--psychic:before {
		-webkit-box-shadow: 0 0 .01px .1em #f08cdc;
		box-shadow: 0 0 .01px .1em #f08cdc
	}

	.pokemon-detail__profile .pokemon-type__type--psychic:after {
		background: radial-gradient(at 30% 30%, #f08cdc, #dc78c8)
	}

	.pokemon-detail__profile .pokemon-type__type--bug {
		border-color: #46c846;
		background-color: #32b432;
		-webkit-box-shadow: 0 0 .25em .03em #32b432;
		box-shadow: 0 0 .25em .03em #32b432
	}

	.pokemon-detail__profile .pokemon-type__type--bug:before {
		-webkit-box-shadow: 0 0 .01px .1em #46c846;
		box-shadow: 0 0 .01px .1em #46c846
	}

	.pokemon-detail__profile .pokemon-type__type--bug:after {
		background: radial-gradient(at 30% 30%, #46c846, #32b432)
	}

	.pokemon-detail__profile .pokemon-type__type--rock {
		border-color: #b48c64;
		background-color: #a07850;
		-webkit-box-shadow: 0 0 .25em .03em #a07850;
		box-shadow: 0 0 .25em .03em #a07850
	}

	.pokemon-detail__profile .pokemon-type__type--rock:before {
		-webkit-box-shadow: 0 0 .01px .1em #b48c64;
		box-shadow: 0 0 .01px .1em #b48c64
	}

	.pokemon-detail__profile .pokemon-type__type--rock:after {
		background: radial-gradient(at 30% 30%, #b48c64, #a07850)
	}

	.pokemon-detail__profile .pokemon-type__type--ghost {
		border-color: #a08cff;
		background-color: #8c78f0;
		-webkit-box-shadow: 0 0 .25em .03em #8c78f0;
		box-shadow: 0 0 .25em .03em #8c78f0
	}

	.pokemon-detail__profile .pokemon-type__type--ghost:before {
		-webkit-box-shadow: 0 0 .01px .1em #a08cff;
		box-shadow: 0 0 .01px .1em #a08cff
	}

	.pokemon-detail__profile .pokemon-type__type--ghost:after {
		background: radial-gradient(at 30% 30%, #a08cff, #8c78f0)
	}

	.pokemon-detail__profile .pokemon-type__type--dragon {
		border-color: #5078dc;
		background-color: #3c64c8;
		-webkit-box-shadow: 0 0 .25em .03em #3c64c8;
		box-shadow: 0 0 .25em .03em #3c64c8
	}

	.pokemon-detail__profile .pokemon-type__type--dragon:before {
		-webkit-box-shadow: 0 0 .01px .1em #5078dc;
		box-shadow: 0 0 .01px .1em #5078dc
	}

	.pokemon-detail__profile .pokemon-type__type--dragon:after {
		background: radial-gradient(at 30% 30%, #5078dc, #3c64c8)
	}

	.pokemon-detail__profile .pokemon-type__type--dark {
		border-color: #787878;
		background-color: #646464;
		-webkit-box-shadow: 0 0 .25em .03em #646464;
		box-shadow: 0 0 .25em .03em #646464
	}

	.pokemon-detail__profile .pokemon-type__type--dark:before {
		-webkit-box-shadow: 0 0 .01px .1em #787878;
		box-shadow: 0 0 .01px .1em #787878
	}

	.pokemon-detail__profile .pokemon-type__type--dark:after {
		background: radial-gradient(at 30% 30%, #787878, #646464)
	}

	.pokemon-detail__profile .pokemon-type__type--steel {
		border-color: #aac8f0;
		background-color: #96b4dc;
		-webkit-box-shadow: 0 0 .25em .03em #96b4dc;
		box-shadow: 0 0 .25em .03em #96b4dc
	}

	.pokemon-detail__profile .pokemon-type__type--steel:before {
		-webkit-box-shadow: 0 0 .01px .1em #aac8f0;
		box-shadow: 0 0 .01px .1em #aac8f0
	}

	.pokemon-detail__profile .pokemon-type__type--steel:after {
		background: radial-gradient(at 30% 30%, #aac8f0, #96b4dc)
	}

	.pokemon-detail__profile .pokemon-type__type--fairy {
		border-color: #ffafdc;
		background-color: #ff7eb8;
		-webkit-box-shadow: 0 0 .25em .03em #ff7eb8;
		box-shadow: 0 0 .25em .03em #ff7eb8
	}

	.pokemon-detail__profile .pokemon-type__type--fairy:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffafdc;
		box-shadow: 0 0 .01px .1em #ffafdc
	}

	.pokemon-detail__profile .pokemon-type__type--fairy:after {
		background: radial-gradient(at 30% 30%, #ffafdc, #ff7eb8)
	}

	.pokemon-detail__profile .pokemon-type__type--area {
		border-color: #fff;
		background-color: #fff;
		-webkit-box-shadow: 0 0 .25em .03em #fff;
		box-shadow: 0 0 .25em .03em #fff
	}

	.pokemon-detail__profile .pokemon-type__type--area:before {
		-webkit-box-shadow: 0 0 .01px .1em #fff;
		box-shadow: 0 0 .01px .1em #fff
	}

	.pokemon-detail__profile .pokemon-type__type--area:after {
		background: radial-gradient(at 30% 30%, #fff, #fff)
	}

	.pokemon-detail__profile .pokemon-type__type a:after {
		content: " ";
		display: block;
		height: 1.5em;
	}

	.pokemon-detail__profile .pokemon-type__type a span {
		position: absolute;
		color: #fff;
		display: inline-block;
		text-shadow: 0 0 5px rgba(0, 0, 0, .75);
		white-space: nowrap;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		visibility: hidden;
	}

	.pokemon-detail__profile .pokemon-type__type a {
		display: block;
		text-align: center;
		position: relative;
	}

	.pokemon-detail__profile .pokemon-type__type--normal {
		border-color: #dcdcdc;
		background-color: #a0a0a0;
		-webkit-box-shadow: 0 0 .25em .03em #a0a0a0;
		box-shadow: 0 0 .25em .03em #a0a0a0
	}

	.pokemon-detail__profile .pokemon-type__type--normal:before {
		-webkit-box-shadow: 0 0 .01px .1em #dcdcdc;
		box-shadow: 0 0 .01px .1em #dcdcdc
	}

	.pokemon-detail__profile .pokemon-type__type--normal:after {
		background: radial-gradient(at 30% 30%, #dcdcdc, #a0a0a0)
	}

	.pokemon-detail__profile .pokemon-type__type--fire {
		border-color: #ff6900;
		background-color: #ff3700;
		-webkit-box-shadow: 0 0 .25em .03em #ff3700;
		box-shadow: 0 0 .25em .03em #ff3700
	}

	.pokemon-detail__profile .pokemon-type__type--fire:before {
		-webkit-box-shadow: 0 0 .01px .1em #ff6900;
		box-shadow: 0 0 .01px .1em #ff6900
	}

	.pokemon-detail__profile .pokemon-type__type--fire:after {
		background: radial-gradient(at 30% 30%, #ff6900, #ff3700)
	}

	.pokemon-detail__profile .pokemon-type__type--water {
		border-color: #14b9ff;
		background-color: #0094e5;
		-webkit-box-shadow: 0 0 .25em .03em #0094e5;
		box-shadow: 0 0 .25em .03em #0094e5
	}

	.pokemon-detail__profile .pokemon-type__type--water:before {
		-webkit-box-shadow: 0 0 .01px .1em #14b9ff;
		box-shadow: 0 0 .01px .1em #14b9ff
	}

	.pokemon-detail__profile .pokemon-type__type--water:after {
		background: radial-gradient(at 30% 30%, #14b9ff, #0094e5)
	}

	.pokemon-detail__profile .pokemon-type__type--grass {
		border-color: #b4f000;
		background-color: #92bf19;
		-webkit-box-shadow: 0 0 .25em .03em #92bf19;
		box-shadow: 0 0 .25em .03em #92bf19
	}

	.pokemon-detail__profile .pokemon-type__type--grass:before {
		-webkit-box-shadow: 0 0 .01px .1em #b4f000;
		box-shadow: 0 0 .01px .1em #b4f000
	}

	.pokemon-detail__profile .pokemon-type__type--grass:after {
		background: radial-gradient(at 30% 30%, #b4f000, #92bf19)
	}

	.pokemon-detail__profile .pokemon-type__type--electric {
		border-color: #ffe100;
		background-color: #e4b700;
		-webkit-box-shadow: 0 0 .25em .03em #e4b700;
		box-shadow: 0 0 .25em .03em #e4b700
	}

	.pokemon-detail__profile .pokemon-type__type--electric:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffe100;
		box-shadow: 0 0 .01px .1em #ffe100
	}

	.pokemon-detail__profile .pokemon-type__type--electric:after {
		background: radial-gradient(at 30% 30%, #ffe100, #e4b700)
	}

	.pokemon-detail__profile .pokemon-type__type--ice {
		border-color: #14f5ff;
		background-color: #00b7ee;
		-webkit-box-shadow: 0 0 .25em .03em #00b7ee;
		box-shadow: 0 0 .25em .03em #00b7ee
	}

	.pokemon-detail__profile .pokemon-type__type--ice:before {
		-webkit-box-shadow: 0 0 .01px .1em #14f5ff;
		box-shadow: 0 0 .01px .1em #14f5ff
	}

	.pokemon-detail__profile .pokemon-type__type--ice:after {
		background: radial-gradient(at 30% 30%, #14f5ff, #00b7ee)
	}

	.pokemon-detail__profile .pokemon-type__type--fighting {
		border-color: #dc6900;
		background-color: #c85500;
		-webkit-box-shadow: 0 0 .25em .03em #c85500;
		box-shadow: 0 0 .25em .03em #c85500
	}

	.pokemon-detail__profile .pokemon-type__type--fighting:before {
		-webkit-box-shadow: 0 0 .01px .1em #dc6900;
		box-shadow: 0 0 .01px .1em #dc6900
	}

	.pokemon-detail__profile .pokemon-type__type--fighting:after {
		background: radial-gradient(at 30% 30%, #dc6900, #c85500)
	}

	.pokemon-detail__profile .pokemon-type__type--poison {
		border-color: #d28cd2;
		background-color: #be78be;
		-webkit-box-shadow: 0 0 .25em .03em #be78be;
		box-shadow: 0 0 .25em .03em #be78be
	}

	.pokemon-detail__profile .pokemon-type__type--poison:before {
		-webkit-box-shadow: 0 0 .01px .1em #d28cd2;
		box-shadow: 0 0 .01px .1em #d28cd2
	}

	.pokemon-detail__profile .pokemon-type__type--poison:after {
		background: radial-gradient(at 30% 30%, #d28cd2, #be78be)
	}

	.pokemon-detail__profile .pokemon-type__type--ground {
		border-color: #fac85a;
		background-color: #cca142;
		-webkit-box-shadow: 0 0 .25em .03em #cca142;
		box-shadow: 0 0 .25em .03em #cca142
	}

	.pokemon-detail__profile .pokemon-type__type--ground:before {
		-webkit-box-shadow: 0 0 .01px .1em #fac85a;
		box-shadow: 0 0 .01px .1em #fac85a
	}

	.pokemon-detail__profile .pokemon-type__type--ground:after {
		background: radial-gradient(at 30% 30%, #fac85a, #cca142)
	}

	.pokemon-detail__profile .pokemon-type__type--flying {
		border-color: #78dcff;
		background-color: #79bcd7;
		-webkit-box-shadow: 0 0 .25em .03em #79bcd7;
		box-shadow: 0 0 .25em .03em #79bcd7
	}

	.pokemon-detail__profile .pokemon-type__type--flying:before {
		-webkit-box-shadow: 0 0 .01px .1em #78dcff;
		box-shadow: 0 0 .01px .1em #78dcff
	}

	.pokemon-detail__profile .pokemon-type__type--flying:after {
		background: radial-gradient(at 30% 30%, #78dcff, #79bcd7)
	}

	.pokemon-detail__profile .pokemon-type__type--psychic {
		border-color: #f08cdc;
		background-color: #dc78c8;
		-webkit-box-shadow: 0 0 .25em .03em #dc78c8;
		box-shadow: 0 0 .25em .03em #dc78c8
	}

	.pokemon-detail__profile .pokemon-type__type--psychic:before {
		-webkit-box-shadow: 0 0 .01px .1em #f08cdc;
		box-shadow: 0 0 .01px .1em #f08cdc
	}

	.pokemon-detail__profile .pokemon-type__type--psychic:after {
		background: radial-gradient(at 30% 30%, #f08cdc, #dc78c8)
	}

	.pokemon-detail__profile .pokemon-type__type--bug {
		border-color: #46c846;
		background-color: #32b432;
		-webkit-box-shadow: 0 0 .25em .03em #32b432;
		box-shadow: 0 0 .25em .03em #32b432
	}

	.pokemon-detail__profile .pokemon-type__type--bug:before {
		-webkit-box-shadow: 0 0 .01px .1em #46c846;
		box-shadow: 0 0 .01px .1em #46c846
	}

	.pokemon-detail__profile .pokemon-type__type--bug:after {
		background: radial-gradient(at 30% 30%, #46c846, #32b432)
	}

	.pokemon-detail__profile .pokemon-type__type--rock {
		border-color: #b48c64;
		background-color: #a07850;
		-webkit-box-shadow: 0 0 .25em .03em #a07850;
		box-shadow: 0 0 .25em .03em #a07850
	}

	.pokemon-detail__profile .pokemon-type__type--rock:before {
		-webkit-box-shadow: 0 0 .01px .1em #b48c64;
		box-shadow: 0 0 .01px .1em #b48c64
	}

	.pokemon-detail__profile .pokemon-type__type--rock:after {
		background: radial-gradient(at 30% 30%, #b48c64, #a07850)
	}

	.pokemon-detail__profile .pokemon-type__type--ghost {
		border-color: #a08cff;
		background-color: #8c78f0;
		-webkit-box-shadow: 0 0 .25em .03em #8c78f0;
		box-shadow: 0 0 .25em .03em #8c78f0
	}

	.pokemon-detail__profile .pokemon-type__type--ghost:before {
		-webkit-box-shadow: 0 0 .01px .1em #a08cff;
		box-shadow: 0 0 .01px .1em #a08cff
	}

	.pokemon-detail__profile .pokemon-type__type--ghost:after {
		background: radial-gradient(at 30% 30%, #a08cff, #8c78f0)
	}

	.pokemon-detail__profile .pokemon-type__type--dragon {
		border-color: #5078dc;
		background-color: #3c64c8;
		-webkit-box-shadow: 0 0 .25em .03em #3c64c8;
		box-shadow: 0 0 .25em .03em #3c64c8
	}

	.pokemon-detail__profile .pokemon-type__type--dragon:before {
		-webkit-box-shadow: 0 0 .01px .1em #5078dc;
		box-shadow: 0 0 .01px .1em #5078dc
	}

	.pokemon-detail__profile .pokemon-type__type--dragon:after {
		background: radial-gradient(at 30% 30%, #5078dc, #3c64c8)
	}

	.pokemon-detail__profile .pokemon-type__type--dark {
		border-color: #787878;
		background-color: #646464;
		-webkit-box-shadow: 0 0 .25em .03em #646464;
		box-shadow: 0 0 .25em .03em #646464
	}

	.pokemon-detail__profile .pokemon-type__type--dark:before {
		-webkit-box-shadow: 0 0 .01px .1em #787878;
		box-shadow: 0 0 .01px .1em #787878
	}

	.pokemon-detail__profile .pokemon-type__type--dark:after {
		background: radial-gradient(at 30% 30%, #787878, #646464)
	}

	.pokemon-detail__profile .pokemon-type__type--steel {
		border-color: #aac8f0;
		background-color: #96b4dc;
		-webkit-box-shadow: 0 0 .25em .03em #96b4dc;
		box-shadow: 0 0 .25em .03em #96b4dc
	}

	.pokemon-detail__profile .pokemon-type__type--steel:before {
		-webkit-box-shadow: 0 0 .01px .1em #aac8f0;
		box-shadow: 0 0 .01px .1em #aac8f0
	}

	.pokemon-detail__profile .pokemon-type__type--steel:after {
		background: radial-gradient(at 30% 30%, #aac8f0, #96b4dc)
	}

	.pokemon-detail__profile .pokemon-type__type--fairy {
		border-color: #ffafdc;
		background-color: #ff7eb8;
		-webkit-box-shadow: 0 0 .25em .03em #ff7eb8;
		box-shadow: 0 0 .25em .03em #ff7eb8
	}

	.pokemon-detail__profile .pokemon-type__type--fairy:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffafdc;
		box-shadow: 0 0 .01px .1em #ffafdc
	}

	.pokemon-detail__profile .pokemon-type__type--fairy:after {
		background: radial-gradient(at 30% 30%, #ffafdc, #ff7eb8)
	}

	.pokemon-detail__profile .pokemon-type__type--area {
		border-color: #fff;
		background-color: #fff;
		-webkit-box-shadow: 0 0 .25em .03em #fff;
		box-shadow: 0 0 .25em .03em #fff
	}

	.pokemon-detail__profile .pokemon-type__type--area:before {
		-webkit-box-shadow: 0 0 .01px .1em #fff;
		box-shadow: 0 0 .01px .1em #fff
	}

	.pokemon-detail__profile .pokemon-type__type--area:after {
		background: radial-gradient(at 30% 30%, #fff, #fff)
	}

	.pokemon-detail__profile .pokemon-type__type:before {
		content: "";
		position: absolute;
		height: 50%;
		width: 6%;
		top: 50%;
		left: 2.5%;
		border-radius: 1em;
		border: 1px solid #fff;
		transform: translateY(-50%);
	}

	.pokemon-detail__profile .pokemon-type__type {
		display: block;
		padding-left: .5em;
		position: relative;
		border-radius: 1em;
		border: 1px solid #000;
		margin: .9em 0;
	}

	.pokemon-detail__profile .pokemon-type__type--normal {
		border-color: #dcdcdc;
		background-color: #a0a0a0;
		-webkit-box-shadow: 0 0 .25em .03em #a0a0a0;
		box-shadow: 0 0 .25em .03em #a0a0a0
	}

	.pokemon-detail__profile .pokemon-type__type--normal:before {
		-webkit-box-shadow: 0 0 .01px .1em #dcdcdc;
		box-shadow: 0 0 .01px .1em #dcdcdc
	}

	.pokemon-detail__profile .pokemon-type__type--normal:after {
		background: radial-gradient(at 30% 30%, #dcdcdc, #a0a0a0)
	}

	.pokemon-detail__profile .pokemon-type__type--fire {
		border-color: #ff6900;
		background-color: #ff3700;
		-webkit-box-shadow: 0 0 .25em .03em #ff3700;
		box-shadow: 0 0 .25em .03em #ff3700
	}

	.pokemon-detail__profile .pokemon-type__type--fire:before {
		-webkit-box-shadow: 0 0 .01px .1em #ff6900;
		box-shadow: 0 0 .01px .1em #ff6900
	}

	.pokemon-detail__profile .pokemon-type__type--fire:after {
		background: radial-gradient(at 30% 30%, #ff6900, #ff3700)
	}

	.pokemon-detail__profile .pokemon-type__type--water {
		border-color: #14b9ff;
		background-color: #0094e5;
		-webkit-box-shadow: 0 0 .25em .03em #0094e5;
		box-shadow: 0 0 .25em .03em #0094e5
	}

	.pokemon-detail__profile .pokemon-type__type--water:before {
		-webkit-box-shadow: 0 0 .01px .1em #14b9ff;
		box-shadow: 0 0 .01px .1em #14b9ff
	}

	.pokemon-detail__profile .pokemon-type__type--water:after {
		background: radial-gradient(at 30% 30%, #14b9ff, #0094e5)
	}

	.pokemon-detail__profile .pokemon-type__type--grass {
		border-color: #b4f000;
		background-color: #92bf19;
		-webkit-box-shadow: 0 0 .25em .03em #92bf19;
		box-shadow: 0 0 .25em .03em #92bf19
	}

	.pokemon-detail__profile .pokemon-type__type--grass:before {
		-webkit-box-shadow: 0 0 .01px .1em #b4f000;
		box-shadow: 0 0 .01px .1em #b4f000
	}

	.pokemon-detail__profile .pokemon-type__type--grass:after {
		background: radial-gradient(at 30% 30%, #b4f000, #92bf19)
	}

	.pokemon-detail__profile .pokemon-type__type--electric {
		border-color: #ffe100;
		background-color: #e4b700;
		-webkit-box-shadow: 0 0 .25em .03em #e4b700;
		box-shadow: 0 0 .25em .03em #e4b700
	}

	.pokemon-detail__profile .pokemon-type__type--electric:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffe100;
		box-shadow: 0 0 .01px .1em #ffe100
	}

	.pokemon-detail__profile .pokemon-type__type--electric:after {
		background: radial-gradient(at 30% 30%, #ffe100, #e4b700)
	}

	.pokemon-detail__profile .pokemon-type__type--ice {
		border-color: #14f5ff;
		background-color: #00b7ee;
		-webkit-box-shadow: 0 0 .25em .03em #00b7ee;
		box-shadow: 0 0 .25em .03em #00b7ee
	}

	.pokemon-detail__profile .pokemon-type__type--ice:before {
		-webkit-box-shadow: 0 0 .01px .1em #14f5ff;
		box-shadow: 0 0 .01px .1em #14f5ff
	}

	.pokemon-detail__profile .pokemon-type__type--ice:after {
		background: radial-gradient(at 30% 30%, #14f5ff, #00b7ee)
	}

	.pokemon-detail__profile .pokemon-type__type--fighting {
		border-color: #dc6900;
		background-color: #c85500;
		-webkit-box-shadow: 0 0 .25em .03em #c85500;
		box-shadow: 0 0 .25em .03em #c85500
	}

	.pokemon-detail__profile .pokemon-type__type--fighting:before {
		-webkit-box-shadow: 0 0 .01px .1em #dc6900;
		box-shadow: 0 0 .01px .1em #dc6900
	}

	.pokemon-detail__profile .pokemon-type__type--fighting:after {
		background: radial-gradient(at 30% 30%, #dc6900, #c85500)
	}

	.pokemon-detail__profile .pokemon-type__type--poison {
		border-color: #d28cd2;
		background-color: #be78be;
		-webkit-box-shadow: 0 0 .25em .03em #be78be;
		box-shadow: 0 0 .25em .03em #be78be
	}

	.pokemon-detail__profile .pokemon-type__type--poison:before {
		-webkit-box-shadow: 0 0 .01px .1em #d28cd2;
		box-shadow: 0 0 .01px .1em #d28cd2
	}

	.pokemon-detail__profile .pokemon-type__type--poison:after {
		background: radial-gradient(at 30% 30%, #d28cd2, #be78be)
	}

	.pokemon-detail__profile .pokemon-type__type--ground {
		border-color: #fac85a;
		background-color: #cca142;
		-webkit-box-shadow: 0 0 .25em .03em #cca142;
		box-shadow: 0 0 .25em .03em #cca142
	}

	.pokemon-detail__profile .pokemon-type__type--ground:before {
		-webkit-box-shadow: 0 0 .01px .1em #fac85a;
		box-shadow: 0 0 .01px .1em #fac85a
	}

	.pokemon-detail__profile .pokemon-type__type--ground:after {
		background: radial-gradient(at 30% 30%, #fac85a, #cca142)
	}

	.pokemon-detail__profile .pokemon-type__type--flying {
		border-color: #78dcff;
		background-color: #79bcd7;
		-webkit-box-shadow: 0 0 .25em .03em #79bcd7;
		box-shadow: 0 0 .25em .03em #79bcd7
	}

	.pokemon-detail__profile .pokemon-type__type--flying:before {
		-webkit-box-shadow: 0 0 .01px .1em #78dcff;
		box-shadow: 0 0 .01px .1em #78dcff
	}

	.pokemon-detail__profile .pokemon-type__type--flying:after {
		background: radial-gradient(at 30% 30%, #78dcff, #79bcd7)
	}

	.pokemon-detail__profile .pokemon-type__type--psychic {
		border-color: #f08cdc;
		background-color: #dc78c8;
		-webkit-box-shadow: 0 0 .25em .03em #dc78c8;
		box-shadow: 0 0 .25em .03em #dc78c8
	}

	.pokemon-detail__profile .pokemon-type__type--psychic:before {
		-webkit-box-shadow: 0 0 .01px .1em #f08cdc;
		box-shadow: 0 0 .01px .1em #f08cdc
	}

	.pokemon-detail__profile .pokemon-type__type--psychic:after {
		background: radial-gradient(at 30% 30%, #f08cdc, #dc78c8)
	}

	.pokemon-detail__profile .pokemon-type__type--bug {
		border-color: #46c846;
		background-color: #32b432;
		-webkit-box-shadow: 0 0 .25em .03em #32b432;
		box-shadow: 0 0 .25em .03em #32b432
	}

	.pokemon-detail__profile .pokemon-type__type--bug:before {
		-webkit-box-shadow: 0 0 .01px .1em #46c846;
		box-shadow: 0 0 .01px .1em #46c846
	}

	.pokemon-detail__profile .pokemon-type__type--bug:after {
		background: radial-gradient(at 30% 30%, #46c846, #32b432)
	}

	.pokemon-detail__profile .pokemon-type__type--rock {
		border-color: #b48c64;
		background-color: #a07850;
		-webkit-box-shadow: 0 0 .25em .03em #a07850;
		box-shadow: 0 0 .25em .03em #a07850
	}

	.pokemon-detail__profile .pokemon-type__type--rock:before {
		-webkit-box-shadow: 0 0 .01px .1em #b48c64;
		box-shadow: 0 0 .01px .1em #b48c64
	}

	.pokemon-detail__profile .pokemon-type__type--rock:after {
		background: radial-gradient(at 30% 30%, #b48c64, #a07850)
	}

	.pokemon-detail__profile .pokemon-type__type--ghost {
		border-color: #a08cff;
		background-color: #8c78f0;
		-webkit-box-shadow: 0 0 .25em .03em #8c78f0;
		box-shadow: 0 0 .25em .03em #8c78f0
	}

	.pokemon-detail__profile .pokemon-type__type--ghost:before {
		-webkit-box-shadow: 0 0 .01px .1em #a08cff;
		box-shadow: 0 0 .01px .1em #a08cff
	}

	.pokemon-detail__profile .pokemon-type__type--ghost:after {
		background: radial-gradient(at 30% 30%, #a08cff, #8c78f0)
	}

	.pokemon-detail__profile .pokemon-type__type--dragon {
		border-color: #5078dc;
		background-color: #3c64c8;
		-webkit-box-shadow: 0 0 .25em .03em #3c64c8;
		box-shadow: 0 0 .25em .03em #3c64c8
	}

	.pokemon-detail__profile .pokemon-type__type--dragon:before {
		-webkit-box-shadow: 0 0 .01px .1em #5078dc;
		box-shadow: 0 0 .01px .1em #5078dc
	}

	.pokemon-detail__profile .pokemon-type__type--dragon:after {
		background: radial-gradient(at 30% 30%, #5078dc, #3c64c8)
	}

	.pokemon-detail__profile .pokemon-type__type--dark {
		border-color: #787878;
		background-color: #646464;
		-webkit-box-shadow: 0 0 .25em .03em #646464;
		box-shadow: 0 0 .25em .03em #646464
	}

	.pokemon-detail__profile .pokemon-type__type--dark:before {
		-webkit-box-shadow: 0 0 .01px .1em #787878;
		box-shadow: 0 0 .01px .1em #787878
	}

	.pokemon-detail__profile .pokemon-type__type--dark:after {
		background: radial-gradient(at 30% 30%, #787878, #646464)
	}

	.pokemon-detail__profile .pokemon-type__type--steel {
		border-color: #aac8f0;
		background-color: #96b4dc;
		-webkit-box-shadow: 0 0 .25em .03em #96b4dc;
		box-shadow: 0 0 .25em .03em #96b4dc
	}

	.pokemon-detail__profile .pokemon-type__type--steel:before {
		-webkit-box-shadow: 0 0 .01px .1em #aac8f0;
		box-shadow: 0 0 .01px .1em #aac8f0
	}

	.pokemon-detail__profile .pokemon-type__type--steel:after {
		background: radial-gradient(at 30% 30%, #aac8f0, #96b4dc)
	}

	.pokemon-detail__profile .pokemon-type__type--fairy {
		border-color: #ffafdc;
		background-color: #ff7eb8;
		-webkit-box-shadow: 0 0 .25em .03em #ff7eb8;
		box-shadow: 0 0 .25em .03em #ff7eb8
	}

	.pokemon-detail__profile .pokemon-type__type--fairy:before {
		-webkit-box-shadow: 0 0 .01px .1em #ffafdc;
		box-shadow: 0 0 .01px .1em #ffafdc
	}

	.pokemon-detail__profile .pokemon-type__type--fairy:after {
		background: radial-gradient(at 30% 30%, #ffafdc, #ff7eb8)
	}

	.pokemon-detail__profile .pokemon-type__type--area {
		border-color: #fff;
		background-color: #fff;
		-webkit-box-shadow: 0 0 .25em .03em #fff;
		box-shadow: 0 0 .25em .03em #fff
	}

	.pokemon-detail__profile .pokemon-type__type--area:before {
		-webkit-box-shadow: 0 0 .01px .1em #fff;
		box-shadow: 0 0 .01px .1em #fff
	}

	.pokemon-detail__profile .pokemon-type__type--area:after {
		background: radial-gradient(at 30% 30%, #fff, #fff)
	}

	.pokemon-detail__profile .pokemon-info--inner:after,
	.pokemon-detail__profile .pokemon-type:after {
		content: "";
		display: table;
		clear: both;
	}

	.pokemon-detail__profile .pokemon-type {
		position: relative;
		color: #fff;
		text-align: center;
	}

	.pokemon-detail__profile .pokemon-img__blur,
	.pokemon-detail__profile .pokemon-img__front {
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	.pokemon-detail__profile .pokemon-img__back {
		width: 100%;
	}

	.pokemon-detail__profile .pokemon-img {
		width: 100%;
		position: relative;
	}

	.pokemon-detail__profile .pokemon-main {
		position: relative;
	}

	.pokemon-detail__profile:before {
		content: "";
		height: 0;
		width: 100%;
		display: block;
	}

	.pokemon-detail__profile {
		width: 100%;
		margin: 0 auto;
		z-index: 100;
		top: 0;
	}

	.pokemon-detail__slider .pokemon-slider__wrapper:after {
		content: "";
		height: 0;
		display: block;
	}

	.pokemon-detail__slider .pokemon-slider__wrapper {
		position: relative;
		z-index: 101;
	}

	.pokemon-detail__slider .non-visible {
		visibility: hidden;
	}


	.pokemon-detail__slider .pokemon-slider__main-subname {
		margin: 1.5em 0 0;
	}

	.pokemon-detail__slider .pokemon-slider__main-name,
	.pokemon-detail__slider .pokemon-slider__main-subname {
		line-height: 2;
		color: #fff;
		text-shadow: 0 0 3px #000, 2px 2px 7px #9be1ff, -2px -2px 7px #9be1ff;
		margin-bottom: -3.5em;
	}

	.pokemon-detail__slider .pokemon-slider__main-no {
		line-height: 0;
	}

	.pokemon-detail__slider .pokemon-slider__main {
		position: absolute;
		z-index: 100;
		left: 0;
		right: 0;
	}

	.pokemon-detail__slider .pokemon-slider {
		color: #b3eafe;
	}

	.pokemon-detail__slider {
		text-align: center;
		position: relative;
		width: 100%;
		z-index: 200;
	}

	.pokemon-detail__header__back-to-top {
		color: #000;
	}

	.pokemon-detail__header__inner a {
		display: inline-block;
		width: 30%;
	}

	.pokemon-detail__header {
		margin: 0 auto;
		position: relative;
		z-index: 150;
	}

	.pokemon-detail__header span {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		text-align: center;
		width: 100%;
	}

	.pokemon-detail-contents {
		background-image: url(../../assets/main_bg.jpg);
		height: 800px;
		background-position: top;
		background-repeat: no-repeat, repeat;
		background-size: 100% auto;
		background-color: #0a141e;
		position: relative;
	}

	.pokemon-detail {
		color: #000;
		font-size: 1.6rem;
		line-height: 1.6rem;
		max-width: 1400px;
		width: 100%;
		margin: 0 auto;
	}

	#pokemon .contents {
		width: 80%;
		min-width: 950px;
		max-width: 1400px;
		margin: 0 auto;
	}
</style>
