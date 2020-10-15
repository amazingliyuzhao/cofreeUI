<template>
    <div class="homeBox">
        <el-container>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu
                    :default-openeds="['开发指南']"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-submenu v-for="title in Object.keys(slideItem)" :key="title" :index="title">
                        <template slot="title">
                            <i class="el-icon-message"></i>
                            {{title}}
                        </template>
                        <div v-for="(val,index) in slideItem[title]" :key="index">
                            <div v-if="val.items">
                                <el-menu-item-group>
                                    <template slot="title">{{val.desc}}</template>
                                    <el-menu-item
                                        :index="value.path"
                                        v-for="(value,index) in val.items"
                                        :key="index"
                                        @click="goDtail(value.path)"
                                    >{{value.desc}}</el-menu-item>
                                </el-menu-item-group>
                            </div>
                            <div v-else>
                                <template v-if="val.name">
                                    <el-menu-item
                                        :index="val.path"
                                        @click="goDtail(val.path)"
                                    >{{val.desc}}</el-menu-item>
                                </template>
                            </div>
                        </div>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <!-- <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>-->
                </el-header>
                <el-main>
                    <Main></Main>
                    <!-- <router-view /> -->
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<style>
.homeBox {
    width: 100%;
    height: 100%;
}
.el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>
<script>
import navList from '../../nav.config.js'
import Main from './main.vue'
export default {
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }
        return {
            tableData: Array(20).fill(item),
            slideItem: navList
        }
    },
    components:{
        Main
    },
    methods: {
        goDtail(path) {
            this.$router.push(path)
        },
        initPage() {
            console.log(navList)
            // Object.keys(navList).forEach((item) => {
            //     this.slideItem =  this.slideItem.concat(navList[item])
            // })
            //     for (let i in navList) {
            //         let o = {};
            //         o[i] = navList[i]; //即添加了key值也赋了value值 o[i] 相当于o.name 此时i为变量
            //         this.slideItem.push(o)

            //     }

            // console.log('dsad')
            JSON.stringify()
            console.log(this.slideItem)
        }
    },
    created() {
        this.initPage()
    }
}
</script>