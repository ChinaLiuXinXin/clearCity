<template>
  <div>
    <TopHead :router_left="router_left" :router_right="router_right">
      <!-- 填入右侧图标内容 -->
      <span>列表</span>
      <van-icon name="notes-o" size="18"/>
    </TopHead>
    <ParkList v-for="item in ParkingList" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import TopHead from "@/slots/topHead"
import ParkList from "@/pages/service/park/parkList"
import { mapGetters, mapState } from 'vuex'
export default {
    name:"Parking",
    props:["router_left","router_right"],
    components:{
      ParkList,
      TopHead
    },
    computed:{
      ...mapGetters("park",["ParkingList"])
    },
    mounted(){
      console.log(this.router_left)
    },
    beforeMount(){
      this.$store.dispatch("park/getParkingList")
    }
}
</script>

<style>

</style>