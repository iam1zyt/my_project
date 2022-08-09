<template>
  <div class="content">
    <div class="nav">
      <myButton
        v-model="dataFrom"
        :buttonSelectOptions="buttonSelectOptions"
        :stateData="stateData"
        @search="dataSearch"
        @ModalEvent="ModalEvent"
      />
      <myTable :tableData="tableData" :tableColum="tableColum" :page="page" />
    </div>
    <myModal :Modal="Modal" @ok="ok" @change="OnVisiblechange"/>
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
            h("i-switch",{
              props: {
                value:params.row.enableFlag === "enable",
              },
              on:{
                'on-change':(e)=>{
                  params.row.enableFlag = e ? 'enable' : 'disable'
                }
              }
            },)
          ]);
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
    // 表格数据
    this.getOptionData();
  },
  methods: {
    dataSearch(params) {
      console.log(params);
    },
    // 表格数据
    async getTableData() {
      /* let _url =
        "https://www.fastmock.site/mock/3f4a0aa64c80463c02ef7b881e78d2f4/myproject";
      const result = await axios.post(
        _url + "/baseconf/enterpriseorg/query"
      );
      console.log(result); */

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
      }
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

    // 新增
    ModalEvent() {
      this.Modal = true;
    },

    ok() {
      console.log('ok');
    },
    OnVisiblechange(visible){
      this.Modal = visible
    }
  },
  mounted() {},
};
</script>

<style>
</style>