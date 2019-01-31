<template>
    <div class="page-home">
        <h1>Login</h1>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" class="form-control" v-model="password" required>
            </div>
            <button type="submit" class="btn btn-default">Sign in</button>
        </form>
    </div>
</template>

<script>
    import UserService from './../../services/user.service'
    export default {
        data: function(){
            return {
                email: null,
                password: null
            }
        },
        methods: {
            login: function(){
                UserService.login({
                    email: this.email,
                    password: this.password
                }).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>
