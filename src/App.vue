<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>
<style>
* {
margin: 0;
padding: 0;
}
html{
  height: 100%;
}
</style>
