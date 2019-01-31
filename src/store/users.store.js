import ApiService from './../services/api.service'

const state = {
    users: [],
    user: {},
};

const getters = {
    users(state) {
        return state.users;
    },
    user(state){
        return state.user;
    }
};

const mutations = {
    FETCH(state, users) {
        state.users = users;
    },
    FETCH_ONE(state, user) {
        state.user = user;
    },
};

const actions = {
    fetch({ commit }) {
        ApiService.methodRequest(`users`).then(res => {
            commit('FETCH', res.result)
        })
    },
    fetchOne({ commit }, id) {
        ApiService.methodRequest(`users/${id}`).then(res => {
            commit('FETCH_ONE', res.result)
        })
    },
    deleteUser({}, id) {
        ApiService.methodRequest(`users/${id}`, 'DELETE').then(() => {
            this.dispatch('fetch')
        })
    },
    editUser({}, user) {
        ApiService.methodRequest(`users/${user.id}`, 'PUT', {name: user.name,
            email: user.email,
            password: user.password
        }).then(() => {
            this.dispatch('fetch')
        })
    },
    addUser({}, user) {
        ApiService.methodRequest(`users`, 'POST', {
            name: user.name,
            email: user.email,
            password: user.password,
        }).then(() => {
            this.dispatch('fetch')
        })
    }
}


export default {
    state,
    actions,
    mutations,
    getters
};