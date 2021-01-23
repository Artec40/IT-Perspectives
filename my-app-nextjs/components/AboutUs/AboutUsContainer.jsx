import React from 'react'
import { connect } from 'react-redux'
import {
    getProjectsElements,
    getEmployeesElements,
    getArticlesElements,
    getCompanyLogo,
    getCompanyName,
    getDescription,
    getTitle
} from '../../redux/aboutUs-selector'
import { setAboutUsPage } from '../../redux/aboutUs-reducer'
import AboutUs from './AboutUs'

class AboutUsContainer extends React.Component {
    componentDidMount() {
        this.props.setAboutUsPage(
            this.props.serverSideProjects,
            this.props.serverSideEmployees,
            this.props.serverSideArticles
        )
    }

    render() {
        return <AboutUs name={this.props.name}
                        logo={this.props.logo}
                        title={this.props.title}
                        description={this.props.description}
                        projects={this.props.projects}
                        employees={this.props.employees}
                        articles={this.props.articles}/>
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

export default connect(mapStateToProps, {setAboutUsPage})(AboutUsContainer)
