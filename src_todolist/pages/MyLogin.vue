<template>
    <div>
        <div class="title">
            <h1>欢迎登录</h1>
        </div>
        <div class="box">
            <el-tabs type="border-card" class="top">
                <el-tab-pane>
                    <div slot="label" @click="loginShow">登录</div>
                </el-tab-pane>
                <div class="name">用户名</div>
                <el-input type="text" placeholder="请输入内容" v-model="name" maxlength="10" show-word-limit></el-input>
                <form>
                    <div class="password">密码</div>
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </form>
                <el-row>
                    <el-button type="primary" class="button" @click="enter">登录</el-button>
                    <el-button class="button" @click="reset">重置</el-button>
                    <el-button type="primary" class="btn2" @click="register">注册</el-button>
                </el-row>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyLogin',
    data() {
        return {
            name: '',
            password: '',
        };
    },
    methods: {
        loginShow() {
            this.$router.replace({
                name: 'login',
            });
        },
        enter() {
            if (this.name.trim() == '' || this.password.trim() == '') {
                alert('用户名或密码不能为空');
            } else {
                for (let i = 0; i < JSON.parse(localStorage.getItem('userArr')).length; i++) {
                    if (JSON.parse(localStorage.getItem('userArr'))[i].name === this.name) {
                        if (JSON.parse(localStorage.getItem('userArr'))[i].password === this.password) {
                            alert('登录成功');

                            this.$router.replace({
                                name: 'home',
                                query: {
                                    id: JSON.parse(localStorage.getItem('userArr'))[i].id,
                                },
                            });
                            // console.log(this);
                            // console.log(this.$route.query.id);

                            return;
                        } else {
                            alert('密码错误');
                            return;
                        }
                    }
                }
                alert('用户名错误或不存在');
            }
        },
        reset() {
            (this.name = ''), (this.password = '');
        },
        register() {
            this.$router.replace({
                name: 'register',
            });
        },
    },
};
</script>
<style scoped>
.top {
    width: 560px;
    height: 350px;
    margin: auto;
}
.title {
    width: 200px;
    height: 200px;
    margin: auto;
}
.title h1 {
    font-size: 40px;
}
.name,
.password {
    color: rgb(121, 117, 117);
    margin: 20px;
}
.button {
    margin-top: 26px;
}
.btn2 {
    margin-left: 300px;
}
</style>
