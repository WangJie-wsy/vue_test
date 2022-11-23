// 该文件专门用于创建整个应用的路由器
//引入VueRouter
import VueRouter from 'vue-router';
//引入Luyou 组件
import About from '../pages/MyAbout';
import Home from '../pages/MyHome';
import News from '../pages/MyNews';
import Message from '../pages/MyMessage';
import Detail from '../pages/MyDetail';
// 创建并暴露一个路由器
//创建router实例对象，去管理一组一组的路由规则
export default new VueRouter({
    routes: [{
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            children: [{
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [{
                        name: 'detail',
                        path: 'detail',
                        component: Detail,
                    }, ],
                },
            ],
        },
    ],
});