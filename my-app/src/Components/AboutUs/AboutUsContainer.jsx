import React from 'react'
import AboutUs from './AboutUs'
import { connect } from 'react-redux'
import { getAboutUsElements } from '../../redux/aboutUs-reducer'
import {
    getCompanyName, getCompanyLogo, getTitle, getArticlesElements,
    getDescription, getProjectsElements, getEmployeesElements
} from '../../redux/aboutUs-selector'


class AboutUsContainer extends React.Component {
    componentDidMount() {
        this.props.getAboutUsElements()
    }

    render() {
        return <AboutUs name={this.props.name}
                        logo={this.props.logo}
                        title={this.props.title}
                        description={this.props.description}
                        projects={this.props.projects.map(p => ({
                            id: p.projectId,
                            photo: p.projectPhoto,
                            name: p.projectName
                        }))}
                        employees={this.props.employees.map(e => ({
                            image: e.teammatePhoto,
                            name: e.teammateShortName}))}
                        articles={this.props.articles.map(a => ({
                            text: a.articleDescription,
                            day: a.articleDate.split('T')[0],
                            name: a.authorName,
                            image: a.authorPhoto,
                            link: a.articleTitle
                        }))}/>
    }
}

const mapStateToProps = (state) => {
    return {
        name: getCompanyName(state),
        logo: getCompanyLogo(state),
        title: getTitle(state),
        description: getDescription(state),
        projects: getProjectsElements(state),
        employees: getEmployeesElements(state),
        articles: getArticlesElements(state)
    }
}

export default connect(mapStateToProps, {getAboutUsElements})(AboutUsContainer)
