import { aboutUsAPI } from '../api'

const SET_ABOUT_US_ELEMENTS = 'SET_ABOUT_US_ELEMENTS'
const SET_PROJECT_PAGE = 'SET_PROJECT_PAGE'
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
        case SET_ABOUT_US_ELEMENTS: {
            return {
                ...state,
                projects: action.aboutUsElements.projects,
                employees: action.aboutUsElements.employees,
                articles: action.aboutUsElements.articles
            }
        }
        case SET_PROJECT_PAGE: {
            return {
                ...state,
                currentProject: action.projectPage.project,
                currentKillerFeature: action.projectPage.killerFeature
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

export const setAboutUsElements = (projects, employees, articles) => ({
    type: SET_ABOUT_US_ELEMENTS, aboutUsElements: {projects, employees, articles}})
export const setProjectPage = (project, killerFeature) => ({
    type: SET_PROJECT_PAGE, projectPage: {project, killerFeature}})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getAboutUsElements = () => async (dispatch) => {
    const responseProjects = await aboutUsAPI.getProjects()
    const responseEmployees = await aboutUsAPI.getEmployees()
    const responseArticles = await aboutUsAPI.getArticles()
    dispatch(setAboutUsElements(responseProjects.data, responseEmployees.data, responseArticles.data))
}

export const getProjectPage = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    const responseProject = await aboutUsAPI.getProject(id)
    const responseKillerFeature = await aboutUsAPI.getKillerFeature(id)
    dispatch(setProjectPage(responseProject.data, responseKillerFeature.data))
    dispatch(toggleIsFetching(false))
}

export default aboutUsReducer