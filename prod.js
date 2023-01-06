const app = Vue.createApp({   // Options obj, todo a funcionalidade estará aqui.
    data: function () {
        return {
            grettings: '',
            teste: true,
            teste2: true,
            awesome:true   
        }
    },
    methods: {
            toogleAwesome() {
               this.awesome = !this.awesome 
            }
        },
})

app.component('login-form', {
    template: `
        <form @submit.prevent='handleSubmit'>
            <h1>{{ title }}</h1>
            <custom-input type='email' :label='emailLabel'/>
            <custom-input type='password' :label='passwordLabel'/>
            <button>Log in</button>
       </form> 
    `,
    components: ['custom-input'],
    data() {
        return {
            title: 'Login Form',
            email: '',
            password: '',
            emailLabel: 'Email',
            passwordLabel:'Password'
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.email, this.password)
        }
    }    
})
app.component('custom-input', {
    template: `
        <label>
            {{label}}
            <input type='text' v-model='inputValue'/>
        </label>
    `,
    props: ['label']

})
app.mount("#app")