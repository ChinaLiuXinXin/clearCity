import {
    requests
} from "./request"

// 查询个人信息接口
const getUserMesage = () => {
    return requests({
        url:"/common/user/getInfo",
        method:"get"
    })
}

// 修改个人信息
const putUserMesage = (data) => {
    return requests({
        url:"/common/user",
        method:"put",
        data:data
    })
}

// 修改用户密码
const putUserPassword = (data) => {
    return requests({
        url:"/common/user/resetPwd",
        method:"put",
        data:data
    })
}

// 查询所有订单
const getAllOrder = (response) => {
    return requests({
        url:"/allorder/list",
        method:"get"
    })
}

// 意见反馈
const putIdea = (data) => {
    return requests({
        url:"/common/feedback",
        method:"post",
        data:data
    })
}

export {
    getUserMesage,
    putUserMesage,
    putUserPassword,
    putIdea,
    getAllOrder
}