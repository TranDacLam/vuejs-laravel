<template>
  <div id="app">
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Laravel 5.5 - ReactJS Example</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li :class="['nav-item', {active: $route.name === 'home'}]">
              <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
            </li>
            <li :class="['nav-item', {active: $route.name === 'login'}]">
              <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
            </li>
            <li :class="['nav-item', {active: $route.name === 'register'}]">
              <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
            </li>
            <li :class="['nav-item', {active: $route.name === 'users.index'}]">
              <router-link class="nav-link" :to="{name: 'users.index'}">Users</router-link>
            </li>
            <li :class="['nav-item', {active: $route.name === 'users.create'}]">
              <router-link class="nav-link" :to="{name: 'users.create'}">Add User</router-link>
            </li>
          </ul>

        </div>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import HelloWorld from './components/HelloWorld.vue'

  Vue.use(BootstrapVue);

  export default {
    name: 'app',
    components: {
      HelloWorld
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
