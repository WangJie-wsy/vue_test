/*
    该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue';
// 引入App组件，它是所有组件的父组件
import App from './App.vue';
// 引入VueRouter
import VueRouter from 'vue-router';
// 引入路由
import router from './router';
//按需引入
import { Tabs, TabPane, Input, Button, Row, Progress } from 'element-ui';

// 关闭vue的生产提示
Vue.config.productionTip = false;

// 创建Vue实例对象vm
Vue.use(VueRouter);
Vue.component('el-tabs', Tabs);
Vue.component('el-tab-pane', TabPane);
Vue.component('el-input', Input);
Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-progress', Progress);

new Vue({
    el: '#app',
    // 将App组件放入容器中
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
});