import React from 'react';
import Form from './Form'
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/reducers/profileReducer';
import ContextStore from '../../../ContextStore';

const FormContainer = () => {
  return (
    <ContextStore.Consumer>
      {
        (store) => {
          console.log(store)
          const addPostMessage = () => store.dispatch(actionCreatorPost());
          const isChangeValue = (text) => {
            const action = actionCreatorMessage(text)
            store.dispatch(action);
          }
          return (<Form inputText={isChangeValue} addPost={addPostMessage} />)
        }
      }
    </ContextStore.Consumer>
  )
};
export default FormContainer;