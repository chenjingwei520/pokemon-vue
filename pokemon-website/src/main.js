import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import Home from './components/Home/Home.vue'
import Login from './components/Login/Login.vue'
import Signup from './components/Signup/Signup.vue'
import Movie from './components/Movie/Movie.vue'
import Shop from './components/Shop/Shop.vue'

Vue.use(ViewUI);

Vue.config.productionTip = false

Vue.use(VueRouter)

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
		}
	],
	//路由模式为历史模式
	mode: "history"
})

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
