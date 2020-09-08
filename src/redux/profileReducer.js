import { ADD_POST, ADD_INPUT_TEXT } from '../constant';

export const actionCreatorPost = () => ({ type: 'ADD_POST' })
export const actionCreatorMessage = (text) => ({ type: 'ADD_INPUT_TEXT', value: text })




const initState = {
    post: [
        { id: 1, message: 'This is my first React Project!', count: '5' },
        { id: 2, message: 'I need to find my girlfriend!', count: '2' },
        { id: 3, message: 'I need food!', count: '9' }

    ],
    postTextInput: ''

};

const profileReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_POST:
            const text = { id: 5, message: state.postTextInput, count: 2 };
            if (text.message !== '') {
                state.post.push(text);
                state.postTextInput = '';
                return state
            } else {
                console.log('Введите сообщение')
            }
        case ADD_INPUT_TEXT:
            state.postTextInput = action.value;
            return state

        default:
            return state
    }
};


export default profileReducer;