import React from 'react';
import profileReducer from './profileReducer';
import { actionCreatorPost } from '../actions/actionProfile';


it('Проверка на совпадение текста сообщения', () => {
   // 1. тестируемый state;
   const state = { post: [{ id: 1, message: 'Очень красивое сообщение', like: 3 }] };
   console.log(state.post.length)
   // 2. тестируемый action добавления нового сообщения =>
   const action = actionCreatorPost('Какой-то текст...')

   // 3. Тестируемый Profile Reducer => 
   const newState = profileReducer(state, action)


   expect(newState.post[0].count).toBe(2)
})