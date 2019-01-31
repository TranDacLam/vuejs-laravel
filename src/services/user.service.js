import ApiService from './api.service'

const UserService = {
    register(body){
        return ApiService.methodRequest('register', 'POST', body).then(res =>  {
            return res
        })
    },
    login(body){
        return ApiService.methodRequest('login', 'POST', body).then(res =>  {
            return res
        })
    }
}

export default UserService