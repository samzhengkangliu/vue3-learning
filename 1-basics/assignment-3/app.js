const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    number(value) {
      if (value > 37) {
        setTimeout(() => {
          this.number = 0;
        }, 5000);
      }
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "NOT THERE YET!";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "TOO MUCH!";
      }
    },
  },
  methods: {
    add(num) {
      this.number = this.number + num;
    },
  },
});

app.mount("#assignment");
