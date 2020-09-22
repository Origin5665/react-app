
import manImage from '../images/man.svg';
import girlImage from '../images/girl.svg';
import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const store = {

  _state: {
    dialogsPage: {
      dialog: [
        { id: 1, name: 'Саша', image: manImage },
        { id: 2, name: 'Дима', image: manImage },
        { id: 3, name: 'Лера', image: girlImage },
        { id: 4, name: 'Женя', image: manImage },
        { id: 5, name: 'Марина', image: girlImage }
      ],

      message: [
        { id: 1, message: 'Привет! Нужно срочно поговорить!' },
        { id: 2, message: 'Послушай Хаски, тебе понравится!' },
        { id: 3, message: 'У Хаски скоро выйдет альбом! Ура!' },

      ]
    },

    post: [
      { id: 1, message: 'This is my first React Project!', count: '5' },
      { id: 2, message: 'I need to find my girlfriend!', count: '2' },
      { id: 3, message: 'I need food!', count: '9' }
    ],
    postValue: '',
    messageText: ''
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

    evt.preventDefault();
    this._state.post = profileReducer(this._state.post, action);
    this._state.dialogs.message = dialogReducer(this._state.dialogs.message, action)
    this._callSubscriber(this._state)
  },

};



export default store;