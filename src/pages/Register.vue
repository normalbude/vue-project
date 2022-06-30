<template>
  <div>
  <h2>注册页面</h2>
    <button @click="logOut">已有账号，直接登录</button>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods:{
    logOut(){
      this.$router.replace('/login')
    }
  }
}
</script>

<style scoped>

</style>