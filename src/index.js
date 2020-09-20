import Vue from 'vue'
import { Drawer, Table,TableColumn, Menu, Submenu, MenuItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import page from 'page'

Vue.component(Drawer.name, Drawer)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)

const app = new Vue({
    el: '#app',
    name: 'app.vue',
    data: {
        ViewComponent: { render: function(h) { return h('div', 'loading...') } }
    },
    render: function(h) { return h(this.ViewComponent) }
    /*
    render: function(h) {
        return h(App)
    },*/
})

page('/', function() { return app.ViewComponent = require('../pages/dyeing_search.vue') } )
page('/search', function() { return app.ViewComponent = require('../pages/dyeing_search.vue') } )
page('/dyeing', function() { return app.ViewComponent = require('../pages/dyeing_manage.vue') } )
page('/entrance', function() { return app.ViewComponent = require('../pages/entrance_manage.vue') } )
page('*', function() { return app.ViewComponent = require('../pages/dyeing_search.vue') } )
page()
