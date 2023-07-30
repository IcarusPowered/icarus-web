import Vue from 'vue'
import {
  Form,
  FormItem,
  Button,
  Input,
  Col,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Tabs,
  TabPane,
  Notification,
  Message,
  MessageBox
} from 'element-ui'

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Link)
Vue.use(Input)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox
Vue.prototype.$notify = Notification
