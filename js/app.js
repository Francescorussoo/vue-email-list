const app = Vue.createApp({
    data() {
        return {
            emails: []
        };
    },
    methods: {
        generateEmails() {
            this.emails = [];
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {
                        this.emails.push(response.data.response);
                    })
                    .catch(error => {
                        console.error("Errore durante il recupero dell'email:", error);
                    });
            }
        }
    },
    mounted() {
        this.generateEmails();
    }
});

app.mount('#app');
