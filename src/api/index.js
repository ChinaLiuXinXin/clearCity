import {admin,requests,api_one} from "./request";

// 登录注册
const login = (data)=>{
    return admin({
        method:'post',
        url:'/login',
        data:data
    })
}     
const register = (data)=>{
    return admin({
        method:"post",
        url:"/prod-api/api/register",
        data:data
    })
}

// 查询个人信息
const getUsermesage = () => {
    return requests({
        method:"get",
        url:"/common/user/getInfo",
    })
}

// 查询轮播图信息
const gerSwiperMessage = ()=>{
    return requests({
        method:"get",
        url:"/rotation/list"
    })
}

// 查询所有服务接口
const allService = ()=>{
    return  requests({
        method:"get",
        url:"/service/list"
    })
}

// 查询新闻页
const newsNav = ()=>{
    return api_one({
        method:"get",
        url:"/press/category/list"
    })
}

// 查询新闻列表
const newsNavList = (id) => {
    return api_one({
        method:"get",
        url:"/press/press/list",
        params:{
            type:id
        }
    })
}

// 查询新闻详情
const getNewsDetails = (id)=>{
    return api_one({
        method:"get",
        url:"/press/press/"+id
    })
}

export {
    login,
    register,
    getUsermesage,
    gerSwiperMessage,
    allService,
    newsNav,
    newsNavList,
    getNewsDetails
}