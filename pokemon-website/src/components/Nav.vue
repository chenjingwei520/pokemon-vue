<template>
	<div id="nav">
		<div class="logo">
			<h1 class="logo-name">
				<router-link to="/">
					<img src="../assets/pokemo-logo.png" alt="pokemon logo" width="150px">
				</router-link>
			</h1>
		</div>
		<ul>
			<li class="nav-item">
				<router-link to="/game" class="game"><span>游戏</span></router-link>
			</li>
			<li class="nav-item">
				<router-link to="/card" class="card"><span>卡牌游戏</span></router-link>
			</li>
			<li class="nav-item">
				<router-link to="/movie" class="movie"><span>电影</span></router-link>
			</li>
			<li class="nav-item">
				<router-link to="/shop" class="shopping"><span>商品</span></router-link>
			</li>
			<li class="nav-item">
				<router-link to="/pokedex" class="pokedex"><span>宝可梦图鉴</span></router-link>
			</li>
			<li class="nav-item nav-item-login">
				<router-link to="/login" class="login"><img src="../assets/pikaqiu.png" alt="user" width="34px" height="34px"><span>登录/注册</span></router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Nav'
	}
</script>

<style>
	#nav {
		/* max-width: 1320px; */
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
		min-width: 1090px;
		display: flex;
		width: 100%;
		height: 60px;
		background-color: #ffcc00;
		justify-content: space-between;
		-webkit-box-pack: justify;
		-webkit-box-align: center;
		align-items: center;
		/*为了便于查看区域范围大小，故而加个背景色*/
		padding: 0 5px;
		margin: 0 auto;
		/*水平居中*/
		/* margin-top: 30px; */
		/*距离顶部30px*/
	}

	#nav .logo-name {
		font-size: 1rem;
		width: 150px;
		text-align: center;
	}

	#nav ul {
		width: 100%;
		height: 60px;
		overflow: hidden;
		margin: 0 auto;
		/* 如果导航栏选项多，允许滚动 */
	}

	.nav-item {
		float: left;
		font-size: 16px;
		font-weight: 700;
		width: calc(100% / 6);
		line-height: 60px;
		list-style: none;
		text-align: center;
	}

	.nav-item a {
		display: flex;
		justify-content: center;
		height: 100%;
		width: 100%;
		text-decoration: none;
		position: relative;
		transition: .3s;
	}

	.nav-item a::after {
		content: "";
		width: 98%;
		height: 100%;
		display: block;
		position: absolute;
		bottom: -92%;
		transition: .3s all ease;
		left: 0;
	}

	.nav-item a span {
		position: relative;
		z-index: 2;
	}

	.nav-item a:hover {
		color: white;
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
		transform: translate(0, 35%);
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
