<template>
    <div>
        <button @click="back">返回</button>
        <div class="now">
            <h4>现在的时间是：{{ dateFormat(date) }}</h4>
        </div>
        <div class="progress">
            <div class="year">
                <h2>Year</h2>
                <!-- <el-progress :text-inside="true" :stroke-width="36" :percentage="70"></el-progress> -->
                <h4>2022年还剩下{{ remaining_year }}天</h4>
            </div>
            <div class="month">
                <h2>Month</h2>
                <!-- <el-progress
                    :text-inside="true"
                    :stroke-width="36"
                    :percentage="100"
                    status="success"
                ></el-progress> -->
                <h4>11月已经过去了{{ passDay() }}天</h4>
            </div>
            <div class="week">
                <h2>Week</h2>
                <!-- <el-progress
                    :text-inside="true"
                    :stroke-width="36"
                    :percentage="80"
                    status="warning"
                ></el-progress> -->
                <h4>这一周剩下{{ remaining_days }}天</h4>
            </div>
            <div class="day">
                <h2>Day</h2>
                <!-- <el-progress
                    :text-inside="true"
                    :stroke-width="36"
                    :percentage="50"
                    status="exception"
                ></el-progress> -->
                <h4>今天剩下{{ 24 - (new Date().getHours() + 1) }}小时{{ 60 - new Date().getMinutes() }}分钟</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyTimer',
    data() {
        return {
            date: new Date(),
        };
    },
    computed: {
        remaining_year() {
            let nowTime = new Date();
            let endTime = new Date(nowTime.getFullYear() + 1, 1, 1, 0, 0, 0, 0);
            return parseInt((endTime - nowTime) / 86400000) - 31;
        },
        remaining_days() {
            return 7 - new Date().getDay();
        },
    },
    methods: {
        passDay() {
            let nowMonth = new Date().getMonth() + 1;
            let passday = new Date().getDate();
            if (
                nowMonth === 1 ||
                nowMonth === 3 ||
                nowMonth === 5 ||
                nowMonth === 7 ||
                nowMonth === 8 ||
                nowMonth === 10 ||
                nowMonth === 12
            ) {
                return 31 - passday;
            }
            if (nowMonth === 4 || nowMonth === 6 || nowMonth === 9 || nowMonth === 11) {
                return 30 - passday;
            }
            if (nowMonth === 2) {
                return 28 - passday;
            }
        },
        back() {
            // console.log(this.$route.query.id);
            this.$router.replace({
                name: 'home',
                query: {
                    id: this.$route.query.id,
                },
            });
        },
        dateFormat(time) {
            var date = new Date(time);
            var year = date.getFullYear();
            /* 在日期格式中，月份是从0开始的，因此要加0
             * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
             * */
            var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            // 拼接
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        },
    },
    //挂载时启动定时器
    mounted() {
        //显示当前日期时间
        let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
            _this.date = new Date(); // 修改数据date
        }, 1000);
    },
    beforeDestroy() {
        // if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        // }
    },
};
</script>

<style>
.now {
    font-size: 40px;
    margin-top: 8%;
    margin-left: 27%;
    color: rgb(185, 113, 196);
}
.progress {
    margin-top: 4%;
    margin-left: 18%;
    width: 1000px;
    height: 400px;
}
.year,
.month,
.week,
.day {
    float: left;
    margin-left: 100px;
    width: 400px;
    height: 200px;
}
</style>
