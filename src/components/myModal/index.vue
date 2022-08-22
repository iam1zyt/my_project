<template>
  <div class="Madal">
    <Modal v-model="modal" :title="title" width="600px" @on-ok="ok" @on-visible-change="change">
      <Form ref="formValidate" :model="formValidate" class="formWrapper">
        <div class="form-input">
          <FormItem label="单位编号">
            <Input
              v-model="formValidate.code"
              placeholder="请输入"
              style="width: 200px"
            ></Input>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="单位性质">
            <Select v-model="formValidate.nature" style="width: 200px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="单位名称">
            <Input
              v-model="formValidate.name"
              placeholder="请输入"
              style="width: 200px"
            ></Input>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="单位简称">
            <Input
              v-model="formValidate.simplename"
              placeholder="请输入"
              style="width: 200px"
            ></Input>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="是否为转供单位">
            <Select v-model="formValidate.isZG" style="width: 163px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="上级单位">
            <Select v-model="formValidate.parentUnit" style="width: 200px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="line"></div>
        <div class="form-input">
          <FormItem label="员工人数">
            <Select v-model="formValidate.parentUnit" style="width: 200px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="自定义序列号">
            <Select v-model="formValidate.parentUnit" style="width: 175px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form-input" style="width: 450px">
          <FormItem label="自定义编号">
            <Select v-model="formValidate.parentUnit" style="width: 350px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form-input" style="width: 450px">
          <FormItem label="来往单位编号">
            <Select v-model="formValidate.parentUnit" style="width: 350px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="增收比例">
            <Select v-model="formValidate.parentUnit" style="width: 200px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
        <div class="form-input">
          <FormItem label="参与汇总">
            <Select v-model="formValidate.parentUnit" style="width: 200px">
              <Option value="" key="">1</Option>
            </Select>
          </FormItem>
        </div>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "myModal",
  data() {
    return {
      formValidate: {
        code: "",
        name: "",
        nature: "",
        simplename: "",
        isZG: [],
        parentUnit: "",
        time: "",
        desc: "",
      },
      modal: false,
      title: "新增单位",
    };
  },
  computed:{
      ...mapState({
        modal:state=>state.ismodal,
      })
  },
  watch: {
    ismodal: {
      handler(newVal, oldVal) {
        this.modal = newVal;
      },
      deep: true,
    },
  },

  methods: {
    ok() {},
    change() {},
  },
};
</script>

<style scoped>
.form-input {
  width: 260px;
}
.line {
  width: 100%;
  height: 20px;
  border-top: rgb(226, 226, 226) 1px solid;
}
</style>