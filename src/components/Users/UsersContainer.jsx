import { connect } from 'react-redux';
import Users from './Users';
import { subAC, unsubAC, setUsersAC } from '../../redux/reducers/usersReducer';

const mapState = (state) => {

    return {
        data: state.users.users
    }
}


const mapDispatch = (dispatch) => {
    return {
        subscribe: (userID) => { dispatch(subAC(userID)) },
        unsubscribe: (userID) => { dispatch(unsubAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}


const UsersContainer = connect(mapState, mapDispatch)(Users);
export default UsersContainer;


