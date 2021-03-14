import {
    ArticleType, CurrentEmployeeType,
    KillerFeatureType, EmployeeType, ProjectType
} from "../types/types"
import {ActionsTypes} from "./aboutUs-actions";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {aboutUsAPI} from "../api/api";
import {aboutUsActions} from "./aboutUs-actions";

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
    currentProject: null as ProjectType,
    currentEmployee: null as CurrentEmployeeType,
    currentEmployeeProjects: [] as Array<ProjectType>,
    currentEmployeeArticles: [] as Array<ArticleType>,
    currentKillerFeatures: [] as Array<KillerFeatureType>
}

type initialStateType = typeof initialState

const aboutUsReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case 'SET_ABOUT_US_PAGE': {
            return {
                ...state,
                projects: action.aboutUsPage.projects,
                employees: action.aboutUsPage.employees,
                articles: action.aboutUsPage.articles
            }
        }
        case 'SET_EMPLOYEE': {
            return {
                ...state, employees: action.employees
            }
        }
        case 'SET_PROJECT_PAGE': {
            return {
                ...state,
                currentProject: action.projectPage.project,
                currentKillerFeatures: action.projectPage.killerFeatures
            }
        }
        case 'SET_EMPLOYEE_PAGE': {
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

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const saveEmployeeName = (id: number, name: { shortName: string }): ThunkType => async (dispatch) => {
    await employeeAPI.changeEmployeeName(id, name)
    const employee = await aboutUsAPI.getEmployee(id)
    await dispatch(aboutUsActions.setEmployee(employee))
}
export default aboutUsReducer