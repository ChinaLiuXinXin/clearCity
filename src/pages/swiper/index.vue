<template>
    <div class="swiper_">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in swipeData()" :key="item.id" class="swiper_item">
          <img :src="`http://218.7.112.123:10001/`+item.advImg" alt="rfwed" class="swipe_img">
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
import {
    Swipe,
    SwipeItem
} from "vant"
import { mapState } from 'vuex'
export default {
    name:"Swipe_",
    methods:{
      ...mapState("home",["swipeData"])  
    },
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
    }
}
</script>

<style scoped>
.swipe_img{
    width: 350px;
  }

</style>