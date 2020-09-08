import React from 'react';
import DialogMessage from '../DialogMessage/DialogMessage';
import DialogBlockBundle from '../DialogBlock/DialogBlock.module.css';
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/dialogsReducer';

const DialogBlock = (props) => {
    console.log(props)
    const newMessage = React.createRef();

    const sendMessage = (e) => {
        e.preventDefault();
        props.dispatch(actionCreatorPost());
        newMessage.current.value = '';
    }


    const isChangeValue = (e) => {

        const text = newMessage.current.value;
        const action = actionCreatorMessage(text)
        props.dispatch(action);

    }

    const dialog = props.dialogs.map((item, i) => <DialogMessage key={i} message={item.message} />);

    return (
        <div className="DialogBlock.wrapper">
            <div className="DialogBlock.messageWrapper">
                {dialog}
            </div>
            <form id="message-form" className={DialogBlockBundle.dialogBlock__form}>
                <input onChange={isChangeValue} required ref={newMessage} className={DialogBlockBundle.dialogBlock__input} placeholder="ваше сообщение..." type="text" />
                <button form="message-form" type="submit" onClick={sendMessage} className={DialogBlockBundle.dialogBlock__button}>отправить</button>
            </form>


        </div>
    )
};


export default DialogBlock;