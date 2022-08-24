<template>
  <div class="tanble">
    <Table :columns="tableColumn" :data="tableData"></Table>
    <Page
      :total="page.total"
      :current="page.pageIndex"
      :pageSize="page.pageSize"
      :page-size-opts="[10, 20, 30, 40, 50]"
      prev-text="上一页"
      next-text="下一页"
      show-sizer
      show-total
      show-elevator
      class="page"
      @on-change="changeIndexPage"
      @on-page-size-change="changePageSize"
    >
      >
      <span>共有{{ this.page.total }}条</span>
      ></Page
    >
  </div>
</template>

<script>
export default {
  name: "testTable",
  props: {
    tableColumn: {
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
  methods: {
    changeIndexPage(page) {
      this.page.pageIndex = page;
      this.$emit("pageRefresh", page);
    },
    changePageSize(pageSize) {
      this.page.pageSize = pageSize;
      this.$emit("pageRefresh", pageSize);
      console.log(pageSize);
    },
  },
};
</script>

<style scoped>
.table {
  margin-top: 10px;
  padding: 5px;
  position: relative;
}
.ivu-table-wrapper {
  border: none;
}
.page {
  position: absolute;
  bottom: -200px;
  left: 50px;
}
</style>