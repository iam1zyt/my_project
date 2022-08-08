<template>
  <div class="layout">
    <Header> </Header>
    <div class="center">
      <Sider />
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Sider from "./Sider.vue";
export default {
  name: "",
  components: { Header, Sider },
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background:  #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout .center {
  display: flex;
  /* height: 500px; */
}
</style>
