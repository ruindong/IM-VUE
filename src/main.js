import Vue from 'vue'
import App from './app.vue'
import store from "@/store";

//socket
import VueSocketIO from 'vue-socket.io';
import socket from 'socket.io-client';
Vue.use(new VueSocketIO({
    debug: true,
    connection: socket('http://localhost:4000', {
        path: '',
        transports: ['websocket', 'xhr-polling', 'jsonp-polling'],
    })
}));


new Vue({
    el:'#app',
    store: store,
    render: h => h(App)
});
