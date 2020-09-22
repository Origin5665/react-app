const ADD_MESSAGE = 'ADD_MESSAGE';
const ADD_MESSAGE_TEXT = 'ADD_MESSAGE_TEXT';
export const actionCreatorPost = () => ({ type: ADD_MESSAGE })
export const actionCreatorMessage = (text) => ({ type: ADD_MESSAGE_TEXT, value: text })

const initState = {

    message: [
        { id: 1, message: 'Привет! Нужно срочно поговорить!' },
        { id: 2, message: 'Послушай Хаски, тебе понравится!' },
        { id: 3, message: 'Это просто какой-то текст. Он совершенно ничего не значит, но ты прочитал его, значит это сработало!' },
    ],
    messageTextInput: ''

}

const dialogsReducer = (state = initState, action) => {

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