<template>
  <div class="table">
    <Table :columns="tableColum" :data="tableData" class="tables"></Table>
    <Page
      :total="page.total"
      :current="page.pageIndex"
      :pageSize="page.pageSize"
      show-sizer
      class="page"
      style="margin-top:10px"
    ></Page>
  </div>
</template>

<script>
export default {
  name: "myTable",
  props: {
    tableColum: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    tableData: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    page: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.table{
  margin-top: 10px;
}
.page {
   margin-left: 550px;
}
</style>