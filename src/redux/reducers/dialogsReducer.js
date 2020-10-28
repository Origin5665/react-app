import { ADD_MESSAGE } from '../../constant';

const initialState = {

    message: [
        { id: 1, message: 'Привет! Нужно срочно поговорить!' },

    ],

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, { id: 5, message: action.message, count: 2 }]
            }

        default:
            return state
    }
};

export default dialogsReducer;