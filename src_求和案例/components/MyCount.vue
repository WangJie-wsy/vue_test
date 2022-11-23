<template>
    <div>
        <h1>当前求和为{{ $store.state.sum }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">_</button>
        <button @click="incrementOdd">当前求和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
export default {
    name: 'MyCount',
    data() {
        return {
            n: 1, //用户选择的数字
            sum: 0, //当前的和
        };
    },
    methods: {
        increment() {
            // commit 是操作 mutations
            this.$store.commit('JIA', this.n);
        },
        decrement() {
            // commit 是操作 mutations
            this.$store.commit('JIAN', this.n);
        },
        incrementOdd() {
            // dispatch 是操作 actions
            this.$store.dispatch('jiaOdd', this.n);
        },
        incrementWait() {
            // dispatch 是操作 actions
            this.$store.dispatch('jiaWait', this.n);
        },
    },
};
</script>

<style lang="css">
button {
    margin-left: 5px;
}
</style>
