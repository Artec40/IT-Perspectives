import React from 'react'
import { connect } from 'react-redux'
import LastProjects from './LastProjects'


let mapStateToProps = (state) => {
    return {
        projectElements: state.aboutUs.projects
    }
}

export default connect(mapStateToProps)(LastProjects)
