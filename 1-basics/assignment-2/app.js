const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      userInput2: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("ALERT!");
    },
    setUserInput1(event) {
      this.userInput = event.target.value;
    },
    setUserInput2(event) {
      this.userInput2 = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput2;
    },
  },
});

app.mount("#assignment");
