import {
    admin,
    requests
} from "./request"

// 查询所有停车场
const getParkingList = () => {
    return admin({
        method:"get",
        url:"/park/lot/list"
    })
}

//查询停车记录,带参数为条件查询
const getParkingRecord = (date) => {
    return admin({
        method:"get",
        url:"/park/lot/record/list/",
        params:date
    })
}

// 筛选停车记录


// 查询停车场详情
const getParkingDetails = (id) => {
    return requests({
        method:"get",
        url:"/park/lot/"+id
    })
}
export {
    getParkingList,
    getParkingRecord,
    getParkingDetails
}