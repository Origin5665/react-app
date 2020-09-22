import React from 'react';
import DialogsBundle from '../Dialogs/Dialogs.module.css';
import DialogsItem from '../Dialogs/DialogsItem/DialogsItem';
import DialogBlockContainer from './DialogBlock/DialogBlockContainer';

const Dialogs = ({ state }) => {


  const users = state.getState().user.dialog.map((item, i) =>
    <DialogsItem key={i} name={item.name} id={item.id} photo={item.image} />)

  return (
    <div className={DialogsBundle.dialogs__wrapper}>
      <div className={DialogsBundle.dialogs__block}>

        <ul className={DialogsBundle.dialogs__list}>
          <h3 className={DialogsBundle.dialogs__listTitle}>Диалоги:</h3>
          {users}
        </ul>
        <div className="dialog__wrapper">
          <h2 className={DialogsBundle.dialogs__title}>Диалог</h2>
          <div className={DialogsBundle.dialog}>
            <DialogBlockContainer />
          </div>
        </div>
      </div>
    </div>
  )
};
export default Dialogs;