const app = Vue.createApp({
  data() {
    return {
      name: "Sam",
      age: 25,
      imageUrl: "https://pluralsight2.imgix.net/paths/images/vue-7945830e6c.js.png",
    };
  },
  methods: {
    randomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
