<template>
  <div class="home">
      <router-view class="router_view"></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" @click="showNav(route_mesage.head)">首页</van-tabbar-item>
      <van-tabbar-item icon="search">全部服务</van-tabbar-item>
      <van-tabbar-item icon="friends-o">智慧环保</van-tabbar-item>
      <van-tabbar-item icon="friends-o">新闻</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="showNav(route_mesage.user)">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem
} from "vant"
// import {common} from "@/api"
export default {
    name:'home',
    components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem,
    },
    data(){
      return{
        form:{
          newPassword:"",
          oldPassword:""
        }, 
        // $emit("click-tab", "") 子组件
        // 跳转路由的信息
        route_mesage:{
          user:"user",
          head:"head",
        },
        active:""
      }
    },
    methods:{
      point(data){
        console.log(data)
      },
      showNav(data){
        this.$router.push({
          name:data
        })
      }
    }
}
</script>

<style scoped>
  .foot{
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: rgb(234, 230, 230);
  }
  .foot_nav{
    padding: 10px;
  }
  .router_view{
    height: 100%;
  }
  .home{
    background: #f3f6f3;
  }

</style>