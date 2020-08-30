import { createSelector } from 'reselect'

export const getCompanyName = (state) => {
    return state.aboutUs.companyName.name
}

export const getCompanyLogo = (state) => {
    return state.aboutUs.companyName.logo
}

export const getTitle = (state) => {
    return state.aboutUs.description.title
}

export const getDescription = (state) => {
    return state.aboutUs.description.text
}

export const getProjectsElements = (state) => {
    return state.aboutUs.projects
}

export const getEmployeesElements = (state) => {
    return state.aboutUs.employees
}
export const getArticlesElements = (state) => {
    return state.aboutUs.articles
}




