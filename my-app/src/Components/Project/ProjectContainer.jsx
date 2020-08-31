import React from 'react'
import Project from './Project'
import { connect } from 'react-redux'
import { getCurrentProject, getCurrentKillerFeature } from '../../redux/aboutUs-selector'
import { getKillerFeature, getProject } from '../../redux/aboutUs-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

class ProjectContainer extends React.Component {

    //todo при обращении к url напрямую сайт не всегда успевает подгрузиться.
    refreshProject() {
        let projectId = this.props.match.params.projectId
        if (!projectId)
        {
            this.props.getProject(projectId)
            this.props.getKillerFeature(projectId)
        }
    }

    componentDidMount() {
        this.refreshProject()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.projectId != prevProps.match.params.projectId) {
            this.refreshProject()
        }
    }

    render() {
        return <div>
            <Project project={this.props.project}
                     killerFeature={this.props.killerFeature}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        project: getCurrentProject(state),
        killerFeature: getCurrentKillerFeature(state),
    }
}

export default compose(connect(mapStateToProps, {getKillerFeature, getProject}),
    withRouter)
(ProjectContainer)