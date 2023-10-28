const PROTOCOL = "http://"
const HOST = "localhost"
const PORT = 2023
const BASE_URL = PROTOCOL + HOST + ":" + PORT

export const api = {
    BASE_URL,
    routes: {
        urls: {
            CreateUrl: `${BASE_URL}/url/create`,
            RedirectUrl: `${BASE_URL}/url/redirect`,
        },
        users: {
            RegisterUser: `${BASE_URL}/user/register`,
            LoginUser: `${BASE_URL}/user/login`,
            GetUserDetails: `${BASE_URL}/user/details`
        }
    }
}

export const HOST_URL = "http://localhost:3000"