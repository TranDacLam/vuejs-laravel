<template>
    <div class="page-home">
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name"
                       v-model="name" required />
                <span class="help-block" v-if="errors && errors.name">{{ errors.name[0] }}</span>
            </div>
            <div class="form-group">`
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email"
                       v-model="email" required />
                <span class="help-block" v-if="errors && errors.email">{{ errors.email[0] }}</span>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password"
                       v-model="password" required />
                <span class="help-block" v-if="errors && errors.password">{{ errors.password[0] }}</span>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
    import UserService from './../../services/user.service'

    export default {
        data: function () {
            return {
                name: null,
                email: null,
                password: null,
                errors: {},
            }
        },
        methods: {
            register: function () {
                UserService.register({
                    name: this.name,
                    email: this.email,
                    password: this.password,
                }).then(res => {
                    console.log(res)
                    if(!res.success){
                        this.errors = res.error
                        return
                    }
                    this.$router.push({name: 'home'});
                })

            }
        }
    }
</script>
