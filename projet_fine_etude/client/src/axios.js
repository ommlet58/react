import  axios  from "axios";



export const makeRequest = axios.create({
    baseURL : "http://localhost:8081/server/",
    withCredentials:true,
});
