
let state = {
    message:{}
}

let  mutations = {
    LOGIN(commit){
        console.log("mutations")
    }
}

let actions = {
    login({ commit, state, dispatch }){
        console.log("actions")
        dispatch.LOGIN()
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




