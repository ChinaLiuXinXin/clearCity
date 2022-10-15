<template>
  <div>
    <van-cell-group inset v-for="item in ParkingRecord" :key="item.id" class="cell_group">
      <van-cell title="停车场名：" :value="item.parkName"></van-cell>
      <van-cell title="车牌号：" :value="item.plateNumber"></van-cell>
      <van-cell title="收费金额：" :value="item.monetary"></van-cell>
      <van-cell title="入场时间：" :value="item.entryTime"></van-cell>
      <van-cell title="出场时间：" :value="item.outTime"></van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name:"Body",
  props:["ParkingRecord"]
}
</script>

<style scoped>
.cell_group{
  margin-top:25px
}
</style>