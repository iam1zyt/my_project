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
export default {
  data() {
    return {
      buttonList: {},
      splitNum: 6,
      page: {
        total: 0,
        pageIndex: 1,
        pageSize: 10,
      },
      tableData: [],
      tableColumn: [],
      dataForm: {},
      powerList: [
        {
          value: "Hydroenergy",
          label: "水",
        },
        {
          value: "ElectricalEnergy",
          label: "电",
        },
        {
          value: "NaturalGas",
          label: "天然气",
        },
      ],
    };
  },
  created() {
    this.getTableData();
    this.buttonList = [
      {
        id: 1,
        key: "code",
        label: "表计编号",
        type: "input",
        width: "120px",
      },
      {
        id: 2,
        key: "energyType",
        label: "能源类型",
        type: "slt",
        width: "120px",
        options: [
          {
            value: "Hydroenergy",
            label: "水",
          },
          {
            value: "NaturalGas",
            label: "天然气",
          },
        ],
      },
      {
        id: 3,
        key: "merterStatus",
        label: "使用状态",
        type: "slt",
        width: "120px",
        options: [
          {
            value: "disable",
            label: "不可用",
          },
          {
            value: "enable",
            label: "可用",
          },
        ],
      },
      {
        id: 4,
        key: "currentStation",
        label: "是否切换",
        type: "slt",
        width: "120px",
        options: [
          {
            value: "true",
            label: "否",
          },
          {
            value: "false",
            label: "是",
          },
        ],
      },
      {
        id: 6,
        key: "search",
        label: "查询",
        type: "btn",
      },
      {
        id: 7,
        key: "reset",
        label: "重置",
        type: "btn",
      },
      {
        id: 10,
        key: "checkOut",
        label: "切换",
        type: "btn",
      },
    ];
    this.tableColumn = [
      {
        type: "selection",
        width: 60,
        align: "center",
      },
      {
        title: "表计编号",
        key: "code",
      },
      {
        title: "能源类型",
        key: "energyType",
        render: (h, params) => {
          var energyTypeName = this.powerList.filter((item) => {
            return item.value === params.row.energyType;
          });
          if (energyTypeName.length > 0) {
            return h("span", energyTypeName[0].label);
          }
        },
      },
      {
        title: "表计类型",
        key: "ratio",
        render: (h, params) => {
          return h("span", "住宅");
        },
      },
      {
        title: "使用状态",
        key: "status",
        render: (h, params) => {
          return h("div", [
            h("i-switch", {
              props: {
                value: params.row.status === "enable",
              },
              on: {
                
              },
            }),
          ]);
        },
      },
      {
        title: "是否切换",
        key: "currentStation",
        width: "100",
        render: (h, params) => {
          return h("span", params.row.currentStation === false ? "是" : "否");
        },
      },
      {
        title: "操作",
        key: "operate",
        width: "150",
        align: "center",
        render: (h, params) => {
         return h('span',"切换")
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
      let r = await this.$api.baseApi.searchSmartMeterList(req);
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
    },
  },
};
</script>

<style scoped>
</style>>