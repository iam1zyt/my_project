<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "pieChart",
  data() {
    return {
    };
  },
  computed:{
    ...mapState(["piedata"])
  },
  mounted() {
    // 初始化echarts实例
    let myChart = this.$echarts.init(this.$refs.echarts);
    myChart.setOption({
      title: {
        text: "饼图",
      },
      // tooltip: {
      //   trigger: "item",
      // },
      legend: {
        top: "10%",
        left: "center",

      },
      series: [
        {
          name: "饼图",
          type: "pie",
          radius: ["40%", "70%"],
          center: ['50%', '60%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: this.piedata
        },
      ],
      
    });
  },
};
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 300px;
}
</style>