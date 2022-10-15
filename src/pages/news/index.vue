<template>
    
    <van-tabs @click="onClickTab" animated>
        <van-tab v-for="item in newsNav" :key="item.id" :title="item.name">
            <!-- 内容组件 -->
            <Body :NewsClass = "item.id"/>
        </van-tab>
    </van-tabs>
</template>

<script>
import {mapState} from "vuex"
import Body from "./body"
import {
    Tabs,
    Tab
} from "vant"
export default {
    name:"News",
    data(){
        return{
        }
    },
    components:{
        [Tabs.name]:Tabs,
        [Tab.name]:Tab,
        Body
    },
    methods:{
        changeTabs(...value) {
            // this.id = value
            this.$store.dispatch("home/getNewsNavList",this.newsNav[value[0]].id)
        },
        onClickTab(...value){
            console.log(value)
            this.$store.dispatch("home/getNewsNavList",this.newsNav[value[0]].id)
        }
    },
    beforeCreate(){
        // 在组件初始化时发送一次请求，请求第一页的数值，后续通过click事件来更新切换标签页的数据
        this.$store.dispatch("home/getNewsNavList",9)
    },
    computed:{
        ...mapState("home",["newsNav"])
    }
}
</script>

<style>

</style>