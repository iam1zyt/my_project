<template>
  <div>
    <!-- <myButton
      v-model="dataFrom"
      :splitNum="splitNum"
      :buttonList="buttonList"
      :buttonSelectOptions="buttonSelectOptions"
      :stateData="stateData"
      @search="dataSearch"
      @ModalEvent="ModalEvent"
    /> -->
    <ButtonList
      :buttonList="buttonList"
      :splitNum="splitNum"
      :buttonObject="buttonObject"
      @ButtonClick="ButtonClick"
    ></ButtonList>
    <myTable
      :tableData="tableData"
      :tableColumn="tableColumn"
      :page="page"
      @pageRefresh="pageRefresh"
    />
    <myModal :Modal="Modal" @changeVisible="changeVisible" />
  </div>
</template>

<script>
import getButtonList from "@/untils/buttonList";
export default {
  name: "table1",
  data() {
    return {
      buttonObject: {},
      splitNum: 6,
      buttonList: [],
      tableData: [],
      tableColumn: [],
      dataFrom: [],
      buttonSelectOptions: [],
      stateData: [],
      isShow: false,
      page: {
        total: 100,
        pageIndex: 1,
        pageSize: 10,
      },
      Modal: false,
    };
  },
  created() {
    this.getTableData();
    let keyArr = [
      {
        key: "input",
        value: "orgName",
      },
      {
        key: "slt",
        value: "orgType",
      },
      {
        key: "slt",
        value: "sumFlag",
      },
      {
        key: "slt",
        value: "enableFlag",
        defaultValue: "",
      },
      {
        key: "btn",
        value: "query",
      },
      {
        key: "btn",
        value: "reset",
      },
      {
        key: "btn",
        value: "exportInFront",
      },
      {
        key: "btn",
        value: "import",
      },
      {
        key: "btn",
        value: "add",
        ownLabel: "新增单位",
      },
      {
        key: "btn",
        value: "modelDownload",
      },
    ];
    this.buttonList = getButtonList(keyArr);
    // 表头数据
    this.tableColumn = [
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
        render(h, params) {
          return h("span", params.row["orgTypeName"] || "-");
        },
      },
      {
        title: "参与汇总",
        minWidth: 100,
        key: "sumFlag",
        render(h, params) {
          return h("span", params.row["sumFlagName" || "-"]);
        },
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
          return h("div", [
            h("i-switch", {
              props: {
                value: params.row.enableFlag === "enable",
              },
              on: {
                "on-change": (e) => {
                  params.row.enableFlag = e ? "enable" : "disable";
                  let id = params.row.id;
                  let enableFlag = params.row.enableFlag;
                  if (enableFlag === "disable") {
                    return new Promise((resolve) => {
                      this.$Modal.confirm({
                        title: "停用",
                        content: "您确定要停用状态码?",
                        onOk: () => {
                         console.log("ok");
                        },
                      });
                    });
                  }
                },
              },
            }),
          ]);
        },
      },
      {
        title: "操作",
        minWidth: 200,
        key: "operate",
        render(h) {
          // const this1 = this['$options'].parent
          return h("div", [
            h(
              "span",
              {
                style: {
                  color: "blue",
                  margin: "0 5px",
                },
                on: {
                  click: () => {
                  },
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
    // 表格数据
    this.getOptionData();
  },
  methods: {
    dataSearch(params) {
      console.log(params);
    },
    // 表格数据
    async getTableData() {
      let req = {
        currentNo: this.page.pageIndex,
        pageSize: this.page.pageSize,
      };
      // req = Object.assign(req, this.dataForm);
      let r = await this.$api.baseApi.queryUseEnergyUnitTableData(req);
      if (r.success === true) {
        let data = r.obj;
        this.tableData = data.object.map((item) => {
          if (item.haschild) {
            return {
              ...item,
              children: [],
            };
          }
          return item;
        });
        this.page.pageIndex = data.currentNo;
        this.page.pageSize = data.pageSize;
        this.page.total = data.totalPages;
      }
      /* 
      //mock数据
      const result = await this.$api.mockApi.queryUseEnergyUnitTableData();
      if (result.status == 200) {
        let data = result.data.obj;
        this.tableData = data.object.map((item) => {
          if (item.haschild) {
            return {
              ...item,
              children: [],
            };
          }
          return item;
        });
        this.page.pageIndex = data.currentNo;
        this.page.pageSize = data.pageSize;
        this.page.total = data.totalPages;
      } */
    },
    // 表头 单位性质数据
    async getOptionData() {
      let result = await this.$api.baseApi.getOrgTypeOptions();
      if (result.success === true) {
        this.buttonSelectOptions = result.obj;
      }
      let result2 = await this.$api.baseApi.getWhetherOptions();
      if (result2.success === true) {
        this.stateData = result2.obj;
      }
      this.isShow = true;
    },

    pageRefresh() {
      this.getTableData();
    },
    ButtonClick(key){
     if(key==='add'){
       this.Modal = true
     }
    },
    changeVisible(modal){
      this.Modal = modal;
    }
  },
  mounted() {},
};
</script>

<style>
</style>