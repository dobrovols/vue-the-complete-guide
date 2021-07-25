const app = Vue.createApp({
    data() {
        return {
            counter: 0
        };
    },
    computed: {
        result() {
            if (this.counter < 37) {
                return 'Not there yet';
            } else if (this.counter > 37) {
                return 'Too much!';
            }
            return this.counter;
        }
    },
    methods: {
        add(num) {
            this.counter += num;
        }
    },
    watch: {
        result(value) {
            setTimeout(() => this.counter = 0, 5000);
        }
    }
});

app.mount("#assignment");