<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
export default {
  name: "BarChart",
  data() {
    return {};
  },
  mounted() {
    // 初始化echarts实例
    let myChart = this.$echarts.init(this.$refs.echarts);
    myChart.setOption({
      title: {
        text: "柱状图",
      },
      tooltip:{
        tigger:'axis'
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [
            120,
            200,
            150,
            80,
            70,
            110,
            130,
          ],
          itemStyle:{
            normal:{
              color:function(params){
                var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622']
                return colorList[params.dataIndex]
              }
            }
          },
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
      grid:{
        x2:20,
       y2:30
      }
    });
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 300px;
  border: 1px solid black;
}
</style>