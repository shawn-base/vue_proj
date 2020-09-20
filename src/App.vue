<template>
    <div id="app">
        <div class="header">Welcome dyeing!</div>
        <div class="body">
            <div class="left-aside">
                <el-menu default-active="3" class="el-menu-vertical-demo">
                    <el-menu-item index="1"
                                  class="el-menu-item-demo"
                                  @click="navDyeing">
                     <a href='/dyeing'>染色管理</a>
                    </el-menu-item >
                    <el-menu-item index="2" class="el-menu-item-demo"
                                  @click="navEntrance">
                       <a href='/entrance'>入口配置</a>
                    </el-menu-item>
                    <el-menu-item index="3" class="el-menu-item-demo"
                                  @click="navSearch">
                        <a href="/search">染色查询</a>
                    </el-menu-item>
                </el-menu>
            </div>
            <div class="center">
                <slot> </slot>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'App',

        data : function () {
            return {
            }
        }
    }
</script>

<style>
    .header {
        background-color: gray;
        width: 100%;
        text-align: center;
        height: 60px;
        font-size: 30px;
        padding-top: 20px;
    }
    .body {
        display: flex;
    }
    .body .left-aside {
        margin-top: 40px;
        width: 120px;
    }
</style>