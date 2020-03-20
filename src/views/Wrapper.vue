<!--  -->
<template>
    <div class="wrapper">
        <el-container>
            <el-aside width="200px">
              <menu-nav @menuItem="menuItem"></menu-nav>
            </el-aside>
            <el-container>
                <el-header>
                  <header-top></header-top>
                </el-header>
                <el-main>
                  <router-view></router-view>
                </el-main>
            </el-container>
            <el-backtop
             :visibilityHeight="10"
             >
              <!-- <div
                style="{
                  height: 100%;
                  width: 100%;
                  background-color: #f2f5f6;
                  box-shadow: 0 0 6px rgba(0,0,0, .12);
                  text-align: center;
                  line-height: 40px;
                  color: #1989fa;
                }"
              >
                UP
              </div> -->
            </el-backtop>
        </el-container>
    </div>
</template>

<script>
import menuNav from '@/components/menu';
import headerTop from '@/components/HeaderTop';

export default {
  name:'Wrapper',
  data() {
    return {
      bottom:'10'
    }
  },
  
  components:{
    menuNav,
    headerTop
  },
//生命周期 - 创建完成（访问当前this实例）
  created() {
     
   },
//生命周期 - 挂载完成（访问DOM元素）
   mounted() {
     
   },
   methods: {
     menuItem(payload){
        console.log(payload)
        console.log(this)
        this.$router.push(payload.key);
     }
   },
}
</script>
<style scoped lang='less'>
/* @import url(); 引入css类 */

  .wh{
    width: 100%;
    height: 100%;
  }

  .wrapper{
    .wh;
    .el-container{
      .wh;
      .el-header{
        border-bottom: 1px solid red;
      }
    }
    .el-aside{
      height: 100%;
      border-right: 1px solid red;
    }
  }
  
  

</style>