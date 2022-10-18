import {
    getUserMesage,
    putUserMesage,
    putUserPassword,
    putIdea,
    getAllOrder
} from "@/api/user_api"

let state = {
    userMesage:{},
    userPassword:{},
    putIdea:{},
    allOrder:[]
}

let mutations = {
    GETUSERMESAGE(state,data){
        state.userMesage = data
    },
    PUTUSERMESAGE(state,data){
        state.userMesage = data
    },
    PUTUSERPASSWORD(state,data){
        state.userPassword =  data
    },
    PUTIDEA(state,data){
        state.putIdea = data
    },
    GETALLORDERLIST(state,data){
        state.allOrder = data
    }
}

let actions = {
    // 得到全部订单信息
    getAllOrderList({state,dispatch,commit}){
        getAllOrder().then((response) => {
            commit("GETALLORDERLIST",response.data.rows)
        })  
    },
    getUserMesage({state,dispatch,commit}){
        getUserMesage().then((response) => {
            commit("GETUSERMESAGE",response.data.user)
        })
    },
    putUserMesage({state,dispatch,commit}){
        putUserMesage().then((response) => {
            console.log(response)
        })
    },
    putUserPassword({state,dispatch,commit}){
        putUserPassword().then((response) => {
            
        })
    },
    putIdea({state,dispatch,commit}){
        putIdea().then((response) => {
            console.log(response)
        })
    }
    
}

let getters = {
    
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}