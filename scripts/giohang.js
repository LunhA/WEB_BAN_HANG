const GioHang = {
  data() {
    return {
      cartItems: [],
      billItems: [],
    };
  },
  mounted() {
    this.cartItems = cartService.getCartItems();
    // // 1. test add cart
    // cartService.addCartItem(testItem);
    // cartService.addCartItem(testItem2);
    // // 2. test remove item
    // cartService.removeCartItem(testItem);
    // // 3. test clear cart
    // cartService.clearCart();
  },
  computed: {
    totalPrice() {
      return this.formatPrice(
        this.cartItems.reduce(
          (previous, currentItem) => (previous += currentItem.price),
          0
        )
      );
    },
  },
  methods: {
    onRemoveItem(item) {
      cartService.removeCartItem(item);
      this.cartItems = cartService.getCartItems();
    },
    onMakePayment() {
      const tenKH = document.getElementById("tenKH").value;
      const diachiKH = document.getElementById("diachiKH").value;
      const sdtKH = document.getElementById("sdtKH").value;
      const ghichuKH = document.getElementById("ghichuKH").value;

      

    },
  },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
};

const app = Vue.createApp(GioHang);
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);
app.mount("#app");
