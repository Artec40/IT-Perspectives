import React from 'react'
import EmployeePage from './EmployeePage'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'
import {
    getCurrentEmployee,
    getIsFetching,
    getEmployeeProjects,
    getEmployeeArticles
} from '../../redux/aboutUs-selector'
import { getEmployeePage } from '../../redux/aboutUs-reducer'

class EmployeePageContainer extends React.Component {

    refreshEmployee() {
        let employeeId = this.props.match.params.employeeId
        this.props.getEmployeePage(employeeId)
    }

    componentDidMount() {
        this.refreshEmployee()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.employeeId != prevProps.match.params.employeeId) {
            this.refreshEmployee()
        }
    }

    render() {
        return <div>
            {
                this.props.isFetching &&
                <Preloader/>}
            {
                !this.props.isFetching &&
                this.props.employee &&
                this.props.projects &&
                this.props.articles &&
                <EmployeePage
                    employee={this.props.employee}
                    projects={this.props.projects}
                    articles={this.props.articles}
                />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        employee: getCurrentEmployee(state),
        projects: getEmployeeProjects(state),
        articles: getEmployeeArticles(state),
        isFetching: getIsFetching(state)
    }
}

export default compose(connect(mapStateToProps, {getEmployeePage}),
    withRouter)
(EmployeePageContainer)