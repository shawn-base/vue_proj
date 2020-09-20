import Vue from 'vue'
import { Drawer, Table,TableColumn, Menu, Submenu, MenuItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import  router from './router'
import App from './App'

Vue.component(Drawer.name, Drawer)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
    /*
    render: function(h) {
        return h(App)
    },*/
})
