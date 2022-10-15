import {
    getUserMesage,
    putUserMesage,
    putUserPassword,
    putIdea
} from "@/api/user_api"

let state = {
    userMesage:{},
    userPassword:{},
    putIdea:{}
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
}

let action = {
    getUserMesage({state,dispatch,commit}){
        getUserMesage().then((response) => {
            console.log(response)
        })
    },
    putUserMesage({state,dispatch,commit}){
        putUserMesage().then((response) => {
            console.log(response)
        })
    },
    putUserPassword({state,dispatch,commit}){
        putUserPassword().then((response) => {
            console.log(response)
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
    action,
    getters
}