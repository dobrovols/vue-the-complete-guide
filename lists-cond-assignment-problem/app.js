const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            currentTask: "",
            isVisible: true
        };
    },

    methods: {
        addTask() {
            this.tasks.push(this.currentTask);
            this.currentTask = "";
        },

        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    }
});

app.mount("#assignment");