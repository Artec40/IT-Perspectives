import * as axios from 'axios/index'

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Credentials': 'true'
    }
})

export const aboutUsAPI = {
    getProjects() {
        return instance.get('projects/')
    },
    getProject(id) {
        return instance.get(`projects/${id}`)
    },
    getEmployees() {
        return instance.get(`teammates/`)
    },
    getArticles() {
        return instance.get(`articles/`)
    },
    getKillerFeatures() {
        return instance.get(`killerfeatures/`)
    }
}
