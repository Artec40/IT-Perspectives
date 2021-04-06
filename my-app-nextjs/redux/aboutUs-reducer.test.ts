import aboutUsReducer, {initialStateType} from "./aboutUs-reducer";
import {aboutUsActions} from "./aboutUs-actions";
import {CurrentEmployeeType} from "../types/types";

let state: initialStateType;

beforeEach(() => {
    state = {
        companyName: {logo: '/favicon.ico', name: 'ИТ Перспективы'},
        description: {
            title: 'МЫ СОЗДАЕМ ОРИГИНАЛЬНЫЕ ПРОЕКТЫ',
            text: 'Все наблюдения привели к тому, что стало понятно – вся музыка уйдет в цифровой формат. Позже стало\n' +
                '                ясно, что доминирующим форматом станет mp3, и пользователь не оценит качества других форматов. С точки\n' +
                '                зрения потребительских свойств ему [пользователю] mp3 вполне достаточно. Но mp3 лишен эмоциональной\n' +
                '                составляющей, к которой я привык, как меломан. Для поколения постарше выход альбома любимого артиста\n' +
                '                всегда был событием. Событием культурным.'
        },
        projects: [
            {
                projectId: 1,
                projectName: 'first-project',
                projectDescription: 'very-interesting-project',
                projectPhoto: '/projects/anti-alco-car.jpg',
                projectTechnologyImage: '/technology-images/csharp.png'
            },
            {
                projectId: 2,
                projectName: 'second-project',
                projectDescription: 'little-interesting-project',
                projectPhoto: '/projects/super-taxi-car.jpg',
                projectTechnologyImage: '/technology-images/react.png'
            },
            {
                projectId: 3,
                projectName: 'third-project',
                projectDescription: 'not-interesting-project',
                projectPhoto: '/projects/policai-car.jpg',
                projectTechnologyImage: '/technology-images/webStorm.png'
            }],
        employees: [
            {
                teammateId: 0,
                teammateShortName: 'Донателло',
                teammateFullName: 'Донато ди Никколо',
                teammateArticlesCount: 3,
                teammateCompany: 'Канализация',
                teammatePhoto: '/teammates/teammate_arnold.jpg'
            },
            {
                teammateId: 1,
                teammateShortName: 'Рафаэль',
                teammateFullName: 'Рафаэль Санти',
                teammateArticlesCount: 2,
                teammateCompany: 'Канализация',
                teammatePhoto: '/teammates/teammate_ronnie.jpg'
            },
            {
                teammateId: 2,
                teammateShortName: 'Леонардо',
                teammateFullName: 'Леонардо Да Винчи',
                teammateArticlesCount: 1,
                teammateCompany: 'Канализация',
                teammatePhoto: '/teammates/teammate_gudok.jpg'
            }],
        articles: [
            {
                articleId: 0,
                articleDate: '1990-05-12',
                articleDescription: 'tra-ta-ta',
                articleTitle: 'TRA',
                authorName: 'Донателло',
                authorPhoto: '/teammates/teammate_arnold.jpg',
                articleImageLink: '/articles/Arnold_stay_hungry.jpg'
            },
            {
                articleId: 1,
                articleDate: '2002-03-20',
                articleDescription: 'tra-ta-ta?',
                articleTitle: 'TRA?',
                authorName: 'Рафаэль',
                authorPhoto: '/teammates/teammate_ronnie.jpg',
                articleImageLink: '/articles/Ronnie_workout_routine.jpg'
            },
            {
                articleId: 2,
                articleDate: '2014-11-25',
                articleDescription: 'tra-ta-ta!',
                articleTitle: 'TRA!',
                authorName: 'Леонардо',
                authorPhoto: '/teammates/teammate_gudok.jpg',
                articleImageLink: '/articles/Gudok_about_instagram.jpg'
            },
        ],
        currentProject: null,
        currentEmployee: null,
        currentEmployeeProjects: [],
        currentEmployeeArticles: [],
        currentKillerFeatures: []
    }
})

test("set current employee", () => {
    let currentEmployee: CurrentEmployeeType = {
        teammateShortName: 'Леонардо',
        teammateId: 2,
        teammateArticlesCount: 1,
        teammateCompany: 'Канализация',
        teammateFullName: 'Леонардо Да Винчи',
        teammateLocation: 'AMERICA',
        teammatePersonalInfo: 'I AM NINJA, FOR FREEDOM, FOR AMERICA!',
        teammatePhone: '8 800 555 35 35',
        teammatePhoto: '/teammates/teammate_gudok.jpg',
        teammateWebsite: 'LeonardoDiCaprio.com'
    }
    const newState = aboutUsReducer(state, aboutUsActions.setEmployee(currentEmployee))
    expect(newState.currentEmployee).toBe(currentEmployee)
})