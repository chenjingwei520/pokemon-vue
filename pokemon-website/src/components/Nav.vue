<template>
	<div id="nav" class="global-header">
		<div class="global-header__body">
			<div class="global-header__title">
				<h1 class="global-header__site-name">
					<a href="/">
						<img src="../assets/pokemo-logo.png" alt="Pokemon" width="130">
					</a>
				</h1>
			</div>
			<nav class="nav-global">
				<div class="nav-global__body">
					<ul class="nav-global__list">
						<li class="nav-global__item">
							<router-link to="/game" class="game"><span>游戏</span></router-link>
						</li>
						<li class="nav-global__item">
							<router-link to="/cardgame" class="card"><span>卡牌游戏</span></router-link>
						</li>
						<li class="nav-global__item">
							<router-link to="/movie" class="movie"><span>电影</span></router-link>
						</li>
						<li class="nav-global__item">
							<router-link to="/shop" class="shopping"><span>商品</span></router-link>
						</li>
						<li class="nav-global__item">
							<router-link to="/pokedex" class="pokedex"><span>宝可梦图鉴</span></router-link>
						</li>
						<li class="nav-global__item .nav-global__item--what" v-if="isLogin">
							<router-link to="/user" class="user"><span>{{ name }}</span></router-link>
						</li>
						<li class="nav-global__item nav-item-login nav-global__item--what" v-if="!isLogin">
							<router-link to="/login" class="login"><img src="../assets/pikaqiu.png" alt="user" width="34px" height="34px"><span>登录/注册</span></router-link>
						</li>
					</ul>
					<div class="global-header__sp-close visible-xs">
						<button>
							<span>Close</span>
						</button>
					</div>
				</div>
			</nav>
		</div>


		<div class="global-header__sp-menu visible-xs" @click="handleVisible()">
			<button class="">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'Vuex';
	export default {
		name: 'Nav',
		data() {
			return {
				isVisible: false
			}
		},
		methods: {
			handleVisible() {
				this.isVisible = !this.isVisible;
				document.getElementsByClassName('nav-global')[0].style.display = this.isVisible ? 'block': '';
			}
		},
		computed: mapState(['name', 'isLogin']),

	}
</script>

<style>
	.global-header__sp-menu {
		position: absolute;
		left: 15px;
		position: absolute;
		top: 50%;
		transform: translate(0, -50%);
		z-index: 100;
	}

	.nav-global,
	.nav-global__body {
		width: 100%;
	}

	.global-header__body {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.global-header__site-name {
		margin: 0;
		font-size: 1rem;
		width: 170px;
		text-align: center;
		margin: 6px 0;
	}

	.global-header__sp-menu>button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		outline: 0;
		padding: 0;
		-webkit-appearance: none;
		text-decoration: none;
		width: 22px;
		height: 18px;
		display: block;
	}

	.global-header__sp-menu>button span:nth-of-type(1) {
		top: 7px;
	}

	.global-header__sp-menu>button span:nth-of-type(2) {
		top: 14px;
	}

	.global-header__sp-menu>button span:nth-of-type(3) {
		top: 0;
	}

	.global-header__sp-menu>button span {
		background-color: #4F4F4F;
		box-sizing: border-box;
		display: inline-block;
		height: 3px;
		left: 5px;
		border-radius: 10px;
		position: absolute;
		transition: all .4s;
		width: 22px;
	}

	@media screen and (min-width: 768px) {
		.visible-xs {
			display: none !important;
		}

		.global-header__body {
			max-width: 1320px;
			width: 100%;
			padding: 0 20px;
			margin: 0 auto;
		}

		.nav-global {
			display: block !important;
		}

	}

	.nav-global__list {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
	}

	.nav-global__item {
		text-align: center;
		margin: 0 2px;
		width: calc(100% / 6);
		min-height: 56px;
		overflow: hidden;
	}

	.nav-global {
		width: calc(100% - 170px);
	}

	.global-header {
		padding: 2px 0;
		background: #FFF;
	}

	.global-header__site-name a {
		display: block;
	}

	.nav-global__item>a {
		display: block;
		text-decoration: none;
		font-size: 1.4rem;
		font-weight: 700;
		padding: 13px 5px;
		line-height: 1.1;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		height: 100%;
		position: relative;
		transition: .3s;
	}

	.nav-global__item>a span {
		position: relative;
		z-index: 2;
	}

	.nav-global__item>a::after {
		content: "";
		width: 100%;
		height: 100%;
		display: block;
		position: absolute;
		bottom: -92%;
		transition: .3s all ease;
		left: 0;
	}

	@media screen and (max-width: 767px) {
		.nav-global__item>a::after {
			height: calc(100% - 6px);
			bottom: auto;
			top: 3px;
			left: 3px;
			width: 4px;
		}

		.nav-global__item>a span::before {
			font-family: icomoon !important;
			speak: none;
			font-style: normal;
			font-weight: 400;
			font-variant: normal;
			text-transform: none;
			line-height: 1;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			content: "";
			vertical-align: middle;
			margin-right: 8px;
			display: inline-block;
			margin-top: -2px;
		}

		.nav-global__item>a span {
			display: inline-block;
			vertical-align: middle;
		}

		.nav-global__item>a::before {
			font-family: icomoon !important;
			speak: none;
			font-style: normal;
			font-weight: 400;
			font-variant: normal;
			text-transform: none;
			line-height: 1;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
			content: ">";
			position: absolute;
			right: 15px;
			position: absolute;
			top: 50%;
			-webkit-transform: translate(0, -50%);
			transform: translate(0, -50%);
			font-size: 1rem;
		}

		.nav-global__item>a {
			text-align: left;
			display: block;
			padding: 15px;
			border-bottom: 1px solid #CCC;
			font-size: 1.3rem;
			background: #FFF;
		}

		.nav-global__item {
			width: 100%;
			margin: 0;
			height: auto !important;
			min-height: auto;
		}

		.nav-global {
			position: absolute;
			z-index: 10;
			width: 100%;
			display: none;
			left: 0;
			top: 51px;
			border-top: 1px solid #d1d1d1;
		}

		.nav-global__list {
			display: block;
		}

		.nav-global__body {
			position: relative;
			z-index: 10;
			background: #DFDFDF;
		}

		.global-header {
			padding: 0;
			position: relative;
			height: 51px;
		}

		.global-header__body {
			justify-content: center;
		}

		.global-header__site-name img {
			width: 105px;
		}

		.ivu-layout-header {
			height: 51px;
		}
	}

	.game {
		color: #f44336;
	}

	.card {
		color: #3f51b5;
	}

	.movie {
		color: #f44336;
	}

	.shopping {
		color: #4caf50;
	}

	.pokedex {
		color: #795548;
	}

	.game::after {
		background: #f44336;
	}

	.card::after {
		background: #3f51b5;
	}

	.movie::after {
		background: #ff9600;
	}

	.shopping::after {
		background: #4caf50;
	}

	.pokedex::after {
		background: #795548;
	}

	.game:hover::after {
		bottom: -10% !important;
		border-radius: 5px 5px 0 0;
	}

	.card:hover::after {
		bottom: -10% !important;
		border-radius: 5px 5px 0 0;
	}

	.movie:hover::after {
		bottom: -10% !important;
		border-radius: 5px 5px 0 0;
	}

	.shopping:hover::after {
		bottom: -10% !important;
		border-radius: 5px 5px 0 0;
	}

	.pokedex:hover::after {
		bottom: -10% !important;
		border-radius: 5px 5px 0 0;
	}

	.nav-item-login {
		position: relative;
		float: right;
		min-width: 150px;
	}

	.nav-item-login img {
		position: relative;
		/* transform: translate(0, 35%); */
		border-radius: 50%;
	}

	.nav-item-login>a span {
		margin-left: 10px;
		color: #555;
	}

	.nav-item-login::before {
		content: "";
		width: 1px;
		height: 26px;
		background: #d9d9d9;
		display: block;
		position: absolute;
		top: 50%;
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		left: 0;
	}

	.nav-item-login::after {
		content: "";
		width: 1px;
		height: 26px;
		background: #d9d9d9;
		display: block;
		position: absolute;
		top: 50%;
		-webkit-transform: translate(0, -50%);
		transform: translate(0, -50%);
		right: 0;
	}
</style>
