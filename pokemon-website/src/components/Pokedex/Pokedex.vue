<template>
	<Layout>
		<Header>
			<Nav style="background-color: #FFFFFF;"></Nav>
		</Header>
		<Content style="background: #1b252f;">
			<div class="pokemon-list-content">
				<div class="pokemon-list">
					<div class="pokemon-list-header">
						<div class="pokemon-list-header-inner">
							<router-link to="/pokedex">
								<span class="size-20">宝可梦图鉴</span>
							</router-link>
						</div>
					</div>
					<div class="pokemon-list-main">
						<PokemonImg></PokemonImg>
						<form class="pokemon-search">
							<div class="pokemon-search-title size-16">
								<span id="pokemon_search_title" style="font-size: 100%;visibility: visible;line-height: 1.6">使用名称或者图鉴编号搜索</span>
							</div>
							<div class="pokemon-search-form">
								<div class="pokemon-search-form-input-wrapper">
									<input type="text" class="pokemon-search-form-input size-20" autocomplete="off" v-model="input">
								</div>
								<div class="pokemon-search-form-button">
									<img src="../../assets/icon_magnifying_glass.png" alt="">
								</div>
							</div>
						</form>
					</div>
					<div class="pokemon-list-sub">
						<div class="pokemon-advance-search">
							<form>
								<div class="pokemon-advance-search-close" style="display: block;">
									<span class="pokemon-advance-search-close-toggle size-16">
										进阶搜索
									</span>
								</div>
							</form>
							<div class="pokemon-advance-search-sort">
								<div class="pokemon-advance-search-sort-close"></div>
								<div class="pokemon-advance-search-sort-open" v-show="advance_search_display">
									<div class="pokemon-advance-search-sort-open-header"></div>
									<div class="pokemon-advance-search-sort-open-body">
										<ul class="pokemon-advance-search-sort-open-items">
											<li class="pokemon-advance-search-sort-open-item size-14">图鉴编号由小到大</li>
											<li class="pokemon-advance-search-sort-open-item size-14">图鉴编号由小到大</li>
											<li class="pokemon-advance-search-sort-open-item size-14">重量由轻至重</li>
											<li class="pokemon-advance-search-sort-open-item size-14">重量由轻至重</li>
											<li class="pokemon-advance-search-sort-open-item size-14">身高由低至高</li>
											<li class="pokemon-advance-search-sort-open-item size-14">身高由低至高</li>
										</ul>
									</div>
								</div>
								<div class="pokemon-advance-search-sort-selected size-14" @click="handleAdvanceSearchDisplay">图鉴编号由小到大</div>
							</div>
						</div>
						<div class="pokemon-list">
							<div>
								<PokemonCard :pokemons="pokemons"></PokemonCard>
							</div>
							<div class="pokemon-list__load-more">
								<a>
									<div class="pokemon-list__load-more__button size-14">
										<span>查看更多</span>
									</div>
								</a>
							</div>

						</div>
					</div>
				</div>
			</div>
		</Content>
		<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
	</Layout>
</template>


<script>
	import Nav from '../Nav.vue';
	import PokemonImg from './PokemonImg.vue'
	import PokemonCard from './pokemonCard.vue'
	export default {
		name: 'Pokedex',
		components: {
			Nav,
			PokemonImg,
			PokemonCard
		},
		data() {
			return {
				input: '',
				advance_search_display: false,
				pokemons: [],
				page: 1
			}
		},
		methods: {
			handleAdvanceSearchDisplay() {
				this.advance_search_display = !this.advance_search_display;
			},

		},
		created() {
			(async () => {
				const res = await this.$http.get('http://localhost:8000/pokemons');
				const json = await res.json();
				json.forEach((item) => {
					item.types = eval(item.types);
				})
				this.pokemons = json;
			})()
		},
		computed: {}

	}
</script>

<style>
	.pokemon-list__load-more {
		width: 100%;
		/* display: none; */
		padding-bottom: 3%;
		text-align: center;
	}



	.pokemon-list {
		color: #000;
		font-size: 1rem;
		line-height: 1.6 !important;
		max-width: 1400px;
		width: 100%;
		margin: 0px auto;
	}

	.pokemon-list-header {
		z-index: 110;
		margin: 0 auto;
		position: relative;

	}

	.pokemon-list-header span {
		position: absolute;
		top: 48%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
		color: #000;
		width: 30%;
	}

	.pokemon-list-main {
		z-index: 100;
		position: relative;
		/* height: 470px; */
	}

	.pokemon-list-main .pokemon-img__back {
		width: 100%;
	}

	.pokemon-list__load-more__button {
		color: #b3eafe;
		position: relative;
		display: inline-block;
	}

	.pokemon-list__load-more__button:before {
		content: "";
		display: block;
	}

	.pokemon-list-content {
		background-position: top;
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-color: #0a141e;
		position: relative;
		overflow: hidden;
	}

	.pokemon-list__load-more__button span {
		position: absolute;
		top: 50%;
		right: 0;
		left: 0;
		text-align: center;
		transform: translateY(-50%);
		text-shadow: 0 0 5px #b3eafe, 0 0 5px #b3eafe;
	}

	@media screen and (min-width: 1401px) {
		.pokemon-list .size-20 {
			font-size: 2rem !important;
		}

		.pokemon-list-content {
			min-width: 950px;
			max-width: 1400px;
			margin: 0 auto;
		}

		.pokemon-list .size-16 {
			font-size: 1.6rem !important;
		}

		.pokemon-list .size-22 {
			font-size: 2.2rem !important;
		}
	}

	@media screen and (max-width: 767px) {

		.pokemon-list-main .pokemon-img-05 {
			top: -10%;
			left: 1%;
		}

		.pokemon-list-main .pokemon-img-random {
			width: 28%;
		}

		.pokemon-list-main .pokemon-img-01,
		.pokemon-list-main .pokemon-img-02,
		.pokemon-list-main .pokemon-img-03,
		.pokemon-list-main .pokemon-img-04 {
			display: none;
		}

		body>.contents {
			font-size: 1.4rem;
			min-width: 320px;
		}

		.pokemon-list-content {
			background-image: url(../../assets/list_sp_top_bg.jpg);
		}

		.pokemon-list-header {
			width: 100%;
			z-index: 90;
			position: absolute;
		}

		.pokemon-list-header:before {
			content: "";
			height: 0;
			display: block;
			padding-top: 7.2%;
		}

		.pokemon-list-header-inner {
			position: relative;
		}

		.pokemon-list-header-inner:after {
			content: "";
			height: 0;
			display: block;
			padding-top: 9.33333333%;
		}

		.pokemon-list-header:after {
			content: "";
			height: 0;
			display: block;
			padding-top: 26.66666667%;
		}

		.pokemon-list .size-20 {
			font-size: 6vw !important;
		}

		.pokemon-list-header span {
			width: 80%;
		}

		.pokemon-list-main:before {
			content: "";
			height: 0;
			display: block;
			padding-top: 29.33333333%;
			z-index: 100;
		}

		.pokemon-list-main .pokemon-img {
			text-align: center;
			position: relative;
			z-index: 200;
		}

		.pokemon-list-main .pokemon-img__back {
			display: none;
		}

		.pokemon-list-main .pokemon-img-06 {
			top: auto;
			bottom: 10%;
			left: 1%;
		}
	}

	@media screen and (min-width: 768px) {

		.pokemon-list-content {
			background-image: url(../../assets/list_top_bg.jpg);
		}

		.pokemon-list__load-more__button:before {
			padding-top: 10.8%;
		}

		.pokemon-list__load-more__button {
			width: 46.2%;
			background-image: url(../../assets/morebtn_bg.png);
			background-size: contain;
			background-repeat: no-repeat;
		}

		.pokemon-list-header:after {
			content: "";
			height: 0;
			display: block;
			padding-top: 9.28571429%;
		}

		.pokemon-list-header {
			width: 100%;
			background-image: url(../../assets/pokedex_bg.png);
			background-size: 100% auto;
		}

		.pokemon-list-main .pokemon-img__back {
			animation: rotate-anime 3s linear infinite;
		}

		.pokemon-list-main .pokemon-img {
			position: absolute;
			top: -45%;
			left: 0;
		}

		.pokemon-list-main .pokemon-img-center {
			margin: 0 39.28571429%;
		}

		.pokemon-list-main .pokemon-img-center:before {
			content: "";
			height: 0;
			display: block;
			padding-top: 67%;
		}

		.pokemon-list-main .pokemon-img-center:after {
			content: "";
			height: 0;
			display: block;
			padding-top: 21.42857143%;
		}

		.pokemon-list-main .pokemon-img-random {
			width: 8.92857143%;
		}

		.pokemon-list-main:after {
			padding-top: 33.57142857%;
		}

		.pokemon-list-main .pokemon-search {
			top: 67%;
		}

		.pokemon-list-main .pokemon-search-title {
			margin-left: 10%;
		}

		.pokemon-list-main .pokemon-search-form {
			width: 50%;
			left: 10%;
			position: absolute;
		}

		.pokemon-list-main .pokemon-search-form-input-wrapper {
			content: "";
			height: 0;
			display: block;
			padding-top: 7.14285714%;
		}

		.pokemon-list-main .pokemon-search-form:after {
			padding-top: 7.14285714%;
		}

		.pokemon-list-sub .pokemon-advance-search-close {
			background-image: url(../../assets/advance_search_close_bg.png);
		}

		.pokemon-list-sub .pokemon-advance-search-close:after {
			padding-top: 7.07142857%;
		}

		.pokemon-list-sub .pokemon-advance-search-close-toggle {
			bottom: 0;
			width: 30%;
			margin-left: 35%;
		}

		.pokemon-list-sub .pokemon-advance-search-close-toggle:after {
			content: "";
			height: 0;
			display: block;
			padding-top: 10.71428571%;
		}

		.pokemon-list-sub .pokemon-advance-search:after {
			padding-top: 3.21428571%;
		}

		.pokemon-list-sub .pokemon-advance-search-sort {
			position: absolute;
			bottom: 0;
			width: 33.85714286%;
			right: 2.85%;
			z-index: 9999;
		}

		.pokemon-list-sub .pokemon-advance-search-sort-close {
			background-image: url(../../assets/sort_close_bg.png);
		}

		.pokemon-list-sub .pokemon-advance-search-sort-close:after {
			padding-top: 16.03375527%;
		}

		.pokemon-list-sub .pokemon-advance-search-sort-open {
			position: absolute;
			top: 0;
			left: 0;
		}

		.pokemon-list-sub .pokemon-advance-search-sort-open-header {
			background-image: url(../../assets/sort_open_bg.png);
		}

		.pokemon-list-sub .pokemon-advance-search-sort-open-header:after {
			padding-top: 15.82278481%;
		}

		.pokemon-list-sub .pokemon-advance-search-sort-open-body {
			background-image: url(../../assets/sort_open_bg.png);
		}

		.pokemon-list-sub .pokemon-advance-search-sort-selected {
			top: 1.5em;
		}

		.pokemon-list-sub .pokemon-list--box--wrapper {
			width: 25%;
		}

		.pokemon-list-main .pokemon-img-05 {
			top: 30%;
			left: 30.5%;
		}

		.pokemon-list-main .pokemon-img-06 {
			top: 51%;
			left: 30.5%;
		}
	}



	@keyframes visible_pokemon_list {
		100% {
			opacity: 1;
		}
	}

	.pokemon-list-sub .pokemon-list--box.visible {
		animation: visible_pokemon_list 1s both;
	}

	.pokemon-list-sub .pokemon-list--box {
		display: block;
		width: 100%;
		opacity: 0;
		background: transparent url(../../assets/list_pokemon_bg.png) 50% 50% no-repeat;
		background-size: auto 100%;
		position: relative;
		margin-bottom: 1em;
	}

	.pokemon-list-sub .pokemon-list--box__img {
		position: absolute;
		width: 60%;
		left: 20%;
		top: 8%;
	}

	.pokemon-list-sub .pokemon-list--box__no {
		position: absolute;
		width: 80%;
		left: 10%;
		top: 57%;
		color: #b4ebff;
	}

	.pokemon-list-sub .pokemon-list--box__name {
		position: absolute;
		width: 80%;
		left: 10%;
		top: 62%;
		color: #fff;
	}

	.pokemon-list-sub .pokemon-list--box__subname {
		position: absolute;
		width: 80%;
		left: 10%;
		top: 72%;
		color: #fff;
	}

	.pokemon-list-sub .pokemon-list--box--wrapper {
		position: relative;
		float: left;
		display: block;
	}

	.pokemon-list-sub .pokemon-list--box__types {
		position: absolute;
		width: 80%;
		left: 10%;
		bottom: 5%;
	}

	.pokemon-list-sub .pokemon-list--box__type {
		width: 45%;
		float: left;
		position: relative;
		border-radius: 1em;
		border: 1px solid #000;
		margin: .5em .25em;
	}

	.pokemon-list-sub .pokemon-list--box__type span {
		position: relative;
		color: #fff;
		text-align: center;
		width: 100%;
		display: block;
		text-shadow: 0 0 5px rgba(0, 0, 0, .75);
	}

	.pokemon-list-sub .pokemon-list--box__type:nth-child(2n) {
		float: right;
	}

	.pokemon-list-sub .pokemon-list--box__type--fire {
		border-color: #ff6900;
		background-color: #ff3700;
		box-shadow: 0 0 0.25em 0.03em #ff3700;
	}

	.pokemon-list-sub .pokemon-list--box__type--dragon {
		border-color: #5078dc;
		background-color: #3c64c8;
		-webkit-box-shadow: 0 0 0.25em 0.03em #3c64c8;
		box-shadow: 0 0 0.25em 0.03em #3c64c8;
	}

	.pokemon-list-sub .pokemon-list--box__type--flying {
		border-color: #78dcff;
		background-color: #79bcd7;
		-webkit-box-shadow: 0 0 0.25em 0.03em #79bcd7;
		box-shadow: 0 0 0.25em 0.03em #79bcd7;
	}

	.pokemon-list-sub .pokemon-list--box__type--steel {
		border-color: #aac8f0;
		background-color: #96b4dc;
		-webkit-box-shadow: 0 0 0.25em 0.03em #96b4dc;
		box-shadow: 0 0 0.25em 0.03em #96b4dc;
	}

	.pokemon-list-sub .pokemon-list--box__type--electric {
		border-color: #ffe100;
		background-color: #e4b700;
		-webkit-box-shadow: 0 0 0.25em 0.03em #e4b700;
		box-shadow: 0 0 0.25em 0.03em #e4b700;
	}

	.pokemon-list-sub .pokemon-list--box__type--ghost {
		border-color: #a08cff;
		background-color: #8c78f0;
		-webkit-box-shadow: 0 0 0.25em 0.03em #8c78f0;
		box-shadow: 0 0 0.25em 0.03em #8c78f0;
	}

	.pokemon-list-sub .pokemon-list--box__type--poison {
		border-color: #d28cd2;
		background-color: #be78be;
		-webkit-box-shadow: 0 0 0.25em 0.03em #be78be;
		box-shadow: 0 0 0.25em 0.03em #be78be;
	}

	.pokemon-list-sub .pokemon-list--box__type--fighting {
		border-color: #dc6900;
		background-color: #c85500;
		-webkit-box-shadow: 0 0 0.25em 0.03em #c85500;
		box-shadow: 0 0 0.25em 0.03em #c85500;
	}

	.pokemon-list-sub .pokemon-list--box__type--fairy {
		border-color: #ffafdc;
		background-color: #ff7eb8;
		-webkit-box-shadow: 0 0 0.25em 0.03em #ff7eb8;
		box-shadow: 0 0 0.25em 0.03em #ff7eb8;
	}

	.pokemon-list-sub .pokemon-list--box__type--psychic {
		border-color: #f08cdc;
		background-color: #dc78c8;
		-webkit-box-shadow: 0 0 0.25em 0.03em #dc78c8;
		box-shadow: 0 0 0.25em 0.03em #dc78c8;
	}

	.pokemon-list-sub .pokemon-list--box__type--grass {
		border-color: #b4f000;
		background-color: #92bf19;
		-webkit-box-shadow: 0 0 0.25em 0.03em #92bf19;
		box-shadow: 0 0 0.25em 0.03em #92bf19;
	}

	.pokemon-list-sub .pokemon-list--box__type--normal {
		border-color: #dcdcdc;
		background-color: #a0a0a0;
		-webkit-box-shadow: 0 0 0.25em 0.03em #a0a0a0;
		box-shadow: 0 0 0.25em 0.03em #a0a0a0;
	}

	.pokemon-list-sub .pokemon-list--box__type--water {
		border-color: #14b9ff;
		background-color: #0094e5;
		-webkit-box-shadow: 0 0 0.25em 0.03em #0094e5;
		box-shadow: 0 0 0.25em 0.03em #0094e5;
	}

	.pokemon-list-sub .pokemon-list--box__type--bug {
		border-color: #46c846;
		background-color: #32b432;
		-webkit-box-shadow: 0 0 0.25em 0.03em #32b432;
		box-shadow: 0 0 0.25em 0.03em #32b432;
	}

	.pokemon-list-sub .pokemon-list--box__type--dark {
		border-color: #787878;
		background-color: #646464;
		-webkit-box-shadow: 0 0 0.25em 0.03em #646464;
		box-shadow: 0 0 0.25em 0.03em #646464;
	}

	.pokemon-list-sub .pokemon-list--box__type--ground {
		border-color: #fac85a;
		background-color: #cca142;
		-webkit-box-shadow: 0 0 0.25em 0.03em #cca142;
		box-shadow: 0 0 0.25em 0.03em #cca142;
	}

	.pokemon-list-sub .pokemon-list--box__type--rock {
		border-color: #b48c64;
		background-color: #a07850;
		-webkit-box-shadow: 0 0 0.25em 0.03em #a07850;
		box-shadow: 0 0 0.25em 0.03em #a07850;
	}

	.pokemon-list-sub .pokemon-list--box__type {
		width: 45%;
		float: left;
		position: relative;
		border-radius: 1em;
		border: 1px solid #000;
		margin: .5em .25em;
	}

	.pokemon-list-sub .pokemon-list {
		width: 100%;
		padding: 2em 3%;
	}

	.pokemon-list-sub .pokemon-list--box:after {
		content: "";
		height: 0;
		display: block;
		padding-top: 152.74390244%;
	}

	.pokemon-list-sub .pokemon-list--box__types:after,
	.pokemon-list-sub .pokemon-list:after {
		content: "";
		display: table;
		clear: both;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-open-header:after {
		content: "";
		height: 0;
		display: block;
	}

	.pokemon-list-sub .pokemon-advance-search:after {
		content: "";
		height: 0;
		display: block;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-selected {
		position: absolute;
		color: #fff;
		width: 100%;
		height: 30px;
		line-height: 2em;
		text-align: center;
		z-index: 110;
		cursor: pointer;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-open-items {
		padding: 0 0 1.5em;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-open-item {
		color: #fff;
		width: 86%;
		margin: 0 auto;
		text-align: center;
		cursor: pointer;
		padding: .3em 0;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-open-body {
		background-size: 100% auto;
		background-position: 50% 100%;
		position: relative;
		background-repeat: no-repeat;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-open-header {
		background-size: 100% auto;
		position: relative;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-open {
		width: 100%;
		/* display: none; */
	}

	.pokemon-list-sub .pokemon-advance-search-sort-close {
		background-size: 100% auto;
		position: relative;
	}

	.pokemon-list-sub .pokemon-advance-search-sort-close:after {
		content: "";
		height: 0;
		display: block;
	}

	.pokemon-list-sub .pokemon-advance-search-close {
		background-size: 100% auto;
		position: relative;
	}

	.pokemon-list-sub .pokemon-advance-search-close:after {
		content: "";
		height: 0;
		display: block;
	}

	.pokemon-list-sub .pokemon-advance-search-close-toggle {
		text-align: center;
		cursor: pointer;
		color: #fff;
		text-shadow: 1px 1px 3px #fff, -1px -1px 3px #fff;
		position: absolute;
		display: block;
	}

	@media screen and (max-width: 1400px) and (min-width: 950px) {
		.pokemon-list .size-16 {
			font-size: 1.6vw !important;
		}

		.pokemon-list .size-14 {
			font-size: 1.4vw !important;
		}
	}

	@keyframes rotate-anime {
		0% {
			-webkit-transform: rotate(0);
			transform: rotate(0);
		}

		100% {
			-webkit-transform: rotate(1turn);
			transform: rotate(1turn);
		}
	}

	.pokemon-list-main .pokemon-img-center {
		top: 0;
		left: 0;
		position: absolute;
		text-align: center;
		opacity: 0;
	}

	.pokemon-list-main .pokemon-img-random {
		position: absolute;
		opacity: 0;
	}

	.pokemon-list-main .pokemon-img-center img {
		width: 100%;
		background-image: url(../../assets/random_center_bg.png);
		background-size: 100% auto;
		padding: 8%;
	}

	@keyframes random_pokemon {
		100% {
			opacity: 1;
		}
	}

	.pokemon-list-main .pokemon-img-center.visible {
		animation-name: random_pokemon;
		animation-duration: 2s;
		animation-fill-mode: both;
		animation-delay: .6s;
	}

	.pokemon-list-main .pokemon-img-random.visible {
		animation-name: random_pokemon;
		animation-duration: 2s;
		animation-fill-mode: both;
	}



	.pokemon-list-main .pokemon-img-random img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		padding: 4%;
	}

	.pokemon-list-main .pokemon-img-01 {
		top: 40%;
		left: 5%;
		animation-delay: 1.6s;
	}

	.pokemon-list-main .pokemon-img-02 {
		top: 30%;
		left: 13.5%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-03 {
		top: 51%;
		left: 13.5%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}


	.pokemon-list-main .pokemon-img-04 {
		top: 40%;
		left: 22%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-05 {
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-06 {
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-12 {
		top: 40%;
		right: 5%;
		animation-delay: 1.6s;
	}

	.pokemon-list-main .pokemon-img-11 {
		top: 30%;
		right: 13.5%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-10 {
		top: 51%;
		right: 13.5%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}


	.pokemon-list-main .pokemon-img-09 {
		top: 40%;
		right: 22%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-08 {
		top: 30%;
		right: 30.5%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-07 {
		top: 51%;
		right: 30.5%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-random:after {
		content: "";
		height: 0;
		display: block;
		padding-top: 100%;
		background-image: url(../../assets/random_bg.png);
		background-size: 100% auto;
	}

	.pokemon-list-main:after {
		content: "";
		height: 0;
		display: block;
	}

	.pokemon-list-main .pokemon-search-title {
		position: relative;
		color: #b3eafe;
		text-shadow: 0 0 5px #b3eafe, 0 0 5px #b3eafe;
		margin-bottom: .5em;
	}

	.pokemon-list-main .pokemon-search {
		width: 100%;
		position: absolute;
	}

	.pokemon-list-main .pokemon-search-form-input-wrapper {
		position: absolute;
		top: 0;
		width: 85.71428571%;
		height: 100%;
		border-radius: 50px 0 0 50px;
		-webkit-box-shadow: 0 0 2px 1px #fff;
		box-shadow: 0 0 2px 1px #fff;
		background: -webkit-gradient(linear, left top, left bottom, from(#f0f0f0), color-stop(15%, #fff), color-stop(85%, #fff), to(#f0f0f0));
		background: linear-gradient(180deg, #f0f0f0, #fff 15%, #fff 85%, #f0f0f0);
	}

	.pokemon-list-main .pokemon-search-form-input {
		width: 90%;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		border: 0;
		outline: 0;
		background-color: transparent;
	}

	.pokemon-list-main .pokemon-search-form-button {
		position: absolute;
		top: 0;
		right: 0;
		width: 14.28571429%;
		height: 100%;
		background-color: #b4ebff;
		border-radius: 0 50px 50px 0;
		-webkit-box-shadow: 0 0 2px 1px #fff;
		box-shadow: 0 0 2px 1px #fff;
		cursor: pointer;
	}

	.pokemon-list-main .pokemon-search-form-button img {
		width: 30%;
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.pokemon-list-main .pokemon-search-form:after {
		content: "";
		height: 0;
		display: block;
	}

	.pokemon-list-sub {
		z-index: 110;
		position: relative;
		background-image: url(../../assets/list_bg.jpg);
		background-position: top;
		background-repeat: repeat;
		background-size: 100% auto;
	}

	.pokemon-list-sub .pokemon-advance-search {
		position: relative;
	}
</style>
