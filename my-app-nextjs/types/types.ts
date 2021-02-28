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
export type KillerFeatureType = {
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
export type LinksType = {
    id: string
    name: string
    image: string
}
export type FooterType = {
    links: Array<LinksType>
}
//todo Использовать Apollo? для исключения повторов типов.
export type AboutUsPageProjectTypeSelector = {
    id: number
    photo: string
    name: string
}
export type AboutUsPageEmployeeTypeSelector = {
    id: number
    image: string
    name: string
}
export type AboutUsPageArticleTypeSelector = {
    day: string
    text: string
    link: string
    name: string
    image: string
}
export type ProjectPageProjectTypeSelector = {
    name: string
    description: string
    image: string
}
export type ProjectPageKillerFeatureTypeSelector = {
    title: string
    description: string
    image: string
}
export type EmployeePageArticleTypeSelector = {
    title: string
    image: string
    description: string
}
export type EmployeePageProjectTypeSelector = {
    title: string
    image: string
    description: string
}
export type EmployeePageCurrentEmployeeTypeSelector = {
    image: string
    name: string
    fullname: string
    company: string
    location: string
    website: string
    phone: string
    articlesCount: number
    personalInfo: string
}