<template>
	<div v-show="list.length">
		<div class="list-control">
			<div class="list-control-filter">
				<span>品牌：</span>
				<span class="list-control-filter-item" :class="{on: item === filterBrand}" v-for="item in getBrands" :key="item" @click="handleFilterBrand(item)">{{ item }}</span>
			</div>
			<div class="list-control-filter">
				<span>类别：</span>
				<span class="list-control-filter-item" :class="{on: item === filterCategory}" v-for="item in getCategory" :key="item" @click="handleFilterCategory(item)">{{ item }}</span>
			</div>
			<div class="list-control-order">
				<span>排序：</span>
				<span class="list-control-order-item" :class="{on: order === ''}" @click="handleOrderDefault">默认</span>
				<span class="list-control-order-item" :class="{on: order === 'sales'}" @click="handleOrderSales">
					销量
					<template v-if="order === 'sales'">↓</template>
				</span>
				<span class="list-control-order-item" :class="{on: order.indexOf('cost') > -1}" @click="handleOrderCost">
					价格
					<template v-if="order === 'cost-asc'">↑</template>
					<template v-if="order === 'cost-desc'">↓</template>
				</span>
			</div>
		</div>
		<Product v-for="item in filteredAndOrderedList" :info="item" :key="item.id"></Product>
		<div class="product-not-found" v-show="!filteredAndOrderedList.length">暂无相关商品</div>
	</div>
</template>
<script>
	import Product from './product.vue';
	export default {
		components: {
			Product
		},
		computed: {
			list() {
				return this.product_data;
			},
			getBrands() {
				return this.brands;
			},
			getCategory() {
				return this.categorys;
			},
			filteredAndOrderedList() {
				let list = [...this.list];
				// 按品牌过滤
				if (this.filterBrand !== '') {
					list = list.filter(item => item.brand === this.filterBrand);
				}
				// 按颜色过滤
				if (this.filterCategory !== '') {
					list = list.filter(item => item.category === this.filterCategory);
				}
				// 排序
				if (this.order !== '') {
					if (this.order === 'sales') {
						list = list.sort((a, b) => b.sales - a.sales);
					} else if (this.order === 'cost-desc') {
						list = list.sort((a, b) => b.cost - a.cost);
					} else if (this.order === 'cost-asc') {
						list = list.sort((a, b) => a.cost - b.cost);
					}
				}
				return list;
			}
		},
		data() {
			return {
				filterBrand: '',
				filterCategory: '',
				order: '',
				product_data: [{
						id: 1,
						name: '妙蛙种子',
						brand: 'pokemon',
						image: require('../../assets/gk1.webp'),
						sales: 10000,
						cost: 1288,
						category: '手办'
					},
					{
						id: 2,
						name: '卡比兽',
						brand: 'pokemon',
						image: require('../../assets/gk2.png'),
						sales: 11000,
						cost: 1188,
						category: '手办'
					},
					{
						id: 3,
						name: '可达鸭',
						brand: 'pokemon',
						image: require('../../assets/gk3.webp'),
						sales: 5000,
						cost: 2288,
						category: '手办'
					},
					{
						id: 4,
						name: '耿鬼',
						brand: 'pokemon',
						image: require('../../assets/gk4.webp'),
						sales: 310,
						cost: 18888,
						category: '手办'
					},
					{
						id: 5,
						name: '宝可梦剑盾',
						brand: '宝可梦',
						image: require('../../assets/sgame1.webp'),
						sales: 50000,
						cost: 550,
						category: '游戏'
					},
					{
						id: 6,
						name: "let's go! 皮卡丘/伊布",
						brand: '宝可梦',
						image: require('../../assets/sgame2.webp'),
						sales: 60000,
						cost: 400,
						category: '游戏'
					},
					{
						id: 7,
						name: '宝可梦剑盾',
						brand: '宠物小精灵',
						image: require('../../assets/card1.webp'),
						sales: 5000,
						cost: 275,
						category: '卡牌'
					},
					{
						id: 8,
						name: "let's go! 皮卡丘/伊布",
						brand: '宠物小精灵',
						image: require('../../assets/card2.webp'),
						sales: 6000,
						cost: 40,
						category: '卡牌'
					}
				],
				brands: ['pokemon', '宝可梦', '宠物小精灵'],
				categorys: ['手办', '游戏', '卡牌']
			}
		},
		methods: {
			handleFilterBrand(brand) {
				if (this.filterBrand === brand) {
					this.filterBrand = '';
				} else {
					this.filterBrand = brand;
				}
			},
			handleFilterCategory(category) {
				if (this.filterCategory === category) {
					this.filterCategory = '';
				} else {
					this.filterCategory = category;
				}
			},
			handleOrderDefault() {
				this.order = '';
			},
			handleOrderSales() {
				this.order = 'sales';
			},
			handleOrderCost() {
				if (this.order === 'cost-desc') {
					this.order = 'cost-asc';
				} else {
					this.order = 'cost-desc';
				}
			}
		},
		mounted() {
			this.$store.dispatch('getProductList');
		}
	}
</script>
<style scoped>
	.list-control {
		background: #fff;
		border-radius: 6px;
		margin: 16px;
		padding: 16px;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
	}

	.list-control-filter {
		margin-bottom: 16px;
	}

	.list-control-filter-item,
	.list-control-order-item {
		cursor: pointer;
		display: inline-block;
		border: 1px solid #e9eaec;
		border-radius: 4px;
		margin-right: 6px;
		padding: 2px 6px;
	}

	.list-control-filter-item.on,
	.list-control-order-item.on {
		background: #f2352e;
		border: 1px solid #f2352e;
		color: #fff;
	}

	.product-not-found {
		text-align: center;
		padding: 32px;
	}
</style>
