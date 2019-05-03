import axios from 'axios';

export default {

    getRecent: () => axios.get(`/api/recent`),

    getCategory: category => axios.get(`/api/category/${category}`),

    makeCategory: categoryData => axios.post(`/api/categorylist`, categoryData),

    getComment: (category, id) => axios.get(`/api/category/${category}/id/${id}`),

    makePost: (category, postData) => axios.post(`/api/category/${category}`, postData),

    makeComment: (category, id, commentData) => axios.post(`/api/category/${category}/id/${id}`, commentData),

    allCategories: () => axios.get(`/api/categorylist`),

    Login: ()=> axios.get(`/auth/login/github`).then(()=>console.log("hello again")).catch(error => {
        console.log(error.response)
    }),

    Logout: ()=>axios.get(`/auth/logout`),
 
    userInfo: ()=>axios.get(`/auth/user`),

    isAuthenticated:()=>axios.get(`/auth/isAuthenticaed`).catch(error => {
        console.log(error.response)
    }),

    userData: userId=>axios.get(`/user/${userId}`)

}