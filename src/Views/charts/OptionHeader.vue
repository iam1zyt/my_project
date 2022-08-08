<template>
  <div class="header">
     <Card :style="mywidth">
        <BarChart/>
       </Card>
       <Card :style="mywidth">
        <lineChart/>
       </Card>
       <Card :style="mywidth">
        <pieChart/>
       </Card>
  </div>
</template>
<script>
import BarChart  from './Card/BarChart.vue'
import lineChart from './Card/lineChart.vue'
import pieChart from './Card/pieChart.vue'
export default {
    name:'option4Header',
    data(){
      return{
        mywidth:'width:547px'
      }
    },
    components:{BarChart,lineChart,pieChart}

}
</script>

<style scoped>
 .header{
      display: flex;
      justify-content: space-between;
    }
</style>