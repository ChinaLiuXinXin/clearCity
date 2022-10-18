<template>
  <div>
    <TopHead router_left="usermenu" title="个人信息">
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
      <van-field label="昵称"  :readonly="status" v-model="form.nickName"></van-field>
      <van-field label="用户名" :value="userMesage.userName" readonly>
        <span slot="extra">禁止修改</span>
      </van-field>
      <!-- <van-field label="性别" :value="isMan" :readonly="status" v-model="form.sex"/> -->
      <van-cell>
        <span slot="title" class="sex_span">性别</span>
        <van-radio-group direction="horizontal" class="audio_sex" v-model="form.sex" :disabled="status">
          <van-radio name="0">男</van-radio>
          <van-radio name="1">女</van-radio>
        </van-radio-group>
      </van-cell>
      <van-field label="联系电话"  :readonly="status"  v-bind:value="phoneNumber" v-show="status"/>
      <van-field label="联系电话"  :readonly="status"  v-model="form.phonenumber" v-show="!status"/>
      <van-field label="邮箱" :value="form.email" readonly>
        <span slot="extra">禁止修改</span>
      </van-field>
    </van-cell-group>
    <van-button round  type="info"  size="large" class="block_img" v-if="!status" @click="submit">提交</van-button>
  </div>
</template>

<script>
import {
  Field
} from "vant"
import { mapState } from 'vuex'
import {
  putUserMesage
} from "@/api/user_api"
export default {
    name:"UserMesage",
    data(){
      return{
        form:{
          nickName:"",
          sex:"",
          phonenumber:"",
          email:""
        },
        // 当点击修改时，会修改status，同时，一部分输入框会变成可输入的，会显示提交按钮
        status:true
      }
    },
    components:{
      [Field.name]:Field
    },
    methods:{
      overSex(value){
        return value == "男" ? 0:1
      },
      point(){
        this.status  = !this.status
      },
      submit(){
        // 发送请求之前，需要对数据做一些处理
        let data = this.form;
        // 将数据转换为代号
        // data.sex = this.overSex(data.sex);
        // 
        putUserMesage(data).then((response) => {
          console.log(response)
        })
      }
    },
    computed:{
      ...mapState("user",["userMesage"]),
      // isMan(){
      //   return this.form.sex == 0 ? "男":"女"
      // },
      phoneNumber(){
        // let leng =  this.userMesage.phonenumber.length
        return this.form.phonenumber+"****"
      }
    },
    // 挂载组件之前，将form的数据赋值
    beforeMount(){
      let leng =  this.userMesage.phonenumber.length
      this.$store.dispatch("user/getUserMesage")
      this.form.nickName = this.userMesage.nickName
      this.form.sex = this.userMesage.sex
      this.form.phonenumber = this.userMesage.phonenumber.substring(0,leng-4)
      this.form.email = this.userMesage.email
      // console.log(this.userMesage)
      
    },
    beforeCreate(){
      // 在进入组件之前，通过全局事件总线将菜单隐藏
      
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
.sex_span{
  position: relative;
  right: 64px;
  color: #646566;
}
/* .audio_sex{
  position: relative;
  right: 64px;
} */
</style>