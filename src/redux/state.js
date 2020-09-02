import { ADD_POST, ADD_INPUT_TEXT } from '../constant.js';




const store = {

    _state: {
        dialogs: {

            dialog: [

                { id: 1, name: 'Саша' },
                { id: 2, name: 'Дима' },
                { id: 3, name: 'Лера' },
                { id: 4, name: 'Женя' },
                { id: 5, name: 'Марина' }
            ],

            message: [
                { id: 1, message: 'Привет! Нужно срочно поговорить!' },
                { id: 2, message: 'Привет! Почему ты молчишь?' },
                { id: 3, message: 'Привет! Почему ты молчишь?' },
                { id: 4, message: 'Привет! Почему ты молчишь?' },
                { id: 5, message: 'Привет! Почему ты молчишь?' }
            ]
        },

        post: [
            { id: 1, message: 'This is my first React Project!', count: '5' },
            { id: 2, message: 'I need to find my girlfriend!', count: '2' },
            { id: 3, message: 'I need food!', count: '9' }
        ],
        postText: ''
    },

    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(evt, action) {

        console.log(action)
        if (action.type === 'ADD_POST') {

            evt.preventDefault();
            this.message = { id: 5, message: this._state.postText, count: 2 }
            this._state.post.push(this.message);
            this._callSubscriber(this._state)
        }
        else if (action.type === 'ADD_INPUT_TEXT') {
            this._state.postText = action.value;
            this._callSubscriber(this._state);
        }
    }



};


export const actionCreatorPost = () => {
    return { type: ADD_POST }

}

export const actionCreatorMessage = (text) => {
    return { type: ADD_INPUT_TEXT, value: text }
}

export default store;