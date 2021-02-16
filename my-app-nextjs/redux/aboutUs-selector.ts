import {
    ArticleTypeSelector,
    EmployeeTypeSelector,
    ProjectTypeSelector
} from '../types/types'
import {AppStateType} from './redux-store'

export const getCompanyName = (state: AppStateType): string => {
    return state.aboutUs.companyName.name
}

export const getCompanyLogo = (state: AppStateType): string => {
    return state.aboutUs.companyName.logo
}

export const getTitle = (state: AppStateType): string => {
    return state.aboutUs.description.title
}

export const getDescription = (state: AppStateType): string => {
    return state.aboutUs.description.text
}

export const getProjectsElements = (state: AppStateType): Array<ProjectTypeSelector> => {
    return state.aboutUs.projects.map(p => ({
        id: p.projectId,
        photo: p.projectPhoto,
        name: p.projectName
    }))
}

export const getEmployeesElements = (state: AppStateType): Array<EmployeeTypeSelector> => {
    return state.aboutUs.employees.map(e => ({
        id: e.teammateId,
        image: e.teammatePhoto,
        name: e.teammateShortName
    }))
}

export const getArticlesElements = (state: AppStateType): Array<ArticleTypeSelector> => {
    return state.aboutUs.articles.map(a => ({
        text: a.articleDescription,
        day: a.articleDate.split('T')[0],
        name: a.authorName,
        image: a.authorPhoto,
        link: a.articleTitle
    }))
}

export const getCurrentProject = (state: AppStateType) => {
    if (state.aboutUs.currentProject)
        return {
            name: state.aboutUs.currentProject.projectName,
            description: state.aboutUs.currentProject.projectDescription,
            image: state.aboutUs.currentProject.projectTechnologyImage
        }
}

export const getCurrentEmployee = (state: AppStateType) => {
    if (state.aboutUs.currentEmployee)
        return {
            image: state.aboutUs.currentEmployee.teammatePhoto,
            name: state.aboutUs.currentEmployee.teammateShortName,
            fullname: state.aboutUs.currentEmployee.teammateFullName,
            company: state.aboutUs.currentEmployee.teammateCompany,
            location: state.aboutUs.currentEmployee.teammateLocation,
            website: state.aboutUs.currentEmployee.teammateWebsite,
            phone: state.aboutUs.currentEmployee.teammatePhone,
            articlesCount: state.aboutUs.currentEmployee.teammateArticlesCount,
            personalInfo: state.aboutUs.currentEmployee.teammatePersonalInfo
        }
}

export const getEmployeeProjects = (state: AppStateType) => {
    if (state.aboutUs.currentEmployeeProjects)
        return state.aboutUs.currentEmployeeProjects.map(p => ({
            id: p.projectId,
            title: p.projectName,
            image: p.projectPhoto,
            description: p.projectDescription.substr(0, 60) + '...',
        }))
}
export const getEmployeeArticles = (state: AppStateType) => {
    if (state.aboutUs.currentEmployeeArticles)
        return state.aboutUs.currentEmployeeArticles.map(a => ({
            title: a.articleTitle.toUpperCase(),
            image: a.articleImageLink,
            description: a.articleDescription,
        }))
}

export const getCurrentKillerFeatures = (state: AppStateType) => {
    return state.aboutUs.currentKillerFeatures.map(k => ({
        title: k.killerFeatureName,
        description: k.killerFeatureDescription,
        image: k.killerFeatureImage
    }))
}