export const Routes = [
    { path: '/', redirect: '/users' },
    { path: '/users', component: require('./pages/root.vue') },
    { path: '/users/create', component: require('./pages/create.vue') },
    { path: '/users/:id', component: require('./pages/show.vue') },

    { path: '/*', component: require('./pages/404.vue') }
];