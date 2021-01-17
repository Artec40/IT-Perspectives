import React from 'react'
import AboutUs from './AboutUs'
import { connect } from 'react-redux'
import { getAboutUsElements } from '../../redux/aboutUs-reducer'
import {
    getCompanyName,
    getCompanyLogo,
    getTitle,
    getArticlesElements,
    getDescription,
    getProjectsElements,
    getEmployeesElements
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

export default connect(mapStateToProps, {getAboutUsElements})(AboutUsContainer)
