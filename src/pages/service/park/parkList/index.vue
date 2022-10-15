<template>
  <div>
    <van-cell-group inset class="park">
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
export default {
    name:"ParkList",
    props:["data"],
    
}
</script>

<style>
.park{
    margin-top: 25px;
}
</style>