<template>
  <div class="login">
    <div class="login-con">
      <Card icon="md-log-in" title="欢迎登录" :bordered="false">
        <div class="from-con">
          <loginForm></loginForm>
          <p class="login-tip">输入任意用户名和密码</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import loginForm from "./loginForm";
export default {
  name: "login",
  components: { loginForm },
  data() {
    return {};
  },
  methods: {
    //  handleSubmit(form) {
    //  axios({
    //   method:'post',
    //   url:'/user',
    //   data:{
    //     username:form.userName,
    //     password:form.password
    //   }
    //  }).then(res=>{
    //   let code = res.data.meta.status
    //    let data = res.data.userData
    //   if(code=='200'){
    //     this.$store.commit('SET_TOKEN',data.token)
    //     this.$router.replace('/home');
    //   }else{
    //     alert('校验失败，用户名或密码错误！')
    //     return false
    //   }
    //  })
    // },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("/src/assets/image/bg.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  &-con {
    position: absolute;
    right: 40%;
    top: 45%;
    transform: translateY(-60%);
    width: 300px;
    ::deep .ivu-card-head {
      text-align: center;
      padding: 10px 0;
    }
    .from-con {
      padding: 10px 0 0;
    }
    .login-tip {
      font-size: 10px;
      text-align: center;
      color: #c3c3c3;
    }
  }
}
</style>>
