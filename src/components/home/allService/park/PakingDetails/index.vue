<template>
    <div>
        <TopHead :title="title" :router_left="router_left" :router_right="router_right"/>
        <!-- 内容 -->
        <van-cell-group inset class="nav">
            <van-cell :title="ParkingDetails.parkName"></van-cell>
            <van-cell title="停车场地址" :value="ParkingDetails.address"/>
            <van-cell title="距离" :value="ParkingDetails.distance"/>
            <van-cell title="是否开放" :value="isOpen(ParkingDetails.open)"/>
            <van-cell title="车位数量" :value="ParkingDetails.allPark"/>
            <van-cell title="可用车位数量" :value="ParkingDetails.vacancy"/>
            <van-cell title="停车费" :value="getPrice(ParkingDetails.rates)"/>
            <van-cell title="可用车位数量" :value="parkExample(ParkingDetails.rates)"/>
        </van-cell-group>
    </div>
</template>

<script>
import TopHead from "@/slots/topHead"
import { mapState } from 'vuex'
export default {
    name:"PakingDetails",
    props:["title","right_text","router_right","router_left","parkId"],
    methods:{
        isOpen(data){
            return data == "Y" ? "开放":"不开放"
        },
        getPrice(data){
            return data+"/h"
        },
        parkExample(data){
            return "每小时"+data+"元,"+"封顶50元/天"
        }
    },
    components:{
        TopHead
    },
    computed:{
        ...mapState("park",["ParkingDetails"])
    },
    beforeMount(){
        this.$store.dispatch("park/getParkingDetails",this.parkId)
        console.log(this.parkId)
    }
}
</script>

<style scoped>
    .nav{
        margin-top: 30px;
    }
</style>