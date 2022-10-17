<template>
  <div class="header">
    <van-cell-group inset>
        <h1>智慧城市</h1>
        <van-field v-model="form.username" label="用户名" placeholder="请输入用户名" />
        <van-field v-model="form.password" label="密码" placeholder="请输入密码" type="password"/>
    </van-cell-group>
    <van-button round color="red" @click="login" class="but" size="normal">登录</van-button>
  </div>
</template>

<script>
    import {login} from "@/api"
    import { Field, CellGroup,Button } from 'vant';
    export default {
        name:'login',
        data(){
            return{
                form:{
                    username:'',
                    password:''
                }
            }
        },
        components:{
            [Field.name]:Field,
            [CellGroup.name]:CellGroup,
            [Button.name]:Button
        },
        methods:{
            login(){
                login(this.form).then((response) => {
                    // 提示用户密码错误
                    if(response.data.code == 500){
                        this.$dialog({
                        message:"请检查用户名或密码"
                    })}else if(response.data.code == 200){
                        // 登录成功，存储token
                        localStorage.setItem("token",response.data.token)
                        // 登录成功，跳转到首页
                        this.$router.push({
                            name:'head'
                        })
                    }
                },(error) => {
                    // 如果请求失败，提示用户
                    this.$dialog({
                        message:"网络或服务器故障"
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .header{
        margin-top: 50%;
    }
    .but{
        margin-top: 10%;
    }
</style>