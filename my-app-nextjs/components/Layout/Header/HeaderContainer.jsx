import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {logo: state.header.companyLogo.logo}
}

export default connect(mapStateToProps)(Header)