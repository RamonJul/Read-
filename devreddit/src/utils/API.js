import axios from 'axios';

export default {

    getRecent: () => axios.get("/api/recent"),

    getCategory: category => axios.get(`/api/category/${category}`),

    makeCategory: categoryData => axios.post('/api/categorylist', categoryData),

    getPost: (category, id) => axios.get(`/api/category/${category}/id/${id}`),

    makePost: (category, postData) => axios.post(`/api/category/${category}/id`, postData),

    allCategories: () => axios.get('/api/categorylist')

}