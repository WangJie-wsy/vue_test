<template>
    <div class="container">
        <MyCategory title="游戏">
            <template scope="atguigu">
                <ul>
                    <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
                </ul>
            </template>
        </MyCategory>

        <MyCategory title="游戏">
            <template scope="atguigu">
                <ol>
                    <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
                </ol>
            </template>
        </MyCategory>

        <MyCategory title="游戏">
            <template slot-scope="{ games }">
                <!-- es6解构赋值 -->
                <h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
            </template>
        </MyCategory>
    </div>
</template>

<script>
import MyCategory from './components/MyCategory.vue';

export default {
    name: 'App',
    components: { MyCategory },
};
</script>

<style scoped>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}
h4 {
    text-align: center;
}
video {
    width: 100%;
}
img {
    width: 100%;
}
</style>
