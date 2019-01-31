import Vue from "vue";
import Router from "vue-router";

import Home from '../views/home/Home'
import Login from '../views/login/Login'
import Register from '../views/register/Register'
import CreateUser from '../views/users/CreateUser'
import EditUser from '../views/users/EditUser'
import UserList from '../views/users/UserList'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
        },
        {
            path: '/users',
            component: UserList,
            name: 'users.index',
        },
        {
            path: '/users/create',
            component: CreateUser,
            name: 'users.create',
        },
        {
            path: '/users/edit/:id',
            component: EditUser,
            name: 'users.edit',
        },
    ]
})