const app = Vue.createApp({
    data() {
        return {
            card: [],
            premium: true,
        }
    },
    methods: {
        updateCart(id) {
            this.card.push(id)
        },
        removeFromCard(id) {
            this.card.pop(id)
        }


    }
})
