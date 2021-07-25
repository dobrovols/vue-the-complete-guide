const app = Vue.createApp({
    data() {
        return {
            value: "",
            confirmedValue: ""
        };
    },
    methods: {
        showAlert() {
            alert("Show alert button pressed!");
        },

        onChangeValue(event) {
            this.value = event.target.value;
        },

        confirmValue(event) {
            this.confirmedValue = event.target.value;
        }
    }
});

app.mount("#assignment");