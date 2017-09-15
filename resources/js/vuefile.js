window.Vue = require('vue');

// progress bar
import VueProgressBar from 'vue-progressbar';
const options = {
    color: '#F44336',
    failedColor: '#874b4b',
    thickness: '3px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
};
Vue.use(VueProgressBar, options);

// Vue Router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// My routes
import { Routes } from './routes';
window.router = new VueRouter({
    mode: 'history',
    routes: Routes
});

// components
require('./components');

// Vuex for my fake db and state management
import { store } from './store/store';

// init vue
const app = new Vue({
    router,

    store,

}).$mount('#app');


// Start progress bar when sending request
window.axios.interceptors.request.use(function (config) {
    app.$Progress.start();

    return config;
}, function (error) {
    app.$Progress.fail();

    return Promise.reject(error);
});

// Handle axios responses globally
window.axios.interceptors.response.use((response) => {
    app.$Progress.finish();

    // data response from server has my specific format
    // { success: '', alert: '', data: '' }
    // Always show error toast when server returns failed
    if (response.data.success == 0) {
        toastr.error(response.data.alert);
    }

    return response;
}, (error) => {
    // This is for handling server errors like 500, 404, 401, ...etc
    let status = error.response.status;
    router.replace('/' + status);
    app.$Progress.fail();

    return error;
});