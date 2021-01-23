import React from 'react'
import { connect } from 'react-redux'
import {
    getCurrentProject,
    getCurrentKillerFeatures,
    getIsFetching
} from '../../redux/aboutUs-selector'
import { setProjectPage } from '../../redux/aboutUs-reducer'
import Project from './Project'

class ProjectContainer extends React.Component {

    componentDidMount() {
        this.props.setProjectPage(
            this.props.serverSideProject,
            this.props.serverSideKillerFeatures
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.projectId != prevProps.projectId) {
            this.props.setProjectPage(
                this.props.serverSideProject,
                this.props.serverSideKillerFeatures
            )
        }
    }

    render() {
        return <div>
            {this.props.isFetching &&
            <div>Loading...</div>}
            {!this.props.isFetching &&
            this.props.project &&
            this.props.killerFeatures &&
            <Project project={this.props.project}
                     killerFeatures={this.props.killerFeatures}/>}
            }
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        project: getCurrentProject(state),
        killerFeatures: getCurrentKillerFeatures(state),
        isFetching: getIsFetching(state)
    }
}

export default connect(mapStateToProps, {setProjectPage})(ProjectContainer)