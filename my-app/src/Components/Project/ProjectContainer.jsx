import React from 'react'
import Project from './Project'
import { connect } from 'react-redux'
import { getCurrentProject, getCurrentKillerFeature, getIsFetching } from '../../redux/aboutUs-selector'
import { getProjectPage } from '../../redux/aboutUs-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'

class ProjectContainer extends React.Component {

    refreshProject() {
        let projectId = this.props.match.params.projectId
        this.props.getProjectPage(projectId)
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
        debugger
        return <div>
            {this.props.isFetching ? <Preloader/> :
                <Project project={this.props.project}
                         killerFeature={this.props.killerFeature}/>}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        project: getCurrentProject(state),
        killerFeature: getCurrentKillerFeature(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(connect(mapStateToProps, {getProjectPage}),
    withRouter)
(ProjectContainer)