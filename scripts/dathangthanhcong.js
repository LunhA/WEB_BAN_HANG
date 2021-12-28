const DonHang = {
    data() {
      return {
        billItems: [],
      };
    },
    mounted() {
        this.billItems = cartService.getCartItems();
    },
    method: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          },
    }
}

const app = Vue.createApp(DonHang);
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);
app.mount("#app");