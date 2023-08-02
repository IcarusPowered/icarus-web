import Vue from 'vue'
import {
  Avatar,
  Button,
  Input,
  Col,
  Form,
  FormItem,
  Link,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem,
  Tabs,
  TabPane,
  Tree,
  Container,
  Header,
  Aside,
  Main,
  Notification,
  Message,
  MessageBox
} from 'element-ui'

Vue.use(Avatar)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Link)
Vue.use(Input)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tree)

Vue.prototype.$message = Message
Vue.prototype.$messageBox = MessageBox
Vue.prototype.$notify = Notification
