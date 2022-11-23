<template>
    <div>
        <div class="title">
            <h1>欢迎注册</h1>
        </div>
        <div>
            <el-tabs type="border-card" class="top">
                <el-tab-pane>
                    <div slot="label" @click="registerShow">注册</div>
                </el-tab-pane>
                <div class="name">用户名</div>
                <el-input type="text" placeholder="请输入内容" v-model="name" maxlength="10" show-word-limit></el-input>
                <form>
                    <div class="password">密码</div>
                    <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                </form>
                <el-row>
                    <el-button type="primary" class="button" @click="commit">提交</el-button>
                    <el-button class="button" @click="back">返回</el-button>
                </el-row>
            </el-tabs>
        </div>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    name: 'MyRegister',
    data() {
        return {
            name: '',
            password: '',
            userArr: JSON.parse(localStorage.getItem('userArr')) || [],
        };
    },
    methods: {
        registerShow() {
            this.$router.replace({
                name: 'register',
            });
        },
        commit() {
            if (this.name.trim() == '' || this.password.trim() == '') {
                alert('用户名或密码不能为空');
                return;
            } else {
                let pass = true;
                this.userArr.forEach(user => {
                    if (this.name == user.name) {
                        pass = false;
                    }
                });
                if (pass) {
                    var user = {
                        name: this.name,
                        password: this.password,
                        id: nanoid(),
                    };
                    this.userArr.push(user);
                    //把填写的信息赋值给数组，再把数组保存到本地
                    localStorage.setItem('userArr', JSON.stringify(this.userArr));
                    alert('注册成功！');
                    (this.name = ''),
                        (this.password = ''),
                        this.$router.replace({
                            name: 'login',
                        });
                } else {
                    alert('用户已存在，请切换账号');
                }
            }
        },
        back() {
            this.$router.replace({
                name: 'login',
            });
        },
    },
};
</script>

<style>
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
.top {
    width: 560px;
    height: 350px;
    margin: auto;
}
.button {
    margin-top: 26px;
}
</style>
