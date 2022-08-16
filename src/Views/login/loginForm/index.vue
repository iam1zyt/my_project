<template>
  <Form
    ref="loginForm"
    :model="form"
    :rules="rules"
    @keyup.enter.native="handleSubmit"
  >
    <FormItem prop="userName">
      <Input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon type="md-lock" :size="14"></Icon>
        </span>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input v-model="form.password" type="password" placeholder="请输入密码">
        <span slot="prepend"><Icon type="md-lock" :size="14"></Icon> </span
      ></Input>
    </FormItem>
    <FormItem prop="checkCode">
      <Input
        v-model="form.checkCode"
        placeholder="请输入验证码"
        class="code-input"
        @on-enter ="handleSubmit"
      ></Input>
      <span class="code" >
        <img
          ref="imgCheck"
          :src="PROXY_URL + '/verification'"
          alt=""
          @click="changeVertical"
        />
      </span>
    </FormItem>
    <FormItem
      ><Button type="primary" @click="handleSubmit" long
        >登录</Button
      ></FormItem
    >
  </Form>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import JSEncrypt from "jsencrypt";
export default {
  name: "loginForm",
  data() {
    return {
      form: {
        userName: "admin",
        password: "Admin123",
        checkCode: "",
        type: '超级管理员',
      },
      rules: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur,chang" },
          
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur,chang" },
         
        ],
        checkCode: [
          { required: true, message: "验证码不能为空", trigger: "blur,chang" },
        ],
      },
    };
  },
  computed: {
    ...mapState("user", {
      userInfo: (state) => state.userInfo,
      currentPage: (state) => state.currentPage,
    }),
  },
  mounted() {
  },
  methods: {
    ...mapActions("user", ["login", "getMenu"]),
    ...mapMutations("user", ["SET_USERINFO"]),

    // 加密
    encryptedData(data) {
      if (data === null || data === "undefined" || data === "") {
        return "";
      }
      let encryptor = new JSEncrypt();
      encryptor.setPublicKey(
        "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnCP4x5GfUeKEjCf7b5k8S7DPbc7db6YZbkXKRMBkbgF/VIjgdCv6rwnGhCHc/JwVXF8ui6ozyQq5AfJrjQynK/139hfyM+7ob3lVQz6dZiYI3BtTbQMSXD58IYVQ7SeijWmnGQ/EOP4R4FeLEsxAmoLw/xoNeErfNplmM8nxg+wIDAQAB"
      );
      return encryptor.encrypt(data);
    },
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // 整理参数
          let params={
            username:this.form.userName,
            password:this.encryptedData(this.form.password),
            type:this.form.type,
            checkCode:this.form.checkCode
          }

          this.login(params).then(res=>{
              if(res.success){
                this.$api.login.getUserInfo().then(res=>{
                  console.log("getUserInfo",res);
                  this.SET_USERINFO(res.obj);
                  // this.getMenu().then(res=>{
                     this.$router.replace('/home');
                  //   this.$router.push({name:this.currentPage})
                  // })
                })
              }else{
                this.changeVertical()
                this.$Message.error("登陆失败，请检查输入内容是否正确")
              }
          })
          //valid成功为true,失败为false
          // this.$emit("on-success-valid", this.form);
        } else {
          this.changeVertical();
          this.$message.error("登陆失败！");
        }
      });
    },
    // 验证码
    changeVertical() {
      this.$refs.imgCheck.setAttribute("src", this.PROXY_URL + "/verification?" +Math.random());
    },
  },
};
</script>

<style lang="scss" scoped>
.code-input {
  width: 140px;
}
.code {
  display: block;
  float: right;
  width: 100px;
  margin-left: 20px;
}
</style>
