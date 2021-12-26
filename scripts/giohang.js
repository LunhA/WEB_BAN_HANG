const GioHang = {
  data() {
    return {
      counter: 1,
    };
  },
  mounted() {
    const testItem = {
      productId: 1,
      name: "Test",
    };

    const testItem2 = {
      productId: 2,
      name: "Test",
    };
    // 1. test add cart
    cartService.addCartItem(testItem);
    cartService.addCartItem(testItem2);
    // 2. test remove item
    cartService.removeCartItem(testItem);
    // 3. test clear cart
    cartService.clearCart();
  },
};


const app = Vue.createApp(GioHang);
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);
app.mount("#app");
