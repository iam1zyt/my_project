<template>
  <div class="all">
    <div class="left btn-split">
      <div class="input btn_item">
        <div class="text">单位名称：</div>
        <Input
          v-model="selectData.textData"
          style="width: 120px; margin: 0px 10px"
        ></Input>
      </div>
      <div class="select btn_item">
        <div class="text">单位性质:</div>
        <Select
          v-model="selectData.item1"
          style="width: 120px; margin: 0px 10px"
        >
          <Option
            :value="option.value"
            :key="index"
            v-for="(option, index) in Options"
            >{{ option.label }}</Option
          >
        </Select>
      </div>
      <div class="select btn_item">
        <div class="text">参与汇总:</div>
        <Select
          v-model="selectData.item2"
          style="width: 120px; margin: 0px 10px"
        >
          <Option
            v-for="(option, index) in stateOption"
            :value="option.value"
            :key="index"
            >{{ option.label }}</Option
          >
        </Select>
      </div>
      <div class="select btn_item">
        <div class="text">启用状态:</div>
        <Select
          v-model="selectData.item3"
          style="width: 120px; margin: 0px 10px"
        >
          <Option
            v-for="(option, index) in stateOption"
            :value="option.value"
            :key="index"
            >{{ option.label }}</Option
          >
        </Select>
      </div>
      <div class="button btn_item">
        <Button style="margin: 0 10px" @click="search">查询</Button>
        <Button>重置</Button>
      </div>
    </div>
    <div class="right">
      <div class="btn_item"><Button type="primary">导入</Button></div>
      <div class="btn_item"><Button type="primary">导出</Button></div>
      <div class="btn_item"><Button type="primary">新增单位</Button></div>
      <div class="btn_item"><Button type="primary">模板下载</Button></div>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "myButton",
  data() {
    return {
      selectData: {
        textData: "",
        item1: "",
        item2: "",
        item3: "",
      },
      Options: [],
      stateOption: [],
    };
  },
  props: {
     buttonSelectOptions: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    stateData: {
      type: Array,
      require: true,
      default() {
        return [];
      },
    },
  },
  mounted() {
    this.show();
  },
  methods: {
    show(){
      this.Options = this.buttonSelectOptions;
      this.stateOption = this.stateData;
    },
    search(){
      this.$emit('search',this.selectData)
    }
  },
  watch:{
    stateData:{
      handler(newVal,oldVal){
        this.stateData = newVal;
        this.show();
      },
      deep:true
    },
    buttonSelectOptions:{
      handler(newVal,oldVal){
        this.Options = newVal;
        this.show();
      },
      deep:true
    },
    
  }
};
</script>

<style scoped>
.all {
  display: flex;
  justify-content: space-between;
}
.btn-split {
  display: flex;
  line-height: 36px;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
}
.btn_item {
  display: flex;
  align-items: center;
}
.text {
  font-size: 15px;
  white-space: nowrap;
}
.right {
  display: flex;
  width: 377px;
  justify-content: space-around;
}
</style>