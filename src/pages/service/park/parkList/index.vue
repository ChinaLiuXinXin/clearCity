<template>
  <div>
    <van-cell-group inset class="park" @click="showDetails">
        <van-cell title="停车场名" :value="data.parkName">
            <van-icon name="award" slot="right-icon" size="18"/>
        </van-cell>
        <van-cell title="地址" :value="data.address">
            <van-icon name="map-marked"  slot="right-icon" size="18"/>
        </van-cell>
        <van-cell title="收费" :value="data.rates">
            <van-icon name="balance-list" slot="right-icon" size="18"/>
        </van-cell>
        <van-cell title="距离" :value="data.distance">
            <van-icon name="wap-home" slot="right-icon" size="18"/>
        </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
// 停车场列表
export default {
    name:"ParkList",
    props:["data"],
    methods:{
        showDetails(){
            // 跳转到停车场详情
            this.$router.push({
                name:"parkingDetails",
                params:{
                    id:this.data.id
                }
            })
        }
    }
}
</script>

<style>
.park{
    margin-top: 25px;
}
</style>