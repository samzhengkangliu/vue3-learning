const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      hidden: false,
      inputBackgroundColor: "",
    };
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.userInput === "user1",
        user2: this.userInput === "user2",
        visible: !this.hidden,
        hidden: this.hidden,
      };
    },
  },
  methods: {
    toggle() {
      this.hidden = !this.hidden;
    },
  },
});

app.mount("#assignment");
