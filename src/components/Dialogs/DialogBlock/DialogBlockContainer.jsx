import React from 'react';
import DialogBlock from './DialogBlock';
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/reducers/dialogsReducer';
import ContextStore from '../../../ContextStore';

const DialogBlockContainer = (props) => {
   return (
      <ContextStore.Consumer>
         {
            (store) => {
               const dialogData = store.getState().dialogs.message;
               const sendMessage = () => store.dispatch(actionCreatorPost());

               const isChangeValue = (text) => {
                  const action = actionCreatorMessage(text)
                  store.dispatch(action)
               }
               return <DialogBlock inputText={isChangeValue} addMessage={sendMessage} data={dialogData} />
            }
         }
      </ContextStore.Consumer>
   )


};


export default DialogBlockContainer;