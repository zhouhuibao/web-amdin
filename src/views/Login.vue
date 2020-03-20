<!--  -->
<template>
    <div>
        登录页面
        <el-Button @click="login">登录</el-Button>
    </div>
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
       login(){
           this.$router.push('/')
       }
   },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>