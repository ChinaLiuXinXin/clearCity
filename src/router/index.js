import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 引入组件
import Home from '@/components/home'
import Login from '@/components/Login'
// 引入user的组件
import User from "@/components/home/user"
import Head from "@/components/home/head"

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"user",
                    name:"user",
                    component:User
                },
                {
                    path:"head",
                    name:"head",
                    component:Head
                },
                {
                    path:"new",
                    name:"new",
                    component: ()=> import("@/components/home/new")
                },
                {
                    // 智慧巴士
                    path:"clearbus",
                    name:"2",
                    props:true,
                    component: ()=> import("@/components/home/allService/clearBus")
                },
                {
                    // 智慧地铁
                    path:"subway",
                    name:"1",
                    props:true,
                    component: ()=> import("@/components/home/allService/subway")
                },
                {
                    // 智慧停车场
                    path:"park",
                    name:"0",
                    props:true,
                    component: ()=> import("@/components/home/allService/park"),
                    children:[
                        {
                            // 所有停车场列表
                            path:"parking",
                            name:"parking",
                            component: ()=> import("@/components/home/allService/park/parking"),
                            props:{router_left:"head",router_right:"parkingRecord"}
                        },
                        {
                            // 个人停车记录
                            path:"parking_record",
                            name:"parkingRecord",
                            component: ()=> import("@/components/home/allService/park/parkingRecord"),
                            props:{router_left:"parking",router_right:"parkingRecord"}
                        }
                    ]
                },
                {
                    // 找房子
                    path:"found_house",
                    name:"8",
                    props:true,
                    component:()=> import("@/components/home/allService/foundHouse")
                },
                {
                    // 门诊预约
                    path:"hospital",
                    name:"3",
                    props:true,
                    component:()=> import("@/components/home/allService/hospital")
                },
                {
                    // 智慧交管
                    path:"clear_traffic",
                    name:"5",
                    props:true,
                    component:() => import("@/components/home/allService/clearTraffic")
                },
                {
                    // 生活缴费
                    path:"life_pay",
                    name:"6",
                    props:true,
                    component:() => import("@/components/home/allService/lifePay")
                },
                {
                    // 外卖订餐
                    path:"food_order",
                    name:"7",
                    props:true,
                    component:() => import("@/components/home/allService/foodOrder")
                },
                {
                    // 看电影
                    path:"movie",
                    name:"9",
                    props:true,
                    component:() => import("@/components/home/allService/movie")
                },
                {
                    // 找工作
                    path:"found_work",
                    name:"10",
                    props:true,
                    component:() => import("@/components/home/allService/foundWork")
                }
            ]
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/",
            component:Login
        }
    ]
})
