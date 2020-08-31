import React from 'react'
import Project from './Project'
import { connect } from 'react-redux'
import { getProjectsElements } from '../../redux/aboutUs-selector'
import { getKillerFeatures } from '../../redux/aboutUs-reducer'

class ProjectContainer extends React.Component {
    componentDidMount() {
        this.props.getKillerFeatures()
    }

    render() {
        return <div>
            <Project name={this.props.projects.projectName}
                     projectsDescription={this.props.projects.projectDescription}
                     technologies={this.props.projects.projectTechnologyImage}
                     title={this.props.killerFeatures.killerFeatureName}
                     killerFeatureDescription={this.props.killerFeatures.killerFeatureDescription}
                     image={this.props.killerFeatures.killerFeatureImage}
            />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        projects: getProjectsElements(state),
        killerFeatures: getKillerFeatures(state),
        id: getProjectsElements(state).projectsId
    }
}

export default connect(mapStateToProps, {getKillerFeatures})(ProjectContainer)