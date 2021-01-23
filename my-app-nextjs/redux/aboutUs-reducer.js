import { aboutUsAPI } from '../api/api'

const SET_ABOUT_US_PAGE = 'SET_ABOUT_US_PAGE'
const SET_PROJECT_PAGE = 'SET_PROJECT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
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
    projects: [],
    employees: [],
    articles: [],
    currentProject: null,
    currentEmployee: null,
    currentEmployeeProjects: [],
    currentEmployeeArticles: [],
    currentKillerFeatures: [],
    isFetching: false
}

const aboutUsReducer = (state = initialState, action) => {
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const setAboutUsPage = (projects, employees, articles) => ({
    type: SET_ABOUT_US_PAGE, aboutUsPage: {projects, employees, articles}
})
export const setProjectPage = (project, killerFeatures) => ({
    type: SET_PROJECT_PAGE, projectPage: {project, killerFeatures}
})
export const setEmployeePage = (employee, projects, articles) => ({
    type: SET_EMPLOYEE_PAGE,
    employeePage: {employee, projects, articles}
})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default aboutUsReducer