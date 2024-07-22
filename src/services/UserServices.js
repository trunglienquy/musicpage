import axios from "./customize-axios"

const listUser = () => {
    return axios.get("/api/users?page=1")
}

const loginApi = (email, password) => {
    return axios.post("/api/login", {email, password})
}

export { loginApi, listUser }