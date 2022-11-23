<template>
    <div>
        <Test1 />
        <Test2 />
        <Test3 />
    </div>
</template>

<script>
import Test1 from '../src_过渡与动画/components/MyTest1.vue';
import Test2 from '../src_过渡与动画/components/MyTest2.vue';
import Test3 from '../src_过渡与动画/components/MyTest3.vue';

export default {
    name: 'App',
    components: { Test1, Test2, Test3 },
};
</script>
