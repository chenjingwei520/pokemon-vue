<template>
	<div id="shop">
		<Layout>
			<Header>
				<Nav></Nav>
			</Header>
			<content>
				<List></List>
			</content>
			<Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
		</Layout>
	</div>
</template>

<script>
	import Nav from '../Nav.vue'
	import List from './list.vue'
	export default {
		name: 'Shop',
		components: {
			Nav,
			List
		}
	}
</script>

<style>
</style>
