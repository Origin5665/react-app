import React from 'react';
import DialogsBundle from '../Dialogs/Dialogs.module.css';
import DialogsItem from '../Dialogs/DialogsItem/DialogsItem';
import DialogBlock from './DialogBlock/DialogBlock'

const Dialogs = (props) => {
  console.log(props)
  const dialogs = props.user.dialog.map((item, i) => <DialogsItem key={i} name={item.name} id={item.id} photo={item.image} />)

  return (
    <div className={DialogsBundle.dialogs__wrapper}>

      <div className={DialogsBundle.dialogs__block}>
        <ul className={DialogsBundle.dialogs__list}>
          {dialogs}
        </ul>
        <ul className={DialogsBundle.dialog}>
          <h2 className={DialogsBundle.dialogs__title}>Диалог</h2>
          <DialogBlock dialogs={props.dialogs} dispatch={props.dispatch} />
        </ul>
      </div>
    </div >
  )
};

export default Dialogs;