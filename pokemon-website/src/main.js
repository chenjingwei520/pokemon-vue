import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'Vuex'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import Home from './components/Home/Home.vue'
import Login from './components/Login/Login.vue'
import Signup from './components/Signup/Signup.vue'
import Movie from './components/Movie/Movie.vue'
import Shop from './components/Shop/Shop.vue'
import Pokedex from './components/Pokedex/Pokedex.vue'
import Game from './components/Game/Game.vue'

Vue.use(ViewUI);

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		id: '',
		name: '',
		token: '', //初始化token
		isLogin: false
	},
	mutations: {
		//存储token
		setUser(state, json) {
			state.isLogin = true;
			state.id = json.id;
			state.name = json.name;
			state.token = json.token;
			localStorage.token = json.token;
			localStorage.name = json.name;
			localStorage.id = json.id;
			localStorage.isLogin = true;
		},
		
	},
	getters: {
		getUser(state) {
			if(!state.token) {
				state.token = localStorage.getItem('token');
				state.isLogin = localStorage.getItem('isLogin');
				state.id = localStorage.getItem('id');
				state.name = localStorage.getItem('name');
			}
			return state;
		}
	}
})

//配置路由
const router = new VueRouter({
	routes: [
		//当路径为/时 跳转到Home组件中
		{
			path: "/",
			component: Home
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/signup',
			component: Signup
		},
		{
			path: '/movie',
			component: Movie
		},
		{
			path: '/shop',
			component: Shop
		},
		{
			path: '/pokedex',
			component: Pokedex
		},
		{
			path: '/game',
			component: Game
		}
	],
	//路由模式为历史模式
	mode: "history"
})

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
