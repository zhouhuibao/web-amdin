<!--  -->
<template>
    <div>
        <el-Button @click="exit" >退出</el-Button>
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
     exit(){
       console.log('退出')
       this.$router.push('login');
     }
   },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>