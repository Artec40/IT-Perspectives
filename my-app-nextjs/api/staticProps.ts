import { GetStaticProps } from 'next'
import {aboutUsAPI} from './api'

export const getAboutUsStaticProps: GetStaticProps = async () => {
    return {
        props: {
            initialReduxState: {
                serverSideProjects: await aboutUsAPI.getProjects(),
                serverSideEmployees: await aboutUsAPI.getEmployees(),
                serverSideArticles: await aboutUsAPI.getArticles()
            }
        }
    }
}

//todo закончить типизировать ssg.
export async function getProjectStaticPaths() {
    const projects = await aboutUsAPI.getProjects()
    const paths = (projects).map((project) => ({
        params: {id: String(project.projectId)}
    }))
    return {paths, fallback: true}
}

export async function getProjectStaticProps(id) {
    return {
        props: {
            initialReduxState: {
                serverSideProject: await aboutUsAPI.getProject(id),
                serverSideKillerFeatures: await aboutUsAPI.getKillerFeatures(id)
            }
        },
        revalidate: 1
    }
}

export async function getEmployeeStaticPaths() {
    const employees = await aboutUsAPI.getEmployees()
    const paths = (employees).map((employee) => ({
        params: {id: String(employee.teammateId)}
    }))
    return {paths, fallback: true}
}


export async function getEmployeeStaticProps(id) {
    return {
        props: {
            initialReduxState: {
                serverSideEmployee: await aboutUsAPI.getEmployee(id),
                serverSideEmployeeProjects: await aboutUsAPI.getEmployeeProjects(id),
                serverSideEmployeeArticles: await aboutUsAPI.getEmployeeArticles(id)
            }
        },
        revalidate: 1
    }
}