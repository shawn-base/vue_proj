<template>
    <div id="app">
        <h1>Welcome Vue!</h1>
        <anchoredhead :level="1">Hello world!</anchoredhead>

         <button v-on:click="counter += 1">Add 1</button>
         <p>The button has been clicked {{ counter }} times</p>
        <div id="example-2">
            <!-- `greet` 是在下面定义的方法名 -->
            <button v-on:click="greet">Greet</button>
        </div>
        <contact-info
            :com-email="user.DataEmail"
            :com-phone="user.DataPhone"
            :com-weibo="user.DataWeibo" />
        <div class="dying-table">
            <el-table
                :data="tableData">
                <el-table-column v-for="items in tableDataType"
                                 :prop="items.nameProp"
                                 :label="items.nameLabel">
                </el-table-column>
            </el-table>
        </div>

        <button @click="drawer = true" >点我打开</button>
        <el-drawer
                :visible.sync="drawer"
                :direction="direction">
            <div class="drawer-entrance">
                <div class="title">染色入口:</div>
                <input v-model="dyeing.entrance" placeholder=""/>
            </div>
            <div class ="drawer-entrance">
                <div class="title">应用:</div>
                <input v-model="dyeing.app" placeholder=""/>
            </div>
            <div class ="drawer-entrance">
                <div class="title">服务名称:</div>
                <input v-model="dyeing.server" placeholder=""/>
            </div>
            <div class="btn">
                <button @click="handleAdd">确定</button>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    import anchoredhead from '../components/dyhead.vue'
    import ContactInfo from '../components/contact.vue'


    export default {
        name: 'App',
        components: {
            anchoredhead,
            ContactInfo
        },
        data : function () {
            return {
                name: "dannykkhan",
                counter: 0,
                user: {
                    DataEmail: 'dannykkhan',
                    DataPhone: '18320785416',
                    DataWeibo: 'weibo.com',
                },
                dyeing: {
                    entrance:'',
                    app:'',
                    server:'',
                },
                drawer: false,
                direction: 'rtl',
                tableDataType:[
                    { nameLabel:'入口', nameProp:'entrance'},
                    { nameLabel:'应用', nameProp:'app'},
                    { nameLabel:'服务名称', nameProp:'server'},
                    { nameLabel:'操作人', nameProp:'operator'},
                    ],
                tableData:[
                    {entrance: '第一个', app: 'mdd', server: 'helloServer', operator: 'mike'}
                ]
            }
        },
        methods: {
            greet: function(event) {
                // `this` 在方法里指向当前 Vue 实例
                alert('Hello ' + this.name + '!')
                // `event` 是原生 DOM 事件
                if (event) {
                    alert(event.target.tagName)
                }
            },
            handleAdd: function () {
                this.tableData.push(
                    { entrance: this.dyeing.entrance,
                    app: this.dyeing.app,
                    server:this.dyeing.server,
                    operator:'mike'})
            }
        },
    }
</script>

<style>
    .drawer-entrance {
        display: flex;
        margin-bottom: 10px;
    }
    .drawer-entrance .title {
        width: 80px;
        text-align: right;
        margin-right: 10px;
    }
    .btn {
        margin-left: 80%;
    }

    .dying-table {
        margin-top: 40px;
        margin-bottom: 40px;
    }
</style>