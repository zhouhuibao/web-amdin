<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="add">el-button</el-button>
      <i class="el-icon-edit"></i>
    </div> -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/profile">profile</router-link>|
    <router-view/>
    <router-view name="helper"/> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './pages/Wrapper'

export default {
  name: 'app',
  components: {
    // HelloWorld
  },
  methods:{
    add(){
      console.log(111)
      console.log(this.$store.commit)
      this.$store.commit('addCount',2)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* margin-top: 60px; */
}
*{
  margin: 0;
  padding: 0;
}
</style>
