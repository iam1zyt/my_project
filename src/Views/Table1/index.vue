<template>
  <div class="content">
    <div class="nav">
      <myButton v-model="dataFrom" :buttonSelectOptions="buttonSelectOptions" :stateData="stateData" @search="dataSearch"/>
      <myTable :tableData="tableData" :tableColum="tableColum" :page="page" />
    </div>
  </div>
</template>

<script>
export default {
  name: "table1",
  data() {
    return {
      tableData: [],
      tableColum: [],
      dataFrom: [],
      buttonSelectOptions: [],
      stateData:[],
      isShow:false,
      page: {
        total: 100,
        pageIndex: 1,
        pageSize: 10,
      },
    };
  },
  created() {
    this.getTableData();
    // 表头数据
    this.tableColum = [
      {
        title: "单位编号",
        key: "orgCode",
        minWidth: 120,
        tree: true,
      },
      {
        title: "单位名称",
        minWidth: 100,
        key: "orgName",
      },
      {
        title: "单位性质",
        key: "orgType",
        minWidth: 100,
      },
      {
        title: "参与汇总",
        minWidth: 100,
        key: "sumFlag",
      },
      {
        title: "编辑时间",
        key: "updateDate",
        minWidth: 180,
      },
      {
        title: "启用状态",
        key: "enableFlag",
        minWidth: 80,
        render(h, params) {
          return h("div", [h("i-switch")]);
        },
      },
      {
        title: "操作",
        minWidth: 200,
        key: "operate",
        render(h) {
          return h("div", [
            h(
              "span",
              {
                style: {
                  color: "blue",
                  margin: "0 5px",
                },
              },
              "编辑"
            ),
             h(
              "span",
              {
                style: {
                  color: "blue",
                  margin: "0 5px",
                },
              },
              "详情"
            ),
             h(
              "span",
              {
                style: {
                  color: "red",
                  margin: "0 5px",
                },
              },
              "删除"
            ),
          ]);
        },
      },
    ];
    this.tableData = [
      {
        orgCode: "123",
      },
    ];
    // 表格数据
    this.getOptionData();
    
  },
  methods: {
    dataSearch(params){
      console.log(params);
    },
    // 表格数据
    async getTableData() {
      let req = {
        current: this.page.pageIndex,
        pageSize: this.page.pageSize,
      };
      req = Object.assign(req, this.dataForm);
      console.log(req);
      const result = await this.$api.queryUseEnergyUnitTableData(req);
      console.log(result);
    },
    // 表头 单位性质数据
    async getOptionData() {
      let result = await this.$api.getOrgTypeOptions();
      if (result.success === true) {
        this.buttonSelectOptions = result.obj;
      };
      let result2 = await this.$api.getWhetherOptions();
      if(result2.success===true){
        this.stateData = result2.obj;
      };
      this.isShow = true;
    },

  },
};
</script>

<style>
</style>