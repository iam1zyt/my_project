<template>
  <div>
    <ButtonList :buttonList="buttonList" :splitNum="splitNum"></ButtonList>
    <myTable
      :tableData="tableData"
      :tableColumn="tableColumn"
      :page="page"
      @pageRefresh="pageRefresh"
    ></myTable>
  </div>
</template>

<script>
import getButtonList from '@/untils/buttonList'
export default {
  name: "table2",
  data() {
    return {
      buttonList:{},
      splitNum:7,
      tableData: [],
      tableColumn: [],
      searchFrom: {
        enableFlag: "",
        hname: "",
        houseCode: "",
        payerOrganizationId: "",
        workStatus: "",
      },
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
      { key: "input", value: "hname", ownLabel: "用户姓名" },
      { key: "input", value: "houseCode" },
      { key: "slt", value: "payerOrganizationId" },
      { key: "slt", value: "workStatus", defaultValue: "" },
      { key: "slt", value: "enableFlag", defaultValue: "" },
      { key: "btn", value: "query" },
      { key: "btn", value: "reset" },
    ];
    this.buttonList = getButtonList(keyArr);
    this.tableColumn = [
      {
        title: "用户姓名",
        key: "hname",
      },
      {
        title: "电话",
        key: "mphone",
      },
      {
        title: "房屋编号",
        key: "houseCode",
      },
      {
        title: "工作单位",
        key: "organizationName",
        render: (h, params) => {
          return h("span", params.row["organizationName"] || "-");
        },
      },
      {
        title: "代缴单位",
        key: "paymentOrganizationName",
        render: (h, params) => {
          return h("span", params.row["paymentOrganizationName"] || "-");
        },
      },
      {
        title: "状态",
        key: "workStatusName",
      },
      {
        title: "是否启用",
        key: "enableFlag",
        render: (h, params) => {
          return h("div", [
            h("i-switch", {
              props: {
                value: params.row.enableFlag === "enable",
                disabled: "disabled",
              },
              on: {
                "on-change": (e) => {
                  params.row.enableFlag = e ? "enable" : "disable";
                  this.$api.queryPayerTableData(params.row).then((res) => {
                    if (res.success === true) {
                      this.$Message.success({
                        content: "操作成功！",
                      });
                    } else {
                      this.$Message.error(res.msg || "请求失败!");
                    }
                  });
                },
              },
              disabled: true,
            }),
          ]);
        },
      },
      {
        title: "编辑时间",
        key: "updateDate",
      },
      {
        title: "操作",
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
  },
  methods: {
    async getTableData() {
      let req = {
        currentNo: this.page.pageIndex,
        pageSize: this.page.pageSize,
      };
      let r = await this.$api.baseApi.queryPayerTableData(req);
      if (r.success === true) {
        let data = r.obj;
        this.tableData = data.object.map((item) => {
          return {
            ...item,
            children: [],
          };
        });
        this.page.total = data.count;
        this.page.pageIndex = data.currentNo;
        this.page.currentNo = data.currentNo;
      } else {
        this.$Message.error({
          content: r.msg || "请求失败！",
        });
      }
    },
    pageRefresh() {
      this.getTableData();
      console.log(777);
    },
  },
};
</script>

<style>
</style>