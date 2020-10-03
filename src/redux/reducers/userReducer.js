import manImage from '../../images/man.svg';
import girlImage from '../../images/girl.svg';

const ADD_DIALOG = 'ADD_DIALOG'

export const actionCreatorPost = () => ({ type: ADD_DIALOG })

const initState = {
    dialog: [
        { id: 1, name: 'Саша', image: manImage },
        { id: 2, name: 'Дима', image: manImage },
        { id: 3, name: 'Лера', image: girlImage },
        { id: 4, name: 'Женя', image: manImage },
        { id: 5, name: 'Марина', image: girlImage }
    ],
}


const userReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_DIALOG:
            const message = { id: 5, message: state.messageTextInput, count: 2 };
            state.push(message);
            return state

        default:
            return state
    }
};



export default userReducer;