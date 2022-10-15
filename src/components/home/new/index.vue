<template>
  <div>
    <van-nav-bar
      :title="newsNavDetails.title"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div v-html="newsNavDetails.content"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:"New",
  components:{
  },
  data(){
    return{
      
    }
  },
  methods:{
    onClickLeft(){
      // 回到首页
      this.$router.push({
        name:"head"
      })
    },
    onClickRight(){
      console.log("right")
    }
  },
  computed:{
    ...mapState("home",["newsNavDetails"])
  }
}
</script>

<style scoped>
  
</style>