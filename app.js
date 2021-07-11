const app = Vue.createApp({
    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            gender: null,
            picture: null,
            isUserReady: false
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results);
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    },
    async created() {
        await this.getUser()
        this.isUserReady = true
    },
})

app.mount('#app')