import React from 'react'
import { connect } from 'react-redux'
import Description from './Description'


let mapStateToProps = (state) => {
    return {

        title: state.aboutUs.description.title,
        text: state.aboutUs.description.text
    }
}

export default connect(mapStateToProps)(Description)
