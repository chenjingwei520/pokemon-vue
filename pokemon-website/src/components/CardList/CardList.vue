<template>
	<div id="card-list">
		<ul class="card-list-body">
			<li class="card-element">
				<a href="">
					<Card :goods="true"></Card>
				</a>
			</li>
			<li class="card-element">
				<a href="">
					<Card :movie="true"></Card>
				</a>
			</li>
			<li class="card-element">
				<a href="">
					<Card :game="true"></Card>
				</a>
			</li>
			<li class="card-element">
				<a href="">
					<Card :card_game="true"></Card>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import Card from './Card.vue'

	export default {
		name: 'CardList',
		components: {
			Card
		}
	}
</script>

<style>
	.card-list-body {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin: 0 -5px;
	}

	.card-element {
		width: calc(25% - 10px);
		margin: 0 5px 20px;
		background: #FFF;
		border-radius: 3px;
		overflow: hidden;
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
	}

	.card-element>a {
		display: block;
		text-decoration: none;
		height: 100%;
	}
</style>
