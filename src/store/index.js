// 该文件用于创建vuex最为核心的stare
//引入vue
import Vue from 'vue'

// 引入Vuex
import Vuex from 'vuex'

// 使用vuex插件
Vue.use(Vuex);

// 引入模块
import login from './login';
import home from "./home";
import park from "./home/park";
import user from "./home/user";
// 创建并暴露store
export default new Vuex.Store({
    modules:{
        home,
        login,
        park,
        user
    }
})
