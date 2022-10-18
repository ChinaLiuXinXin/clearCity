<template>
  <div>
    <TopHead 
    router_left="usermenu"
    title="修改密码"
    ></TopHead>
    <van-cell-group inset style="margin-top: 5%;">
      <van-field label="请输入旧密码" v-model="form.oldPassword" type="password"></van-field>
      <van-field label="请输入新密码" v-model="form.newPassword" type="password"></van-field>
    </van-cell-group>
    <van-button block round style="margin-top:50px" @click="doing">提交</van-button>
  </div>
</template>

<script>
import {
  putUserPassword
} from "@/api/user_api"
export default {
    name:"PswPage",
    data(){
      return{
        form:{
          newPassword:"",
          oldPassword:""
        }
      }
    },
    methods:{
      doing(){
        // 发送更改密码的请求
        putUserPassword(this.form).then((response) => {
          this.$dialog({
            message:response.data.msg
          })
        })
      }
    },
    beforeDestroy(){
    }
}
</script>

<style>

</style>