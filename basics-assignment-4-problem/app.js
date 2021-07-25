const app = Vue.createApp({
    data() {
        return {
            visible: true,
            cssClass: '',
            bgColor: ''
        };
    },

    computed: {
        paraClass() {
            return {
                user1: this.cssClass === 'user1',
                user2: this.cssClass === 'user2',
                visible: this.visible,
                hidden: !this.visible
            }
        }
    },

    methods: {
        toggle() {
            this.visible = !this.visible;
        },

        setCssClass(e) {
            this.cssClass = e.target.value;
        }
    }
});

app.mount("#assignment")