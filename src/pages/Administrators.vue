<template>
  <div>
    <el-header style="height:100px; padding: 0">
      <el-button style="background-color: skyblue" class="logOut" @click="logOut">退出登录</el-button>
    </el-header>
    <el-row class="tac">
      <el-col :span="4" style="min-width: 150px">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <router-link to="/administrator/user">
              <el-menu-item style="min-width: 150px" index="1-1">选项1</el-menu-item>
            </router-link>
            <el-menu-item style="min-width: 150px" index="1-2">选项2</el-menu-item>
            <el-menu-item style="min-width: 150px" index="1-3">选项3</el-menu-item>
            <router-link to="/administrator/goods">
              <el-menu-item style="min-width: 150px" index="1-4">选项4</el-menu-item>
            </router-link>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航二</span>
            </template>
            <el-menu-item style="min-width: 150px" index="2-2">选项2</el-menu-item>
            <el-menu-item style="min-width: 150px" index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>导航三</span>
            </template>
            <el-menu-item style="min-width: 150px" index="3-2">选项2</el-menu-item>
            <el-menu-item style="min-width: 150px" index="3-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>导航四</span>
            </template>
            <el-menu-item style="min-width: 150px" index="4-2">选项2</el-menu-item>
            <el-menu-item style="min-width: 150px" index="4 -3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <div class="router-view">
        <router-view v-if="isRouterAlive"></router-view>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Administrators',
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true,
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    logOut(){
      this.$router.replace('/login')
    }
  },
}
</script>

<style>
.el-col {
  height: 700px;
  background-color: #545c64;

}

.el-header {
  position: relative;
  background-color: #545D60;
  /*overflow: hidden;*/
}



.el-submenu__title {
  height: 80px;
}

.el-submenu .el-menu-item {
  width: 16.666%;
}

.router-view{
  position: absolute;
  width: 750px;
  left: 30%;
  top: 40px;
}

.logOut{
  position: absolute;
  top: 20px;
  right: 30px;
}
</style>
