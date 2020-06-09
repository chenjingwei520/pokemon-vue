<template>
	<div class="card-container" :class="{'card-goods': isGoods, 'card-game': isGame, 'card-movie': isMovie, 'card-card-game':isCardGame}">
		<header class="card-header" :class="{'hidden-header': isHideen}">
			<div class="card-header-category">
				<img src="../../assets/pokeball.png" alt="" width="20px">
				{{ handleTitle }}
			</div>
		</header>
		<figure class="card-thumb">
			<img src="../../assets/goods1.jpg" alt="">
		</figure>
		<div class="card-content">
			<p>Pokémon x LeSportsac聯乘系列 展開歷險之旅</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			'goods': Boolean,
			'game': Boolean,
			'movie': Boolean,
			'card_game': Boolean,
			'hidden_header': Boolean
		},
		name: 'Card',
		data() {
			return {
				isGoods: this.goods,
				isGame: this.game,
				isMovie: this.movie,
				isCardGame: this.card_game,
				isHideen: this.hidden_header
			}
		},
		computed: {
			handleTitle: function() {
				if (this.goods) return '商品'
				else if (this.game) return '游戏'
				else if (this.movie) return '电影'
				else if (this.card_game) return '卡牌游戏'
				else return '没有标题'
			}
		}
	}
</script>

<style>
	.card-container {
		position: relative;
		height: 100%;
	}

	.card-goods .card-header {
		background: #4caf50;
	}

	.card-game .card-header {
		background: #f44336
	}

	.card-movie .card-header {
		background: #ff9600
	}
	
	.card-card-game .card-header {
		background: #3f51b5
	}
	

	.card-header {
		font-size: 1rem;
		font-weight: 700;
		color: #FFF;
		padding: 4px 10px;
	}

	.card-header-category {
		/* line-height: 1; */
	}

	.card-header-category img {
		position: relative;
		transform: translate(0, 20%);
	}

	.card-thumb {
		margin: 0;
		border-bottom: 4px solid;
	}

	.card-goods .card-thumb {
		border-color: #4caf50;
	}

	.card-game .card-thumb {
		border-color: #f44336;
	}

	.card-movie .card-thumb {
		border-color: #ff9600;
	}
	
	.card-card-game .card-thumb{
		background: #3f51b5;
	}

	.card-thumb img {
		width: 100%;
		display: block;
	}

	.card-content {
		padding: 15px 15px 50px;
	}

	.card-content p {
		margin: 0;
		font-size: 1rem;
		line-height: 1.375;
		color: #000;
	}
	
	.hidden-header {
		display: none;
	}
</style>
