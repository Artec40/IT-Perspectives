import React from 'react'
import { connect } from 'react-redux'
import CompanyName from './CompanyName'


let mapStateToProps = (state) => {
    return {
        name: state.aboutUs.companyName.name,
        logo: state.aboutUs.companyName.logo
    }
}

export default connect(mapStateToProps)(CompanyName)



/*
<CompanyName name={props.state.companyName.name} logo={props.state.companyName.logo}/>*/
