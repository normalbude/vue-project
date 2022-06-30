<template>
  <div id="app">
    <form action="" id="form">
      <h1 id="loginMsg">登录</h1>
      <div class="input">
        <p>账号:<input id="username" name="username" type="text" v-model="username"></p>
        <p>密码:<input id="password" name="password" type="password" v-model="password"></p>
      </div>
      <div class="loginProp">
        <span>管理员</span><input checked type="radio" name="radio" v-model="power" value="1">
        <span>用户</span><input type="radio" name="radio" v-model="power" value="2">
      </div>
      <div id="subDiv">
        <button type="submit" class="button" @click="userLogin">登录</button>
        <button class="register" @click="userRegister">注册</button>
      </div>
    </form>
  </div>
</template>

<script>
import  axios from "axios";
import {getLogin, getLogin2} from "@/api/request";

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
      power: '1',
      errMessage:'用户名或密码错误'
    }
  },
  methods: {
    userLogin() {
      /*axios.get(`http://localhost:8080/userInfo?username=${this.username}&password=${this.password}&power=${this.power}`).then(
          response =>{
            console.log('请求成功了',response)
          },
          error=>{
            console.log('请求失败了',error.message)
          }
      )*/

      /*let data = {username:this.username,password:this.password,power:this.power}
      getLogin2(data).then(response=>{
        console.log('请求')
        console.log(response.data)
      })*/

      if (this.username && this.password) {
        if (this.power === '1') {
          this.$router.replace('/administrator/goods')
        } else {
          this.$router.replace('/home')
        }
      }else {
        alert(this.errMessage)
      }
    },
    userRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 400px;
  height: 380px;
  margin: 200px auto;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  text-align: center;
}

.input{
  width: 100%;
  margin: 20px 0;
}

#remember{
  margin-left: 15px;
  border-radius: 5px;
  border-style: hidden;
  background-color: rgba(216, 191, 216, 0.5);
  outline: none;
  padding-left: 10px;
  height: 20px;
  width: 20px;
}
#username{
  width: 250px;
  margin-left: 15px;
  border-radius: 5px;
  border-style: hidden;
  height: 30px;
  background-color: rgba(216, 191, 216, 0.5);
  outline: none;
  color: #f0edf3;
  padding-left: 10px;
  margin-top: 20px;
}
#password{
  width: 250px;
  margin-left: 15px;
  border-radius: 5px;
  border-style: hidden;
  height: 30px;
  background-color: rgba(216, 191, 216, 0.5);
  outline: none;
  color: #f0edf3;
  padding-left: 10px;
  margin-top: 20px;
}
.loginProp{
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.loginProp input{
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
}
.loginProp span{
  height: 100%;
  font-size: 20px;
  line-height: 30px;
}
.button {
  border-color: cornsilk;
  background-color: rgba(100, 149, 237, .7);
  color: aliceblue;
  border-style: hidden;
  border-radius: 5px;
  width: 100px;
  height: 31px;
  font-size: 16px;
  margin-right: 20px;
}

.register{
  display: inline-block;
  text-decoration: none;
  border-color: cornsilk;
  background-color: rgba(100, 149, 237, .7);
  color: aliceblue;
  border-style: hidden;
  border-radius: 5px;
  width: 100px;
  height: 32px;
  line-height:32px;
  font-size: 16px;
}

#subDiv {
  text-align: center;
  margin-top: 30px;
}
#loginMsg{
  text-align: center;
  color: aliceblue;
}
#errorMsg{
  text-align: center;
  color:red;
}
</style>
