<!--  -->
<template>
    <div>
        <el-button type="primary" @click="btnClick" v-loading.fullscreen.lock="loading">主要按钮</el-button>
        关于我们 {{loading}}

        <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="title"
            label="商品名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="unit"
            label="单位"
            width="180">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        </el-table>

        <el-table
        border
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="title"
            label="商品名称"
            width="180">
        </el-table-column>
        <el-table-column
            prop="unit"
            label="单位"
            width="180">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="addTime"
            label="时间">
        </el-table-column>
        </el-table>
        
    </div>
</template>

<script>
import {getRegionTree,queryGoodsSpuList} from '@/api/webRegion';
export default {
    data() {
        return {
            tableData:[]
        }
    },
    computed: {
        loading () {
            return this.$store.state.loading
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        const params={
            token: "MTVkMGI4ODgyMWE5MTFlYWE3NWUwMGQ4NjE5MzUzZjU=",
        }
        getRegionTree(params).then(res=>{
            console.log(res)
        })

        const goodsParams={
            ...params,
            pageSize: 10,
            pageNum: 1
        }
        

        this.getGoodsList(goodsParams)


    },
    methods: {
        btnClick(){
            this.$message({
                message: '居中的文字',
                center: true
            });
        },
        getGoodsList(data){
            queryGoodsSpuList(data).then(res=>{
                console.log(res)
                this.tableData = res.data.rows

            })
        }
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>