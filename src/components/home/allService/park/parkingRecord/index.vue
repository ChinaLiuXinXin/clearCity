<template>
  <div>
    <TopHead :router_left="router_left" :router_right="router_right">
      <div @click="showPopup">
        <span>搜索</span>
        <van-icon name="search" size="18"/>
      </div>
    </TopHead>
    <!-- 弹出层，用于展示搜索框 -->
    <van-popup v-model="show" position="bottom" :style="{height:`50%`}">
      <!-- <van-search @search="getFromDate(value)" show-action v-model="value">
        <span slot="action" @click="getFromDate(value)">搜索</span>
      </van-search> -->
      <!-- 使用时间选择框 -->
        <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="onSearch"
      />
    </van-popup>
    <!-- 停车记录 -->
    <Body :ParkingRecord="ParkingRecord_data"/>
  </div>
</template>

<script>

import {
  mapState
} from "vuex"
import Body from "./body"
import TopHead from "@/slots/topHead"
import {
  Cell,
  Popup,
  DatetimePicker
} from "vant"
export default {
    name:"ParkingDate",
    props:["router_left","router_right","title"],
    data(){
      return{
        show:false,
        value:"",
        // 将获取到的值存到data中
        ParkingRecord_data:"",
        currentDate: new Date(2021,3,12),
        minDate: new Date(1970,1,1),
        maxDate: new Date(2030,12,12),
        ParkingData: {
          entryTime:""
          // outTime:""
        }
      }
    },
    components:{
        TopHead,
        Body,
        [Cell.name]:Cell,
        [Popup.name]:Popup,
        [DatetimePicker.name]:DatetimePicker
    },
    methods:{
      showPopup(){
        // 搜索停车记录
        this.show = true
      },
      onSearch(){
        // 获取到当前日期，并且发送请求
        var year = this.currentDate.getFullYear()
        var mouth = this.currentDate.getMonth()+1
        var day = this.currentDate.getDate()
        // 判断day是否大于10
        day  = day<10 ? "0"+day : day;
        mouth = mouth<10 ? "0"+mouth : mouth;
        var data = year+"-"+mouth+"-"+day
        // 设置进场时间与出场时间
        this.ParkingData.entryTime = data
        // this.ParkingData.outTime = data

        // 发送请求
        this.$store.dispatch("park/getParkingRecord",this.ParkingData)

      },
      getFromDate(value){
        // 该方法通过需要获取到用户所输入的时间，过滤数组，得到最终的值
        // 调用getter，过滤内容。
        // var test = this.$store.getters["park/ParkingRecord"](value)
        var pPattern = RegExp(value,"i")
        this.ParkingRecord_data = this.ParkingRecord.filter((params) => {
          return pPattern.exec(params.entryTime) || pPattern.exec(params.outTime)
        }) 
        
      }
    },
    computed:{
    ...mapState("park",["ParkingRecord"])
    },
    beforeMount(){
      // body中需要的值在这里发
      this.$store.dispatch("park/getParkingRecord")
    },
    mounted(){
      // 组件创建完毕以后，将computed中的值赋给data中的ParkingRecord_data
      this.ParkingRecord_data = this.ParkingRecord
      console.log(this.title)
    }
}
</script>

<style scoped>
</style>