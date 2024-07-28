import axios from "./customize-axios"

const listEmotion = () => {
    return axios.get("/api/emotion/all")
}

const loginApi = (username, password) => {
    return axios.post("/api/auth/login", {username, password})
}

const getUserInfo = (token) => {
    return axios.get("/api/user/get_info", {headers: {Authorization: `Bearer ${token}`}})
}

const getApiSongEmotion = (emotion) => {
    return axios.get(`/api/song?emo=${emotion}`)
}

export { loginApi, listEmotion, getUserInfo, getApiSongEmotion }