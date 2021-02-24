import {GetStaticPaths, GetStaticProps} from 'next'
import {aboutUsAPI} from './api'

export const getAboutUsStaticProps: GetStaticProps = async (context) => {
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

export const getProjectStaticPaths: GetStaticPaths = async (context) => {
    const projects = await aboutUsAPI.getProjects()
    const paths = (projects).map((project) => ({
        params: {id: String(project.projectId)}
    }))
    return {paths, fallback: true}
}

export const getProjectStaticProps: GetStaticProps = async (id) => {
    return {
        props: {
            initialReduxState: {
                serverSideProject: await aboutUsAPI.getProject(Number(id)),
                serverSideKillerFeatures: await aboutUsAPI.getKillerFeatures(Number(id))
            }
        },
        revalidate: 1
    }
}

export const getEmployeeStaticPaths: GetStaticPaths = async (context) => {
    const employees = await aboutUsAPI.getEmployees()
    const paths = (employees).map((employee) => ({
        params: {id: String(employee.teammateId)}
    }))
    return {paths, fallback: true}
}

export const getEmployeeStaticProps: GetStaticProps = async (id) => {
    return {
        props: {
            initialReduxState: {
                serverSideEmployee: await aboutUsAPI.getEmployee(Number(id)),
                serverSideEmployeeProjects: await aboutUsAPI.getEmployeeProjects(Number(id)),
                serverSideEmployeeArticles: await aboutUsAPI.getEmployeeArticles(Number(id))
            }
        },
        revalidate: 1
    }
}