import axios from 'axios'
import {
    ArticleType, KillerFeatureType, AccountType,
    EmployeeType, ProjectType, CurrentEmployeeType
} from "../types/types";

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
    async getProjects() {
        return (await instance.get<Array<ProjectType>>('projects/')).data
    },
    async getProject(id: number) {
        return (await instance.get<ProjectType>(`projects/${id}`)).data
    },
    async getEmployeeProjects(employeeId: number) {
        return (await instance.get<Array<ProjectType>>(`teammateprojects/${employeeId}`)).data
    },
    async getEmployees() {
        return (await instance.get<Array<EmployeeType>>(`teammates/`)).data
    },
    async getEmployee(id: number) {
        return (await instance.get<CurrentEmployeeType>(`teammates/${id}`)).data
    },
    async getArticles() {
        return (await instance.get<ArticleType>(`articles/`)).data
    },
    async getEmployeeArticles(employeeId: number) {
        return (await instance.get<Array<ArticleType>>(`teammatearticles/${employeeId}`)).data
    },
    async getKillerFeatures(projectId: number) {
        return (await instance.get<Array<KillerFeatureType>>(`projectkillerfeatures/${projectId}`)).data
    }
}

export const loginAPI = {
    async getAccounts() {
        return (await instance.get<Array<AccountType>>('accounts/')).data
    }
}
export type employeeDataType = {
    ShortName: string,
    FullName: string,
    Company: string,
    Location: string,
    Website: string,
    Phone: string,
    ArticlesCount: number,
    PersonalInfo: string
}
export const employeeAPI = {
    changeEmployeeData(id: number, employeeData: employeeDataType) {
        return instance.put(`teammates/${id}`, employeeData)
    }
}