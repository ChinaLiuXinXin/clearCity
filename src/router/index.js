import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 引入组件
import Home from '@/components/home'
import Login from '@/components/Login'
// 引入user的组件
import User from "@/components/home/user"
import Head from "@/components/home/head"


const route =  new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            children:[
                {
                    path:"user",
                    name:"user",
                    component:User,
                    children:[
                        {
                            // 用户菜单界面
                            path:"usermenu",
                            name:"usermenu",
                            component: ()=> import("@/components/home/user/usermenu")
                        },
                        {
                            // 用户信息页面
                            path:"usermesage",
                            name:"usermesage",
                            component: ()=> import("@/components/home/user/userMesage")
                        },
                        {
                            //修改密码页面
                            path:"pswpage",
                            name:"pswpage",
                            component: ()=> import("@/components/home/user/PswPage") 
                        },
                        {
                            // 订单列表
                            path:"orderlist",
                            name:"orderlist",
                            component: ()=> import("@/components/home/user/orderList")
                        },
                        {
                            // 反馈页面
                            path:"feedback",
                            name:"feedback",
                            component: ()=> import("@/components/home/user/feedback")
                        }
                    ]
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
                            props:(route) => {
                                return {
                                    router_left:"head",
                                    router_right:"parkingRecord",
                                    title:"停哪儿"}
                            },
                            meta:{bool:true}
                        },
                        {
                            // 个人停车记录
                            path:"parking_record",
                            name:"parkingRecord",
                            component: ()=> import("@/components/home/allService/park/parkingRecord"),
                            props:(route) => {
                                return {router_left:"parking",router_right:"parkingRecord",title:"停车记录"}
                            }
                        },
                        {
                            // 停车场详情
                            path:"parking_details",
                            name:"parkingDetails",
                            component:() => import("@/components/home/allService/park/PakingDetails"),
                            props:(route) => {
                                return {
                                    router_left:"parking",
                                    router_right:"parkingDetails",
                                    title:"停车场详情",
                                    parkId:route.params.id
                                }
                            }
                        }
                    ],
                    meta:{data:1}
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
            name:"login",
            component:Login
        },
        {
            path:"/",
            component:Login
        }
    ]
})

// 全局路由守卫

route.beforeEach((to,from,next) => {
    // 排除登录注册路由
    if(to.name == "login" || to.name == "register"){
        next()
    }else 
    // 如果要进入的不是登录注册，则判断token是不是为空，如果为空则重定向到login
    if(localStorage.getItem("token") != null ){
        next()
    }else{
        next({
            name:"login"
        })
    }
    
})
export default route