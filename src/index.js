import Vue from 'vue'
import { Drawer, Table,TableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.component(Drawer.name, Drawer)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

new Vue({
    el: '#app',
    name: 'app.vue',
    render: function(h) {
        return h(App)
    },
})
