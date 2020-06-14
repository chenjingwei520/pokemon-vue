<template>
	<div id="pokemoncard">
		<div class="pokemon-list--box--wrapper" v-for="pokemon in pokemons" :key="pokemon._id">
			<router-link :to="{path: '/pokemon/' + pokemon._id}" class="pokemon-list--box visible loaded">
				<img :src="pokemon.imgSrc" alt="" class="pokemon-list--box__img">
				<span class="pokemon-list--box__no size-16">{{ pokemon.no }}</span>
				<span class="pokemon-list--box__name size-22">{{ pokemon.name }}</span>
				<span class="pokemon-list--box__subname size-20"></span>
				<div class="pokemon-list--box__types">
					<div class="pokemon-list--box__type size-12" v-for="type in pokemon.types" :key="type" :class="classType(type)">
						<span>{{ typesName[type] }}</span>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			pokemons: Array
		},
		name: 'PokemonCard',
		data() {
			return {
				typesName: {
					'fire': '火',
					'dragon': '龙',
					'flying': '飞行',
					'electric': '电',
					'steel': '钢',
					'ghost': '幽灵',
					'rock': '岩石',
					'posion': '毒',
					'fighting': '格斗',
					'fairy': '妖精',
					'psychic': '超能力',
					'grass': '草',
					'water': '水',
					'ground': '地面',
					'normal': '一般',
					'ice': '冰',
					'dark': '恶',
					'bug': '虫'
				},
			}
		},
		methods: {
			classType(type) {
				var objectClass = {}
				objectClass['pokemon-list--box__type--' + type] = true
				return objectClass;
			}
		}
	}
</script>

<style>
</style>
