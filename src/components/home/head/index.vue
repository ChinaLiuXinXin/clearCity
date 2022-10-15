<template>
  <div>
    <div class="search">
      <van-search 
      v-model="keyword" 
      placeholder="请输入关键字"
      @search="todo"
      ></van-search>
    </div>
    <!-- 轮播图 -->
    <Swipe_/>

    <!-- 全部服务模块 -->
    <div class="flex_box">
      <div v-for="item in serviceData.slice(0,10)" :key="item.id" @click="toService(item.sort,item.serviceName)">
        <img :src="$http + item.imgUrl" alt="" class="service_img">
        <span class="service_size">{{item.serviceName}}</span>
      </div>
    </div>
    <!-- 新闻页 -->
    <News/>

  </div>
</template>
<script>
  import {
    Swipe,
    SwipeItem,
    Tab,
    Tabs
  } from "vant"
  import {mapState} from "vuex"
  // 引入新闻模块
  import News from "@/pages/news"
  // 引入封装好的轮播图
  import Swipe_ from "@/pages/swiper"
  export default {
      name:"Head",
      data(){
        return{
          keyword:""
        }
      },
      components:{
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
        [Tabs.name]:Tabs,
        [Tab.name]:Tab,
        News,
        Swipe_
      },
      methods:{
        todo(){
          //  搜索方法
        },
        toService(...data){
          this.$router.push({
            // 将数字转换为字符串
            name:data[0].toString(),
            // 通过props将值传递给组件
            params:{
              title:data[1]
            }
          })
        }
      },
      computed:{
        ...mapState("home",["swipeData","serviceData","newsNav"]),
        test() {
          return "1"
        }
      },
      mounted(){
        // console.log(this.swipeData)
        // console.log("computed类型："+typeof this.test)  
        // console.log("methods类型："+typeof this.todo)
      },
      beforeCreate(){
        this.$store.dispatch("home/swipeData")
        this.$store.dispatch("home/getAllService")
        this.$store.dispatch("home/getNewsNav")
      }
  }
</script>

<style scoped>
  .swipe_img{
    width: 350px;
  }
  .flex_box>div{
    /* background: skyblue; */
    margin: 10px;
    width: 50px;
    height: 50px;
    /* border-radius: 25; */
  }
  .flex_box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 3px;
    height: 147px;
    overflow: hidden;
  }
  /* 服务图标大小 */
  .service_img{
    width: 50px;
  }
  .service_size{
    font-size: 10px;
    position: relative;
    top: -7px;
  }
</style>