const pageSize = 5;

const TrangChu = {
  data() {
    return {
      products: [],
      currentPage: 1,
      total: 0,
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
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
      });

      this.total = total;
      this.products = data;
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
  },
};

Vue.createApp(TrangChu).mount("#app");
