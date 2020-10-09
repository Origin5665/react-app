import { ADD_MESSAGE, ADD_MESSAGE_TEXT } from '../../constant';

const initialState = {

    message: [
        { id: 1, message: 'Привет! Нужно срочно поговорить!' },
        { id: 2, message: 'Послушай Хаски, тебе понравится!' },
        { id: 3, message: 'Это просто какой-то текст. Он совершенно ничего не значит, но ты прочитал его, значит это сработало!' },
    ],
    messageTextInput: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messageTextInput: '',
                message: [...state.message,
                { id: 5, message: state.messageTextInput, count: 2 }]
            }
        case ADD_MESSAGE_TEXT:
            return {
                ...state,
                messageTextInput: action.value,
            }
        default:
            return state
    }
};

export default dialogsReducer;