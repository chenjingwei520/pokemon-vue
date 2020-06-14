<template>
	<div id="card-list">
		<ul class="card-list-body">
			<li class="card-element" v-for="(item, index) in card_list" :key="index">
				<a href="">
					<Card :type="item.type" :hidden_header="item.isHidden" :img_src="item.src" :title="item.title"></Card>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import Card from './Card.vue'

	export default {
		props: {
			'card_list': Array
		},
		name: 'CardList',
		components: {
			Card
		},
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

	@media screen and (max-width: 767px) {
		.card-element {
			width: calc(50% - 8px);
			margin: 0 4px 15px;
			float: left;
		}
	}



	.card-element>a {
		display: block;
		text-decoration: none;
		height: 100%;
	}
</style>
