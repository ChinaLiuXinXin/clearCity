<template>
  <div>
    <van-cell-group inset class="head_nav">
      <div class="nav_img">
        <div>
          <van-image round
          :src="`http://218.7.112.123:10001/prod-api`+userMesage.avatar"
          width="5rem"
          height="5rem"
          fit="cover"/>
        </div>
        <h2>{{userMesage.nickName}}</h2>
      </div>
      <!-- 账户、个人信息页面入口、订单列表页面入口、修改密码页面入口、意见反馈页面入口，点击退出按钮可退出登录。 -->
      <!-- <van-cell title="用户名">
        <van-icon name="arrow"></van-icon>
      </van-cell> -->
      <van-cell title="个人信息"  is-link value="" @click="point(`usermesage`)"></van-cell>
      <van-cell title="订单列表" is-link value="" @click="point(`orderlist`)"></van-cell>
      <van-cell title="修改密码" is-link value="" @click="point(`pswpage`)"></van-cell>
      <van-cell title="页面反馈" is-link value="" @click="point(`feedback`)"></van-cell>
      <van-cell title="退出登录" is-link value="" @click="point(`login`)"></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:"usermenu",
    computed:{
      ...mapState("user",["userMesage"])
    },
    methods:{
        point(value){
            this.$router.push({
                name:value
            })
        }
    },
    beforeMount(){
      this.$store.dispatch("user/getUserMesage")
    },
    mounted(){
      console.log(this.userMesage)
    }
}
</script>

<style scoped>
  .head_nav{
    margin-top: 10%;
  }
  .nav_img{
    padding: 20px;
  }
</style>