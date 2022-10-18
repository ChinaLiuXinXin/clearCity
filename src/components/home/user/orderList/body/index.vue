<template>
  <div>
    <van-cell-group inset v-for="item in orderList" :key="item.id" class="orderList">
        <van-field label="订单号" :value="item.orderNo" readonly></van-field>
        <van-field label="订单类型" :value="getOrderType(item.orderType)" readonly></van-field>
        <van-field label="订单日期" :value="item.payTime" readonly></van-field>
    </van-cell-group>
  </div>
</template>

<script>
export default {
    name:"Body",
    props:["orderList"],
    methods:{
        getOrderType(value){
            if(value == "movie") {
                return "电影"
            }else if(value == "takeout"){
                return "外卖订餐"
            }
            return "000"
        }
    },
    mounted(){
        console.log(this.orderList[0])
    }
}
</script>

<style scoped>
.orderList{
    margin-top: 5%;
}
</style>