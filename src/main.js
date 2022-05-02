import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import {
    Container,
    Aside,
    Header,
    Main,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tag,
    Row,
    Col,
    Card,
    Table,
    TableColumn,
    Form,
    FormItem,
    Input,
    Dialog,
    DatePicker,
    Select,
    Option,
    Message,
    MessageBox,
    Pagination
} from 'element-ui'
import http from 'axios'
import store from '@/store'
import '@/api/mock.js'

Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Button)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)


Vue.config.productionTip = false;
Vue.prototype.$http = http
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

router.beforeEach((to, from, next) => {
    store.commit('getToken')
    const token = store.state.user.token
    if (!token && to.name !== 'login') {
        next({ name: 'login' })
    } else if (token && to.name === 'login' || to.name == 'Main') {
        next({ name: 'home' })
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: (h) => h(App),
    created() {
        store.commit('addMenu', router)
    }
}).$mount('#app')