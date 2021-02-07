import { aboutUsAPI } from './api'

export async function getAboutUsStaticProps() {
    const projects = await aboutUsAPI.getProjects()
    const employees = await aboutUsAPI.getEmployees()
    const articles = await aboutUsAPI.getArticles()
    return {
        props: {
            initialReduxState: {
                serverSideProjects: projects.data,
                serverSideEmployees: employees.data,
                serverSideArticles: articles.data
            }
        }
    }
}

export async function getProjectStaticPaths() {
    const projects = await aboutUsAPI.getProjects()
    const paths = (projects.data).map((project) => ({
        params: {id: String(project.projectId)}
    }))
    return {paths, fallback: true}
}


export async function getProjectStaticProps(id) {
    const project = await aboutUsAPI.getProject(id)
    const killerFeatures = await aboutUsAPI.getKillerFeatures(id)
    return {
        props: {
            initialReduxState: {
                serverSideProject: project.data,
                serverSideKillerFeatures: killerFeatures.data
            }
        },
        revalidate: 1
    }
}

export async function getEmployeeStaticPaths() {
    const employees = await aboutUsAPI.getEmployees()
    const paths = (employees.data).map((employee) => ({
        params: {id: String(employee.teammateId)}
    }))
    return {paths, fallback: true}
}


export async function getEmployeeStaticProps(id) {
    const employee = await aboutUsAPI.getEmployee(id)
    const employeeProjects = await aboutUsAPI.getEmployeeProjects(id)
    const employeeArticles = await aboutUsAPI.getEmployeeArticles(id)
    return {
        props: {
            initialReduxState: {
                serverSideEmployee: employee.data,
                serverSideEmployeeProjects: employeeProjects.data,
                serverSideEmployeeArticles: employeeArticles.data
            }
        },
        revalidate: 1
    }
}