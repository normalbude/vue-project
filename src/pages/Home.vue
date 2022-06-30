<template>
  <div>
  <h2>Home</h2>
    <button @click="logOut">退出登录</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    logOut(){
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>

</style>