// 该文件专门用于创建整个应用的路由器
//引入VueRouter
import VueRouter from 'vue-router';
//引入Luyou 组件
import Home from '../pages/MyHome';
import Login from '../pages/MyLogin';
import Register from '../pages/MyRegister';
import Timer from '../pages/MyTimer';

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push/replace
//第一个参数：告诉原来的push方法，往哪里跳转（传递哪些参数）
//第二个参数：成功的回调
//第三个参数：失败的回调
//call/apply区别
//相同点：都可以调用函数一次，都可以篡改函数的上下文(this）一次‘
//不同点：call/apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};
// 创建并暴露一个路由器
//创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes: [{
            name: 'home',
            path: 'home',
            component: Home,
        },
        {
            name: 'login',
            path: '/',
            component: Login,
        },
        {
            name: 'register',
            path: '/register',
            component: Register,
        },
        {
            name: 'timer',
            path: '/timer',
            component: Timer,
        },
    ],
});