import axios from "./customize-axios"

const listUser = () => {
    return axios.get("/v1/api")
}

const loginApi = (email, password) => {
    return axios.post("/v1/api/login", {email, password})
}

export { loginApi, listUser }