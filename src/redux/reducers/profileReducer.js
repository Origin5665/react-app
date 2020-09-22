import { ADD_POST, ADD_INPUT_TEXT } from '../../constant';
export const actionCreatorPost = () => ({ type: 'ADD_POST' })
export const actionCreatorMessage = (text) => ({ type: 'ADD_INPUT_TEXT', value: text })

const initState = {
    post: [
        { id: 1, message: 'Новый альбом Хаски выйдет 25 сентября!', count: '5' },
        { id: 2, message: 'Пытаюсь разобраться в React', count: '666' },
        { id: 3, message: 'Требуется помощь!', count: '0' }

    ],
    postTextInput: ''

};

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postTextInput: '',
                post: [{ id: 5, message: state.postTextInput, count: 2 }, ...state.post]
            }

        case ADD_INPUT_TEXT:
            return {
                ...state,
                postTextInput: action.value
            }

        default:
            return state
    }
};


export default profileReducer;