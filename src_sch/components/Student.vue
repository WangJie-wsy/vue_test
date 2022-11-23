<template>
    <div class="demo">
        <h2 class="hi">学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
export default {
    name: 'myStudent',
    data() {
        return {
            name: '张三',
            age: 18,
        };
    },
};
</script>

<style lang="less" scoped>
.demo {
    background-color: pink;
    .hi {
        font-size: 40px;
    }
}
</style>
