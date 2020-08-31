import React from 'react'
import Project from './Project'
import { connect } from 'react-redux'
import { getCurrentProject } from '../../redux/aboutUs-selector'
import { getKillerFeatures, getProject } from '../../redux/aboutUs-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

class ProjectContainer extends React.Component {
    componentDidMount() {
        debugger
        this.props.getKillerFeatures()
        let projectId = this.props.match.params.projectId
        this.props.getProject(projectId)
    }

    render() {
        return <div>
            <Project project={this.props.project}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        project: getCurrentProject(state),
        killerFeatures: getKillerFeatures(state),
    }
}

export default compose(connect(mapStateToProps, {getKillerFeatures, getProject}),
    withRouter)
(ProjectContainer)