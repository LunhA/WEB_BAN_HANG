const ChiTietSanPham = {
  data() {
    return {
      counter: 1,
    };
  },
  mounted() {
    console.log(getQueryParams("productId"));
  },
};

Vue.createApp(ChiTietSanPham).mount("#app");
