import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use(config => {
    const token = localStorage.getItem("TOKEN")
    config.headers.authorization = `Bearer ${token}`
    return config
})

axiosClient.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem("TOKEN")
        if (error.response.data.message != "username or password wrong") {
            window.location.pathname == "/login" ? router.navigate('/login') : window.location.reload()
            throw error
        }
    }

    throw error
})

export default axiosClient