// 所有api请求
import {
    getUsermesage,
    gerSwiperMessage,
    allService,
    newsNav,
    newsNavList,
    getNewsDetails,
} from "@/api"

let state = {
    userMesage:{},
    swipeData:[],
    serviceData:[],
    newsNav:[],
    // 新闻列表数据
    newsNavList:[],
    newsNavDetails:{}
}

let mutations = {
        USERMESAGE(state,usermesage){
            state.userMesage = usermesage
        },
        SWIPEdATA(state,data){
            state.swipeData = data
        },
        GETALLSERVICE(state,data){
            state.serviceData = data
        },
        GETNEWSNAV(state,data){
            state.newsNav = data
        },
        GETNEWSNAVLIST(state,data){
            state.newsNavList = data
        },
        GETNEWSDETAILS(state,data){
            state.newsNavDetails = data
        }
}

let actions = {
    // 获取用户信息
    async userMesage({state,dispatch,commit}){
        getUsermesage().then((response) => {
            commit("USERMESAGE",response.data.user)
        })
    },
    // 获取轮播图信息
    async swipeData({state,dispatch,commit}){
        gerSwiperMessage().then((response) => {
            commit("SWIPEdATA",response.data.rows)
        })
    },
    // 获取所有服务信息
    async getAllService({state,dispatch,commit}){
        allService().then((response) => {
            commit("GETALLSERVICE",response.data.rows)
        })
    },
    // 获取新闻栏
    async getNewsNav({state,dispatch,commit}){
        newsNav().then((response) => {
            commit("GETNEWSNAV",response.data.data)
        })
    },
    // 获取新闻列表
    async getNewsNavList({state,dispatch,commit},id){
        newsNavList(id).then((response) => {
            commit("GETNEWSNAVLIST",response.data.rows)
        })
    },
    // 获取新闻详情
    async getNewDetail({state,dispatch,commit},id){
        getNewsDetails(id).then((response) => {
            commit("GETNEWSDETAILS",response.data.data)
        })
    }
}

let getters = {

}

//对外暴露小仓库
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}




