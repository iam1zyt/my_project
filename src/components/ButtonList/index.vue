<template>
  <div class="btn_wrapper">
    <div class="btn-left btn-split">
      <div
        v-for="item of buttonList.slice(0, splitNum)"
        :key="item.id"
        flex
      >
        <div v-if="item.type === 'input'" class="btn_item" flex>
          <div class="text">{{ item.label }}：</div>
          <Input
            @keyup.enter.native="clickEnter"
            :style="{ width: item.width }"
            placeholder="请输入"
            clearable
            v-model="buttonObject[item.key]"
            :disabled="item.disabled"
          ></Input>
        </div>
        <div v-else-if="item.type === 'slt'" flex class="btn_item">
          <div class="text">{{ item.label }}：</div>
          <Select
            v-model="buttonObject[item.key]"
            :clearable="!item.clearable"
            :disabled="item.disable"
            :style="{ width: item.width }"
          >
            <Option
              v-for="(option, index) of buttonSelectOptions[item.key]"
              :key="index"
            ></Option>
          </Select>
        </div>
        <div v-else-if="item.type === 'btn'">
          <Button :style="{ width: item.width }" class="btn_style">{{ item.label }}</Button>
        </div>
      </div>
    </div>

    <div
      class="btn-split"
      :class="buttonList.slice(splitNum).length ? 'btn-right' : ''"
    >
      <div v-for="item of buttonList.slice(splitNum)" :key="item.id" >
        <div v-if="item.type === 'btn'">
          <Button type="primary" :style="{ width: item.width }" class="btn_style">{{
            item.label
          }}</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getQueryMethod } from "@/untils/buttonList";
import { mapState } from "vuex";
export default {
  name: "ButtonList",
  props: {
    buttonList: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    splitNum: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      buttonObject: {},
      buttonSelectOptions: {},
    };
  },
  methods: {
    clickEnter() {},
    getButtonObject() {
      console.log(7);
    },
    getSltOpyions() {
      console.log(8);
      this.$store.commit("changeButtonSelectOptions", {});
    },
  },
  watch: {
    buttonList(n, o) {
      this.getButtonObject();
      this.getSltOpyions();
    },
    immediate: true,
  },
};
</script>

<style  scoped>
.btn_wrapper {
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 20px 10px 0px 10px;
}
.bnt-left {
  flex-wrap: wrap;
  display: flex;
}
.btn-split {
  line-height: 36px;
  align-items: center;
  display: flex;
}
.btn-right:before {
  display: flex;
  content: "";
  display: block;
  position: relative;
  left: -10px;
  top: 0;
  bottom: 0;
  height: 36px;
  width: 1px;
  background-color: #ccc;
}

.btn_item {
  align-items: center;
  display: flex;
  padding: 0px 10px;
}

.text {
  white-space: nowrap;
  width: fit-content;
}

.selectItem {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ivu-btn{
    margin-left: 20px;
}
</style>>