import { aboutUsAPI } from './api'

//todo Повторение кода: хук из редьюсера для заполнения стейта данными - функция для заполнения страницы html данными
export async function getAboutUsStaticProps() {
    const projects = await aboutUsAPI.getProjects()
    const employees = await aboutUsAPI.getEmployees()
    const articles = await aboutUsAPI.getArticles()
    return {
        props: {
            projects: projects.data,
            employees: employees.data,
            articles: articles.data
        }
    }
}

export async function getProjectStaticPaths() {
    const projects = await aboutUsAPI.getProjects()
    const paths = (projects.data).map((project) => ({
        params: {id: String(project.projectId)}
    }))
    return { paths, fallback: true }
}


export async function getProjectStaticProps(id) {
    const project = await aboutUsAPI.getProject(id)
    const killerFeatures = await aboutUsAPI.getKillerFeatures(id)
    return {
        props: {
            project: project.data,
            killerFeatures: killerFeatures.data,
        },
        revalidate: 1
    }
}