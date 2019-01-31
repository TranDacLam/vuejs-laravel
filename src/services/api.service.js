import axios from "axios";
// import JwtService from "@/common/jwt.service";

const TOKEN_KEY = "TOKEN_AUTH"
const URL_API = process.env.VUE_APP_ROOT_API

const ApiService = {

    getParams(method= 'GET', data, token){
        const requestHeader = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
        if (data) {
            return {
                method: method,
                headers: requestHeader,
                data: JSON.stringify(data),
            }
        } else {
            return {
                method: method,
                headers: requestHeader,
            }
        }

    },

    getToken(){
        let tokenData = localStorage.getItem(TOKEN_KEY)
        if (tokenData) {
            return JSON.parse(tokenData)
        }
        return null
    },

    setToken(data){
        localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
    },

     async methodRequest(endpoint, method = 'GET', body){
        const token = await this.getToken()
        const url = {url: URL_API + endpoint}
        const params = this.getParams(method, body, token)
        const options = {...url, ...params}
        return axios(options).then(res => {
            try {
                return res.data
            } catch (e) {
                throw e
            }
        }).catch(error => {
            return this.handleError(error.response.data)
        })
    },

    handleError(response){
        const error = response && response.error
        if (error) {
            return {
                success: false,
                error: response.error,
            }
        } else {
            return response.data
        }
    }
};

export default ApiService;
