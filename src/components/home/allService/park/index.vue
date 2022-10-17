<template>
  <div>
    <!-- 该路由用以显示停车场列表，个人停车记录 -->
    <router-view></router-view>
    <!-- <ParkList v-for="item in ParkingList" :key="item.id" :data="item"/> -->
  </div>
</template>

<script>
import ParkList from "@/pages/service/park/parkList"
import TopHead from "@/slots/topHead"
import { mapGetters, mapState } from 'vuex'
export default {
    name: "Park",
    props: ["title"],
    components: { 
      TopHead,
      ParkList
     },
    methods:{
      point(){
        console.log(this.ParkingList)
      }
      // point(){
        
      //   // console.log(this)
      // }
    },
    computed:{
      // ...mapState("park")
      ...mapGetters("park",["ParkingList"])
    },
    beforeMount(){
      // 请求停车场数据
      // 跳转到停车场页面
      this.$router.push({
        name:'parking',
        params:{
          title:this.title
        }
      })
    },
    
}
</script>

<style>

</style>