import axios from "./customize-axios"

const listUser = () => {
    return axios.get("/api/users?page=1")
}

const loginApi = (username, password) => {
    return axios.post("/api/auth/login", {username, password})
}

export { loginApi, listUser }