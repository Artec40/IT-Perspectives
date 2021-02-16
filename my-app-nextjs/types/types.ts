export type ProjectType = {
    projectId: number
    projectPhoto: string
    projectName: string
    projectDescription: string
    projectTechnologyImage: string
}
export type EmployeeType = {
    teammateArticlesCount: number
    teammateCompany: string
    teammateFullName: string
    teammateId: number
    teammatePhoto: string
    teammateShortName: string
}
export type ArticleType = {
    articleDate: string
    articleDescription: string
    articleId: number
    articleImageLink: string
    articleTitle: string
    authorName: string
    authorPhoto: string
}
export type CurrentProjectType = {
    projectDescription: string
    projectId: number
    projectName: string
    projectPhoto: string
    projectTechnologyImage: string
}
export type CurrentProjectKillerFeatureType = {
    killerFeatureDescription: string
    killerFeatureId: number
    killerFeatureImage: string
    killerFeatureName: string
}
export type CurrentEmployeeType = {
    teammateArticlesCount: number
    teammateCompany: string
    teammateFullName: string
    teammateId: number
    teammateLocation: string
    teammatePersonalInfo: string
    teammatePhone: string
    teammatePhoto: string
    teammateShortName: string
    teammateWebsite: string
}
export type CurrentEmployeeProjectType = {
    projectDescription: string
    projectId: number
    projectName: string
    projectPhoto: string
    projectTechnologyImage: string
}
export type CurrentEmployeeArticleType = {
    articleDate: string
    articleDescription: string
    articleId: number
    articleImageLink: string
    articleTitle: string
    authorName: string
    authorPhoto: string
}

//todo Использовать Apollo для исключения повторов типов.
export type ProjectTypeSelector = {
    id: number
    photo: string
    name: string
}

export type EmployeeTypeSelector = {
    id: number
    image: string
    name: string
}
export type ArticleTypeSelector = {
    day: string
    text: string
    link: string
    name: string
    image: string
}