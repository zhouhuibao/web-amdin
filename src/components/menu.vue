<!--  -->
<template>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
        >
        <!-- <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
            </template>
            <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="profile">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu> -->
        <el-menu-item index="profile">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="about" >
            <i class="el-icon-document"></i>
            <span slot="title">关于我们</span>
        </el-menu-item>
        <el-menu-item index="stystem">
            <i class="el-icon-setting"></i>
            <span slot="title">系统设置</span>
        </el-menu-item>
        </el-menu>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
//生命周期 - 创建完成（访问当前this实例）
  created() {
     
   },
//生命周期 - 挂载完成（访问DOM元素）
   mounted() {
     
   },
   methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleSelect(key, keyPath){
            const obj={
                key,
                keyPath
            }
            this.$emit("menuItem",obj)
        }
   },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>