import authHeader from "./auth-header";
const API_URL = 'http://localhost:3000/api/test/';

class UserService{
    getPublicContent(){
        return axios.get(API_URL + 'all');
    }
    getUserBoard(){
        return axios.get(API_URL + 'user', {headers: authHeader()})
    }

    getModeratorBoard(){
        return axios.get(API_URL + 'moder', {headers: authHeader()})
    }

    getAdminBoard(){
        return axios.get(API_URL + 'admin', {headers: authHeader()})
    }
}