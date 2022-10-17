<template>
  <div class="head">
    <van-cell-group inset class="head_nav" v-if="show_meta">
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
      <van-cell title="订单列表" is-link value="" @click="point()"></van-cell>
      <van-cell title="修改密码" is-link value="" @click="point(`pswpage`)"></van-cell>
      <van-cell title="页面反馈" is-link value="" @click="point()"></van-cell>
      <van-cell title="退出登录" is-link value="" @click="point(`login`)"></van-cell>
    </van-cell-group>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
      name:"User",
      data(){
        return{
          show_meta:true
        }
      },
      methods:{
        // 判断性别的处理函数
        // isMan(){
        //   return this.userMesage.sex == 0 ? "男":"女"
        // }
        
        // 跳转到指定的位置
        point(value){
          // 将菜单隐藏
          this.show_meta = false
          this.$router.push({
            name:value
          })
        }
      },
     computed:{
      ...mapState("home",["userMesage"]),
      isMan(){
        return this.userMesage.sex == 0 ? "男":"女"
      }
     },
     mounted(){
      this.show_meta = true
      this.$store.dispatch("home/userMesage")
      // 全局事件总线
      this.$bus.$on("test",(params) => {
        this.show_meta = params
      })
     }
  }
</script>

<style scoped>
  .head{
    background: #f3f6f3;
    height: 100%;
  }
  .head_nav{
    position: relative;
    top: 10px;
    width: 90%;
  }
  /* 头像的布局 */
  .nav_img{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 30px;
  }
  .test{
    margin-left: 10px;
    margin-top: 50px;
  }
</style>