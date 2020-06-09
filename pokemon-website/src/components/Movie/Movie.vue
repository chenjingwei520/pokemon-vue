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
					<CardList></CardList>
					<div class="page-content">
						<div class="series-content">
							<ul class="series-list">
								<li class="serie-item" v-for="(item, index) in items" :key="index">
									<a href="/">
										<Card :movie="true" :hidden_header="item.isHidden" ></Card>
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
				items: [
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					},
					{
						isHidden: true
					}
				]
			}
		}

	}
</script>

<style>
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

	.serie-item {
		width: calc(16.666% - 10px);
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .15);
		margin: 0 5px 20px;
	}
</style>
