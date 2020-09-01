import { aboutUsAPI } from '../api'

const SET_PROJECTS = 'SET_PROJECTS'
const SET_EMPLOYEES = 'SET_EMPLOYEES'
const SET_ARTICLES = 'SET_ARTICLES'
const SET_KILLER_FEATURES = 'SET_KILLER_FEATURES'
const SET_KILLER_FEATURE = 'SET_KILLER_FEATURE'
const SET_PROJECT = 'SET_PROJECT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    companyName: {logo: '/favicon.ico', name: 'ИТ Перспективы'},
    description: {
        title: 'МЫ СОЗДАЕМ БЛА БЛА БЛА',
        text: 'Все наблюдения привели к тому, что стало понятно – вся музыка уйдет в цифровой формат. Позже стало\n' +
        '                ясно, что доминирующим форматом станет mp3, и пользователь не оценит качества других форматов. С точки\n' +
        '                зрения потребительских свойств ему [пользователю] mp3 вполне достаточно. Но mp3 лишен эмоциональной\n' +
        '                составляющей, к которой я привык, как меломан. Для поколения постарше выход альбома любимого артиста\n' +
        '                всегда был событием. Событием культурным.'
    },
    projects: [],
    employees: [],
    articles: [],
    killerFeatures: [],
    currentProject: null,
    currentKillerFeature: null,
    isFetching: false
}

const aboutUsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS: {
            return {
                ...state, projects: action.projects
            }
        }
        case SET_EMPLOYEES: {
            return {
                ...state, employees: action.employees
            }
        }
        case SET_ARTICLES: {
            return {
                ...state, articles: action.articles
            }
        }
        case SET_KILLER_FEATURES: {
            return {
                ...state, killerFeatures: action.killerFeatures
            }
        }
        case SET_KILLER_FEATURE: {
            return {
                ...state,
                currentKillerFeature: action.killerFeature
            }
        }
        case SET_PROJECT: {
            return {
                ...state,
                currentProject: action.project
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

export const setProjects = (projects) => ({type: SET_PROJECTS, projects})
export const setEmployees = (employees) => ({type: SET_EMPLOYEES, employees})
export const setArticles = (articles) => ({type: SET_ARTICLES, articles})
export const setKillerFeature = (killerFeature) => ({type: SET_KILLER_FEATURE, killerFeature})
export const setProject = (project) => ({type: SET_PROJECT, project})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getProjects = () => async (dispatch) => {
    const response = await aboutUsAPI.getProjects()
    dispatch(setProjects(response.data))
}
export const getEmployees = () => async (dispatch) => {
    const response = await aboutUsAPI.getEmployees()
    dispatch(setEmployees(response.data))
}
export const getArticles = () => async (dispatch) => {
    const response = await aboutUsAPI.getArticles()
    dispatch(setArticles(response.data))
}
export const getProjectWithKillerFeature = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const responseProject = await aboutUsAPI.getProject(id)
    const responseKillerFeature = await aboutUsAPI.getKillerFeature(id)
    dispatch(setProject(responseProject.data))
    dispatch(setKillerFeature(responseKillerFeature.data))
    dispatch(toggleIsFetching(false))
}


export default aboutUsReducer