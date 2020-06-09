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
						<div class="pokemon-img">
							<img src="../../assets/pokemon_list_bg.png" alt="" class="pokemon-img__back">
							<div>
								<div class="pokemon-img-center visible">
									<router-link to="/">
										<img src="../../assets/aerzhousi.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-01 visible">
									<router-link to="/">
										<img src="../../assets/penhuolongx.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-02 visible">
									<router-link to="/">
										<img src="../../assets/penhuolongy.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-03 visible">
									<router-link to="/">
										<img src="../../assets/banjila.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-04 visible">
									<router-link to="/">
										<img src="../../assets/baolilong.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-05 visible">
									<router-link to="/">
										<img src="../../assets/dazuiwa.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-06 visible">
									<router-link to="/">
										<img src="../../assets/jielaaola.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-07 visible">
									<router-link to="/">
										<img src="../../assets/huoyanji.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-08 visible">
									<router-link to="/">
										<img src="../../assets/kapuqiqi.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-09 visible">
									<router-link to="/">
										<img src="../../assets/lukaliou.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-10 visible">
									<router-link to="/">
										<img src="../../assets/caogang.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-11 visible">
									<router-link to="/">
										<img src="../../assets/xiyiwang.png" alt="">
									</router-link>
								</div>
							</div>
							<div>
								<div class="pokemon-img-random pokemon-img-12 visible">
									<router-link to="/">
										<img src="../../assets/ladiyasi.png" alt="">
									</router-link>
								</div>
							</div>
						</div>
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
				</div>
			</div>
		</Content>
		<!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
	</Layout>
</template>


<script>
	import Nav from '../Nav.vue'
	export default {
		name: 'Pokedex',
		components: {
			Nav
		},
		data() {
			return {
				input: ''
			}
		}

	}
</script>

<style>
	.pokemon-list-content {
		background-image: url(../../assets/list_top_bg.jpg);
		background-position: top;
		background-repeat: no-repeat;
		background-size: 100% auto;
		background-color: #0a141e;
		position: relative;
		overflow: hidden;
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
			font-size: 1.3rem !important;
		}
	}

	@media screen and (min-width: 768px) {

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
		top: 30%;
		left: 30.5%;
		-webkit-animation-delay: 1.5s;
		animation-delay: 1.5s;
	}

	.pokemon-list-main .pokemon-img-06 {
		top: 51%;
		left: 30.5%;
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
</style>
