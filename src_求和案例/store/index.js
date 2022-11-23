//引入Vue核心库
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';
//应用Vuex插件
Vue.use(Vuex);

//准备actions对象——响应组件中用户的动作
const actions = {
    jiaOdd(context, value) {
        console.log('actions中的jiaOdd被调用了');
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWait(context, value) {
        console.log('actions中的jiaWait被调用了');
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500);
    },
};
//准备mutations对象——修改state中的数据
const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了');
        state.sum += value;
    },
    JIAN(state, value) {
        console.log('mutations中的JIAN被调用了');
        state.sum -= value;
    },
};
//准备state对象——保存具体的数据
const state = {
    sum: 0, //当前的和
};

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
});