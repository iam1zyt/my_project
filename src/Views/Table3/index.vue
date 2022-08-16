<template>
     <div class="Carousel">
       <Carousel v-model="value">
       <CarouselItem v-for="(img,index) in imgdata" :key="index">
        <img :src="img.imgurl">
        </CarouselItem>
    </Carousel>
     </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      imgdata:[]
    };
  },
  mounted() {
    this.getRandomImage();
  },
  methods: {
    async getRandomImage(){
      let r = await this.$api.mockApi.getRandomImage();
      this.imgdata = r.data
    }
  },
};
</script>

<style scoped>
.Carousel{
  width: 500px;
  top:50px;
  left: 50px;
}
.demo-carousel{
  width: 500px;
  height: 300px;
  background-color: palevioletred;
}
</style>>