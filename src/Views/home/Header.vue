<template>
  <div class="Header">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="logout">
        <span @click="handLogout">退出登录</span>
      </div>
    </Menu>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name:'',
  methods: {
    ...mapActions('user',['logout']),
    handLogout(){
      this.logout().then(res=>{
        this.$Message.success({
          content:'退出成功',
          duration:1.5,

        })
      })
    }
  },

};
</script>

<style lang="scss"scpoed >
.Header{
  background: #17233d;

}
.layout-nav {
  background: #17233d;
  margin-left: 700px;
}
.login-item{
  color: rgb(253, 253, 253);
  font-size: 20px;
}
.logout{
  margin-left: 1700px;
  color: aliceblue;
  font-size: 15px;
  span{
    cursor: pointer;
  }
}
</style>