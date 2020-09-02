import React from 'react';
import DialogMessage from '../DialogMessage/DialogMessage';
import DialogBlockBundle from '../DialogBlock/DialogBlock.module.css'


const DialogBlock = (props) => {

    const newMessage = React.createRef();
    const sendMessage = (evt) => {
        evt.preventDefault();
        console.log(newMessage)
    }
    const dialog = props.message.map((item, i) => <DialogMessage key={i} message={item.message} />)
    return (
        <div className="DialogBlock.wrapper">
            <div className="DialogBlock.messageWrapper">
                {dialog}
            </div>
            <form className={DialogBlockBundle.dialogBlock__form}>
                <input required ref={newMessage} className={DialogBlockBundle.dialogBlock__input} placeholder="write a message..." type="text" />
                <button onClick={sendMessage} className={DialogBlockBundle.dialogBlock__button}>send</button>
                <button className={DialogBlockBundle.dialogBlock__button}>add files</button>
            </form>


        </div>
    )
}


export default DialogBlock;