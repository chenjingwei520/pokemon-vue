<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {}
	}
</script>

<style>
	#app {}

	body,
	div,
	ul,
	li {
		padding: 0;
		margin: 0;
		line-height: 0;
	}

	*,
	::after,
	::before {
		box-sizing: border-box;
	}

	@media screen and (max-width: 767px) {
		body {
			font-size: 1rem;
			min-width: 320px;
		}
	}

	ul {
		padding: 0;
		margin: 0;
		list-style: none;
	}

	.content-main {
		max-width: 1320px;
		min-width: 1090px;
		margin: 0 auto;
		padding: 60px 0 0 0;
		/* margin-bottom: 60px; */
		width: 100%;
	}

	.ivu-layout {
		background-color: #FFFFFF !important;
	}

	.ivu-layout-header {
		background-color: #FFFFFF !important;
		padding: 0rem !important;
		line-height: 0rem !important;
	}
</style>
