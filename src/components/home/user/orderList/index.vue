<template>
  <div>
    <TopHead
        router_left="usermenu"
        title="订单列表"
    />
    <Body :orderList="allOrder"></Body>
  </div>
</template>

<script>
import Body from "./body"
import { mapState } from 'vuex'
export default {
    name:"OrderList",
    components:{
        Body
    },
    data(){
        return{
          rows:[
                {
                    "id": 21,
                    "orderNo": "2021051001061885228",
                    "amount": 58,
                    "orderStatus": "已付款",
                    "userId": 2,
                    "payTime": "2021-05-10",
                    "name": "中影华臣影城",
                    "orderType": "movie",
                    "orderTypeName": "看电影"
                }
            ]  
        }
        },
    computed:{
        ...mapState("user",["allOrder"])
    },
    beforeMount(){
        this.$store.dispatch("user/getAllOrderList")
        // this.$store.dispatch("home/getAllService")
    },
    beforeDestroy(){
        // 销毁之前请将主页面菜单显示出来
    }
}
</script>

<style scoped>

</style>