import {
    getParkingList,
    getParkingRecord,
    getParkingDetails
} from "@/api/parkapi"

let state = {
    ParkingList:[],
    ParkingRecord:[],
    ParkingDetails:{}
}

let mutations = {
    GETPARKINGLIST(state,data){
        state.ParkingList = data
    },
    GETPARKINGRECORD(state,data){
        state.ParkingRecord = data
    },
    GETPARKDETATLS(state,data){
        state.ParkingDetails = data
    }
}

let actions = {
    // 获取停车场列表
    getParkingList({state,dispatch,commit}){
        getParkingList().then((response) => {
            commit("GETPARKINGLIST",response.data.rows)
        })
    },
    // 获取停车记录
    getParkingRecord({state,dispatch,commit},data){
        getParkingRecord(data).then((response) => {
            commit("GETPARKINGRECORD",response.data.rows)
        })
    },
    // 获取停车场详情
    getParkingDetails({state,dispatch,commit},id){
        getParkingDetails(id).then((response) => {
            commit("GETPARKDETATLS",response.data.data)
        })
    }
}

let getters = {
    ParkingList(state){
        // 对数组进行排序
        let nums = state.ParkingList
        for(var i = 0 ; i < nums.length-1 ; i++){
            for(var j = 0 ; j < nums.length-1-i ; j++){
                if(parseInt(nums[j].distance) > parseInt(nums[j+1].distance)){
                    let right = nums[j+1]
                    nums[j+1] = nums[j]
                    nums[j] = right
                }
            }
        }
        return nums
    },
    ParkingListOf(state,dispatch,commit,getters){
        // 查看一部分的数组
        return getters
    },
    ParkingRecord(state){
        // 过滤数组，通过正则表达式
        return (value) => {
            var pPattern = RegExp(value,"i")
            console.log(state.ParkingRecord);
            var text = state.ParkingRecord.filter((params) => {
            return pPattern.exec(params.entryTime) || pPattern.exec(params.outTime)
          }) 
          return text
        }
    }
}

// 对外暴露仓库
export default{
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}