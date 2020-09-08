import { ADD_POST, ADD_INPUT_TEXT } from '../constant.js';

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
            const message = { id: 5, message: state.messageTextInput, count: 2 };
            if (message.message !== '') {
                state.message.push(message);
                state.messageTextInput = '';
                return state
            } else {
                console.log('Введите сообщение')
            }
        // state.message.push(message);
        // state.messageTextInput = '';
        // return state

        case ADD_MESSAGE_TEXT:
            state.messageTextInput = action.value;

            return state

        default:
            return state
    }
};

export default dialogsReducer;