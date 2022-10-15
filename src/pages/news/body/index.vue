<template>
  <div>
    <van-list>
      <van-cell v-for="item in newsNavList" :key="item.id">
        <!-- 弹性盒布局 -->
        <div class="new" @click="toNewsPage(item.id)">
          <!-- 图片 -->
          <div class="new_img">
            <img :src="`http://218.7.112.123:10001`+item.cover" alt="" >
          </div>
          <!-- 标题内容 -->
          <div class="new_title">
            <p>{{item.title}}</p>
          </div>
        </div>

        <!-- 宫格布局 -->
        <!-- <van-grid>
          <van-grid-item>
            <div class="new_img">
              <img :src="`http://218.7.112.123:10001`+item.cover" alt="" >
            </div>
          </van-grid-item>
          <van-grid-item>
            <div class="new_title">
              <p>{{item.title}}</p>
            </div>
          </van-grid-item>
        </van-grid> -->
      </van-cell>
    </van-list>
  </div>
</template>

<script>
/*
  该组件用于渲染新闻内容，
  通过给定的id值请求服务器。
  所有的组件并不会一次渲染完毕，而是点击一次渲染一次。
*/
import {mapState} from "vuex"
import {
  Tab,
  List,
  Cell,
  Grid,
  GridItem
} from "vant"
export default {
    name:"Body",
    props:["NewsClass"],
    components:{
        [Tab.name]:Tab,
        [List.name]:List,
        [Cell.name]:Cell,
        [Grid.name]:Grid,
        [GridItem.name]:GridItem
    },
    methods:{
        point(){
            console.log("hi")
        },
        toNewsPage(id){
          // 点击跳转到新闻页面
          this.$router.push({
            name:"new"
          })
          // 发送请求，请求相应新闻的数据
          this.$store.dispatch("home/getNewDetail",id)
        }
    },
    computed:{
      ...mapState("home",["newsNavList"])
    },
    beforeMount(){
      // this.$store.dispatch("home/getNewsNavList",this.NewsClass)
    },
}
</script>

<style scoped>
.new_img>img{
  width:100px;
}
.new{
  display: flex;
  flex-wrap:nowrap;
  justify-content: center;
}
.new_title{
  width: 60%;
  margin: 10px;
}
</style>