<template>
  <div class="block">
    <TopHead :router_left="router_left" :router_right="router_right" :title="title">
      <!-- 填入右侧图标内容 -->
      <span>列表</span>
      <van-icon name="notes-o" size="18"/>
    </TopHead>
    <!-- 停车场列表 -->
    <ParkList v-for="item in returnData()" :key="item.id" :data="item"/>
    <van-button @click="showAll" v-if="button_show">查看更多</van-button>
  </div>
</template>

<script>
import TopHead from "@/slots/topHead"
import ParkList from "@/pages/service/park/parkList"
import { mapGetters, mapState } from 'vuex'
export default {
    name:"Parking",
    props:["router_left","router_right","title"],
    data(){
      return{
        // 数组显示的个数
        pageNumber:5,
        // 查看更多按钮
        button_show:true
      }
    },
    components:{
      ParkList,
      TopHead
    },
    methods:{
      showAll(){
        this.pageNumber = this.ParkingList.length,
        this.button_show = false
      },
      returnData(){
        return this.ParkingList.slice(0,this.pageNumber)
      }
    },
    computed:{
      ...mapGetters("park",["ParkingList","ParkingListOf"])
    },
    mounted(){
      this.ParkListData = this.ParkingList
    },
    beforeMount(){
      this.$store.dispatch("park/getParkingList")
    }
}
</script>

<style>
.block{
  padding-bottom: 15%;
}
</style>