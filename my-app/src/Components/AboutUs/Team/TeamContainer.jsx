import React from 'react'
import { connect } from 'react-redux'
import Team from './Team'


let mapStateToProps = (state) => {
    return {
        employeesElements: state.aboutUs.employees
    }
}

export default connect(mapStateToProps)(Team)
