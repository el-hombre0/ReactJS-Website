import axios from 'axios';

const API_URL = "http://localhost:3000/api/auth/";

class AuthService{
    register(username, email, password){
        return axios.post(API_URL + signup, {username, email, password} );
    }

    login(username, password){
        return axios
        .post(API_URL + "signin", {username, password})
        .then((response) => {
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout(){
        localStorage.removeItem("user")
    }
}

export default new AuthService();