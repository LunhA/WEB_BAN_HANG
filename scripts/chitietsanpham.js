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

const app = Vue.createApp(ChiTietSanPham);
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);
app.mount("#app");
