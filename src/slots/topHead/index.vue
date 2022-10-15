<template>
  <div>
    <!-- 顶部导航栏 -->
    <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
    <!-- 插槽内容 -->
    <span slot="right">
        <!-- 接受到内容，并再一次通过插槽填入到组件中 -->
        <slot></slot>
    </span>
    <!-- <van-icon slot="right-icon" name="notes-o"></van-icon> -->
    </van-nav-bar>
    <!-- 内容 -->
    
  </div>
</template>

<script>
// 将导航栏进行二次封装,方便统一管理
export default {
    name:"TopHead",
    // router_right是点击右侧图标要跳转到的路由名称
    // router_left是点击左侧图标要跳转到的路由名称
    props:["title","right_text","router_right","router_left"],
    methods:{
        onClickLeft(){
            // 从哪来回哪去
            this.$router.push({
                name:this.router_left
            })
        },
        onClickRight(){
            // 跳转到指定页面
            this.$router.push({
                name:this.router_right
            })
        }
    }
}
</script>

<style>

</style>