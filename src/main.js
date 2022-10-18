import Vue from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'
import axios from "axios"
import "vant/lib/index.css"
import {Dialog} from "vant"

//将自定义组件定义为全局组件
import TopHead from "@/slots/topHead"

Vue.component(TopHead.name,TopHead)

// 注册vant全局组件
import {
  Col,
  Row,
  Button,
  Icon,
  CellGroup,
  Cell,
  Image,
  NavBar,
  Search,
  Field,
  RadioGroup,
  Radio,
  Form
} from "vant"

Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Icon)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Image)
Vue.use(NavBar)
Vue.use(Search)
Vue.use(Field)
Vue.use(RadioGroup),
Vue.use(Radio)
Vue.use(Form)

Vue.prototype.$http = "http://218.7.112.123:10001/"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate(){
    Vue.prototype.$axios = axios
    // 将弹窗绑定到vue原型上
    Vue.prototype.$dialog = Dialog
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }

}).$mount('#app')
