import {
    ArticleType, CurrentEmployeeType, CurrentEmployeeArticleType,
    CurrentEmployeeProjectType, CurrentProjectType,
    CurrentProjectKillerFeatureType, EmployeeType, ProjectType
} from "../types/types"

const SET_ABOUT_US_PAGE = 'SET_ABOUT_US_PAGE'
const SET_PROJECT_PAGE = 'SET_PROJECT_PAGE'
const SET_EMPLOYEE_PAGE = 'SET_EMPLOYEE_PAGE'

let initialState = {
    companyName: {logo: '/favicon.ico', name: 'ИТ Перспективы'},
    description: {
        title: 'МЫ СОЗДАЕМ ОРИГИНАЛЬНЫЕ ПРОЕКТЫ',
        text: 'Все наблюдения привели к тому, что стало понятно – вся музыка уйдет в цифровой формат. Позже стало\n' +
            '                ясно, что доминирующим форматом станет mp3, и пользователь не оценит качества других форматов. С точки\n' +
            '                зрения потребительских свойств ему [пользователю] mp3 вполне достаточно. Но mp3 лишен эмоциональной\n' +
            '                составляющей, к которой я привык, как меломан. Для поколения постарше выход альбома любимого артиста\n' +
            '                всегда был событием. Событием культурным.'
    },
    projects: [] as Array<ProjectType>,
    employees: [] as Array<EmployeeType>,
    articles: [] as Array<ArticleType>,
    currentProject: null as CurrentProjectType,
    currentEmployee: null as CurrentEmployeeType,
    currentEmployeeProjects: [] as Array<CurrentEmployeeProjectType>,
    currentEmployeeArticles: [] as Array<CurrentEmployeeArticleType>,
    currentKillerFeatures: [] as Array<CurrentProjectKillerFeatureType>
}

type initialStateType = typeof initialState
type ActionsTypes = SetAboutUsPageActionType | SetProjectPageActionType | SetEmployeePageActionType

export const aboutUsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case SET_ABOUT_US_PAGE: {
            return {
                ...state,
                projects: action.aboutUsPage.projects,
                employees: action.aboutUsPage.employees,
                articles: action.aboutUsPage.articles
            }
        }
        case SET_PROJECT_PAGE: {
            return {
                ...state,
                currentProject: action.projectPage.project,
                currentKillerFeatures: action.projectPage.killerFeatures
            }
        }
        case SET_EMPLOYEE_PAGE: {
            return {
                ...state,
                currentEmployee: action.employeePage.employee,
                currentEmployeeProjects: action.employeePage.projects,
                currentEmployeeArticles: action.employeePage.articles
            }
        }
        default:
            return state
    }
}
type SetAboutUsPageActionType = {
    type: typeof SET_ABOUT_US_PAGE,
    aboutUsPage: {
        projects: Array<ProjectType>,
        employees: Array<EmployeeType>,
        articles: Array<ArticleType>
    }
}
export const setAboutUsPage = (projects: Array<ProjectType>,
                               employees: Array<EmployeeType>,
                               articles: Array<ArticleType>)
    : SetAboutUsPageActionType => ({
    type: SET_ABOUT_US_PAGE, aboutUsPage: {projects, employees, articles}
})

type SetProjectPageActionType = {
    type: typeof SET_PROJECT_PAGE,
    projectPage: {
        project: CurrentProjectType,
        killerFeatures: Array<CurrentProjectKillerFeatureType>
    }
}
export const setProjectPage = (project: CurrentProjectType,
                               killerFeatures: Array<CurrentProjectKillerFeatureType>)
    : SetProjectPageActionType => ({
    type: SET_PROJECT_PAGE, projectPage: {project, killerFeatures}
})

type SetEmployeePageActionType = {
    type: typeof SET_EMPLOYEE_PAGE,
    employeePage: {
        employee: CurrentEmployeeType,
        projects: Array<CurrentEmployeeProjectType>,
        articles: Array<CurrentEmployeeArticleType>
    }
}
export const setEmployeePage = (employee: CurrentEmployeeType,
                                projects: Array<CurrentEmployeeProjectType>,
                                articles: Array<CurrentEmployeeArticleType>)
    : SetEmployeePageActionType => ({
    type: SET_EMPLOYEE_PAGE, employeePage: {employee, projects, articles}
})

export default aboutUsReducer