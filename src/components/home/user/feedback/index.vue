<template>
  <div>
    <TopHead 
    router_left="usermenu"
    title="反馈页面"
    />
    <van-form>
        <van-field
        label="主题"
        placeholder="请输入主题"
        v-model="form.title"
        />
        <van-field
            v-model="form.nav"
            rows="2"
            autosize
            label="留言"
            type="textarea"
            maxlength="150"
            placeholder="请输入留言"
            show-word-limit
        />
        <van-button round size="large" class="but_sub" @click="submitMsg">提交</van-button>
    </van-form>
  </div>
</template>

<script>
import{
    putIdea
} from "@/api/user_api"
export default {
    name:"FeedBack",
    data(){
        return{
            form:{
                title:"",
                nav:""
            }
        }
    },
    methods:{
        submitMsg(){
            putIdea(this.form).then((response) => {
                this.$dialog({
                    message:response.data.msg
                })
            })
        }
    }
}
</script>

<style scoped>
.but_sub{
    margin-top: 10%;
}
</style>