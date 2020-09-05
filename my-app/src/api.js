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
    getEmployeeProjects(employeeId) {
        return instance.get(`teammateprojects/${employeeId}`)
    },
    getEmployees() {
        return instance.get(`teammates/`)
    },
    getEmployee(id){
        return instance.get(`teammates/${id}`)
    },
    getArticles() {
        return instance.get(`articles/`)
    },
    getKillerFeatures(projectId) {
        return instance.get(`projectkillerfeatures/${projectId}`)
    }
}
