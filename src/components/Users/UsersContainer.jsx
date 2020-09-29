import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import * as axios from 'axios';
import { subAC, unsubAC, setUsersAC, setTotalAC, pageSizeAC, setCurrentPageAC } from '../../redux/reducers/usersReducer';

const mapState = (state) => {

    return {
        data: state.users.users,
        totalCount: state.users.totalCount,
        pageSize: state.users.pageSize,
        currentPage: state.users.currentPage
    }
}

const mapDispatch = (dispatch) => {
    return {
        subscribe: (userID) => { dispatch(subAC(userID)) },
        unsubscribe: (userID) => { dispatch(unsubAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setTotalCount: (totalCount) => { dispatch(setTotalAC(totalCount)) },
        setPageSize: (pageSize) => { dispatch(pageSizeAC(pageSize)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) }
    }
}
class UsersContainer extends React.Component {
    constructor(props) {
        super();
        this.props = props;

    };

    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                if (this.props.data.length === 0) {
                    this.props.setUsers(res.data.items);
                    this.props.setTotalCount(res.data.totalCount);
                }
            })
    };

    getCurrentPage = (page) => {
        console.log(page)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=
        ${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            })
    };

    render = () => <Users

        totalCount={this.props.totalCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        subscribe={this.props.subscribe}
        unsubscribe={this.props.unsubscribe}
        getCurrentPage={this.getCurrentPage}
        data={this.props.data}

    />


}

export default connect(mapState, mapDispatch)(UsersContainer);



