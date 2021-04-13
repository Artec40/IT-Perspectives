import aboutUsReducer, {initialStateType} from "./aboutUs-reducer";
import {aboutUsActions} from "./aboutUs-actions";
import {
    ArticleType, CurrentEmployeeType,
    EmployeeType, KillerFeatureType, ProjectType
} from "../types/types";

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
        projects: [],
        employees: [],
        articles: [],
        currentProject: null,
        currentEmployee: null,
        currentEmployeeProjects: [],
        currentEmployeeArticles: [],
        currentKillerFeatures: []
    }
})

test("set about us page data", () => {
    let projects: Array<ProjectType> = [
        {
            projectId: 0,
            projectName: 'Жареные гвозди',
            projectDescription: 'Сказать Шреддеру:"А ЖАРЕНЫХ ГВОЗДЕЙ НЕ ХОЧЕШЬ? Я СПРОСИЛ - НЕ ХОЧЕШЬ, НЕТ???"',
            projectPhoto: '/projects/shredder-v-shoke.jpg',
            projectTechnologyImage: '/technology-image/jarenye-gvozdi'
        },
        {
            projectId: 1,
            projectName: 'Пицца',
            projectDescription: 'Заказали пиццу на всех, а Сплинтер, крыса, не скинулся',
            projectPhoto: '/projects/pizza.jpg',
            projectTechnologyImage: '/technology-image/splinter-krysa'
        }
    ]
    let employees: Array<EmployeeType> = [
        {
            teammateShortName: 'Леонардо',
            teammateId: 0,
            teammateArticlesCount: 1,
            teammateCompany: 'Черепашки Ниндзя',
            teammateFullName: 'Леонардо Да Винчи',
            teammatePhoto: '/teammates/teammate_gudok.jpg'
        },
        {
            teammateId: 1,
            teammateShortName: 'Донателло',
            teammateFullName: 'Донато ди Никколо',
            teammateArticlesCount: 3,
            teammateCompany: 'Черепашки Ниндзя',
            teammatePhoto: '/teammates/teammate_arnold.jpg'
        },
        {
            teammateId: 2,
            teammateShortName: 'Рафаэль',
            teammateFullName: 'Рафаэль Санти',
            teammateArticlesCount: 2,
            teammateCompany: 'Черепашки Ниндзя',
            teammatePhoto: '/teammates/teammate_ronnie.jpg'
        }
    ]
    let articles: Array<ArticleType> = [
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
        }
    ]
    const newState = aboutUsReducer(state, aboutUsActions.setAboutUsPage(projects, employees, articles))
    expect(newState.projects).toBe(projects)
    expect(newState.employees).toBe(employees)
    expect(newState.articles).toBe(articles)
})

test("set current employee", () => {
    let currentEmployee: CurrentEmployeeType = {
        teammateShortName: 'Леонардо',
        teammateId: 2,
        teammateArticlesCount: 1,
        teammateCompany: 'Черепашки Ниндзя',
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

test("set project page data", () => {
    let project: ProjectType = {
        projectId: 0,
        projectName: 'Жареные гвозди',
        projectDescription: 'Сказать Шреддеру:"А ЖАРЕНЫХ ГВОЗДЕЙ НЕ ХОЧЕШЬ? Я СПРОСИЛ - НЕ ХОЧЕШЬ, НЕТ???"',
        projectPhoto: '/projects/shredder-v-shoke.jpg',
        projectTechnologyImage: '/technology-image/jarenye-gvozdi'
    }
    let killerFeatures: Array<KillerFeatureType> = [
        {
            killerFeatureId: 0,
            killerFeatureName: 'Элемент неожиданности',
            killerFeatureDescription: 'Жаренными были гвозди, но поджаренным оказался Шреддер',
            killerFeatureImage: '/killer-features/gvozdi'
        },
        {
            killerFeatureId: 1,
            killerFeatureName: 'Крысиный план',
            killerFeatureDescription: 'Естественно весь проект задумала крыса',
            killerFeatureImage: '/killer-features/gvozdi'
        }
    ]
    const newState = aboutUsReducer(state, aboutUsActions.setProjectPage(project, killerFeatures))
    expect(newState.currentProject).toBe(project)
    expect(newState.currentKillerFeatures).toBe(killerFeatures)
})

test("set employee page data", () => {
    let employee: CurrentEmployeeType = {
        teammateShortName: 'Леонардо',
        teammateId: 2,
        teammateArticlesCount: 1,
        teammateCompany: 'Черепашки Ниндзя',
        teammateFullName: 'Леонардо Да Винчи',
        teammateLocation: 'AMERICA',
        teammatePersonalInfo: 'I AM NINJA, FOR FREEDOM, FOR AMERICA!',
        teammatePhone: '8 800 555 35 35',
        teammatePhoto: '/teammates/teammate_gudok.jpg',
        teammateWebsite: 'LeonardoDiCaprio.com'
    }
    let projects: Array<ProjectType> = [
        {
            projectId: 0,
            projectName: 'Жареные гвозди',
            projectDescription: 'Сказать Шреддеру:"А ЖАРЕНЫХ ГВОЗДЕЙ НЕ ХОЧЕШЬ? Я СПРОСИЛ - НЕ ХОЧЕШЬ, НЕТ???"',
            projectPhoto: '/projects/shredder-v-shoke.jpg',
            projectTechnologyImage: '/technology-image/jarenye-gvozdi'
        },
        {
            projectId: 1,
            projectName: 'Пицца',
            projectDescription: 'Заказали пиццу на всех, а Сплинтер, крыса, не скинулся',
            projectPhoto: '/projects/pizza.jpg',
            projectTechnologyImage: '/technology-image/splinter-krysa'
        }
    ]
    let articles: Array<ArticleType> = [
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
        }
    ]
    const newState = aboutUsReducer(state, aboutUsActions.setEmployeePage(employee, projects, articles))
    expect(newState.currentEmployee).toBe(employee)
    expect(newState.currentEmployeeProjects).toBe(projects)
    expect(newState.currentEmployeeArticles).toBe(articles)
})