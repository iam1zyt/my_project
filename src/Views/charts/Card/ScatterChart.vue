<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "BarChart",
  data() {
    return {};
  },
  computed:{
        ...mapState(["scatterdata"])
  },
  mounted() {
    const dataAll = this.scatterdata;
    const markLineOpt = {
      animation: false,
      label: {
        formatter: "y = 0.5 * x + 3",
        align: "right",
      },
      lineStyle: {
        type: "solid",
      },
      tooltip: {
        formatter: "y = 0.5 * x + 3",
      },
      data: [
        [
          {
            coord: [0, 3],
            symbol: "none",
          },
          {
            coord: [20, 13],
            symbol: "none",
          },
        ],
      ],
    };

    // 初始化echarts实例
    let myChart = this.$echarts.init(this.$refs.echarts);
    myChart.setOption({
      title: {
        text: "散点图",
        left: "center",
        top: 0,
      },
      grid: [
        { left: "7%", top: "7%", width: "38%", height: "38%" },
        { right: "7%", top: "7%", width: "38%", height: "38%" },
        { left: "7%", bottom: "7%", width: "38%", height: "38%" },
        { right: "7%", bottom: "7%", width: "38%", height: "38%" },
      ],
      tooltip: {
        formatter: "Group {a}: ({c})",
      },
      xAxis: [
        { gridIndex: 0, min: 0, max: 20 },
        { gridIndex: 1, min: 0, max: 20 },
        { gridIndex: 2, min: 0, max: 20 },
        { gridIndex: 3, min: 0, max: 20 },
      ],
      yAxis: [
        { gridIndex: 0, min: 0, max: 15 },
        { gridIndex: 1, min: 0, max: 15 },
        { gridIndex: 2, min: 0, max: 15 },
        { gridIndex: 3, min: 0, max: 15 },
      ],
      series: [
        {
          name: "I",
          type: "scatter",
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: dataAll[0],
          markLine: markLineOpt,
        },
        {
          name: "II",
          type: "scatter",
          xAxisIndex: 1,
          yAxisIndex: 1,
          data: dataAll[1],
          markLine: markLineOpt,
        },
        {
          name: "III",
          type: "scatter",
          xAxisIndex: 2,
          yAxisIndex: 2,
          data: dataAll[2],
          markLine: markLineOpt,
        },
        {
          name: "IV",
          type: "scatter",
          xAxisIndex: 3,
          yAxisIndex: 3,
          data: dataAll[3],
          markLine: markLineOpt,
        },
      ],
    });
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 600px;
  margin-top: 20px;
}
</style>