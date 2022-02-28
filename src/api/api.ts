import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "9a933b17-0fb8-4190-9b53-0feffc47018d"
    }
});


export const usersAPI = {
    getUsers(currentPage = 15, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }
}


