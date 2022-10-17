<template>
  <div>
    <TopHead router_left="user"></TopHead>
    <van-cell-group inset>
      <van-field label="请输入旧密码" v-model="form.oldPassword"></van-field>
      <van-field label="请输入新密码" v-model="form.newPassword"></van-field>
    </van-cell-group>
    <van-button block round>提交</van-button>
  </div>
</template>

<script>

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
    beforeDestroy(){
      this.$bus.$on("test",true)
    }
}
</script>

<style>

</style>