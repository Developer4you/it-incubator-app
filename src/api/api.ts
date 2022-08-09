import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "f427df99-3f26-4d64-845e-4734f54c112c"
    }
});


export const usersAPI = {
    getUsers(currentPage = 15, pageSize = 15) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId:string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId:string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId:string) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}
