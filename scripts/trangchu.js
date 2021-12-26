const pageSize = 8;

const TrangChu = {
  data() {
    return {
      products: [],
      currentPage: 1,
      total: 0,
      sortBy: SORT_BY.NEWEST,
      selectedType: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    productType() {
      return PRODUCT_TYPE;
    },
    productSort() {
      return SORT_BY;
    },
    pageCount() {
      return Math.ceil(this.total / pageSize);
    },
    pages() {
      const pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i);
      }

      return pages;
    },
    canNextPage() {
      return this.currentPage < this.pageCount;
    },
    canPreviousPage() {
      return this.currentPage > 1;
    },
  },
  methods: {
    fetchData() {
      const { total, data } = getPaginatedProducts({
        pageIndex: this.currentPage - 1,
        pageSize: pageSize,
        filterBy: {
          type: this.selectedType,
        },
        sortBy: this.sortBy,
      });

      this.total = total;
      this.products = data;
    },
    onSortChange(e) {
      const value = e.target.value;
      this.sortBy = value;
      this.fetchData();
    },
    onTypeChange(type) {
      if (this.selectedType === type) {
        this.selectedType = "";
      } else {
        this.selectedType = type;
      }

      this.currentPage = 1;
      this.fetchData();
    },
    onNextPage() {
      if (this.canNextPage) {
        this.currentPage += 1;
        this.fetchData();
      }
    },
    onPreviousPage() {
      if (this.canPreviousPage) {
        this.currentPage -= 1;
        this.fetchData();
      }
    },
    onPageChange(page) {
      this.currentPage = page;
      this.fetchData();
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};

const app = Vue.createApp(TrangChu);
app.component("app-header", AppHeader);
app.component("app-footer", AppFooter);
app.mount("#app");
