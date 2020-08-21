import React from 'react';
import DialogsBundle from '../Dialogs/Dialogs.module.css';
import DialogsItem from '../Dialogs/DialogsItem/DialogsItem';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {
    console.log(props)
    const dialogs = props.dialogs.dialog.map((item, i) => <DialogsItem key={i} name={item.name} id={item.id} />)
    const dialog = props.dialogs.message.map((item, i) => <DialogMessage key={i} message={item.message} />)

    return (
        <div className={DialogsBundle.dialogs__wrapper}>
            <h2 className={DialogsBundle.dialogs__title}>Dialogs</h2>
            <div className={DialogsBundle.dialogs__block}>
                <ul className={DialogsBundle.dialogs__list}>
                    {dialogs}
                </ul>
                <ul className={DialogsBundle.dialog}>
                    {dialog}
                </ul>
            </div>
        </div >
    )
};

export default Dialogs;