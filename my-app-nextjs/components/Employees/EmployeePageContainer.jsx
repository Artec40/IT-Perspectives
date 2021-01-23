import React from 'react'
import { connect } from 'react-redux'
import {
    getCurrentEmployee,
    getIsFetching,
    getEmployeeProjects,
    getEmployeeArticles
} from '../../redux/aboutUs-selector'
import { setEmployeePage } from '../../redux/aboutUs-reducer'
import EmployeePage from './EmployeePage'

class EmployeePageContainer extends React.Component {

    componentDidMount() {
        this.props.setEmployeePage(
            this.props.serverSideEmployee,
            this.props.serverSideEmployeeProjects,
            this.props.serverSideEmployeeArticles
            )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.employeeId != prevProps.employeeId) {
            this.props.setEmployeePage(
                this.props.serverSideEmployee,
                this.props.serverSideEmployeeProjects,
                this.props.serverSideEmployeeArticles
            )
        }
    }

    render() {
        return <div>
            {
                this.props.isFetching &&
                <div>Loading...</div>}
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

export default connect(mapStateToProps, {setEmployeePage})(EmployeePageContainer)