<template>
  <div>
    <TopHead router_left="user" title="个人信息">
      <span @click="point">修改</span>
    </TopHead>
    <van-cell-group inset class="block">
      <!-- 头像、昵称、性别、联系电话 -->
      <div>
        <van-image round
          :src="`http://218.7.112.123:10001/prod-api`+userMesage.avatar"
          width="5rem"
          height="5rem"
          fit="cover" class="block_img"/>
      </div>
      <van-field label="昵称"  :readonly="status" v-model="form.JokeName"></van-field>
      <van-field label="用户名" :value="userMesage.userName" readonly>
        <span slot="extra">禁止修改</span>
      </van-field>
      <van-field label="性别" :value="isMan" :readonly="status" v-model="form.sex"/>
      <van-field label="联系电话" :value="phoneNumber" :readonly="status" v-model="form.phone"/>
      <van-field label="邮箱" :value="phoneNumber.email" readonly>
        <span slot="extra">禁止修改</span>
      </van-field>
    </van-cell-group>
    <van-button round  type="info"  size="large" class="block_img" v-if="!status">提交</van-button>
    <!-- <van-button round >12</van-button> -->
  </div>
</template>

<script>
import {
  Field
} from "vant"
import { mapState } from 'vuex'
export default {
    name:"UserMesage",
    data(){
      return{
        form:{
          JokeName:"",
          sex:"",
          phone:"",
        },
        // 当点击修改时，会修改status，同时，一部分输入框会变成可输入的，会显示提交按钮
        status:true
      }
    },
    components:{
      [Field.name]:Field
    },
    methods:{
      point(){
        this.status  = !this.status
      }
    },
    computed:{
      ...mapState("home",["userMesage"]),
      isMan(){
        return this.userMesage.sex == 0 ? "男":"女"
      },
      phoneNumber(){
        let leng =  this.userMesage.phonenumber.length
        return this.userMesage.phonenumber.substring(0,leng-4)+"****"
      }
    },
    // 挂载组件之前，将form的数据赋值
    beforeMount(){
      this.form.JokeName = this.userMesage.nickName
      this.form.sex = this.userMesage.sex
      this.form.phone = this.phoneNumber
    },
    beforeCreate(){
      // 在进入组件之前，通过全局事件总线将菜单隐藏
      this.$bus.$emit("test",false)
    },
    beforeDestroy(){
      // 离开之前，通过全局事件总线将菜单显示,并且解绑事件总线
      this.$bus.$emit("test",true)
      // this.$bus.$off("test")
    }
}
</script>

<style scoped>
.block{
  margin-top: 10%;
}
.block_img{
  margin-top: 10%;
}
</style>