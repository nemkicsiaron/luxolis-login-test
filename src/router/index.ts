import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/LoginView.vue')
		},
		{
			path: '/success',
			name: 'success',
			beforeEnter: (to, from, next) => {
				console.log(to, from);
				if (from.name !== 'login') next('/login');
				else next();
			},
			component: () => import('../views/SuccessView.vue')
		}
	]
});

export default router;
