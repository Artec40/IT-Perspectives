import React from 'react'
import Footer from './Footer'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {iconElements: state.footer.links}
}

export default connect(mapStateToProps)(Footer)