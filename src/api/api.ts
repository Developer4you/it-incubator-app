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
    },
    login(data:LoginParamsType) {
        const promise = instance.post<ResponseType<{userId:string}>>('auth/login',data)
        return promise
    },
    logout(){
        const promise = instance.delete<ResponseType<{userId:string}>>('auth/login')
        return promise
    }
}

// types
export type LoginParamsType = {
    email:string
    password:string
    rememberMe:boolean
    captcha?:string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}