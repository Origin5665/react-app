import React from 'react';
import DialogsBundle from '../Dialogs/Dialogs.module.css';
import DialogsItem from '../Dialogs/DialogsItem/DialogsItem';
import DialogMessage from './DialogMessage/DialogMessage';
import DialogBlock from './DialogBlock/DialogBlock'

const Dialogs = (props) => {
  const dialogs = props.dialogs.dialog.map((item, i) => <DialogsItem key={i} name={item.name} id={item.id} />)

  return (
    <div className={DialogsBundle.dialogs__wrapper}>
      <h2 className={DialogsBundle.dialogs__title}>Dialogs</h2>
      <div className={DialogsBundle.dialogs__block}>
        <ul className={DialogsBundle.dialogs__list}>
          {dialogs}
        </ul>
        <ul className={DialogsBundle.dialog}>
          <DialogBlock message={props.dialogs.message} />
        </ul>
      </div>
    </div >
  )
};

export default Dialogs;