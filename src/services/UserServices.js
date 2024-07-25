import axios from "./customize-axios"

const listUser = () => {
    return axios.get("/v1/api")
}

const loginApi = (username, password) => {
    return axios.post("/api/auth/login", {username, password})
}

const getUserInfo = (token) => {
    return axios.get("/api/user/get_info", {headers: {Authorization: `Bearer ${token}`}})
}

export { loginApi, listUser, getUserInfo }